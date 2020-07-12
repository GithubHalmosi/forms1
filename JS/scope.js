// Global scope
var globalName="Joe"

function something(){
    var globalName="Jack";
    console.log(globalName);
}

something();
console.log(globalName);

let name="Sanyi";
{
    name="Pisti"; //nincs let, vagy var, így felülírja a korábbi változót
    console.log(name); 
}
console.log(name); 

const NAME2 = "Anna";
{
    const NAME2 = "Juli"; //nincs let, vagy var, így felülírja a korábbi változót
    console.log(NAME2);
}
console.log(NAME2); 