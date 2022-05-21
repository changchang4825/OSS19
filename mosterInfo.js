// myPoketmon중에 하나 선택해서 시작해서 스테이지 해금할때마다 하나씩 추가(round robin)
var myPoketArr = {};
myPoketArr[0] =  myPoketmon1;
myPoketArr[1] =  myPoketmon2;
myPoketArr[2] =  myPoketmon3;
myPoketArr[3] =  myPoketmon4;
let myPoketmon1 = {
    name: "Picachu",
    hp: 555,
    skill_name: ["baekmanbolt", "jeongwang", "hpUp", "mpUp"],
    skill_damage: [-100, -20, 333, 27],
    skill_point: [10, 5, 20, 0],
};
let myPoketmon2 = {
    name: "Charmander",
    hp: 505,
    skill_name: ["flame", "firewall", "rapidfire", "mpUp"],
    skill_damage: [-100, -20, -200, 27],
    skill_point: [10, 5, 30, 0],
};
let myPoketmon3 = {
    name: "Squirtle",
    hp: 632,
    skill_name: ["waterpark", "megadrop", "hpUp", "mpUp"],
    skill_damage: [-100, -20, 333, 27],
    skill_point: [10, 5, 20, 0],
};
let myPoketmon4 = {
    name: "Bulbasaur",
    hp: 700,
    skill_name: ["leaftornado", "blooming", "hpUp", "spreadSeed"],
    skill_damage: [-100, -70, 333, -30],
    skill_point: [10, 5, 20, 0],
};


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
    skill_point: [5, 5, 20, 10],
};
let wildPoketmon2_2 = {
    name: "Nidoqueen",
    hp: 300,
    skill_name: ["poison", "struggle", "hpUp", "Sheer"],
    skill_damage: [-20, 0, 50, -37],
    skill_point: [5, 5, 20, 10],
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
    kill_damage: [-10, -15, -20, 200],
    skill_point: [15, 15, 15, 5],
};

// stage 4
let wildPoketmon4_1 = {
    name: "JamManBo",
    hp: 1000,
    skill_name: ["Zzz", "Bite", "Momtong", "Hapum"],
    skill_damage: [100, -100, -200, -15],
    skill_point: [10, 10, 30, 5],
};
let wildPoketmon4_2 = {
    name: "Majayong",
    hp: 700,
    skill_name: ["hpUp", "Mirror", "Momtong", "Majayonh"],
    skill_damage: [300, 0, -5, -30],
    skill_point: [5, 10, 1, 1],
};
let wildPoketmon4_3 = {
    name: "Happynurse",
    hp: 800,
    skill_name: ["hpUp1", "hpUp2", "hpUp3", "melody"],
    skill_damage: [50, 75, 100, -37],
    skill_point: [5, 5, 5, 35],
};
let wildPoketmon4_4 = {
    name: "Dialga",
    hp: 1717,
    skill_name: ["breath", "mist", "flying", "hpUp"],
    skill_damage: [-100, -75, -66, -37],
    skill_point: [10, 10, 10, 13],
};