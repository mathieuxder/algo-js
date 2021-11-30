class Circle {
    constructor(xPos, yPos, radius) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }
     move(xOffset, yOffset){
        this.xPos = xPos + xOffset;
        this.yPos = yPos + yOffset;
     }
}

let cercle = new Circle (10, 20, 3);
console.log(cercle);
cercle.move(100,100);