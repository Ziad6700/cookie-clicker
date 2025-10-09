class ui{
    counter = 0;

    add(amount){
        this.counter += amount;
        document.getElementById("counter").textContent = this.counter;
    }
}

let cookieTotal = new ui();

class Clicker{
    cps = 1;

    constructor () {
        // this.cookieClicker = cookieClicker;
    }

    plusCookies(){
        // cookieTotal += this.cps;
        cookieTotal.add(this.cps);
        // console.log(cookieTotal);
        // document.getElementById("counter").textContent = cookieTotal;
    }
    
}

class Upgrades{  
    $upgradeAmount = 2;
    constructor (cookiePerSecond, price) {
        // this.cookiePerSecond = cookiePerSecond;
        this.price = price;
    }

    dfghj(){

        if (cookieTotal.counter >= this.price) {
            // cookieClicker1.cps += 2;
            cookieTotal.add(-this.price);
            this.price = Math.floor(this.price * 1.5);
            cookieClicker1.cps += Math.floor(this.$upgradeAmount);
            this.$upgradeAmount = this.$upgradeAmount * 1.2;

            //  document.getElementById("counter").textContent = cookieTotal;
             document.getElementById("priceClicker").textContent = "clicker:" + this.price;
        } else {
            console.log ("niet genoeg cookies");
        }
    }
}

class AutoGenerater{
    cps;
    amount = 0;
    price;

    constructor(cps, price){
        this.cps = cps;
        this.price = price;
        setInterval(() => this.generate(), 1000);
    }

    buy(){
        //prirc check
        //amount++
        if (cookieTotal.counter >= this.price) { 
            this.amount += 1;
            cookieTotal.add(-this.price);
            this.price = Math.floor(this.price * 1.5);
                  document.getElementById("grandma").textContent = "grandma: " + grandma.price  + " amount: " + grandma.amount;

                    document.getElementById("factory").textContent = "factory:" + factory.price;

                    document.getElementById("mines").textContent = "mines:" + mines.price;

                    document.getElementById("farms").textContent = "farms:" + farms.price;

                    document.getElementById("bank").textContent = "bank:" + bank.price;

                    document.getElementById("temple").textContent = "temple:" + temple.price;

                    document.getElementById("wizzardTower").textContent = "wizzard tower:" + wizzardTower.price;
                    
                    document.getElementById("shipment").textContent = "shipment:" + shipment.price;
    } else {
        console.log("niet genoeg");
    }
}

    generate() {
        cookieTotal.add(this.cps * this.amount);
        // document.getElementById("counter").textContent = cookieTotal;
    }
}

let cookieClicker1 = new Clicker();
// cookieClicker1.plusCookies();

let upgrade1 = new Upgrades(2, 5);


let grandma = new AutoGenerater(3, 5);


let factory = new AutoGenerater(10, 20);


let mines = new AutoGenerater(20, 60);


let farms = new AutoGenerater(50, 100);


let bank = new AutoGenerater(80, 150);


let temple = new AutoGenerater(150, 500);


let wizzardTower = new AutoGenerater(400, 1200);


let shipment = new AutoGenerater(750, 2000);




