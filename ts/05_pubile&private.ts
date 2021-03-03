class Person{
  private _name: string;
  private _age: number;

  constructor(name:string, age:number){
    this._name = name;
    this._age = age;
  }

  get name(){
    return this._name;
  }
  set name(name:string){
    this._name = name;
  }

  get age(){
    return this._age;
  }
  set age(age: number){
    if(age>0){
      this._age = age;
    }
  }

}

const per = new Person("gar",18)
console.log(per.name);
console.log(per.age);

per.name = "field"
per.age = 17
