class people{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }

    greeting()
    {
        console.log(`My Name is ${this.name} and I'm ${this.age} years old`);
    }
}

module.exports=people;