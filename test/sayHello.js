"use strict";
const labels = {
    toptitle: "4242",
    topFeature: "32424",
    topSubTitle: "23rfessrfer"
};
class MyPonit {
    constructor() {
        this.x = 0;
    }
}
let originP = { x: 43, y: 53 };
const arr = ['adwafa', 'thfh', 'y54', 'bdx 5yer', ':@p:p@pp'];
arr.forEach((name) => {
    console.log(name);
    console.log(originP);
});
const cc = {
    color: 'red',
    radius: 10
};
console.log(cc);
class PointClass {
    constructor(_x = 0, _y = 0) {
        this.x = 0;
        this.y = 0;
        this.x = _x;
        this.y = _y;
    }
    printPoint() {
        console.log("x = " + this.x + " ,y = " + this.y);
    }
}
const aa = new PointClass(421, 532);
aa.printPoint();
class Point3D extends PointClass {
    constructor(_x = 0, _y = 0, _z = 0) {
        super(_x, _y);
        this.z = 0;
        this.z = _z;
    }
    print3Dpoint() {
        console.log("x = " + this.x + " , y = " + this.y + ", z = " + this.z);
    }
}
const bb3d = new Point3D(123, 421, 41);
bb3d.print3Dpoint();
const DirectionJs = {
    'Up': 0,
    'right': 1,
    'down': 2,
    'left': 3
};
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["right"] = 1] = "right";
    Direction[Direction["down"] = 2] = "down";
    Direction[Direction["left"] = 3] = "left";
})(Direction || (Direction = {}));
let dirctionEnum = Direction.right;
console.log(dirctionEnum);
//# sourceMappingURL=sayHello.js.map