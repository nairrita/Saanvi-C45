class Player{
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h

        this.image = loadImage("images/bucket.png")
    }

    display(){
       
        this.x = mouseX;
        imageMode(CENTER)
        image(this.image,this.x,this.y,this.w,this.h)
    }
}