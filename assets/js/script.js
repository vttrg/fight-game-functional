const char = createKnight('Arthur');
const monster = createLittleMonster();

stage.start(
    char,
    monster, 
    document.querySelector('#char'), 
    document.querySelector('#monster')
);