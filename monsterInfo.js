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

export { myPoketArr, wildPoketArr };