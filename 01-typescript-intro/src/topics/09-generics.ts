export function whatsMyType<T>(argument: T): T{

    return argument
}

let amIString = whatsMyType<string>('khjksj');
let amINumber = whatsMyType<number>(100);
let amIArray = whatsMyType<number[]>([1,2,3]);

console.log(amIString);
console.log(amINumber);
console.log(amIArray);