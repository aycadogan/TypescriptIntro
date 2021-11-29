function valueOfNumber(x:number):number{
    return x
}

function valueOfNumber2(x:string):string{
    return x
}

let numero = valueOfNumber(10)
console.log(numero);

let str = valueOfNumber2('tr')
console.log(str);

function valueOfNumber3<T>(x:T):T{
    return x
}

let smt = valueOfNumber3<number>(2)
let smt2 = valueOfNumber3<string>('lo se')

console.log(smt);
console.log(smt2);

class GenericClass<T> {
    degisken: T;
    fonksiyon(parametre:T):T {
        return parametre
    }
}

let sinif = new GenericClass<string>()
sinif.fonksiyon('xyz')