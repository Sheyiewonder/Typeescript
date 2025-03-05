let id: number = 5

let company: string = 'Executive Holdings'

let isPublished: boolean = true
let x: any = 'Hello'

let age: number

let ids: number[] = [1, 2, 3]

let arr: any[] = [1, false, 'hello']

let person: [number, boolean] 

person = [2, true]

let employees: [number, string, boolean][]

employees = [
[1, 'Sola', true],
[2, 'Taiye', false],
[25, 'Titilope', false]
]

let pid: string | number
pid = '22'

enum Direction1{
    Up = 1,
    Down,
    Left,
    Right
}

enum Direction2{
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

age = 35

type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'John'
}

// Type Assertion
let cid: any = 1
let customerId = cid as string
customerId = '32'

function addNum(x: number, y: number): number{
    return  x + y

}

// console.log(addNum(1, 5).toString())

function log(message: string | number): void {
    console.log(message)
}

// log(6)

// Interfaces

interface UserInterface {
    readonly id: number
    name: string
    age?: number
}

const user1: UserInterface = {
    id: 1,
    name: 'John',
    age: 35
}

const user5: UserInterface = {
    id: 13,
    age: 15,
    name: 'Ogidan'
}

// console.log(user5)

interface MathFunc {
    (x: number, y:number): number
}

const add: MathFunc = (x: number, y:number): number => x + y
const subtract: MathFunc = (x: number, y:number): number => x - y

// console.log(add(3, 7))
// console.log(subtract(3, 7))

interface PersonInterface {
    id: number
    name: string
    register(): string 
}

class Person implements PersonInterface{
    id: number
    name: string


    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register (){
        return (this.name + ' is now registered')
    }

}

const brad = new Person(1, 'Bradd Pitt')
const peter = new Person (2, 'Peter Pan')

console.log(brad, "\n", peter)

console.log(brad.register())

// subclasses
class Employee extends Person {
    position: string
    
    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position

    //     if (this.gender == true) {
    //         z = "male"
    //     } else {
    //         z = "female"
    //     }

    // return z
    }
   

}

const emp = new Employee (3, "Baba Rahman", "Dev")

// console.log(emp.register())

// Generics

function getArray<T>(items: T[]): T[]{
    return new Array().concat(items)

}

let numArray= getArray<number>([1,2,3,4])
let strArray = getArray<string>(['brad', 'John', 'Jill'])

strArray.push(git push origin master
)