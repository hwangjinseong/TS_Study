// 기본타입
let count = 0; // 숫자
count += 1;
// count = '갑자기 분위기 문자열'; // 이러면 에러가 납니다!

const message: string = 'hello world'; // 문자열

const done: boolean = true; // 불리언 값

const numbers: number[] = [1, 2, 3]; // 숫자 배열
const messages: string[] = ['hello', 'world']; // 문자열 배열

// messages.push(1); // 숫자 넣으려고 하면.. 안된다!

let mightBeUndefined: string | undefined = undefined; // string 일수도 있고 undefined 일수도 있음
let nullableNumber: number | null = null; // number 일수도 있고 null 일수도 있음

let color: 'red' | 'orange' | 'yellow' = 'red'; // red, orange, yellow 중 하나임
color = 'yellow';
// color = 'green'; // 에러 발생!


// 함수에서 타입 정의하기
function sum(x: number, y: number): number {
    return x + y;
}
sum(1, 2);

function sumArray(numbers: number[]): number {
    return numbers.reduce((acc, current) => acc + current, 0);
}

const total = sumArray([1, 2, 3, 4, 5]);

// 함수에서 만약 아무것도 반환하지 않아야 한다면 이를 반환 타입을 void 로 설정하면 됩니다.
function returnNothing(): void {
  console.log('I am just saying hello world');
}


// interface는 클래스 또는 객체를 위한 타입을 지정 할 때 사용되는 문법입니다.
// Shape 라는 interface 를 선언합니다.
interface Shape {
    getArea(): number; // Shape interface 에는 getArea 라는 함수가 꼭 있어야 하며 해당 함수의 반환값은 숫자입니다.
  }
  
  class Circle implements Shape {
    // `implements` 키워드를 사용하여 해당 클래스가 Shape interface 의 조건을 충족하겠다는 것을 명시합니다.
    constructor(public radius: number) {
      this.radius = radius;
    }
  
    // 너비를 가져오는 함수를 구현합니다.
    getArea() {
      return this.radius * this.radius * Math.PI;
    }
  }
  
  class Rectangle implements Shape {
    constructor(private width: number, private height: number) {
      this.width = width;
      this.height = height;
    }
    getArea() {
      return this.width * this.height;
    }
  }
  
  const circle = new Circle(5);
  const rectangle = new Rectangle(10, 5);
  
  console.log(circle.radius);
  console.log(rectangle.width); //오류
  // public으로 선언된 값은 클래스 외부에서 조회 할 수 있으며 private으로 선언된 값은 클래스 내부에서만 조회 할 수 있습니다. 
  // 따라서 위 코드에서는 circle 의 radius 값은 클래스 외부에서 조회 할 수 있지만, rectangle 의 width 또는 height 값은 클래스 외부에서 조회 할 수 없습니다.
  
  const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];
  
  shapes.forEach(shape => {
    console.log(shape.getArea());
  });


// 일반 객체를 interface 로 타입 설정하기
interface Person {
    name: string;
    age?: number;  // 물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 되는 값이라는 것을 의미합니다.
}

interface Developer {
    name: string;
    age?: number;
    skills: string[];
}

const person: Person = {
    name: '황진성',
    age: 18
};

const expert: Developer = {
    name: '황개발',
    skills: ['javascript', 'react']
};
// 지금 보면 Person 과 Developer 가 형태가 유사하다
// 이럴 땐 interface 를 선언 할 때 다른 interface 를 extends 키워드를 사용해서 상속받을 수 있습니다.
const people: Person[] = [person, expert];


