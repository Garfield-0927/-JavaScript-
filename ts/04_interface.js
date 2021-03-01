// interface myInterface{
//   name: string;
//   age: number;
//   sex: number;
//   birth ?: string;
var Dog = /** @class */ (function () {
    function Dog(name, age, sex, birth) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        if (birth)
            this.birth = birth;
    }
    Dog.prototype.bark = function () {
        console.log("wangwangwang!!");
    };
    return Dog;
}());
var dog = new Dog("sangchen", 21, 0);
console.log(dog.name + " " + dog.age);
dog.bark();
