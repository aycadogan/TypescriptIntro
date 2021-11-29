// Class'lar hem ozellikleri hemde icerisinde operasyonlari yapilacak isleri barindiran yapilar -> nesne
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Ev = /** @class */ (function () {
    function Ev(odaSayisi, pencereSayisi, kat) {
        this._odaSayisi = odaSayisi;
        this._pencereSayisi = pencereSayisi;
        this._kat = kat;
    }
    Ev.prototype.yemekYe = function () {
        console.log('yemek yiyildi');
    };
    return Ev;
}());
var ev = new Ev(3, 4, 5);
ev.yemekYe();
console.log(ev._kat);
var Kisi = /** @class */ (function () {
    function Kisi() {
        this._isim = '';
    }
    Object.defineProperty(Kisi.prototype, "isim", {
        get: function () {
            return "Sayin : " + this._isim;
        },
        set: function (ad) {
            this._isim = ad;
        },
        enumerable: false,
        configurable: true
    });
    Kisi.prototype.kaydet = function () {
        console.log('Kisi kaydedildi');
    };
    return Kisi;
}());
var Musteri2 = /** @class */ (function (_super) {
    __extends(Musteri2, _super);
    function Musteri2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Musteri2.prototype.satisYap = function () {
        console.log('satis yapildi');
    };
    return Musteri2;
}(Kisi));
var Personel = /** @class */ (function (_super) {
    __extends(Personel, _super);
    function Personel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Personel.prototype.maasOde = function () {
        console.log('maas odendi');
    };
    return Personel;
}(Kisi));
var customer = new Musteri2();
customer.isim = 'ayca';
console.log(customer.isim);
customer.kaydet();
customer.satisYap();
var personel = new Personel();
personel.kaydet();
personel.maasOde();
