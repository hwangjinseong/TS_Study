let age:number = 18; // number
let isAdult:boolean = false; //boolean
let a:number[] = [1, 2, 3]; // array(number)
let a2:Array<number> = [1, 2, 3]; // array(number)
let week1:string[] = ["mon", "tue", "wed"]; // array(string)
let week2:Array<string> = ["mon", "tue", "wed"]; //array(string)


//튜플(Tuple)
let b: [string, number];

b = ["z", 1];
// b = [1, "w"]; 오류

b[0].toLowerCase();
// b[1].toLowerCase(); 오류 


// void: return하지 않음
function sayHello(): void {
    console.log('hello');
}


// never : 에러나를 반환하거나 무한 코드 일떄 사용
function showError():never {
    throw new Error();
}

function inloop() {
    while(true) {
        
    }
}


// enum : 비슷한 값들 끼리 묶는다.
enum Os {
    Window = 'win',  // = 3
    Ios = 'ios',     // = 10
    Android = 'and'  // = 11
} // 값을 넣을 수 있다.
console.log(Os[10]); // = Ios
console.log(Os['Ios']); // = 10

let myOs: Os;
myOs = Os.Window


// null, undefined
let a:null = null;
let b:undefined = undefined;


