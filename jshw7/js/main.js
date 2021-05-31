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

    }
    areaCircle() {
        let s = (Math.PI * Math.pow(this.radius, 2)).toFixed(2);
        document.write(`<p>Area: ${s}</p>`);
        return s;
    }
    cicleLength() {
        let l = (2 * Math.PI * this.radius).toFixed(2);
        document.write(`<p>Circle length: ${P}</p>`);
        return l;
    }
}
const circle = new Circle({
    radius: 3
});
