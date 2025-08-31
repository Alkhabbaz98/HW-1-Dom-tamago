function init() {


    /*-------------------------------- Constants --------------------------------*/
    const state = {
        boredom: 0,
        hunger: 0,
        sleepiness: 0, 
    }

   const boredomStatEl = document.querySelector('#boredom-stat')
   const hungerStatEl = document.querySelector('#hunger-stat')
   const sleepinessStatEl = document.querySelector('#sleepiness-stat')
    
   const playBtnEl = document.querySelector('#play')
   const feedBtnEl = document.querySelector('#feed')
   const sleepBtnEl = document.querySelector('#sleep')

   const gameMessageEl = document.querySelector('#message')
   const resetBtnEl = document.querySelector('#restart') 
  

    /*-------------------------------- Variables --------------------------------*/
    let gameOver = false
    let timer = setInterval(runGame, 2000);


    /*------------------------ Cached Element References ------------------------*/
    
  



    /*-------------------------------- Functions --------------------------------*/
    function runGame(){
        
        updateStates()
        checkGameOver()
        render() 

    }
    
    
    

    function render(){
        boredomStatEl.textContent = state.boredom
        hungerStatEl.textContent = state.hunger
        sleepinessStatEl.textContent = state.sleepiness
   
        if (gameOver == true) {
            clearInterval(timer)
            gameMessageEl.textContent = 'You Lose ! Refresh to play again'
            gameMessageEl.classList.remove('hidden')
        }
        
    }

    function updateStates() {
        for (let key in state) {
           state[key] += Math.floor(Math.random() * 4)
        }    
    }
    
    

    function checkGameOver(){
        if (state.boredom >= 10 || state.hunger >= 10 || state.sleepiness >= 10) {
            gameOver = true
        }
    }

    function playBtnClick(){
        
        state.boredom = 0
       
        render() 
    }
    function feedBtnClick(){
        state.hunger = 0
        render() 
    }
    function sleepBtnClick(){
        state.sleepiness = 0
        render() 
    }

 
    /*----------------------------- Event Listeners -----------------------------*/
    
    
    playBtnEl.addEventListener('click' , playBtnClick)
    feedBtnEl.addEventListener('click',feedBtnClick)
    sleepBtnEl.addEventListener('click',sleepBtnClick)
    resetBtnEl.addEventListener('click', init)
}

document.addEventListener('DOMContentLoaded', init)