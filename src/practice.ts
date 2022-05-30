// 기본타입
let count = 0; // 숫자
count += 1;
// count = '갑자기 분위기 문자열'; // 이러면 에러가 납니다!

const message: string = 'hello world'; // 문자열

const done: boolean = true; // 불리언 값

const numbers: number[] = [1, 2, 3]; // 숫자 배열
const messages: string[] = ['hello', 'world']; // 문자열 배열

// messages.push(1); // 숫자 넣으려고 하면.. 안된다!

// let mightBeUndefined: string | undefined = undefined; // string 일수도 있고 undefined 일수도 있음
// let nullableNumber: number | null = null; // number 일수도 있고 null 일수도 있음

// let color: 'red' | 'orange' | 'yellow' = 'red'; // red, orange, yellow 중 하나임
// color = 'yellow';
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
  // console.log(rectangle.width); //오류
  // public으로 선언된 값은 클래스 외부에서 조회 할 수 있으며 private으로 선언된 값은 클래스 내부에서만 조회 할 수 있습니다. 
  // 따라서 위 코드에서는 circle 의 radius 값은 클래스 외부에서 조회 할 수 있지만, rectangle 의 width 또는 height 값은 클래스 외부에서 조회 할 수 없습니다.
  
  const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];
  
  shapes.forEach(shape => {
    console.log(shape.getArea());
  });


// 일반 객체를 interface 로 타입 설정하기
// interface Person {
//     name: string;
//     age?: number;  // 물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 되는 값이라는 것을 의미합니다.
// }

// interface Developer {
//     name: string;
//     age?: number;
//     skills: string[];
// }

// const person: Person = {
//     name: '황진성',
//     age: 18
// };

// const expert: Developer = {
//     name: '황개발',
//     skills: ['javascript', 'react']
// };
// // 지금 보면 Person 과 Developer 가 형태가 유사하다
// // 이럴 땐 interface 를 선언 할 때 다른 interface 를 extends 키워드를 사용해서 상속받을 수 있습니다.
// const people: Person[] = [person, expert];


// Type Alias 사용하기
// type 은 특정 타입에 별칭을 붙이는 용도로 사용합니다. 이를 사용하여 객체를 위한 타입을 설정할 수도 있고, 배열, 또는 그 어떤 타입이던 별칭을 지어줄 수 있습니다.

type Person = {
  name: string;
  age?: number; // 물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 되는 값이라는 것을 의미합니다.
};

// & 는 Intersection 으로서 두개 이상의 타입들을 합쳐줍니다.
type Developer = Person & {
  skills: string[];
};

const person: Person = {
  name: '황진성'
};

const expert: Developer = {
  name: '황개발',
  skills: ['javascript', 'react']
};

type People = Person[]; // Person[] 를 이제 앞으로 People 이라는 타입으로 사용 할 수 있습니다.
const people: People = [person, expert];

type Color = 'red' | 'orange' | 'yellow';
const color: Color = 'red';
const colors: Color[] = ['red', 'orange'];
// 우리가 이번에 type 과 interface 를 배웠는데, 어떤 용도로 사용을 해야 할까요? 클래스와 관련된 타입의 경우엔 interface 를 사용하는게 좋고, 
// 일반 객체의 타입의 경우엔 그냥 type을 사용해도 무방합니다. 
// 사실 객체를 위한 타입을 정의할때 무엇이든 써도 상관 없는데 일관성 있게만 쓰시면 됩니다.


// Generics
// 제너릭(Generics)은 타입스크립트에서 함수, 클래스, interface, type alias 를 사용하게 될 때 여러 종류의 타입에 대하여 호환을 맞춰야 하는 상황에서 사용하는 문법입니다.

// 함수에서 Generics 사용하기
// 예를 들어서 우리가 객체 A 와 객체 B 를 합쳐주는 merge 라는 함수를 만든다고 가정해봅시다. 
// 그런 상황에서는 A 와 B 가 어떤 타입이 올 지 모르기 떄문에 이런 상황에서는 any 라는 타입을 쓸 수도 있습니다.
function merge(a: any, b: any): any {
  return {
    ...a,
    ...b
  };
}

const merged = merge({ foo: 1 }, { bar: 1 });

// 그런데, 이렇게 하면 타입 유추가 모두 깨진거나 다름이 없습니다. 결과가 any 라는 것은 즉 merged 안에 무엇이 있는지 알 수 없다는 것 입니다.
// 이런 상황에 Generics 를 사용하면 됩니다. Generics 는 다음과 같이 사용합니다.
function merge2<A, B>(a: A, b: B): A & B {
  return {
    ...a,
    ...b
  };
}

const merged2 = merge({ foo: 1 }, { bar: 1 });

// interface 에서 Generics 사용하기
interface Items<T> {
  list: T[];
}

const items: Items<string> = {
  list: ['a', 'b', 'c']
};

// type 에서 Generics 사용하기
type Items2<T> = {
  list: T[];
};

const item2: Items<string> = {
  list: ['a', 'b', 'c']
};