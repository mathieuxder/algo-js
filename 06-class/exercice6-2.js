class Rectangle{
    constructor(topLeftXPos, topLeftYPos, width, length){
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }

    collides(otherRectangle){
        if(this.topLeftXPos < otherRectangle.topLeftXPos + otherRectangle.width &&
            this.topLeftXPos + this.width > otherRectangle.topLeftXPos &&
            this.topLeftYPos < otherRectangle.topLeftYPos  + otherRectangle.length &&
            this.topLeftYPos + this.length > otherRectangle.topLeftYPos){
                console.log('There\'s a collision with others rectangles');
            } else {
                console.log('There are no collision with others rectangles');
            }
    }
}

let firstRectangle = new Rectangle(10, 10, 100, 200);
let secondRectangle = new Rectangle(15, 0, 200, 100);
console.log(firstRectangle.collides(secondRectangle));