
   let randomNumber = Math.floor(Math.random()*100)+1;
   console.log(randomNumber);
   
   let currentAttempt=10;
   let y=true;
   

   

function guessTheNumber() {

   
    
   numberFromUser = +numberInput.value;
   if (currentAttempt>1 && currentAttempt<=10) {
        numberOfAttempts.innerHTML=` У Вас осталось ${currentAttempt} попыток`;
        
        
        if (numberFromUser>randomNumber) {

            resultPlace.innerHTML=`Ваш вариант ${numberFromUser} больше моего числа`;
            currentAttempt--;
            numberOfAttempts.innerHTML=`Осталось попыток ${currentAttempt}`;

        } else if (numberFromUser<randomNumber) {

                resultPlace.innerHTML=`Ваш вариант ${numberFromUser} меньше моего числа`;
                currentAttempt--;
                numberOfAttempts.innerHTML=`Осталось попыток ${currentAttempt}`;

                } else {

                    y=true;
                    resultPlace.innerHTML=`Вы выиграли! Ваш вариант ${numberFromUser} равен моему числу`;
                    currentAttempt--;
                    let numberRoundsToWin = 10-currentAttempt;
                    numberOfAttempts.innerHTML=`Вы выиграли за ${numberRoundsToWin} раунда`;

                    

                    return; /*currentAttempt=10, randomNumber = Math.floor(Math.random()*100)+1, console.log(randomNumber)*/ 
               
                
                }

    }  else if (currentAttempt=1) {

            if (numberFromUser != randomNumber) {

                y=true;

                resultPlace.innerHTML=`Вы проиграли. Загаданное число ${randomNumber}!`;
                numberOfAttempts.innerHTML=`Осталось 0 попыток.`;

                currentAttempt--;

                

                return; /*currentAttempt=10, randomNumber = Math.floor(Math.random()*100)+1, console.log(randomNumber)*/ 
            
            } else {

                y=true;

                currentAttempt--;
                numberRoundsToWin = 10-currentAttempt;

                numberOfAttempts.innerHTML=`Вы выиграли за ${numberRoundsToWin} раунда`;
                resultPlace.innerHTML=`Вы выиграли! Ваш вариант ${numberFromUser} равен моему числу!`;

                

                return; /*currentAttempt=10, randomNumber = Math.floor(Math.random()*100)+1, console.log(randomNumber)*/
            }   
        
    }      



    if (y){

        

        document.getElementById("GNBtn").addEventListener("click", function() {
            document.getElementById("buttonResult").innerHTML = "Начать новую игру!";
        });

        
        /*GNBtn.classList.add('disabled');*/
        document.getElementById("GNBtn").addEventListener("click", function (NewGame2){

        
            NewGame2.location.reload();
        });

        NewGame.classList.add('d-none');

       
    } /*else {
        /*GNBtn.classList.remove('disabled');*/
      /*  let tag2= document.getElementById("buttonResult");
        tag2.removeEventListener("click", function(NewGame2)
           
       {
            NewGame2.location.reload();
        } );
    
      /* }*/
    
      
     
    
                
    
}


function NewGame() {
    location.reload();
} 





