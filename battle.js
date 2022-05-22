let myPoketmon1 = {
    name: "Picachu",
    hp: 555,
    skill_name: ["baekmanbolt", "jeongwang", "hpUp", "ironTale"],
    skill_damage: [-100, -20, 333, -27],
    skill_point: [10, 10, 20, 10],
};
let myPoketmon2 = {
    name: "Charmander",
    hp: 505,
    skill_name: ["flame", "firewall", "rapidfire", "hpUp"],
    skill_damage: [-100, -20, -200, 27],
    skill_point: [15, 20, 5, 0],
};
let myPoketmon3 = {
    name: "Squirtle",
    hp: 632,
    skill_name: ["waterpark", "megadrop", "hpUp", "hydropump"],
    skill_damage: [-100, -20, 333, -77],
    skill_point: [5, 15, 5, 10],
};
let myPoketmon4 = {
    name: "Bulbasaur",
    hp: 700,
    skill_name: ["leaftornado", "blooming", "hpUp", "spreadSeed"],
    skill_damage: [-100, -70, 333, -30],
    skill_point: [10, 5, 20, 0],
};

let myPoketArr = {};
myPoketArr[0] =  myPoketmon1;
myPoketArr[1] =  myPoketmon2;
myPoketArr[2] =  myPoketmon3;
myPoketArr[3] =  myPoketmon4;

// stage 1
let wildPoketmon1 = {
    name: "Pidgey",
    hp: 150,
    skill_name: ["momtong", "wind", "hpUp", "JJogi"],
    skill_damage: [-15, 0, 10, -15],
    skill_point: [10, 5, 20, 10],
};


// stage 2
let wildPoketmon2_1 = {
    name: "Nidoking",
    hp: 400,
    skill_name: ["poison", "struggle", "hpUp", "Sheer"],
    skill_damage: [-20, 0, 50, -37],
    skill_point: [15, 15, 5, 15],
};
let wildPoketmon2_2 = {
    name: "Nidoqueen",
    hp: 300,
    skill_name: ["poison", "struggle", "hpUp", "Sheer"],
    skill_damage: [-20, 0, 50, -37],
    skill_point: [15, 15, 5, 15],
};

// stage 3
let wildPoketmon3_1 = {
    name: "Yadon",
    hp: 400,
    skill_name: ["ya", "do", "on", "hpUp"],
    skill_damage: [-10, -15, -20, 50],
    skill_point: [15, 15, 15, 5],
};
let wildPoketmon3_2 = {
    name: "Yadoran",
    hp: 500,
    skill_name: ["ya", "do", "ran", "hpUp"], 
    kill_damage: [-10, -15, -20, 100],
    skill_point: [15, 15, 15, 5],
};
let wildPoketmon3_3 = {
    name: "MegaYadoran  ",
    hp: 1000,
    skill_name: ["mega", "ya", "do", "ran"],
    kill_damage: [-10, -15, -20, -200],
    skill_point: [15, 15, 15, 5],
};

// stage 4
let wildPoketmon4_1 = {
    name: "JamManBo",
    hp: 1500,
    skill_name: ["Zzz", "Bite", "Momtong", "Hapum"],
    skill_damage: [100, -100, -200, -15],
    skill_point: [10, 10, 5, 25],
};
let wildPoketmon4_2 = {
    name: "Majayong",
    hp: 700,
    skill_name: ["hpUp", "Mirror", "Momtong", "Majayong"],
    skill_damage: [300, 0, -5, -30],
    skill_point: [10, 10, 20, 15],
};
let wildPoketmon4_3 = {
    name: "Happynurse",
    hp: 800,
    skill_name: ["hpUp1", "hpUp2", "hpUp3", "melody"],
    skill_damage: [150, 175, 200, -37],
    skill_point: [7, 7, 7, 35],
};
let wildPoketmon4_4 = {
    name: "Dialga",
    hp: 1717,
    skill_name: ["breath", "mist", "flying", "hpUp"],
    skill_damage: [-100, -75, -66, 757],
    skill_point: [15, 10, 10, 7],
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
let enemy_monster;
let enemy_monster_state;

function sleep(ms) { return new Promise((resolve) => setTimeout(resolve, ms)) }

function my_attack(skill_num) {
    if (my_monster_state.skill_point[skill_num] > 0) {
        document.getElementById("skill_point" + (skill_num + 1)).innerHTML = "(" + --my_monster_state.skill_point[skill_num] + "/" + my_monster.skill_point[skill_num] + ")";
        if (my_monster_state.skill_damage[skill_num] < 0) {
            enemy_monster_state.hp += my_monster_state.skill_damage[skill_num];
            document.getElementById("battle_log").innerHTML = my_monster.skill_name[skill_num] + "! " + enemy_monster.name + " was taken " + -my_monster_state.skill_damage[skill_num] + " damage!";
            if (enemy_monster_state.hp <= 0) {
                enemy_monster_state.hp = 0;
                document.getElementById("battle_log").innerHTML += " <strong>Win!!!</strong>";
                if (Number(window.localStorage.getItem("current_stage")) > Number(window.localStorage.getItem("last_stage"))) {
                    window.localStorage.setItem("last_stage", window.localStorage.getItem("current_stage"))
                }
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
        sleep(3000).then(() => enemy_attack());
    }
    else {
        document.getElementById("battle_log").innerHTML = "<strong>Cannot use this skill !!!</strong>"
    }
}

function enemy_attack() {
    let skill_num = Math.floor(Math.random() * 4);
    for (let i = 0; enemy_monster_state.hp === enemy_monster.hp && enemy_monster_state.skill_damage[skill_num] > 0; i++) {
        if (i >= 3) return;
        skill_num = (skill_num + 1) % 4;
    }
    if (enemy_monster_state.skill_damage[skill_num] < 0) {
        my_monster_state.hp += enemy_monster_state.skill_damage[skill_num];
        document.getElementById("battle_log").innerHTML = enemy_monster.name + "'s " + enemy_monster.skill_name[skill_num] + "! " + my_monster.name + " was taken " + -enemy_monster_state.skill_damage[skill_num] + " damage!";
        if (my_monster_state.hp <= 0) {
            my_monster_state.hp = 0;
            document.getElementById("battle_log").innerHTML += " <strong>Lose...</strong>";
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
    else {
        //////////////////
    }
}

window.onload = () => {
    let current_stage = window.localStorage.getItem("current_stage");
    my_monster = JSON.parse(JSON.stringify(myPoketArr[Math.floor(Math.random() * 4)]));
    my_monster_state = JSON.parse(JSON.stringify(my_monster));
    if (current_stage == 1) {
        enemy_monster = JSON.parse(JSON.stringify(wildPoketArr[0]));
    }
    else if (current_stage == 2) {
        enemy_monster = JSON.parse(JSON.stringify(wildPoketArr[1][Math.floor(Math.random() * 2)]));
    }
    else if (current_stage == 3) {
        enemy_monster = JSON.parse(JSON.stringify(wildPoketArr[2][Math.floor(Math.random() * 3)]));
    }
    else if (current_stage == 4) {
        enemy_monster = JSON.parse(JSON.stringify(wildPoketArr[3][Math.floor(Math.random() * 4)]));
    }
    enemy_monster_state = JSON.parse(JSON.stringify(enemy_monster));

    document.getElementById("my_name").innerHTML = my_monster.name;
    document.getElementById("my_hp").innerHTML = my_monster_state.hp + "/" + my_monster.hp;
    document.getElementById("enemy_name").innerHTML = enemy_monster.name;
    document.getElementById("enemy_hp").innerHTML = enemy_monster_state.hp + "/" + enemy_monster.hp;
    document.getElementById("skill_name1").innerHTML = my_monster.skill_name[0];
    document.getElementById("skill_name2").innerHTML = my_monster.skill_name[1];
    document.getElementById("skill_name3").innerHTML = my_monster.skill_name[2];
    document.getElementById("skill_name4").innerHTML = my_monster.skill_name[3];
    document.getElementById("skill_point1").innerHTML = "(" + my_monster_state.skill_point[0] + "/" + my_monster.skill_point[0] + ")";
    document.getElementById("skill_point2").innerHTML = "(" + my_monster_state.skill_point[1] + "/" + my_monster.skill_point[1] + ")";
    document.getElementById("skill_point3").innerHTML = "(" + my_monster_state.skill_point[2] + "/" + my_monster.skill_point[2] + ")";
    document.getElementById("skill_point4").innerHTML = "(" + my_monster_state.skill_point[3] + "/" + my_monster.skill_point[3] + ")";
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