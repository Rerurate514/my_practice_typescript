interface Point {
    x: number;
    y?: number;
}

type Label = {
    [key: string] : string
}

const labels: Label = {
    toptitle: "4242",
    topFeature: "32424",
    topSubTitle: "23rfessrfer"
}

class MyPonit implements Point {
    x: number = 0;
}

let originP : Point = {x:43,y:53}

const arr : string[] = ['adwafa','thfh','y54','bdx 5yer',':@p:p@pp'];

arr.forEach((name) => {
    console.log(name)
    console.log(originP)
})

interface ColorFul {
    color: string;
}

interface Circle {
    radius: number;
}

interface ColorFulCircle extends ColorFul, Circle {}

const cc: ColorFulCircle = {
    color: 'red',
    radius: 10
}

console.log(cc);

class PointClass {
    x: number = 0;
    y: number = 0;

    constructor(_x: number=0, _y:number=0){
        this.x = _x;
        this.y = _y;
    }

    printPoint(): void {
        console.log("x = " + this.x + " ,y = " + this.y);
    }
}

const aa: PointClass = new PointClass(421,532);

aa.printPoint()