// Class'lar hem ozellikleri hemde icerisinde operasyonlari yapilacak isleri barindiran yapilar -> nesne

class Ev{
    private _odaSayisi:number;
    _pencereSayisi:number;
    _kat:number;

    constructor(odaSayisi:number,pencereSayisi:number,kat:number){
        this._odaSayisi = odaSayisi;
        this._pencereSayisi = pencereSayisi;
        this._kat = kat
    }

    yemekYe(){
        console.log('yemek yiyildi');
    }
}

let ev = new Ev(3,4,5)

ev.yemekYe()
console.log(ev._kat);

class Kisi{
    private _firstName:string ='';

    get isim():string{
        return "Sayin : " + this._firstName
    }
    set isim(ad:string){
        this._firstName = ad
    }
    kaydet(){
        console.log('Kisi kaydedildi');
        
    }
}

class Musteri2 extends Kisi{
    satisYap(){
        
        console.log('satis yapildi');
        
    }
}

class Personel extends Kisi{
    maasOde(){
        console.log('maas odendi');
        
    }
}

let customer = new Musteri2()
customer.isim = 'ayca'
console.log(customer.isim);
customer.kaydet()
customer.satisYap()

let personel = new Personel()
personel.kaydet()
personel.maasOde()

