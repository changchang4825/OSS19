let my_monster = {
    name: "",
    hp: 10,
    skill_name: ["", "", "", ""],
    skill_damage: [1, 2, -1, -4],
    skill_point: [2, 2, 2, 2]
};

let enemy_monster = {
    name: "",
    hp: 10,
    skill_name: ["", "", "", ""],
    skill_damage: [0, 0, 0, 0],
    skill_point: [0, 0, 0, 0]
};


let my_monster_state = {
    hp: my_monster.hp,
    skill_damage: JSON.parse(JSON.stringify(my_monster.skill_damage)),
    skill_point: JSON.parse(JSON.stringify(my_monster.skill_point))
};

let enemy_monster_state = {
    hp: enemy_monster.hp,
    skill_damage: JSON.parse(JSON.stringify(enemy_monster.skill_damage)),
    skill_point: JSON.parse(JSON.stringify(enemy_monster.skill_point))
};

function my_attack(skill_num) {
    if (my_monster_state.skill_point[skill_num] > 0) {
        document.getElementById("skill_point" + (skill_num + 1)).innerHTML = "(" + --my_monster_state.skill_point[skill_num] + "/" + my_monster.skill_point[skill_num] + ")";
        if (my_monster_state.skill_damage[skill_num] < 0) {
            enemy_monster_state.hp += my_monster_state.skill_damage[skill_num];
            document.getElementById("battle_log").innerHTML = "Attack! Enemy was taken " + -my_monster_state.skill_damage[skill_num] + " damage!";
            if (enemy_monster_state.hp <= 0) {
                enemy_monster_state.hp = 0;
                document.getElementById("battle_log").innerHTML += " <strong>Win!!!</strong>";
            }
            document.getElementById("enemy_hp").innerHTML = enemy_monster_state.hp + "/" + enemy_monster.hp;
        }
        else if (my_monster_state.skill_damage[skill_num] > 0) {
            let hp_diff = my_monster.hp - my_monster_state.hp;
            let heal = hp_diff < my_monster_state.skill_damage[skill_num] ? hp_diff : my_monster_state.skill_damage[skill_num];
            my_monster_state.hp += heal;
            document.getElementById("battle_log").innerHTML = heal + " HP healed!!!";
            document.getElementById("my_hp").innerHTML = my_monster_state.hp + "/" + my_monster.hp;
        }
        else {
            document.getElementById("battle_log").innerHTML = "Nothing happend..."
        }
        enemy_attack();
    }
    else {
        document.getElementById("battle_log").innerHTML = "<strong>Cannot use this skill !!!</strong>"
    }
}

const sleep = (ms) => { return new Promise((resolve) => setTimeout(resolve, ms)) }

function enemy_attack() {
    sleep(2000);
    let skill_num = Math.floor(Math.random() * 4);
    for (let i = 0; enemy_monster_state.hp === enemy_monster.hp && enemy_monster.skill_damage[skill_num] > 0; i++) {
        if (i >= 3) return;
        skill_num = (skill_num + 1) % 4;
    }
    /////
}

window.addEventListener("load", () => {
    document.getElementById("my_name").innerHTML = my_monster.name;
    document.getElementById("my_hp").innerHTML = my_monster_state.hp + "/" + my_monster.hp;
    document.getElementById("enemy_name").innerHTML = enemy_monster.name;
    document.getElementById("enemy_hp").innerHTML = enemy_monster_state.hp + "/" + enemy_monster.hp;
    document.getElementById("skill_point1").innerHTML = "(" + my_monster_state.skill_point[0] + "/" + my_monster.skill_point[0] + ")";
    document.getElementById("skill_point2").innerHTML = "(" + my_monster_state.skill_point[1] + "/" + my_monster.skill_point[1] + ")";
    document.getElementById("skill_point3").innerHTML = "(" + my_monster_state.skill_point[2] + "/" + my_monster.skill_point[2] + ")";
    document.getElementById("skill_point4").innerHTML = "(" + my_monster_state.skill_point[3] + "/" + my_monster.skill_point[3] + ")";
})

document.getElementById("skill1").addEventListener("click", () => {
    my_attack(0);
})

document.getElementById("skill2").addEventListener("click", () => {
    my_attack(1);
})

document.getElementById("skill3").addEventListener("click", () => {
    my_attack(2);
})

document.getElementById("skill4").addEventListener("click", () => {
    my_attack(3);
})