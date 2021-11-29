abstract class KrediBase{
    constructor(){

    }
    kaydet():void{
        console.log('Kaydedildi');
    }

    abstract hesapla():void;
}

class TuketiciKredi extends KrediBase{
    hesapla(): void {
       console.log('tuketici kredisine gore hesap yapildi');
       
    }
    constructor(){
        super()
    }
}

class MortgageKredi extends KrediBase{
    hesapla(): void {
       console.log('konut kredisine gore hesap yapildi');
       
    }
    constructor(){
        super()
    }
}

let tuketiciKredisi = new TuketiciKredi()
tuketiciKredisi.hesapla()
tuketiciKredisi.kaydet()

let mortgageKredisi = new MortgageKredi()
mortgageKredisi.hesapla()
mortgageKredisi.kaydet()

let kredi : KrediBase
kredi = new TuketiciKredi()
kredi = new MortgageKredi()