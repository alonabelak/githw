class Circle {
    constructor(options){
        this.radius = options.radius;
    }
    get radiusInfo(){
        return this.radius;
    }
    set radiusInfo(newRadius){
        this.radius = newRadius;
    }
    get diameterInfo(){
        let d = (2 * this.radius).toFixed(2);
        return d;
    }
    areaCircle() {
        let s = (Math.PI * Math.pow(this.radius, 2)).toFixed(2);
        return s;
    }
    circleLength() {
        let l = (2 * Math.PI * this.radius).toFixed(2);
        return l;
    }
}
const circle = new Circle({
    radius: 3
});

console.log(circle.radiusInfo)
console.log(circle.diameterInfo);
console.log(circle.areaCircle());
console.log(circle.circleLength());

class Marker {
    constructor (options){
        this.color = options.color;
        this.quantity = options.quantity;
    }
    print(text){
        let style = `color: ${this.color}`;
        return(`<p style="${style}">${text}</p>`);
    }   
}
const greenText = new Marker({
    color: "green",
    quantity: 100
});
function styleInfo (){ 
    let text = document.getElementById("print").value;
    let style = "";
    style += `color:${greenText.color}`;   
    let rez = `<p style="${style}">${text}</p>`;
    document.getElementById("style_rez").innerHTML = rez;
}      

class Employee {
    constructor (name, age, experience, department){
        this.name = name;
        this.age = age;
        this.experience = experience;
        this.department = department;
    }
}
const employees = [
    new Employee("John","25","2","Marketing"), 
    new Employee("Julia","22","1","Sales"), 
    new Employee("Ben","27","5","Accounting"), 
    new Employee("Lesia","30","3","HR")
];

class EmpTable {
    constructor(employees) {
      this.employees = employees;
    }
   
    getHtml() { 
      document.write("<table border = \"3\"><tr>");
      for (const [key] of Object.entries(employees[0])) {
        document.write('<th>' + key + '</th>');
      }
      document.write("</tr>");
   
      for (let i = 0; i < employees.length; i++) {
        document.write("<tr>");
        Object.values(employees[i]).forEach(empl => {
          document.write("<td>" + empl + "</td>");
        });
        document.write("</tr>");
      }
      document.write("</table>");
    }
}
const empTable = new EmpTable(employees);
empTable.getHtml();