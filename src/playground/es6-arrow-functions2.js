const mulitiplier={
    numbers:[],
    multiplayBy:1,
    multiply(){
        return this.numbers.map((number)=>number*this.multiplayBy);
    }
}
mulitiplier.numbers=[1,2,3];
mulitiplier.multiplayBy=2;
console.log(mulitiplier.multiply());