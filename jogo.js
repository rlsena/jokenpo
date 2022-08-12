function game(choice){
    
    let oponente = Math.floor(Math.random() * 3) + 1;

    if((choice == 1)&&(oponente==1)){

        document.getElementById("result").innerHTML = "empatou";

    }
    else if((choice == 1)&&(oponente==2)){

        document.getElementById("result").innerHTML = "Papel! Você perdeu";

    }
    else if((choice == 1)&&(oponente==3)){

        document.getElementById("result").innerHTML = "Tesoura! Você ganhou";

    }
    else if((choice == 2)&&(oponente==1)){

        document.getElementById("result").innerHTML = "Pedra! Você ganhou";

    }
    else if((choice == 2)&&(oponente==2)){

        document.getElementById("result").innerHTML = "empatou";

    }
    else if((choice == 2)&&(oponente==3)){

        document.getElementById("result").innerHTML = "Tesoura! Você perdeu";

    }
    else if((choice == 3)&&(oponente==1)){

        document.getElementById("result").innerHTML = "Pedra! Você perdeu";

    }
    else if((choice == 3)&&(oponente==2)){

        document.getElementById("result").innerHTML = "Papel! Você ganhou";

    }
    else if((choice == 3)&&(oponente==3)){
        
        document.getElementById("result").innerHTML = "empatou";
    } 

    
    

}