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
   
    constructor (cookiePerSecond) {
        cookiePerSecond
    }

    dfghj(){

        if (cookieTotal >= 5) {
            cookieClicker1.cps += 2;
            cookieTotal -= 5;
             document.getElementById("counter").textContent = cookieTotal;
        } else {
            console.log ("niet genoeg cookies");
        }
    }
}

let cookieClicker1 = new clicker();
cookieClicker1.plusCookies();

let yupgrade1 = new upgrades();
yupgrade1.cookiePerSecond = 2;
yupgrade1.dfghj();