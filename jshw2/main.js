function checkPer(){
    let a = parseInt(prompt("Enter your age"));
    if (a>=0 && a<=12){
        alert("Child");
    }else if (a>=13 && a<=18){
        alert("Teenager");
    }else if (a>=19 && a<=60){
        alert("Adult");
    }else if (a>=60 && a<=120){
        alert("Old");
    }else {
        alert("Invalid data");
    }
}
function specialSymb(){
    let number = parseInt(prompt("Enter number from 0-9"));
    let symbol = '';
    switch(number){
        case 0:
            symbol = ")";
            break;
        case 1:
            symbol = "!";
            break;
        case 2:
            symbol = "@";
            break;
        case 3:
            symbol = "#";
            break;
        case 4:
            symbol = "$";
            break;
        case 5:
            symbol = "%";
            break;
        case 6:
            symbol = "^";
            break;
        case 7:
            symbol = "&";
            break;
        case 8:
            symbol = "*";
            break;
        case 9:
            symbol = "(";
            break;
    }
    alert(symbol);         
}
function threeDigit(){
    let number = parseInt(prompt("Enter three-digit number")),
        f = parseInt(number%10),  
        s = parseInt((number%100)/10), 
        t = parseInt(number/100); 
    console.log(f);
    console.log(s);
    console.log(t);
    if(f == s || s == t || t == f){
        alert("There are repeated letters");
    }else {
        alert("There are no repeated letters");
    }
}
function leapYear(){
    let year = parseInt(prompt("Enter any year"));
    if(year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)){
        alert("This year is a leap year");
    }else{
        alert("This year isn't a leap year");
    }
}

function fiveDigit(){
    debugger;
    let number = parseInt(prompt("Enter five-digit number")),
    s = parseInt(number/10000), 
    d = parseInt((number%10000)/1000),
    e = parseInt((number%1000)/100),
    f = parseInt((number%100)/10),
    i = number%10,
    rvrs = i * 10000 + f * 1000 + e * 100 + d * 10 + s;
  if (isNaN(number)) {
    alert("Enter valid number");
  } else if (number == rvrs) {
    alert("Number is palindrome");
  } else {
    alert("Number isn't palindrome");
  }
}
function myConverter(){
    const uah = 27.90,
        eur = 0.83,
        azn = 0.59;
    let usd = parseFloat(prompt("Enter amount of USD")),
        cur = parseInt(prompt("Enter the number of the currency: 1 - uah, 2 - eur, 3 - azn")),
        uah1 = 1,
        eur2 = 2,
        azn3 = 3,
        ratiouah = usd*uah,
        ratioeur = usd*eur,
        ratioazn = usd*azn;
    if (cur == 1){
        alert(parseInt(ratiouah));
    }else if(cur == 2) {
        alert(parseInt(ratioeur));
    }else if(cur == 3) {
        alert(parseInt(ratioazn));
    }else {
        alert("Invalid data");
    }
}
function sumPurch(){
    let number = parseFloat(prompt("Enter your sum"));
    if(number>= 200 && number<300){
        alert(parseInt(number*0.03));
    }else if(number >= 300 && number<500){
        alert(parseInt(number + number*0.05));
    }else if(number >=500){
        alert(parseInt(number + number*0.07));
    }else {
        alert("Invalid data");
    }
}
function circleSquare(){
    let c = parseFloat(prompt("Enter circle length")),
        p = parseFloat(prompt("Enter square perimetre")),
        s = p/4,
        d = c/Math.PI;
    if(d <= s){
        alert("It can be in the square");
    }else if(d >=s){
        alert("It can't be in the square");
    }else {
        alert("Invalid data");
    }   
}
function question(){
    let q1 = prompt("Choose the correct answer: I \r1.is \r2.am \r3.are \ra teacher. "),
    q2 = prompt("Choose the correct answer: I \r1.was \r2.were \r3.will \rteacher a year ago. "),
    q3 = prompt("Choose the correct answer: I \r1.don't finish \r2.didn't finish \r3.haven't finished \rmy hw yet");

    if(!isNaN(q1) && !isNaN(q2) && !isNaN(q3)){
        let score = 0;
        if(q1 == 2){
            rez1 = score + 2;
        } else{
            rez1 = 0;
        }
        if(q2 == 1){
            rez2 = score + 2;
        }else{
            rez2 = 0;
        }
        if(q3 == 3){
        rez3 = score + 2;
        } else{
            rez3 = 0;
        }
        score = rez1 +rez2 + rez3;
        alert("Your score is " + score);
    }else {
        alert("Invalid data");
    }
}
function date() {
    const date = prompt('Enter the date as in the example: 31/12/2020'),
    arDate = date.split('/'),
    d = parseInt(arDate[0]),
    m = parseInt(arDate[1]),
    y = parseInt(arDate[2]),
    leapYear = (y) =>
    y % 400 === 0 || (y % 4 === 0 && y % 100 !== 0) ? true : false;
    let nd = nm = ny = 0;
    nd = d +1;
    nm = m;
    ny = y;
    let monthDays = 0;
switch(m){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        if(nd>31){
            nd = 1;
            nm++;
        }
        break;
    case 2:
        if (leapYear(y) && nd >= 29) {
            nd = 1;
            nm++;
        }else if (nd > 28) {
            nd = 1;
            nm++;
        }
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        if(nd>30){
            nd = 1;
            nm++;
        }
        break;
    default:
        console.log("Invalid month number: "+ nm);
        break;
}
if(nm>12){
    nm = 1;
    ny++;
}
nd = addZero(nd);
nm = addZero(nm);
alert(`${nd}/${nm}/${ny}`)
}
function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
}

