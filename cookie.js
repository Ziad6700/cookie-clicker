let cookieTotal = 0;

class clicker{
    // cookieClicker;

    constructor () {
        // this.cookieClicker = cookieClicker;
    }

    plusCookies(){
        cookieTotal += 1;
        console.log(cookieTotal);
        document.getElementById("counter").textContent = cookieTotal;
    }
    
}

class upgrades{
    cookiePerSecond;
    
}

let cookieClicker1 = new clicker();
cookieClicker1.plusCookies();
