// Veri Tipleri Number-String-Boolean-Array-Tuple-Enum
let sayi:number = 12;
sayi = 10;
sayi = 10.4;

let sehir : string = 'Adana';
sehir = 'Istanbul'
sehir = 'Ankara'

let dogruMu : boolean = true;
dogruMu = false;
dogruMu = true;

let sayilar:number[] = [1,2,3]
let sayilar2: Array<number> = [1,2,3]

let dizi:[number,string] = [2,'Ankara']
// dizi[0]
// dizi[1]

//enum magic stgringlerden kurtulmak icin kullanilir
enum Renk {Kirmizi=1, Siyah, Mavi}
let renk ; Renk = Renk.Kirmizi

// Veri Tipleri Any-Void-Null-Undefined

// Any -> Bize gelecek olan datanin veri tipinden emin olmadigimiz zaman kullaniriz
let deger: any = "Ankara"
deger = 2
deger = {}

let deger2: void = undefined

//void tanimlarsan return edemezsin
function greeting() :void{
    console.log('Hola');
    
}

//undefined ve null 
let yas : number;
//number'i atamasaydin undefined
yas = 10

//null referans tiplerde kullanilir yani sen onun referansini olusturmadin

class Musteri {

}

