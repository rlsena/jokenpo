function game(choice){
    
    let oponente = Math.floor(Math.random() * 3) + 1;

    if((choice == 1)&&(oponente==1)){

        console.log("empatou");

    }
    else if((choice == 1)&&(oponente==2)){

        console.log("Papel! Você perdeu");

    }
    else if((choice == 1)&&(oponente==3)){

        console.log("Tesoura! Você ganhou");

    }
    else if((choice == 2)&&(oponente==1)){

        console.log("Pedra! Você ganhou");

    }
    else if((choice == 2)&&(oponente==2)){

        console.log("empatou");

    }
    else if((choice == 2)&&(oponente==3)){

        console.log("Tesoura! Você perdeu");

    }
    else if((choice == 3)&&(oponente==1)){

        console.log("Pedra! Você perdeu");

    }
    else if((choice == 3)&&(oponente==2)){

        console.log("Papel! Você ganhou");

    }
    else if((choice == 3)&&(oponente==3)){
        
        console.log("empatou");
    } 

    
    

}