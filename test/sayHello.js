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
    Direction["Up"] = "Up";
    Direction["right"] = "Right";
    Direction["down"] = "Down";
    Direction["lef"] = "Left";
})(Direction || (Direction = {}));
let dirctionEnum = Direction.right;
console.log(dirctionEnum);
class Queue {
    constructor() {
        this.array = [];
    }
    push(item) {
        this.array.push(item);
    }
    pop() {
        return this.array.shift();
    }
}
let dd = new Queue();
dd.push(43252);
dd.push(546);
dd.push(43);
dd.push(5);
dd.push(252);
dd.push(54);
let strnum = dd.pop();
console.log(strnum);
let ee = new Queue();
ee.push('aa');
ee.push('aa34');
ee.push('aa643');
ee.push('aa58');
ee.push('a124a6');
let str14 = ee.pop();
console.log(str14);
const ff = {
    id: '4234',
    name: '#5few'
};
const gg = {
    name: '43243',
    email: 't4t',
    phone: 4432
};
console.log(ff.id + "\t" + gg.name);
//# sourceMappingURL=sayHello.js.map