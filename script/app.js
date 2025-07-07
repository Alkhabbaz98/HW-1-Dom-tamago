function init() {


    /*-------------------------------- Constants --------------------------------*/
    const state = {
        boredom: 1,
        hunger: 1,
        sleepiness: 1, 
    }

   const boredomStatE1 = document.querySelector('#bordom-stat')
   const hungerStatE1 = document.querySelector('#hunger-stat')
   const sleepinessStatE1 = document.querySelector('#sleepiness-stat')
    
   const playBtnE1 = document.querySelector('#play')
   const feedBtnE1 = document.querySelector('#feed')
   const sleepBtnE1 = document.querySelector('#sleep')

   const gameMessageE1 = document.querySelector('#message')
   const resetBtnE1 = document.querySelector('#restart') 
  

    /*-------------------------------- Variables --------------------------------*/
    let timer
    let gameOver = false

    

    /*------------------------ Cached Element References ------------------------*/
   
  



    /*-------------------------------- Functions --------------------------------*/
   
    
    
    setInterval(runGame(), 2000);


    function render(){
        boredomStatE1.textContent = state.boredom
        hungerStatE1.textContent = state.hunger
        sleepinessStatE1.textContent = state.sleepiness
        if (gameOver = true) {
            clearInterval(timer)
        }
    }

    function updateStates() {
        for (let key in state) {
           state[key] += Math.floor(Math.random() * 4)
        }    
    }
    
    function runGame(){
        updateStates()
        checkGameOver()
        render() 

    }

    function checkGameOver(){
        if (state.boredom === '10'){
            return gameOver = true
        } else if (state.hunger === '10'){
            return gameOver = true 
        } else if (state.sleepiness) {
            return gameOver = true
        } else {
            return gameOver = false
        }
    }

    function playBtnClick(){
        state.boredom = '0',
        render() 
    }

    function playBtnClick(){
        state.hunger = '0',
        render() 
    }
    function playBtnClick(){
        state.sleepiness = '0',
        render() 
    }



    /*----------------------------- Event Listeners -----------------------------*/
    
    
    playBtnE1.addEventListener('click' , playBtnClick)
    resetBtnE1.addEventListener('click', init)

}

document.addEventListener('DOMContentLoaded', init)