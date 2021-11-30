class Circle{
    constructor(xPos, yPos, radius){
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }

    move(xOffset, yOffset){
        this.xPos += xOffset;
        this.yPos += yOffset;
    }

    get surface(){
        return (Math.PI * Math.pow(this.radius, 2));
    }
}

let circle1 = new Circle(10,10,100);
console.log(circle1.xPos);
console.log(circle1.yPos);
console.log(circle1.surface);
circle1.move(100,100);
console.log(circle1.xPos);
console.log(circle1.yPos);