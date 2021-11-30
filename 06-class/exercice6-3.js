function rand10() {
    return Math.floor(Math.random() * 25) +1;
}

function rand500(){
    return Math.floor(Math.random() * 500);
}

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
                return true;
            } else {
                return false;
            }
    }
}


let rect = [];

for (let i = 0; i < 1000; i++) {
    x = rand500();
    y = rand500();
    w = rand10();
    l = rand10();
    rect[i] = new Rectangle(x, y, w, l);
}

for (let i = 0; i < 1000; i++) {
    let didcollide = [];
    for (let j = 0; j < 1000; j++) {
        if (i != j && rect[i].collides(rect[j])) {
            didcollide.push(j);
        } 
    }
    console.log("rectangle " + i + " collided with " + JSON.stringify(didcollide));
}