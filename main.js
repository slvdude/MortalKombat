const arena = document.querySelector('.arenas');

let player1 = {
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Kunai'],
    attack: function() {
        console.log(player1.name + ' ' + 'Fight');
    }
};

let player2 = {
    name: 'Lu-kang',
    hp: 20,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['Fireball'],
    attack: function() {
        console.log(player2.name + ' ' + 'Fight');
    }
};

function createPlayer(playerClass, player) {
    console.log(1);
    const player1 = document.createElement('div');
    const progressBar = document.createElement('div');
    const life = document.createElement('div');
    const name = document.createElement('div');
    const character = document.createElement('div');
    const image = document.createElement('img');

    image.src = player.img;
    character.classList.add('character');
    name.classList.add('name');
    life.classList.add('life');
    player1.classList.add(playerClass);
    progressBar.classList.add('progressbar');

    life.style.width = `${player.hp}%`;
    name.innerText = player.name;

    player1.appendChild(progressBar);
    player1.appendChild(character);
    progressBar.appendChild(life);
    progressBar.appendChild(name);
    character.appendChild(image);
    arena.appendChild(player1);
}

createPlayer('player1', player1);
createPlayer('player2', player2);
