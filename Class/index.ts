class Vehicle{
    protected drive():void {
        console.log('VINNN');
        
    }

    protected honk(): void{
        console.log('Dut');
        
    }

}

class Train extends Vehicle{

    // public wheels: number;
    // public color: string;

    constructor(public wheels: number, public color:string){
        super()
        this.wheels = wheels
        this.color = color
    }

    honk(): void{
        console.log('cuf cuf');
        
    }

}

const train = new Train(9,'red')
train.honk()
console.log(train.wheels, train.color);


