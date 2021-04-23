function userName(){
    let user_name = prompt("Enter your name"),
        rez = alert("Привет " + user_name + "!");
}
function userAge(){
    const date = 2021;
    let number = parseInt(prompt("Enter your year of birth")),
        rez = date - number;
    alert("Your age: " + rez);    
}
function squareP(){
    let square = parseFloat(prompt("Enter the length of one side of the square")),
        rez = 4*square;
    alert("Perimetre of the square is " + rez);    
}
function areaC(){
    let radius = parseFloat(prompt("Enter the radius of your square"));
    const PI = Math.PI;
    let area = PI*Math.pow(radius, 2);
    alert("Area of the circle is " + area);    
}
function userSpeed(){
    let distance = parseFloat(prompt("Enter the distance between your cities in km")),
        time = parseFloat(prompt("Enter expected time")),
        rez = distance / time;
    alert("Your speed " + rez);    
}
function currencyC(){
    const ratio = 0.83;
    let currency = parseFloat(prompt("Enter the amount of dollars")),
        rez = currency * ratio;
    alert("Euros will be  " + rez);    
}
function filesinFlash(){
    let volume = parseFloat(prompt("Enter the volume of your flashcard in GB")),
        volumemb = volume * 1000;
    const files = 820;
    let rez = Math.floor(volumemb / files);   
    alert("There will be " + rez);    
}
function priceChoc(){
    let price = parseFloat(prompt("Enter the price of your chocolate")),
        cash = parseFloat(prompt("Enter the amount of cash you have")),
        rez = Math.floor(cash/price),
        change = cash % price;
    alert("You can buy " + rez + " chocolates; Change will be " + change.toFixed(2));    
}
function myCalc(){
    let number = parseInt(prompt("Enter a three-digit number")),    
        s = parseInt(number/100), //2
        d = parseInt((number%100)/10),
        e = number%10,
        rez = e * 100 + d * 10 + s;
    alert("Entered number is: " + number + " Swapped number is " + rez);    
}
function myBank(){
    debugger
    let fee = parseFloat(prompt("Enter the amount of fee to the bank"));
    const months = 2,
          interest = 0.05;
    let rez = months * interest / 12 * fee;
    alert("Amount of the money with interest is " + rez.toFixed(2));    
}




