const game = ()=> {
    let currency = 0;
    let xp = 0;
    let health = 10000;
    let playerDmg = 0.01;
    let Lvl = 1;
    let wave = 1;


    //start the game
    const startGame = () =>{
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const wave = document.querySelector(".wave");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            wave.classList.add("fadeIn");
        });
        moneyExpHealth();
    };

    //play match
    const playWave = () => {
        const options = document.querySelectorAll(".options button");
        const player = document.querySelector(".player");
        const turtle = document.querySelector(".turtle");

    

    options.forEach((option)=>{
        option.addEventListener("click", function() {
            
            choice(this.textContent);
            moneyExpHealth();
            moneyExpHealth();
        });   
    });    
};

    const choice = (playerChoice)=>{
        if(playerChoice === "attack"){
            health = Math.round((health - playerDmg) * 100) / 100;
            xp = Math.floor(xp + 10);
            currency = Math.round((currency + playerDmg) * 100) / 100;
        }
        
        if(playerChoice === "upgrade"){
            if(xp >= 100*Lvl){
                if(Lvl <= 10 && Lvl != 10 ){
                    playerDmg = Math.round((playerDmg + 0.01) *100) / 100;
                    xp = xp - 100 * Lvl;
                    Lvl++;
                }
                else if(Lvl < 19 && Lvl > 9){
                    playerDmg =  Math.round((playerDmg + 0.1) *100) / 100;
                    xp = xp - 100 * Lvl;
                    Lvl++;
                }
                else if(Lvl >= 19 && playerDmg >= 1){
                    playerDmg =  Math.round((playerDmg + 1) *100) / 100;
                    xp = xp - 100 * Lvl;
                    Lvl++;
                }
                
            }
            else if(xp < 100*Lvl){
                
                const attention = document.querySelector(".attention");
                attention.textContent = `you need ${100 * Lvl - xp} more xp to upgrade to lvl:${Lvl}`;
                setTimeout(function(){
                    attention.textContent = ``;
                }, 2000);
               
            }
        }

        if(playerChoice === "shop"){

        }
    }
    //update money, health, exp, wave...

    const moneyExpHealth = ()=> {
        const money = document.querySelector(".money p");
        const experience = document.querySelector(".exp p");
        const tlife = document.querySelector(".TurtleLife p");
        const dmg = document.querySelector(".dmg p");
        const level = document.querySelector(".lvl p");
        const waveCount = document.querySelector(".waveCount p")
        
        tlife.textContent = health;
        money.textContent = currency;
        experience.textContent = xp;
        dmg.textContent = playerDmg;
        level.textContent = Lvl;
        waveCount.textContent = wave;

        if(health <= 0){
            wave++
            health = Math.floor(10000 * Math.pow(2, wave));
        };
        
    };

    

    

    //is call all inner function
    startGame();
    playWave();
    
};

//start the game function
game();
