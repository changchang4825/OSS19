// myPoketmon중에 하나 선택해서 시작해서 스테이지 해금할때마다 하나씩 추가(round robin)
var myPoketArr = {};
myPoketArr[0] =  myPoketmon1;
myPoketArr[1] =  myPoketmon2;
myPoketArr[2] =  myPoketmon3;
myPoketArr[3] =  myPoketmon4;
let myPoketmon1 = {
    name: "yelly",
    hp: 555,
    skill_name: ["Lightening", "Throw", "HpUp", "IronTale"],
    skill_damage: [-666, -20, 333, -270],
    skill_point: [5, 100, 20, 8],
};
let myPoketmon2 = {
    name: "prom",
    hp: 505,
    skill_name: ["Punch", "SuperPunch", "Shoute", "hpUp"],
    skill_damage: [-77, -500, -200, 50],
    skill_point: [15, 2, 3, 5],
};
let myPoketmon3 = {
    name: "kochstrasse",
    hp: 632,
    skill_name: ["Booo", "HatTrick", "HpUp", "Whipping"],
    skill_damage: [-33, -350, 333, -77],
    skill_point: [100, 3, 7, 15],
};
let myPoketmon4 = {
    name: "cottonji",
    hp: 700,
    skill_name: ["Cavityfy", "CottonBapping", "HpUp", "Stare"],
    skill_damage: [-100, -293, 600, -30],
    skill_point: [10, 5, 20, 10],
};




// stage 1
let wildPoketmon1 = {
    name: "greepy",
    hp: 444,
    skill_name: ["Bite", "Headbanging", "HpUp", "Stare"],
    skill_damage: [-15, -10, 100, -15],
    skill_point: [100, 100, 100, 100],
};


// stage 2
let wildPoketmon2_1 = {
    name: "happydancer",
    hp: 320,
    skill_name: ["Dance", "Shear", "HpUp", "HeadSpin"],
    skill_damage: [-20, -20, 77, -37],
    skill_point: [100, 100, 100, 100],
};
let wildPoketmon2_2 = {
    name: "hellohola",
    hp: 761,
    skill_name: ["Greeting", "Handshaking", "HpUp", "Spiting"],
    skill_damage: [-5, -20, 177, -15],
    skill_point: [100, 100, 100, 100],
};

// stage 3
let wildPoketmon3_1 = {
    name: "picky",
    hp: 532,
    skill_name: ["FirstTeeth", "SecondTeeth", "ThirdTeeth", "FourthTeeth"],
    skill_damage: [-10, -20, -35, -55],
    skill_point: [100, 100, 100, 100],
};
let wildPoketmon3_2 = {
    name: "monsterJelly",
    hp: 995,
    skill_name: ["Jellyfy", "Rage", "Inrage", "hpUp"], 
    kill_damage: [-100, -120, -210, 100],
    skill_point: [100, 100, 100, 100],
};
let wildPoketmon3_3 = {
    name: "unluckyangel",
    hp: 1000,
    skill_name: ["Somersault", "LoveDive", "Stare", "HpUp"],
    kill_damage: [-100, -150, -20, 500],
    skill_point: [100, 100, 100, 100],
};

// stage 4
let wildPoketmon4_1 = {
    name: "demon",
    hp: 1717,
    skill_name: ["Curse", "Spawn", "FireRain", "Psychic"],
    skill_damage: [-200, -33, -66, -666],
    skill_point: [100, 100, 100, 100],
};
let wildPoketmon4_2 = {
    name: "tboy",
    hp: 1300,
    skill_name: ["HpUp", "Mirror", "Meteo", "Hacking"],
    skill_damage: [300, 10, -444, -139],
    skill_point: [100, 100, 100, 100],
};
let wildPoketmon4_3 = {
    name: "cornelio",
    hp: 1800,
    skill_name: ["ThrowPickle", "Crying", "HpUp", "Boxing"],
    skill_damage: [-150, -175, 200, -78],
    skill_point: [100, 100, 100, 100],
};
let wildPoketmon4_4 = {
    name: "sleepy",
    hp: 1200,
    skill_name: ["Zzz", "CocoNenne", "HpUp", "Hapum"],
    skill_damage: [1000, 700, 800, -200],
    skill_point: [100, 100, 100, 100],
};