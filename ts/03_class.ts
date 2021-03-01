class Person{
  name: string = "garfield";
  static age: number = 18;
  readonly sex: number = 1;
}
const per = new Person();
console.log(Person.age);
console.log(per.name);

