var goes = document.getElementById("goes");
var goesTaken = 1;
var lessten = 10
var tenmore = 10;
var lessthirty= 30;
var thirtymore = 30;

function check(){
    var value=document.getElementById('number').value;
    var num =Math.floor(Math.random() * 100 ) + 1;
    
    if (parseInt(value) ===num) {
      document.getElementById("result").innerHTML="You guessed the number!"+"\r"+"Your Guess So Far:" + goesTaken++;
      document.getElementById("result").style.backgroundColor = "green";
    }
    else if (parseInt(value) ==num-lessten){
        document.getElementById("result").innerHTML="Your getting warm!"+"\r"+"Your Guess So Far:" + goesTaken++;;
        document.getElementById("result").style.backgroundColor = "red";
    }
        
    else if (parseInt(value) ==num+ tenmore){
        document.getElementById("result").innerHTML="Your getting warm !"+"\r"+"Your Guess So Far:" + goesTaken++;
        document.getElementById("result").style.backgroundColor = "red"; 
    }
     else if (parseInt(value) ==num-lessthirty){
        document.getElementById("result").innerHTML="Your cold !"+"\r"+"Your Guess So Far:" + goesTaken++;;
        document.getElementById("result").style.backgroundColor = "lightblue"; 
    }
    else if (parseInt(value) ==num+thirtymore){"Your cold !"+"\r"+"Your Guess So Far:" + goesTaken++;;
        document.getElementById("result").style.backgroundColor = "lightblue";    
    }
else{
    document.getElementById("result").innerHTML="Your Guess is Incorrect"      
    +"\r"+"Your Guess So Far:" + goesTaken++;
    document.getElementById("result").style.backgroundColor = "white";
}   
}