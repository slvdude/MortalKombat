const arena = document.querySelector('.arenas');
const rndBtn = document.querySelector('.button');

let player1 = {
    player: 1,
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Kunai'],
    attack: function(name) {
        console.log(name + ' ' + 'Fight');
    }
};

let player2 = {
    player: 2,
    name: 'Lu-kang',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['Fireball'],
    attack: function(name) {
        console.log(name + ' ' + 'Fight');
    }
};

rndBtn.addEventListener('click', () => {
    console.log('Clicked');

    changeHp(player1);
    changeHp(player2);
});

function createElement(tag, className) {
    const $tag = document.createElement(tag);

    if(className) {
        $tag.classList.add(className);
    }
    
    return $tag;
}

function changeHp(player) {
    const playerHp = document.querySelector('.player' + player.player + ' .life');
    player.hp -= Math.ceil(Math.random() * 20);
    playerHp.style.width = player.hp + '%';

    if(player.hp <= 0) {
        player.hp = 0;
        //arena.appendChild(playerLose(player.name));
        player.player === 1 ? arena.appendChild(playerWin(player2.name)): arena.appendChild(playerWin(player1.name));
        rndBtn.disabled = true;
    }

    console.log(player.hp);
}

function playerWin(name) {
    const winTitle = createElement('div', 'loseTitle');
    winTitle.innerText = name + ' ' + 'win';
    
    setTimeout(() => {
        window.location.reload();
    },2000);

    return winTitle;
}

function createPlayer(player) {
    console.log(1);
    const player1 = createElement('div', 'player' + player.player);
    const progressBar = createElement('div', 'progressbar');
    const life = createElement('div', 'life');
    const name = createElement('div', 'name');
    const character = createElement('div', 'character');
    const image = createElement('img');

    image.src = player.img;

    life.style.width = `${player.hp}%`;
    name.innerText = player.name;

    player1.appendChild(progressBar);
    player1.appendChild(character);
    progressBar.appendChild(life);
    progressBar.appendChild(name);
    character.appendChild(image);
    player.attack(player.name);
    console.log(player1);
    return player1;
}

arena.appendChild(createPlayer(player1));
arena.appendChild(createPlayer(player2));
