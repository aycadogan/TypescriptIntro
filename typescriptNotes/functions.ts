function topla(x:number,y:number) :number{
    return x+y;
}

let topla2 = function(x:number,y:number=4):number{
    return x+y
}

console.log(topla(2,3));
//default deger =4 yaptik
console.log(topla2(2));

let topla3 = function(x:number,y?:number){
    if(y){
        return x+y
    }
    return x
}

console.log(topla3(3.2));

//Rest Parameters
//Ayni tipte alacaginiz parametre sayisi belli degilse rest parametrelerinden yararlaniyosun

function invite(firstPerson:string,...others:string[]):string{
    return firstPerson+ others.join(' ')

}

console.log(invite('ayca',' otherPerson',' somePerson'));

function invite2(...others:string[]):string{
    return others.join(' ')
}

console.log(invite2('a','b','c','d'));
