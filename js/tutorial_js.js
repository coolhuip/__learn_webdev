let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["weed"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

const locations = 
    {
        name: "Town Square"
    };

// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function goStore() {
    button1.innerText = "Buy 10 health (10 gold)";
    button2.innerText = "Buy weapon (30 gold)";
    button3.innerText = "Go to town square";
    button1.onclick = buyHealth;
    button2.onclick = buyWeapon;
    button3.onclick = goTown;
    text.innerText = "You've entered the Store.";
}

function goCave() {
    text.innerText = "Going to the cave.";
}

function fightDragon() {
    text.innerText = "Fighting Dragon!!!";
}

function buyHealth() {
    if (health < 300) {
        health += 10;
        healthText.innerText = health;
        text.innerText = "You feel just rejuvinated enough to feel the temptations of the tao of consoomer."
    } else {
        text.innerText = "Stop eating potions you fat piece of shit"
    }
}

function buyWeapon() {
    
}

function goTown() {
    button1.innerText = "Go to Store";
    button2.innerText = "Go to Cave";
    button3.innerText = "Fight Dragon";
    button1.onclick = goStore;
    button2.onclick = goCave;
    button3.onclick = fightDragon;
    text.innerText = "You're back in the town square. You see a sign that says \"Store\".";
}