
let player1 = {
    name:'Scorpion',
    hp: 100,
    img:'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon:['Kunai'],
    attack: function(){
        console.log(this.name + ' Fight...');
    }
};


let player2 = {
    name:'Sub-Zero',
    hp: 100,
    img:'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon:['Sword'],
    attack: function(){
        console.log(this.name + ' Fight...');
    }
};


function createPlayer (playerName, playerObj) {
    let player = document.createElement('div');
    player.classList.add(playerName);

    let progressBar = document  .createElement('div');
    progressBar.classList.add('progressBar');
    
    let life = document.createElement('div');
    life.classList.add('life');
    life.style.width='100%';
    life.innerText = playerObj.hp;

    let name = document.createElement('div');
    name.classList.add('name');
    name.innerText = playerObj.name;

    
    progressBar.appendChild(life);
    progressBar.appendChild(name);


    player.appendChild(progressBar)

    let character = document.createElement('div');
    character.classList.add('character');
    
    let imageHero = document.createElement('img');
    imageHero.setAttribute('src', playerObj.img)
    
    player.appendChild(character);
    character.appendChild(imageHero);
    document.querySelector('.arenas').appendChild(player);
}

createPlayer('player1', player1);
createPlayer('player2', player2)
