let cookieTotal = 0;

class clicker{
    cps = 1;

    constructor () {
        // this.cookieClicker = cookieClicker;
    }

    plusCookies(){
        cookieTotal += this.cps;
        console.log(cookieTotal);
        document.getElementById("counter").textContent = cookieTotal;
    }
    
}

class upgrades{  
   
    constructor (cookiePerSecond, price) {
        this.cookiePerSecond = cookiePerSecond;
        this.price = price;
    }

    dfghj(){

        if (cookieTotal >= this.price) {
            cookieClicker1.cps += 2;
            cookieTotal -= this.price;
            this.price = Math.floor(this.price * 1.5);
            cookieClicker1.cps = Math.floor(cookieClicker1.cps * 1.2);

             document.getElementById("counter").textContent = cookieTotal;
             document.getElementById("priceClicker").textContent = "price:" + this.price;
        } else {
            console.log ("niet genoeg cookies");
        }
    }
}

let cookieClicker1 = new clicker();
cookieClicker1.plusCookies();

let upgrade1 = new upgrades(2, 5);

upgrade1.dfghj();
