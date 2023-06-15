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