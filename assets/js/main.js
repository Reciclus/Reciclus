
var baseURL = "./";


const game = {
  level: 1, 


  enemies: [
    { sprite: `${baseURL}/assets/img/objects/radioativo.png` },
    { sprite: `${baseURL}/assets/img/objects/hospitalar.png`  },
    { sprite: `${baseURL}/assets/img/objects/vidro.png` }
  ],

 
  items: [
    { sprite: `${baseURL}/assets/img/objects/plastico.png` },
    { sprite: `${baseURL}/assets/img/objects/plastico.png` }
  ],

  sounds: {
    /* música de fundo */
    track: {
      src: `${baseURL}/assets/audio/soundtrack.webm`,
      volume: 0.2
    },
    
    /* som de início de jogo */
    start: {
      src: `${baseURL}/assets/audio/effects/start.ogg`,
      volume: 0.5
    },

    /* som de gameover */
    gameover: {
      src: `${baseURL}/assets/audio/effects/gameover.ogg`,
      volume: 0.5
    },

    /* música de quando sobe de nível */
    levelup: {
      src: `${baseURL}/assets/audio/effects/levelup.ogg`,
      volume: 0.5
    },

    /* som de quando o plástico é coletado. */
    collect: {
      src: `${baseURL}/assets/audio/effects/collect.ogg`,
      volume: 0.5
    },

    /* som de quando o jogador coleta outro tipo de lixo. */
    collision: {
      src: `${baseURL}/assets/audio/effects/collision.mp3`,
      volume: 1
    }
  }
};


const player = {
  sprite: `${baseURL}/assets/img/objects/lixeira.png`,

  lives: 5, // vidas iniciais
  points: 0, // pontos iniciais
  
  required_xp: 30 // quantos pontos até passar de nível
};


const engine = {
  canvas: {
    container: document.getElementById("canvas_container"),
    element: document.createElement('canvas'),
  },

  row: {
    images: [
      `${baseURL}/assets/img/sprites/sky.png`,   // céu
      `${baseURL}/assets/img/sprites/sky.png`,   // céu
      `${baseURL}/assets/img/sprites/sky.png`,   // céu
      `${baseURL}/assets/img/sprites/sky.png`,   // céu

      `${baseURL}/assets/img/sprites/grass-block.png`,   // grama
    ]
  },

  column: {
    count: 9
  }
};


const resources = [
  /* cenário */
  `${baseURL}/assets/img/sprites/stone-block.png`,
  `${baseURL}/assets/img/sprites/sky.png`,
  `${baseURL}/assets/img/sprites/grass-block.png`,

  /* inimigos */
  `${baseURL}/assets/img/objects/radioativo.png`,
  `${baseURL}/assets/img/objects/vidro.png`,
  `${baseURL}/assets/img/objects/nonrecy.png`,
  `${baseURL}/assets/img/objects/hospitalar.png`,
  `${baseURL}/assets/img/objects/madeira.png`,
  `${baseURL}/assets/img/objects/metal.png`,
  `${baseURL}/assets/img/objects/organico.png`,
  `${baseURL}/assets/img/objects/papel.png`,
  `${baseURL}/assets/img/objects/perigoso.png`,
  
  /* player */
  `${baseURL}/assets/img/objects/lixeira.png`,

  /* itens coletáveis */
  `${baseURL}/assets/img/objects/plastico.png`
];

const config = {
  game,
  player,
  engine,
  resources
}

window.onload = () => {

  const reciclus = new Game(config);
  
  reciclus.showStartScreen();
}
