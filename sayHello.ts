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

console.log(cc)

class PointClass {
    x: number = 0
    y: number = 0

    constructor(_x: number=0, _y:number=0){
        this.x = _x
        this.y = _y
    }

    printPoint(): void {
        console.log("x = " + this.x + " ,y = " + this.y)
    }
}

const aa: PointClass = new PointClass(421,532)

aa.printPoint()

class Point3D extends PointClass {
    z: number = 0

    constructor(_x: number = 0, _y:number = 0, _z: number = 0){
        super(_x,_y)
        this.z = _z
    }

    print3Dpoint(): void {
        console.log("x = " + this.x + " , y = " + this.y + ", z = " + this.z)
    }
}

const bb3d = new Point3D(123,421,41)

bb3d.print3Dpoint()

const DirectionJs = {
    'Up': 0,
    'right': 1,
    'down': 2,
    'left': 3
}

enum Direction {
    Up = 'Up',
    right = 'Right',
    down = 'Down',
    lef = 'Left'
}

let dirctionEnum = Direction.right

console.log(dirctionEnum)

class Queue<T> {
    private array: T[] = []

    push(item :T){
        this.array.push(item)
    }

    pop(): T | undefined {
        return this.array.shift()
    }
}

let dd = new Queue<number>()

dd.push(43252)
dd.push(546)
dd.push(43)
dd.push(5)
dd.push(252)
dd.push(54)

let str = dd.pop()
console.log(str)

