let myPoketmon1 = {
    name: "Yelly",
    hp: 555,
    skill_name: ["Lightening", "Throw", "HpUp", "IronTale"],
    skill_damage: [-100, -20, 333, -27],
    skill_point: [5, 10, 20, 10],
};
let myPoketmon2 = {
    name: "Prom",
    hp: 505,
    skill_name: ["Punch", "SuperPunch", "Shoute", "hpUp"],
    skill_damage: [-77, -200, -200, 50],
    skill_point: [15, 6, 3, 5],
};
let myPoketmon3 = {
    name: "Kochstrasse",
    hp: 632,
    skill_name: ["Booo", "HatTrick", "HpUp", "Whipping"],
    skill_damage: [-33, -250, 333, -77],
    skill_point: [25, 3, 7, 15],
};
let myPoketmon4 = {
    name: "Cottonji",
    hp: 700,
    skill_name: ["Cavityfy", "CottonBapping", "HpUp", "Stare"],
    skill_damage: [-100, -33, 600, -30],
    skill_point: [10, 15, 20, 10],
};

let myPoketArr = {};
myPoketArr[0] =  myPoketmon1;
myPoketArr[1] =  myPoketmon2;
myPoketArr[2] =  myPoketmon3;
myPoketArr[3] =  myPoketmon4;

// stage 1
let wildPoketmon1 = {
    name: "Greepy",
    hp: 150,
    skill_name: ["Bite", "Headbanging", "HpUp", "Stare"],
    skill_damage: [-15, -10, 100, -15],
    skill_point: [100, 100, 100, 100],
};


// stage 2
let wildPoketmon2_1 = {
    name: "Happydancer",
    hp: 400,
    skill_name: ["Dance", "Shear", "HpUp", "HeadSpin"],
    skill_damage: [-20, -20, 77, -37],
    skill_point: [100, 100, 100, 100],
};
let wildPoketmon2_2 = {
    name: "Hellohola",
    hp: 300,
    skill_name: ["Greeting", "Handshaking", "HpUp", "Spiting"],
    skill_damage: [-5, -20, 177, -15],
    skill_point: [100, 100, 100, 100],
};

// stage 3
let wildPoketmon3_1 = {
    name: "Picky",
    hp: 400,
    skill_name: ["FirstTeeth", "SecondTeeth", "ThirdTeeth", "FourthTeeth"],
    skill_damage: [-10, -20, -35, -55],
    skill_point: [100, 100, 100, 100],
};
let wildPoketmon3_2 = {
    name: "MonsterJelly",
    hp: 500,
    skill_name: ["Jellyfy", "Rage", "Inrage", "hpUp"], 
    skill_damage: [-100, -120, -210, 100],
    skill_point: [100, 100, 100, 100],
};
let wildPoketmon3_3 = {
    name: "Unluckyangel",
    hp: 1000,
    skill_name: ["Somersault", "LoveDive", "Stare", "HpUp"],
    skill_damage: [-100, -150, -20, 500],
    skill_point: [100, 100, 100, 100],
};

// stage 4
let wildPoketmon4_1 = {
    name: "Sleepy",
    hp: 3000,
    skill_name: ["Zzz", "CocoNenne", "HpUp", "Hapum"],
    skill_damage: [1000, 700, 800, -200],
    skill_point: [100, 100, 100, 100],
};
let wildPoketmon4_2 = {
    name: "Tboy",
    hp: 1300,
    skill_name: ["HpUp", "Mirror", "Meteo", "Hacking"],
    skill_damage: [300, 10, -444, -139],
    skill_point: [100, 100, 100, 100],
};
let wildPoketmon4_3 = {
    name: "Cornelio",
    hp: 1800,
    skill_name: ["ThrowPickle", "Crying", "HpUp", "Boxing"],
    skill_damage: [-150, -175, 200, -78],
    skill_point: [100, 100, 100, 100],
};
let wildPoketmon4_4 = {
    name: "Demon",
    hp: 1717,
    skill_name: ["Curse", "Spawn", "FireRain", "Psychic"],
    skill_damage: [-200, -33, -66, -666],
    skill_point: [100, 100, 100, 100],
};

let wildPoketArr = {};
wildPoketArr[0] =  wildPoketmon1;
wildPoketArr[1] = {};
wildPoketArr[1][0] = wildPoketmon2_1;
wildPoketArr[1][1] = wildPoketmon2_2;
wildPoketArr[2] = {};
wildPoketArr[2][0] = wildPoketmon3_1;
wildPoketArr[2][1] = wildPoketmon3_2;
wildPoketArr[2][2] = wildPoketmon3_3;
wildPoketArr[3] = {};
wildPoketArr[3][0] = wildPoketmon4_1;
wildPoketArr[3][1] = wildPoketmon4_2;
wildPoketArr[3][2] = wildPoketmon4_3;
wildPoketArr[3][3] = wildPoketmon4_4;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let my_monster;
let my_monster_state;
let my_monster_index;
let is_alive;
let enemy_monster;
let enemy_monster_state;
let current_stage;
let current_enemy = 0;
let turn = true;

function sleep(ms) { return new Promise((resolve) => setTimeout(resolve, ms)) }

function my_change() {
    let num = Math.floor(Math.random() * 4);
    for (let i = 0; !is_alive[num]; i++) {
        if (i >= 3) {
            location.href = "index.html";
            turn = true;
            return;
        }
        num = (num + 1) % 4;
    }
    my_monster = JSON.parse(JSON.stringify(myPoketArr[num]));
    my_monster_state = JSON.parse(JSON.stringify(my_monster));
    my_monster_index = num;
    document.getElementById("my_name").innerHTML = my_monster.name;
    document.getElementById("my_hp").innerHTML = my_monster_state.hp + "/" + my_monster.hp;
    document.getElementById("my_image").src = "img/" + my_monster.name.toLowerCase() + ".gif";
    document.getElementById("skill_name1").innerHTML = my_monster.skill_name[0];
    document.getElementById("skill_name2").innerHTML = my_monster.skill_name[1];
    document.getElementById("skill_name3").innerHTML = my_monster.skill_name[2];
    document.getElementById("skill_name4").innerHTML = my_monster.skill_name[3];
    document.getElementById("skill_point1").innerHTML = "(" + my_monster_state.skill_point[0] + "/" + my_monster.skill_point[0] + ")";
    document.getElementById("skill_point2").innerHTML = "(" + my_monster_state.skill_point[1] + "/" + my_monster.skill_point[1] + ")";
    document.getElementById("skill_point3").innerHTML = "(" + my_monster_state.skill_point[2] + "/" + my_monster.skill_point[2] + ")";
    document.getElementById("skill_point4").innerHTML = "(" + my_monster_state.skill_point[3] + "/" + my_monster.skill_point[3] + ")";
    document.getElementById("battle_log").innerHTML = "What to do...?";
    turn = true;
}

function enemy_change() {
    if (current_stage == 1) {
        enemy_monster = JSON.parse(JSON.stringify(wildPoketArr[0]));
    }
    else if (current_stage == 2) {
        enemy_monster = JSON.parse(JSON.stringify(wildPoketArr[1][current_enemy]));
    }
    else if (current_stage == 3) {
        enemy_monster = JSON.parse(JSON.stringify(wildPoketArr[2][current_enemy]));
    }
    else if (current_stage == 4) {
        enemy_monster = JSON.parse(JSON.stringify(wildPoketArr[3][current_enemy]));
    }
    enemy_monster_state = JSON.parse(JSON.stringify(enemy_monster));
    document.getElementById("enemy_name").innerHTML = enemy_monster.name;
    document.getElementById("enemy_hp").innerHTML = enemy_monster_state.hp + "/" + enemy_monster.hp;
    document.getElementById("enemy_image").src = "img/" + enemy_monster.name.toLowerCase() + ".gif";
    document.getElementById("battle_log").innerHTML = "What to do...?";
    turn = true;
}

function my_attack(skill_num) {
    if (turn)
    if (my_monster_state.skill_point[skill_num] > 0) {
        document.getElementById("skill_point" + (skill_num + 1)).innerHTML = "(" + --my_monster_state.skill_point[skill_num] + "/" + my_monster.skill_point[skill_num] + ")";
        if (my_monster_state.skill_damage[skill_num] < 0) {
            enemy_monster_state.hp += my_monster_state.skill_damage[skill_num];
            document.getElementById("battle_log").innerHTML = my_monster.skill_name[skill_num] + "! " + enemy_monster.name + " was taken " + -my_monster_state.skill_damage[skill_num] + " damage!";
            if (enemy_monster_state.hp <= 0) {
                enemy_monster_state.hp = 0;
                document.getElementById("enemy_hp").innerHTML = enemy_monster_state.hp + "/" + enemy_monster.hp;
                document.getElementById("battle_log").innerHTML += " <strong>Win!!!</strong>";
                if (current_enemy < current_stage - 1) {
                    current_enemy++;
                    turn = false;
                    sleep(2000).then(() => enemy_change());
                    return;
                }
                else if (Number(window.localStorage.getItem("current_stage")) > Number(window.localStorage.getItem("last_stage"))) {
                    window.localStorage.setItem("last_stage", window.localStorage.getItem("current_stage"))
                }
                sleep(2000).then(() => { location.href = 'index.html'; });
                return;
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
        turn = false;
        sleep(2000).then(() => enemy_attack());
    }
    else {
        document.getElementById("battle_log").innerHTML = "<strong>Cannot use this skill !!!</strong>"
    }
}

function enemy_attack() {
    let skill_num = Math.floor(Math.random() * 4);
    for (let i = 0; enemy_monster_state.hp === enemy_monster.hp && enemy_monster_state.skill_damage[skill_num] > 0; i++) {
        if (i >= 3) {
            turn = true;
            return;
        }
        skill_num = (skill_num + 1) % 4;
    }
    if (enemy_monster_state.skill_damage[skill_num] < 0) {
        my_monster_state.hp += enemy_monster_state.skill_damage[skill_num];
        document.getElementById("battle_log").innerHTML = enemy_monster.name + "'s " + enemy_monster.skill_name[skill_num] + "! " + my_monster.name + " was taken " + -enemy_monster_state.skill_damage[skill_num] + " damage!";
        if (my_monster_state.hp <= 0) {
            my_monster_state.hp = 0;
            document.getElementById("my_hp").innerHTML = my_monster_state.hp + "/" + my_monster.hp;
            document.getElementById("battle_log").innerHTML += " <strong>Lose...</strong>";
            is_alive[my_monster_index] = 0;
            sleep(2000).then(() => my_change());
            return;
        }
        document.getElementById("my_hp").innerHTML = my_monster_state.hp + "/" + my_monster.hp;
    }
    else if (enemy_monster_state.skill_damage[skill_num] > 0) {
        let hp_diff = enemy_monster.hp - enemy_monster_state.hp;
        let heal = hp_diff < enemy_monster_state.skill_damage[skill_num] ? hp_diff : enemy_monster_state.skill_damage[skill_num];
        enemy_monster_state.hp += heal;
        document.getElementById("battle_log").innerHTML = enemy_monster.name + "'s " + heal + " HP healed!!!";
        document.getElementById("enemy_hp").innerHTML = enemy_monster_state.hp + "/" + enemy_monster.hp;
    }
    turn = true;
}

window.onload = () => {
    is_alive = [1, 1, 1, 1];
    current_stage = window.localStorage.getItem("current_stage");
    my_change();
    enemy_change();
}

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