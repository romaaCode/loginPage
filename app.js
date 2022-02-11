//function classique

const perso = function(nom){
    console.log("je m'appelle " + nom);
}

perso("romaric")

// function moderne

const person2 = nom => console.log('mon nom de famille ' + nom)
person2("Zaddy");


const dateDeNaissance = function(number1,number2){
    return number2- number1; 
}
console.log('tu as ou tu vas avoir : '+ dateDeNaissance(2002,2020));

const dateDeNaissance2 = (number1, number2) => number2- number1;
console.log('la difference : '+ dateDeNaissance2(2002,2022));

//function sans argument

const fucArsg = function(){
    let a = 5;
    let b = 12;
    let result = a + b ;
    return 'le score est : ' + result ;
}
console.log(fucArsg ());
//function sans argument //

const fucArsg2 = () =>{
    let a = 5;
    let b = 12;
    let result = a + b ;
    return 'le score est : ' + result ;
}
console.log(fucArsg2 ());

//function classique sans argument

const simple = function () {
    return false
}

console.log(simple());

//clasique 

const car = {
      model : "fiesta",
      manuFacture : "ford",
      fullName : function(){
       return ` ${this.manuFacture} ${this.model} ` ;
    }
}
console.log(car.fullName());
//moderne 

const car2 = {
    model :"BMW",
    manuFacture :"M3",
    fullName : function(){
        return ` ${this.model} ${this.manuFacture} `
    }  
};
console.log(car2.fullName());


