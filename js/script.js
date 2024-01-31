let player_one = document.querySelector(".first_player")

let start_img = document.querySelector(".first_img")
let winner_img = document.querySelector(".second_img")

let first_box = document.querySelector(".player_one_box")
let second_box = document.querySelector(".player_second")

let pleyar_one_inp = document.querySelector(".player_one_input")
let player_one_eror = document.querySelector(".player_one_eror")


let pleyar_two_inp = document.querySelector(".player_two_input")
let player_two_eror = document.querySelector(".player_two_eror")

let start = document.querySelector(".start_btn")
let guess = document.querySelector(".guess_btn")
let reset = document.querySelector(".restart")
let chance = document.querySelector(".chance")
let chance_main = document.querySelector(".chance_main")
let player_one_store_number;
let count_chance = 5;

start.addEventListener("click", function(){
    if(Boolean(pleyar_one_inp.value)){
        if(Boolean(pleyar_one_inp.value - 30)){
            if(pleyar_one_inp.value >= 0 && pleyar_one_inp.value <= 10){
                player_one_eror.innerHTML = ""
                player_one.innerHTML = "Second Player"
                second_box.style.display = "block"
                first_box.style.display = "none"
                player_one_store_number = pleyar_one_inp.value
            }else{
                player_one_eror.innerHTML = "Please Enter a Number between 0 to 10"
            }
        }else{
            player_one_eror.innerHTML = "Please Enter a Number, can't use text"
        }
    }else{
        player_one_eror.innerHTML = "Please Enter a Number to start The Game"
    }
})

guess.addEventListener("click", function(){
    if(Boolean(pleyar_two_inp.value)){
        if(Boolean(pleyar_two_inp.value - 30)){
            if(pleyar_two_inp.value>=0 && pleyar_two_inp.value<=10){
                player_two_eror.innerHTML = ""
                if(count_chance !== 1){
                    count_chance --
                    player_two_eror.innerHTML = "Wrong Number!! Please try again."
                    if(player_one_store_number == pleyar_two_inp.value){
                        player_two_eror.innerHTML = ""
                        player_one.innerHTML = "Congrats You Are win"
                        pleyar_two_inp.style.display = "none"
                        guess.style.display = "none"
                        reset.style.display = "block"
                        winner_img.style.display = "block"
                        start_img.style.display = "none"
                        chance_main.style.display ="none"
                    }else{
                        chance.innerHTML = count_chance
                    }
                }else{
                    player_two_eror.innerHTML = ""
                    player_one.innerHTML = "Opps! Player One is winner"
                    pleyar_two_inp.style.display = "none"
                    guess.style.display = "none"
                    reset.style.display = "block"
                    winner_img.style.display = "block"
                    start_img.style.display = "none"
                    chance_main.style.display = "none"
                }
            }else{
                player_two_eror.innerHTML = "Number Must be Between 1 to 10" 
            }
        }else{
            player_two_eror.innerHTML = "Please Enter a Number, can't use text"
        }
    }else{
        player_two_eror.innerHTML = "Please Enter a Number"
    }
})

reset.addEventListener("click", function(){
    location.reload();
    pleyar_one_inp.value = ""
    pleyar_two_inp.value = ""
})