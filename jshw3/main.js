function number(){
    const s = parseInt(document.getElementById("first_number").value),
    a = parseInt(document.getElementById("second_number").value);
    let sum = 0;
    for( i=s; i<=a; i++){
         sum += i;
    }
    document.getElementById("number_rez").innerText = sum;
}
function divNumber(){
    let a = parseInt(document.getElementById("number1").value),
        b = parseInt(document.getElementById("number2").value),
        rez = 0;
        while(a!=0 && b!=0){ 
            if(a>b){
                a = a%b;
            } else {
                b = b%a;
            }
            rez =(a+b);
        }    
    document.getElementById("div_rez").innerText = rez;
}
function divide(){
    let a = parseInt(document.getElementById("divnumber").value);
    let rez = '';
    for(let i=1;i<a;i++){
        if(a%i===0){
            rez += i+', ';
        }
    }
    document.getElementById("divide_rez").innerText = rez;     
}
function quant (){
    
    let a = parseInt(document.getElementById("quant_number").value);
    let rez = '',
    i = '';
    while(a!=0) {
        a =(a/10).toFixed(0);
        i++;
        rez = i;
    }        
    document.getElementById("quant_rez").innerHTML = rez;
}
function tenNumbers (){
    let positive = 0,
        negative = 0,
        zeros = 0,
        even = 0,
        odd = 0;
        for(let i=1; i<=10; i++){
            let n = parseInt(prompt("Enter number"));
            if(n>0){
                positive = positive +1;
                if(n%2==0){
                    even = even+1;
                } else{
                    odd = odd+1;
                }
            }else if(n<0){
                negative = negative +1;
                if(n%2==0){
                    even = even+1;
                } else{
                    odd = odd+1;
                }
            } else if(n==0){
                zeros = zeros + 1;
            } else if (isNaN(n)){
                alert ("Enter corect data");
                i--;
            }
         document.getElementById("positive_rez").innerHTML ="Positive numbers " + positive;
         document.getElementById("negative_rez").innerHTML ="Negative numbers " + negative;
         document.getElementById("zeros_rez").innerHTML ="Zero numbers " + zeros;
         document.getElementById("even_rez").innerHTML ="Even numbers " + even;
         document.getElementById("odd_rez").innerHTML ="Odd numbers  " + odd;
    }        
}
function tasks(){
    debugger;
    let d = true;
   
    do {
        let a = parseInt(prompt("Enter first number")),
        b = parseInt(prompt("Enter second number")),
        action = prompt("Enter action: +,-,*,/");

        if(!isNaN(a) && !isNaN(a) && action=="+"){
        rez = a+b;
        alert("Ответ: "+rez);
        }else if(!isNaN(a) && !isNaN(a) && action=="-"){
            rez = a-b;
            alert("Ответ: "+rez);
        }else if(!isNaN(a) && !isNaN(a) && action=="*"){
            rez = a*b;
            alert("Ответ: "+rez);
        }else if(!isNaN(a) && !isNaN(a) && action=="/"){
            rez = a/b;
            alert("Ответ: "+rez);
        } else {
            alert("Enter corect numbers");
        }
        question = confirm("Хотите решить еще один пример?");
            if(question===true){
                d=true;
            } else if(question ===false){
                d=false;
            }
    }while(d);
}
function moveNumber(){
    debugger;
    let n = parseInt(document.getElementById("move1_number").value);
    let shift = parseInt(document.getElementById("move2_number").value);
        

}
function days (){
    debugger;
    let d = new Date,
    rez = d.getDay();
    switch(rez){
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        case 7:
            day = "Sunday";
            break;
        }
    alert("Today: "+ day);
    let question = confirm("Do you want to see next day?");
        while( question===true){
            rez = rez + 1;
            let day="";
            if(rez>=0 && rez<=7){
                switch(rez){
                    case 1:
                        day = "Monday";
                        break;
                    case 2:
                        day = "Tuesday";
                        break;
                    case 3:
                        day = "Wednesday";
                        break;
                    case 4:
                        day = "Thursday";
                        break;
                    case 5:
                        day = "Friday";
                        break;
                    case 6:
                        day = "Saturday";
                        break;
                    case 7:
                        day = "Sunday";
                        break;
                    }
                alert("Next day: "+ day);
                question = confirm("Do you want to see next day?");
            } else if(rez>8){
                rez=1;
                alert("Next day: Monday");
                question = confirm("Do you want to see next day?");
            }
    }
}
function multiple (){
    for (let n=1; n<=10; n++){
        for(let j =1; j<=10; j++){
            rez=n*j;
            console.log(n +" *", j+" =" , rez); 
        }
    }
}

function guessNumber (){
    let rez = true,
    start = 0,
    finish = 100;
    alert("Guess a number from 1 to 100");
    let  n = (finish - start)/2;
    let question = parseInt(prompt("Choose correct variant \r1. Your number equals  " +n +"\r2. Your number is lower than  "+n+ "\r3. Your number is bigger than  " +n));
    do{
        if(question==2){  
            finish=n;
            n = parseInt((finish - start)/2);
            question = parseInt(prompt("Choose correct variant \r1. Your number equals  " +n +"\r2. Your number is lower than  "+n+ "\r3. Your number is bigger than  " +n));
            rez=false;
            
        }else if(question==3){   
            start=n;
            n=parseInt((finish - start)/2 + start);
            question = parseInt(prompt("Choose correct variant \r1. Your number equals  " +n +"\r2. Your number is lower than  "+n+ "\r3. Your number is bigger than  " +n));
            rez=false;
            //if (question==2){
                //start=n;
                //n=parseInt((finish - start)/2+ start);
               // question = parseInt(prompt("Choose correct variant \r1. Your number equals  " +n +"\r2. Your number is lower than  "+n+ "\r3. Your number is bigger than  " +n));
                //rez=false;
           // }
        } else  if(question==1){
            alert("This is your number");
            rez=true;
        }

    }while(!rez===true);
}
