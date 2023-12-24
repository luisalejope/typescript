export class Person {
    // public name: string;
    // private address: string;

    constructor(
        public name: string,
        private address: string = 'No Address'
    ) {
        // this.name = name;
        // this.address = address
    }
}

export class Hero {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ){
    
    }
}

const person = new Person('Tony')

const ironMan = new Hero('Ironman', 45, 'tony', person);

console.log(ironMan);