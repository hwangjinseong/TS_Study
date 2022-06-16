type Score = 'A' | 'B' | 'C' | 'D';

interface User {
    name: string;
    age: number;
    gender?: string;
    birthYear: number;
    [grade:number] : string;
}

let user : User = {
    name : "mm",
    age : 18,
    birthYear : 2000,
    1 : 'A',
    2 : 'B'
}

user.age = 10;
user.gender = "male"
user.birthYear = 2000;

console.log(user.age)

//
interface Add {
    (num1:number, num2:number):number;
}

const add : Add = function(x, y) {
    return x + y;
}
add(10, 20);

interface isAdult {
    (age:number):boolean;
}

const ag:isAdult = (age) => {
    return age > 19;
}
ag(30);


// implements
// 인터페이스로 클래스를 정의
interface Car {
    color: string;
    wheels: number;
    start(): void;
}

// extend로 Bmw형식을 Benz에게 줄수 있다.
interface Benz extends Car {
    door: number;
    stop(): void;
}

// const benz : Benz = {
//     door: 5,
//     stop() {
//         console.log('stop');
//     },
//     color: 'black',
//     wheels: 4,
//     start() {
//         console.log()
//     }
// }

class Bmw implements Car {
    color;
    wheels = 4;

    constructor(c:string) {
        this.color = c;
    }

    start() {
        console.log('go')
    }
}

const bm = new Bmw('green');
console.log(bm)
bm.start()

// interface car {
//     color: string;
//     wheels: number;
//     start(): void;
// }

interface Toy {
    name: string;
}

interface ToyCar extends Car, Toy {
    price: number;
}