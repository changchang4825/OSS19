// the attacks are defined here
var myMoves = [];
var enemyMoves = [];
var turn = ['user', 'pc'];
var current_turn = turn[0];


var enemyCount=0; // todo level 1~4 읽어서 대입하기
var myCount=0; // todo level로 내 포켓몬 개수 알기

function enemyAttacks(wild) {
	enemyMoves = [];
	let moves = wild.moves;
	for (let i = 0; i < moves.length; i++) {
		let tmp = {};
		tmp.name = moves[i].move.name;
		tmp.url = moves[i].move.url;
		tmp.level = moves[i].version_group_details[0].level_learned_at;
		// checking enemy's level
		if (tmp.level < enemy_hp / 10) {
			let requ = new XMLHttpRequest();
			requ.open('GET', tmp.url, true);
			requ.onload = function () {
				data = JSON.parse(this.response);
				tmp.power = data.power;
				tmp.type = data.type.name;
				enemyMoves.push(tmp);
			};
			requ.send();
		}
	}
	//console.log(enemyMoves);
}

function myAttacks(pkmn) {
	myMoves = [];
	let moves = pkmn.moves;
	for (let i = 0; i < moves.length; i++) {
		let tmp = {};
		tmp.name = moves[i].move.name;
		tmp.url = moves[i].move.url;
		tmp.level = moves[i].version_group_details[0].level_learned_at;
		// checking enemy's level
		if (tmp.level < pkmn.hp / 10) {
			let requ = new XMLHttpRequest();
			requ.open('GET', tmp.url, true);
			requ.onload = function () {
				data = JSON.parse(this.response);
				tmp.power = data.power;
				tmp.type = data.type.name;
				myMoves.push(tmp);
			};
			requ.send();
		}
	}
	//console.log(myMoves);
}

// moves = {name:, power:, type:, level: , url:}
function showMyAttacks() {
	document.getElementById('self_attacks').innerHTML = '';
	let str = '';
	let k = Math.floor(Math.random() * (myMoves.length - 4));
	for (let i = 0; i < 4; i++) {
		//console.log(myMoves[i].name);
		str +=
			"<button onclick='moveChoice(" +
			k +
			")'>" +
            // todo 내포켓몬찾기
			// myMoves[k].name +

            // myPoke[k].skill +    이런식으로?
			'</button><br>';
		k++;
		if (k > myMoves.length) {
			k = 0;
		}
	}
	document.getElementById('self_attacks').innerHTML = str;
}

function moveChoice(index) {
	if (current_turn == 'user') {
		let theMove = myMoves[index];
		//console.log(theMove);


        // TODO : Poketmon obj에서 스킬 dmg읽어오기
		// Dmg: attack Power
		let Dmg = theMove.power; 

		//console.log(ans);
		// let's actually damge that pokemon
		let damage = (ans / enemy_hp) * 100;
		//console.log(damage);

        // TODO : Poketmon obj에서 스킬 dmg읽어오기
		// enemy_hp -= damage; 
		// enemy_hp = Math.floor(enemy_current_lvl);


		SoundsManager.play('tackle');


		document.getElementById('enemy_health').innerHTML =
			'<strong>Health:' + enemy_current_lvl + '/100</strong>';
		statusUpdate(
			'Your ' +
				pokemons_caught[currentPokemonIndex].name +
				' used ' +
				theMove.name
		);
        // turn 교체
		current_turn = turn[1];


		if (enemy_current_lvl <= 0) {
            enemyCount--;


			// 남은적이 없음
            alert('You won!');
            // clear level ++;


            // enemy 교체
            // currentEnemy = enemy;


			resume_game();
		}
        } else {
            alert("Its wild pokemon's turn not your!");
        }
}

// for the enemy pokemonMain
function wildTurn() {
	if (battle) {
		//console.log("Yes it's battle time");
		if (current_turn == 'pc') {
			//console.log("Enemy's turn");
			let r = Math.floor(Math.random() * enemyMoves.length);
			statusUpdate(
				'Wild ' + enemy_pokemon.name + ' used, ' + enemyMoves[r].name + ' move.'
			);
			//console.log(enemyMoves[r]);
			let theMove = enemyMoves[r];

			// TODO : Enemy Poketmon obj에서 스킬 dmg읽어오기
            // Dmg: attack Power
            let Dmg = theMove.power; 

			//console.log(ans);


			//console.log(damage);

            // my_hp -= damage; 
            // my_hp = Math.floor(enemy_current_lvl);

			SoundsManager.play('tackle');

			document.getElementById('self_health').innerHTML =
				'<strong>Health:' + my_current_lvl + '/100</strong>';
			if (my_current_lvl <= 0) {
                myCount--;


			    // 남은 포켓몬이 없음
                alert('You are defeated.');
            

                // myPoketmon 교체
                // currentEnemy = enemy;
				
				statusUpdate('');
				resume_game();
			}
			current_turn = turn[0];
		}
	} else {
		//console.log("Enemy waiting for battle");
	}
}
