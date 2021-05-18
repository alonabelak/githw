let auto = {
    "Manufacturer": "Hyundai",
    "Model": "Veloster",
    "Year":2016,
    "Average speed":80,
    
    vehicleInfo() {
        let rez = "<ul>";
        for (let k in auto) {
            if (typeof auto[k] !== "function") {
                rez += `<li>${k}: ${auto[k]}</li>`;
            }
        }
        rez += "</ul>";
        document.getElementById("vehicle_rez").innerHTML = rez;
    },
    timeInfo (){
        let km = document.getElementById("car_distance").value;
        let travel_time = km / auto["Average speed"];
        let h = 0;
        while (travel_time >= 4) {
            travel_time = travel_time - 4;
            h++;
        }
        let rez = km / auto["Average speed"] + h;
        document.getElementById("time_rez").innerHTML = rez;
    }
}

let fraction = {
    fr1: {
        n: 10,
        d: 6
    },
    fr2: {
        n: 2,
        d: 8
    },
    sum() {
        let rez = {
            n:0,
            d:0
        }
        if (this.fr1.d === this.fr2.d) {
            rez.n = this.fr1.n + this.fr2.n;
            rez.d = this.fr1.d;
        }else if (this.fr1.d !== this.fr2.n) {
            rez.n = (this.fr1.n * this.fr2.d + this.fr1.d * this.fr2.n);
            rez.d = (this.fr1.d * this.fr2.d);
        }
        return this.reduction(rez);
    },
    substraction(){
        let rez = {
            n:0,
            d:0
        }
        if(this.fr1.d === this.fr2.d){
            rez.n = this.fr1.n - this.fr2.n;
            rez.d = this.fr1.d;
        }else if(this.fr1.d !== this.fr2.d){
            rez.n = (this.fr1.n * this.fr2.d - this.fr1.d * this.fr2.n);
            rez.d = (this.fr1.d * this.fr2.d);
        }
        return this.reduction(rez);
    },
    multiplication(){
        let rez = {
            n:0,
            d:0
        }
        rez.n = this.fr1.n * this.fr2.n;
        rez.d = this.fr1.d * this.fr2.d;
        return this.reduction(rez);
    },
    division(){
        let rez = {
            n:0,
            d:0
        }
        rez.n = this.fr1.n * this.fr2.d;
        rez.d = this.fr1.d * this.fr2.n;
        return this.reduction(rez); 
    },
    reduction(obj) {
        let number = function number(a, b) {
            let rez_number = 0;
            while (a != 0 && b != 0) {
                if (a > b) {
                    a = a % b;
                }else {
                    b = b % a;
                }
                rez_number = (a + b);
            }
            return rez_number;
        }
        let rez = number(obj.n, obj.d);
        return [obj.n / rez, obj.d / rez];
    },
    fractionRez() {
           let rez = `<ul>
                <li>${fraction.fr1.n}/${fraction.fr1.d} + ${fraction.fr2.n}/${fraction.fr2.d} = ${fraction.sum()}</li>
                <li>${fraction.fr1.n}/${fraction.fr1.d} - ${fraction.fr2.n}/${fraction.fr2.d} = ${fraction.substraction()}</li>
                <li>${fraction.fr1.n}/${fraction.fr1.d} * ${fraction.fr2.n}/${fraction.fr2.d} = ${fraction.multiplication()}</li>
                <li>${fraction.fr1.n}/${fraction.fr1.d} / ${fraction.fr2.n}/${fraction.fr2.d} = ${fraction.division()}</li>
                </ul> 
                `;  
        document.getElementById("fraction_rez").innerHTML = rez;
    }
}
$(function () {
    $('#current_time').mask('99:99:99');
})
$(function () {
    $('#time_change').mask('99:99:99');
})

let time = {
    h: 0,
    m: 0,
    s: 0,
    get(k) {
    return this[k];
    },
    set(k, newTime) {
        this[k] = newTime;
    },
    currentTime() {
        let t = document.getElementById("current_time").value;
        let tArr = t.split(":");
        let h = parseInt(tArr[0]);
        let m = parseInt(tArr[1]);
        let s = parseInt(tArr[2]);
        time.set(["h"], h);
        time.set(["m"], m);
        time.set(["s"], s);
        let rez = addZero(this.get("h")) + ":" + addZero(this.get("m")) + ":" + addZero(this.get("s"));
        document.getElementById("current_time_rez").innerHTML = rez;
    },
    validTime(el) {
        let arrt = el.split(":");
        let h = parseInt(arrt[0]);
        let m = parseInt(arrt[1]);
        let s = parseInt(arrt[2]);
        if (h >= 0 && m >= 0 && s >= 0) {
            rez_s = timeConverter(h, m, s); //function from prev hw
        } else {
            alert("Enter correct time");
        }
        return rez_s;
    },
    changeTime() {
        let a = document.getElementById("current_time").value;
        let num1 = time.validTime(a);
        let b = document.getElementById("time_change").value;
        let num2 = time.validTime(b);
        let sum_s = num1 + num2;
        let change_time = getTime(sum_s);   //function of seconds from prev hw
        let changeArr = change_time.split(":");
        let h = parseInt(changeArr[0]);
        let m = parseInt(changeArr[1]);
        let s = parseInt(changeArr[2]);
        time.set(["h"], h);
        time.set(["m"], m);
        time.set(["s"], s);
        let rez = addZero(this.get("h")) + ":" + addZero(this.get("m")) + ":" + addZero(this.get("s"));
        document.getElementById("change_rez").innerHTML = rez;
    }
}
function addZero(n) {
    return (n < 10) ? "0" + n : n;
}
//functions from previous hw
function timeConverter(a=0, b=0, c=0){
    let rez=0;
    if (a>0){
        a = (a*60*60);
    }
     if (b>0){
        b = b*60;
    }
    rez = a + b +c;
    return rez;
}

function getTime(s) {
    let m = 0;
    let h = 0;
    let rez = "";
    if (s > 59) {
        m = Math.floor(s / 60);
        s = s % 60;
        if (m > 59) {
            h = Math.floor(m / 60);
            m = m % 60;
        }
    }
    rez = addZero(h) + ":" + addZero(m) + ":" + addZero(s);
    return rez;
}
