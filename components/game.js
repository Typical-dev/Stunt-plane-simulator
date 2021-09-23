AFRAME.registerComponent("game-play",{
    schema:{
        elementId:{type:"string", default:"#ring1"}
    },

    init:function(){
        var duration = 120
        var timerEL = document.querySelector("#timer")
        this.startTimer(duration,timerEL)
    },

    startTimer:function(duration,timerEL){
        var minutes, seconds;
        setInterval(()=>{
            if(duration >= 0){
                minutes = parseInt(duration/60)
                seconds = parseInt(duration%60)
                if(minutes < 10){
                    minutes = "0"+minutes
                }
                if(seconds < 10){
                    seconds = "0"+seconds
                }
                timerEL.setAttribute("text", {value:minutes+":" +seconds})
                duration -= 1
            }else{
                this.gameOver()
            }
        },1000)
    },

    updateTargets:function(){
        var element = document.querySelector("#targets")
        var count = element.getAttribute("text").value
        var currentTargets = parseInt(count)
        currentTargets -= 1
        element.setAttribute("text",{value:currentTargets})

    },

    isCollided:function(elementId){
        const element = document.querySelector(elementId)
        element.addEventListener("collide",e =>{
            if(elementId.includes("#ring")){
                element.setAttribute("visible", false)
                this.updateScore()
                this.updateTargets()
            }else{
                this.gameOver()
            }
            console.log(elementId)
        })
    },

    updateScore:function(){
        const element = document.querySelector("#score")
        var count = element.getAttribute("text").value
        let currentScore = parseInt(count)
        currentScore += 50
        element.setAttribute("text", {value:currentScore})
    },

    gameOver:function(){
        var plainEL = document.querySelector("#plane-model")
        var element = document.querySelector("#game_over_text")
        element.setAttribute("visible",true)
        plainEL.setAttribute("dynamic-body",{mass:1})

    },

    update:function(){
        this.isCollided(this.data.elementId)
    }
})