interface Product{
    id:number;
    name:string;
    unitPrice:number;


}

class Product2{
    id:number = 0;
    name:string = '';
    unitPrice:number = 0;
}

function save(product:Product){
    console.log(product.name + ' kaydedildi!');
    
}

function save2(product:Product2){
    console.log(product.name + ' kaydedildi!');
    
}


save({id:1,name:'Laptop',unitPrice: 10})

let mouse = new Product2()
mouse.name = 'magic mouse'

save2(mouse);
 

interface PersonService{
    save();
}

class CustomerService implements PersonService {
    save() {
        console.log();
        
    }
    
}