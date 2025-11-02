class ui {
    counter = 0;

    unlocked100Cookies = false;

    unlocked5Grandma = false;

    unlocked5Factory = false;

    unlocked5Mines = false;

    unlocked5Farms = false;

    unlocked5Bank = false;

    unlocked5Temple = false;

    unlocked5Wizzard = false;

    unlocked5Shipment = false;

    add(amount) {
        this.counter += amount;
        document.getElementById("counter").textContent = this.counter;
        this.checkAchievements();
    }

    updateCPS(){
        const generators = [grandma, factory, mines, farms, bank, temple, wizzardTower, shipment];

        const total = generators.reduce((totalAmount, gens) => totalAmount + ((gens.amount || 0) * (gens.cps || 0)), 0);

        document.getElementById("cookiesPerSecond").textContent = "cps: " + total;
    }

      checkAchievements(){
       
        if (this.counter >= 100) {
            
            document.getElementById("cookieAchievement").style.display = "block";
            document.getElementById("cookieAchievement").style.backgroundColor = "#F5E9D4";
            document.getElementById("cookieAchievement").innerHTML = '<img src=./images/cookieachievement.png alt="cursor" class="w-10 h-8">';
            this.unlocked100Cookies = true; 
        } else if (this.counter < 100) {
             document.getElementById("cookieAchievement").style.display = "none";
        }

         if (grandma.amount >= 5) {
            
            document.getElementById("grandmaAchievement").style.display = "block";
            document.getElementById("grandmaAchievement").style.backgroundColor = "#F5E9D4";
            document.getElementById("grandmaAchievement").innerHTML = '<img src=./images/grandmaachievement.webp alt="cursor" class="w-10 h-8">';
            this.unlocked5Grandma = true; 
        } else if (grandma.amount < 5) {
             document.getElementById("grandmaAchievement").style.display = "none";
        }

         if (factory.amount >= 5) {
            
            document.getElementById("factoryAchievement").style.display = "block";
            document.getElementById("factoryAchievement").style.backgroundColor = "#F5E9D4";
            document.getElementById("factoryAchievement").innerHTML = '<img src=./images/factoryachievement.png alt="cursor" class="w-10 h-8">';
            this.unlocked5Factory = true; 
        } else if (factory.amount < 5) {
             document.getElementById("factoryAchievement").style.display = "none";
        }

        if (mines.amount >= 5) {
            
            document.getElementById("mineAchievement").style.display = "block";
            document.getElementById("mineAchievement").style.backgroundColor = "#F5E9D4";
            document.getElementById("mineAchievement").innerHTML = '<img src=./images/mineachievement.png alt="cursor" class="w-10 h-8">';
            this.unlocked5Mines = true; 
        } else if (mines.amount < 5) {
             document.getElementById("mineAchievement").style.display = "none";
        }

        if (farms.amount >= 5) {
            
            document.getElementById("farmAchievement").style.display = "block";
            document.getElementById("farmAchievement").style.backgroundColor = "#F5E9D4";
            document.getElementById("farmAchievement").innerHTML = '<img src=./images/farmachievement.png alt="cursor" class="w-10 h-8">';
            this.unlocked5Farms = true; 
        } else if (farms.amount < 5) {
             document.getElementById("farmAchievement").style.display = "none";
        }
       
         if (bank.amount >= 5) {
            
            document.getElementById("bankAchievement").style.display = "block";
            document.getElementById("bankAchievement").style.backgroundColor = "#F5E9D4";
            document.getElementById("bankAchievement").innerHTML = '<img src=./images/bankachievement.png alt="cursor" class="w-10 h-8">';
            this.unlocked5Bank = true; 
        } else if (bank.amount < 5) {
             document.getElementById("bankAchievement").style.display = "none";
        }

        if (temple.amount >= 5) {
            
            document.getElementById("templeAchievement").style.display = "block";
            document.getElementById("templeAchievement").style.backgroundColor = "#F5E9D4";
            document.getElementById("templeAchievement").innerHTML = '<img src=./images/templeachievement.png alt="cursor" class="w-10 h-8">';
            this.unlocked5Temple = true; 
        } else if (bank.amount < 5) {
             document.getElementById("templeAchievement").style.display = "none";
        }

        if (wizzardTower.amount >= 5) {
            
            document.getElementById("wizzardAchievement").style.display = "block";
            document.getElementById("wizzardAchievement").style.backgroundColor = "#F5E9D4";
            document.getElementById("wizzardAchievement").innerHTML = '<img src=./images/wizzardachievement.png alt="cursor" class="w-10 h-8">';
            this.unlocked5Wizzard = true; 
        } else if (wizzardTower.amount < 5) {
             document.getElementById("wizzardAchievement").style.display = "none";
        }

        if (shipment.amount >= 5) {
            
            document.getElementById("shipmentAchievement").style.display = "block";
            document.getElementById("shipmentAchievement").style.backgroundColor = "#F5E9D4";
            document.getElementById("shipmentAchievement").innerHTML = '<img src=./images/shipmentachievement.png alt="cursor" class="w-10 h-8">';
            this.unlocked5Shipment = true; 
        } else if (shipment.amount < 5) {
             document.getElementById("shipmentAchievement").style.display = "none";
        }
    }



    buttonText() {
        document.getElementById("priceClicker").innerHTML ='<img src=./images/cursor.png alt="cursor" class="w-8 h-8"> ' + "Clicker: " + clickerUpgrade.price + " amount: " + clickerUpgrade.amount;

        document.getElementById("grandma").innerHTML ='<img src=./images/grandma.png alt="granmda" style="width:2rem; height:2.5rem;"> ' + "grandma: " + grandma.price + " amount: " + grandma.amount;

        document.getElementById("factory").innerHTML ='<img src=./images/factory.webp alt="factory" style="width:2rem; height:2.5rem;"> ' + "factory: " + factory.price + " amount: " + factory.amount;

        document.getElementById("mines").innerHTML ='<img src=./images/mine.png alt="mine" style="width:2rem; height:2.5rem;"> ' + "mines: " + mines.price + " amount: " + mines.amount;

        document.getElementById("farms").innerHTML ='<img src=./images/farm.webp alt="farm" style="width:2rem; height:2.5rem;"> ' + "farms: " + farms.price + " amount: " + farms.amount;

        document.getElementById("bank").innerHTML ='<img src=./images/bank.png alt="bank" style="width:2rem; height:2.5rem;"> ' + "bank: " + bank.price + " amount: " + bank.amount;

        document.getElementById("temple").innerHTML ='<img src=./images/temple.webp alt="temple" style="width:2rem; height:2.5rem;"> ' + "temple: " + temple.price + " amount: " + temple.amount;

        document.getElementById("wizzardTower").innerHTML ='<img src=./images/wizzardtower.webp alt="wizzards" style="width:2.6rem; height:2.5rem;"> ' + "wizzards: " + wizzardTower.price + " amount: " + wizzardTower.amount;

        document.getElementById("shipment").innerHTML ='<img src=./images/ship.webp alt="ship" style="width:2rem; height:2rem;"> ' + "shipment: " + shipment.price + " amount: " + shipment.amount;

        this.showGrandmaUpgrade();

        this.showFactoriesUpgrade();

        this.showMinesUpgrade();

        this.showFarmsUpgrade();

        this.showBankUpgrade();

        this.showTempleUpgrade();

        this.showWizzardTowerUpgrade()

        this.showShipmentUpgrade();
    }

    showGrandmaUpgrade() {

        if (grannyBooster.canGrannyShow()) {
            document.getElementById("priceGrandmaUpgrade").style.display = "block";

            document.getElementById("priceGrandmaUpgrade").style.backgroundColor = "#F5E9D4";

            document.getElementById("priceGrandmaUpgrade").innerHTML = '<img src=./images/lovegranny.webp alt="granny" class="w-9 h-8">';
        } else {

            document.getElementById("priceGrandmaUpgrade").style.display = "none";

        }
    }

    showFactoriesUpgrade() {

        if (factoryBooster.canFactoryShow()) {
            document.getElementById("priceFactoryUpgrade").style.display = "block";

              document.getElementById("priceFactoryUpgrade").style.backgroundColor = "#F5E9D4";

            document.getElementById("priceFactoryUpgrade").innerHTML = '<img src=./images/factorylove.png alt="factory" class="w-9 h-8">';
        } else {

            document.getElementById("priceFactoryUpgrade").style.display = "none";

        }
    }

    showMinesUpgrade() {

        if (mineBooster.canMinesShow()) {
            document.getElementById("priceMineUpgrade").style.display = "block";

            document.getElementById("priceMineUpgrade").style.backgroundColor = "#F5E9D4";

            document.getElementById("priceMineUpgrade").innerHTML = '<img src=./images/minelove.png alt="mine" class="w-9 h-8">';
        } else {

            document.getElementById("priceMineUpgrade").style.display = "none";

        }
    }

    showFarmsUpgrade() {

        if (farmBooster.canFarmShow()) {
            document.getElementById("priceFarmUpgrade").style.display = "block";

            document.getElementById("priceFarmUpgrade").style.backgroundColor = "#F5E9D4";

            document.getElementById("priceFarmUpgrade").innerHTML = '<img src=./images/watercanlove.webp alt="watercan" class="w-9 h-8">';
        } else {

            document.getElementById("priceFarmUpgrade").style.display = "none";

        }
    }

    showBankUpgrade() {

        if (bankBooster.canBankShow()) {
            document.getElementById("priceBankUpgrade").style.display = "block";

            document.getElementById("priceBankUpgrade").style.backgroundColor = "#F5E9D4";

            document.getElementById("priceBankUpgrade").innerHTML = '<img src=./images/moneysack.webp alt="moneysack" class="w-9 h-8">';
        } else {

            document.getElementById("priceBankUpgrade").style.display = "none";

        }
    }

    showTempleUpgrade() {

        if (templeBooster.canTempleShow()) {
            document.getElementById("priceTempleUpgrade").style.display = "block";

            document.getElementById("priceTempleUpgrade").style.backgroundColor = "#F5E9D4";

            document.getElementById("priceTempleUpgrade").innerHTML = '<img src=./images/minetorch.png alt="torch" class="w-9 h-8">';
        } else {

            document.getElementById("priceTempleUpgrade").style.display = "none";

        }
    }

    showWizzardTowerUpgrade() {

        if (wizzardTowerBooster.canWizzardTowerShow()) {
            document.getElementById("priceWizzardTowerUpgrade").style.display = "block";

            document.getElementById("priceWizzardTowerUpgrade").style.backgroundColor = "#F5E9D4";

            document.getElementById("priceWizzardTowerUpgrade").innerHTML = '<img src=./images/wizzard.png alt="wizzard" class="w-9 h-8">';
        } else {

            document.getElementById("priceWizzardTowerUpgrade").style.display = "none";

        }
    }

    showShipmentUpgrade() {

        if (shipmentBooster.canShipmentShow()) {
            document.getElementById("priceShipmentUpgrade").style.display = "block";

            document.getElementById("priceShipmentUpgrade").style.backgroundColor = "#F5E9D4";

            document.getElementById("priceShipmentUpgrade").innerHTML = '<img src=./images/rocketlove.png alt="rocket" class="w-9 h-8">';
        } else {

            document.getElementById("priceShipmentUpgrade").style.display = "none";

        }
    } 
}



let cookieTotal = new ui();

class Clicker {
    cps = 1;

    constructor() {
        // this.cookieClicker = cookieClicker;
    }

    plusCookies() {
        // cookieTotal += this.cps;
        cookieTotal.add(this.cps);
        // console.log(cookieTotal);
        // document.getElementById("counter").textContent = cookieTotal;
    }

}

class ClickUpgrade {
    $upgradeAmount = 2;
    amount = 0;
    constructor(cps, price) {
        // this.cookiePerSecond = cookiePerSecond;
        this.cps = cps;
        this.price = price;
    }

    clickUpgrade() {

        if (cookieTotal.counter >= this.price) {
            // cookieClicker1.cps += 2;
            cookieTotal.add(-this.price);
            this.price = Math.floor(this.price * 1.5);
            cookieClicker1.cps += Math.floor(this.$upgradeAmount);
            this.$upgradeAmount = this.$upgradeAmount * 1.2;
            this.amount += 1;
            cookieTotal.buttonText();

            //  document.getElementById("counter").textContent = cookieTotal;
        } else {
            console.log("niet genoeg cookies");
        }
    }
}


class GrandmaUpgrade {
    price;
    bought = false;

    constructor(price) {
        this.price = price;
    }

    grannyUpgrade() {
        if (cookieTotal.counter >= this.price) {
            cookieTotal.add(-this.price);
            this.bought = true;
            grandma.cps = Math.floor(grandma.cps * 2);
            cookieTotal.showGrandmaUpgrade();
            cookieTotal.updateCPS();
        } else {
            console.log("niet genoeg");
            document.getElementById("notEnoughCookies").style.display = "block";
            setTimeout(() => {
            document.getElementById("notEnoughCookies").style.display = 'none';
            }, 3000);
        }  
    }

    canGrannyShow() {
        if (grandma.amount >= 3 && !grannyBooster.bought) {
            return true;
        }
        return false;
    }
}

class FactoryUpgrade {
    price;
    bought = false;
    constructor(price) {
        this.price = price;
    }

    factoriesUpgrade() {
        if (cookieTotal.counter >= this.price) {
            cookieTotal.add(-this.price);
            this.bought = true;
            factory.cps = Math.floor(factory.cps * 2);
            cookieTotal.showFactoriesUpgrade();
            cookieTotal.updateCPS();
        } else {
            console.log("niet genoeg");
            document.getElementById("notEnoughCookies").style.display = "block";
            setTimeout(() => {
            document.getElementById("notEnoughCookies").style.display = 'none';
            }, 3000);
        }  
    }

    canFactoryShow() {
        if (factory.amount >= 3 && !factoryBooster.bought) {
            return true;
        }
        return false;
    }
}

class MinesUpgrade {
    price;
    bought = false;
    constructor(price) {
        this.price = price;
    }

    mineUpgrade() {
        if (cookieTotal.counter >= this.price) {
            cookieTotal.add(-this.price);
            this.bought = true;
            mines.cps = Math.floor(mines.cps * 2);
            cookieTotal.showMinesUpgrade();
            cookieTotal.updateCPS();
        } else {
            console.log("niet genoeg");
            document.getElementById("notEnoughCookies").style.display = "block";
            setTimeout(() => {
            document.getElementById("notEnoughCookies").style.display = 'none';
            }, 3000);
        }  
    }

    canMinesShow() {
        if (mines.amount >= 3 && !mineBooster.bought) {
            return true;
        }
        return false;
    }
}

class FarmsUpgrade {
    price;
    bought = false;
    constructor(price) {
        this.price = price;
    }

    farmUpgrade() {
        if (cookieTotal.counter >= this.price) {
            cookieTotal.add(-this.price);
            this.bought = true;
            farms.cps = Math.floor(farms.cps * 2);
            cookieTotal.showFarmsUpgrade();
            cookieTotal.updateCPS();
        } else {
            console.log("niet genoeg");
            document.getElementById("notEnoughCookies").style.display = "block";
            setTimeout(() => {
            document.getElementById("notEnoughCookies").style.display = 'none';
            }, 3000);
        }  
    }

    canFarmShow() {
        if (farms.amount >= 3 && !farmBooster.bought) {
            return true;
        }
        return false;
    }
}

class BankUpgrade {
    price;
    bought = false;
    constructor(price) {
        this.price = price;
    }

    bankUpgrade() {
        if (cookieTotal.counter >= this.price) {
            cookieTotal.add(-this.price);
            this.bought = true;
            bank.cps = Math.floor(bank.cps * 2);
            cookieTotal.showBankUpgrade();
            cookieTotal.updateCPS();
        } else {
            console.log("niet genoeg");
            document.getElementById("notEnoughCookies").style.display = "block";
            setTimeout(() => {
            document.getElementById("notEnoughCookies").style.display = 'none';
            }, 3000);
        }  
    }

    canBankShow() {
        if (bank.amount >= 3 && !bankBooster.bought) {
            return true;
        }
        return false;
    }
}

class TempleUpgrade {
    price;
    bought = false;
    constructor(price) {
        this.price = price;
    }

    templeUpgrade() {
        if (cookieTotal.counter >= this.price) {
            cookieTotal.add(-this.price);
            this.bought = true;
            temple.cps = Math.floor(temple.cps * 2);
            cookieTotal.showTempleUpgrade();
            cookieTotal.updateCPS();
        } else {
            console.log("niet genoeg");
            document.getElementById("notEnoughCookies").style.display = "block";
            setTimeout(() => {
            document.getElementById("notEnoughCookies").style.display = 'none';
            }, 3000);
        }  
    }

    canTempleShow() {
        if (temple.amount >= 3 && !templeBooster.bought) {
            return true;
        }
        return false;
    }
}

class WizzardTowerUpgrade {
    price;
    bought = false;
    constructor(price) {
        this.price = price;
    }

    wizzardTowerUpgrade() {
        if (cookieTotal.counter >= this.price) {
            cookieTotal.add(-this.price);
            this.bought = true;
            wizzardTower.cps = Math.floor(wizzardTower.cps * 2);
            cookieTotal.showWizzardTowerUpgrade();
            cookieTotal.updateCPS();
        } else {
            console.log("niet genoeg");
            document.getElementById("notEnoughCookies").style.display = "block";
            setTimeout(() => {
            document.getElementById("notEnoughCookies").style.display = 'none';
            }, 3000);
        }  
    }

    canWizzardTowerShow() {
        if (wizzardTower.amount >= 3 && !wizzardTowerBooster.bought) {
            return true;
        }
        return false;
    }
}

class ShipmentUpgrade {
    price;
    bought = false;
    constructor(price) {
        this.price = price;
    }

    shipmentUpgrade() {
        if (cookieTotal.counter >= this.price) {
            cookieTotal.add(-this.price);
            this.bought = true;
            shipment.cps = Math.floor(shipment.cps * 2);
            cookieTotal.showShipmentUpgrade();
            cookieTotal.updateCPS();
        } else {
            console.log("niet genoeg");
            document.getElementById("notEnoughCookies").style.display = "block";
            setTimeout(() => {
            document.getElementById("notEnoughCookies").style.display = 'none';
            }, 3000);
        }  
    }

    canShipmentShow() {
        if (shipment.amount >= 3 && !shipmentBooster.bought) {
            return true;
        }
        return false;
    }
}

class AutoGenerater {
    cps;
    amount = 0;
    price;

    constructor(cps, price) {
        this.cps = cps;
        this.price = price;
        setInterval(() => this.generate(), 1000);
    }

    buy() {
        //prirc check
        //amount++
        if (cookieTotal.counter >= this.price) {
            this.amount += 1;
            cookieTotal.add(-this.price);
            this.price = Math.floor(this.price * 1.5);
            cookieTotal.buttonText();
            cookieTotal.updateCPS();
            
        } else {
            console.log("niet genoeg");
            document.getElementById("notEnoughCookies").style.display = "block";
            setTimeout(() => {
            document.getElementById("notEnoughCookies").style.display = 'none';
            }, 3000);
        }        
    }

    generate() {
        cookieTotal.add(this.cps * this.amount);
        // document.getElementById("counter").textContent = cookieTotal;
    }
}

let cookieClicker1 = new Clicker();
// cookieClicker1.plusCookies();

let clickerUpgrade = new ClickUpgrade(2, 5);


let grandma = new AutoGenerater(3, 5);
let grannyBooster = new GrandmaUpgrade(10);


let factory = new AutoGenerater(10, 20);
let factoryBooster = new FactoryUpgrade(10);


let mines = new AutoGenerater(20, 60);
let mineBooster = new MinesUpgrade(10);


let farms = new AutoGenerater(50, 100);
let farmBooster = new FarmsUpgrade(10);


let bank = new AutoGenerater(80, 150);
let bankBooster = new BankUpgrade(10);


let temple = new AutoGenerater(150, 500);
let templeBooster = new TempleUpgrade(10);


let wizzardTower = new AutoGenerater(400, 1200);
let wizzardTowerBooster = new WizzardTowerUpgrade(10);


let shipment = new AutoGenerater(750, 2000);
let shipmentBooster = new ShipmentUpgrade(10);


const SAVE_KEY = 'cookieClickerSaveV1';

function saveGame() {
  try {
    const state = {
      counter: Number(cookieTotal.counter) || 0,
      unlocked100Cookies: !!cookieTotal.unlocked100Cookies,
      unlocked5Grandma: !!cookieTotal.unlocked5Grandma,
      unlocked5Factory: !!cookieTotal.unlocked5Factory,
      unlocked5Mines: !!cookieTotal.unlocked5Mines,
      unlocked5Farms: !!cookieTotal.unlocked5Farms,
      unlocked5Bank: !!cookieTotal.unlocked5Bank,
      unlocked5Temple: !!cookieTotal.unlocked5Temple,
      unlocked5Wizzard: !!cookieTotal.unlocked5Wizzard,

      clickerUpgrade: {
        price: Number(clickerUpgrade.price) || 0,
        amount: Number(clickerUpgrade.amount) || 0,
        $upgradeAmount: Number(clickerUpgrade.$upgradeAmount) || 0
      },
      cookieClicker: {
        cps: Number(cookieClicker1.cps) || 0
      },

      generators: {
        grandma: { amount: Number(grandma.amount) || 0, price: Number(grandma.price) || null, cps: Number(grandma.cps) || 0 },
        factory: { amount: Number(factory.amount) || 0, price: Number(factory.price) || null, cps: Number(factory.cps) || 0 },
        mines: { amount: Number(mines.amount) || 0, price: Number(mines.price) || null, cps: Number(mines.cps) || 0 },
        farms: { amount: Number(farms.amount) || 0, price: Number(farms.price) || null, cps: Number(farms.cps) || 0 },
        bank: { amount: Number(bank.amount) || 0, price: Number(bank.price) || null, cps: Number(bank.cps) || 0 },
        temple: { amount: Number(temple.amount) || 0, price: Number(temple.price) || null, cps: Number(temple.cps) || 0 },
        wizzardTower: { amount: Number(wizzardTower.amount) || 0, price: Number(wizzardTower.price) || null, cps: Number(wizzardTower.cps) || 0 },
        shipment: { amount: Number(shipment.amount) || 0, price: Number(shipment.price) || null, cps: Number(shipment.cps) || 0 },
      },

      boosters: {
        grannyBooster: !!grannyBooster.bought,
        factoryBooster: !!factoryBooster.bought,
        mineBooster: !!mineBooster.bought,
        farmBooster: !!farmBooster.bought,
        bankBooster: !!bankBooster.bought,
        templeBooster: !!templeBooster.bought,
        wizzardTowerBooster: !!wizzardTowerBooster.bought,
        shipmentBooster: !!shipmentBooster.bought
      },
      achievements: {
        unlocked100Cookies: !!cookieTotal.unlocked100Cookies,
        unlocked5Grandma: !!cookieTotal.unlocked5Grandma,
        unlocked5Factory: !!cookieTotal.unlocked5Factory,
        unlocked5Mines: !!cookieTotal.unlocked5Mines,
        unlocked5Farms: !!cookieTotal.unlocked5Farms,
        unlocked5Bank: !!cookieTotal.unlocked5Bank,
        unlocked5Temple: !!cookieTotal.unlocked5Temple,
        unlocked5Wizzard: !!cookieTotal.unlocked5Wizzard
      },
      savedAt: new Date().toISOString()
    };

    localStorage.setItem(SAVE_KEY, JSON.stringify(state));
     console.log('Game saved', state);
  } catch (e) {
    console.error('Failed to save game', e);
  }
}

function loadGame() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return; 

    const state = JSON.parse(raw);

    cookieTotal.counter = Number(state.counter) || 0;
    cookieTotal.unlocked100Cookies = !!state.unlocked100Cookies;
    cookieTotal.unlocked5Grandma = !!state.unlocked5Grandma;
    cookieTotal.unlocked5Factory = !!state.unlocked5Factory;
    cookieTotal.unlocked5Mines = !!state.unlocked5Mines;
    cookieTotal.unlocked5Farms = !!state.unlocked5Farms;
    cookieTotal.unlocked5Bank = !!state.unlocked5Bank;
    cookieTotal.unlocked5Temple = !!state.unlocked5Temple;
    cookieTotal.unlocked5Wizzard = !!state.unlocked5Wizzard;

    if (state.clickerUpgrade) {
      clickerUpgrade.price = Number(state.clickerUpgrade.price) || clickerUpgrade.price;
      clickerUpgrade.amount = Number(state.clickerUpgrade.amount) || clickerUpgrade.amount;
      clickerUpgrade.$upgradeAmount = Number(state.clickerUpgrade.$upgradeAmount) || clickerUpgrade.$upgradeAmount;
    }

    if (state.cookieClicker) {
      cookieClicker1.cps = Number(state.cookieClicker.cps) || cookieClicker1.cps;
    }

    const g = state.generators || {};
    if (g.grandma) { grandma.amount = Number(g.grandma.amount) || 0; if (g.grandma.price) grandma.price = Number(g.grandma.price); if (g.grandma.cps) grandma.cps = Number(g.grandma.cps); }
    if (g.factory) { factory.amount = Number(g.factory.amount) || 0; if (g.factory.price) factory.price = Number(g.factory.price); if (g.factory.cps) factory.cps = Number(g.factory.cps); }
    if (g.mines) { mines.amount = Number(g.mines.amount) || 0; if (g.mines.price) mines.price = Number(g.mines.price); if (g.mines.cps) mines.cps = Number(g.mines.cps); }
    if (g.farms) { farms.amount = Number(g.farms.amount) || 0; if (g.farms.price) farms.price = Number(g.farms.price); if (g.farms.cps) farms.cps = Number(g.farms.cps); }
    if (g.bank) { bank.amount = Number(g.bank.amount) || 0; if (g.bank.price) bank.price = Number(g.bank.price); if (g.bank.cps) bank.cps = Number(g.bank.cps); }
    if (g.temple) { temple.amount = Number(g.temple.amount) || 0; if (g.temple.price) temple.price = Number(g.temple.price); if (g.temple.cps) temple.cps = Number(g.temple.cps); }
    if (g.wizzardTower) { wizzardTower.amount = Number(g.wizzardTower.amount) || 0; if (g.wizzardTower.price) wizzardTower.price = Number(g.wizzardTower.price); if (g.wizzardTower.cps) wizzardTower.cps = Number(g.wizzardTower.cps); }
    if (g.shipment) { shipment.amount = Number(g.shipment.amount) || 0; if (g.shipment.price) shipment.price = Number(g.shipment.price); if (g.shipment.cps) shipment.cps = Number(g.shipment.cps); }

  
    if (state.boosters) {
      grannyBooster.bought = !!state.boosters.grannyBooster;
      factoryBooster.bought = !!state.boosters.factoryBooster;
      mineBooster.bought = !!state.boosters.mineBooster;
      farmBooster.bought = !!state.boosters.farmBooster;
      bankBooster.bought = !!state.boosters.bankBooster;
      templeBooster.bought = !!state.boosters.templeBooster;
      wizzardTowerBooster.bought = !!state.boosters.wizzardTowerBooster;
      shipmentBooster.bought = !!state.boosters.shipmentBooster;
    }

    document.getElementById("counter").textContent = cookieTotal.counter;
    cookieTotal.buttonText();
    cookieTotal.updateCPS();
    cookieTotal.checkAchievements();

  } catch (e) {
    console.error('Failed to load game', e);
  }
}

function clearSave() {
  localStorage.removeItem(SAVE_KEY);
  
  location.reload();
}


setInterval(saveGame, 5000);

window.addEventListener('beforeunload', saveGame);

loadGame();
