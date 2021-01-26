interface Beauty{
  name: string;
  age: number;
  bust ?: number;   // bust 是可选值
}

let beauty = {
  name: "Rach",
  age: 18,
  bust: 21,
}

let getbeauty = (beauty:Beauty)=>{
  console.log(beauty.name + " is a beauty");
  console.log(beauty.name + " is " + beauty.age + " years old ");
  beauty.bust&&console.log(beauty.name+"'s bust is:" + beauty.bust);
}

getbeauty(beauty)