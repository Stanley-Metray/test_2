// Javascript is a prototype based language that helps us to acquire the properties and methods from one another
console.clear();

function Person(name)
{
    this.name=name;
}


Person.prototype.print = function(){
    console.log(this.name, Person.prototype.lastName);
}

Person.prototype.lastName = "Metray";

let p1 = new Person("Stanley");
p1.print();