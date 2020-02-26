class Person{
    constructor(name = 'Anonymous',age = 0){
        this.name = name;
        this.age = age;
    }
    getGretting(){
        return `hi my name is ${this.name}`;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old`;
    }

}
class Travller extends Person{
    constructor(name,age,homeLocation){
        super(name,age);
        this.homeLocation = homeLocation;
    }
    getGretting(){
        if(!this.homeLocation)return super.getGretting();
        const greeting = super.getGretting();
        return `${greeting}.i visiting from ${this.homeLocation}`;
    }
}
const travller = new Travller("tomer",23,"tirat carmel")
const travller2 = new Travller("moshe",22);
console.log(travller.getGretting());
console.log(travller2.getGretting());