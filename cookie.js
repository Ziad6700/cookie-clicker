class ui {
    counter = 0;

    add(amount) {
        this.counter += amount;
        document.getElementById("counter").textContent = this.counter;
    }

    buttonText() {
        document.getElementById("priceClicker").textContent = "Clicker: " + clickerUpgrade.price + " amount: " + clickerUpgrade.amount;

        document.getElementById("grandma").textContent = "grandma: " + grandma.price + " amount: " + grandma.amount;

        document.getElementById("factory").textContent = "factory: " + factory.price + " amount: " + factory.amount;

        document.getElementById("mines").textContent = "mines: " + mines.price + " amount: " + mines.amount;

        document.getElementById("farms").textContent = "farms: " + farms.price + " amount: " + farms.amount;

        document.getElementById("bank").textContent = "bank: " + bank.price + " amount: " + bank.amount;

        document.getElementById("temple").textContent = "temple: " + temple.price + " amount: " + temple.amount;

        document.getElementById("wizzardTower").textContent = "wizzard tower: " + wizzardTower.price + " amount: " + wizzardTower.amount;

        document.getElementById("shipment").textContent = "shipment: " + shipment.price + " amount: " + shipment.amount;

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

            document.getElementById("priceGrandmaUpgrade").textContent = "grandma upgrade " + grannyBooster.price;
        } else {

            document.getElementById("priceGrandmaUpgrade").style.display = "none";

        }
    }

    showFactoriesUpgrade() {

        if (factoryBooster.canFactoryShow()) {
            document.getElementById("priceFactoryUpgrade").style.display = "block";

            document.getElementById("priceFactoryUpgrade").textContent = "factory upgrade " + factoryBooster.price;
        } else {

            document.getElementById("priceFactoryUpgrade").style.display = "none";

        }
    }

    showMinesUpgrade() {

        if (mineBooster.canMinesShow()) {
            document.getElementById("priceMineUpgrade").style.display = "block";

            document.getElementById("priceMineUpgrade").textContent = "mine upgrade " + mineBooster.price;
        } else {

            document.getElementById("priceMineUpgrade").style.display = "none";

        }
    }

    showFarmsUpgrade() {

        if (farmBooster.canFarmShow()) {
            document.getElementById("priceFarmUpgrade").style.display = "block";

            document.getElementById("priceFarmUpgrade").textContent = "farm upgrade " + farmBooster.price;
        } else {

            document.getElementById("priceFarmUpgrade").style.display = "none";

        }
    }

    showBankUpgrade() {

        if (bankBooster.canBankShow()) {
            document.getElementById("priceBankUpgrade").style.display = "block";

            document.getElementById("priceBankUpgrade").textContent = "bank upgrade " + bankBooster.price;
        } else {

            document.getElementById("priceBankUpgrade").style.display = "none";

        }
    }

    showTempleUpgrade() {

        if (templeBooster.canTempleShow()) {
            document.getElementById("priceTempleUpgrade").style.display = "block";

            document.getElementById("priceTempleUpgrade").textContent = "temple upgrade " + templeBooster.price;
        } else {

            document.getElementById("priceTempleUpgrade").style.display = "none";

        }
    }

    showWizzardTowerUpgrade() {

        if (wizzardTowerBooster.canWizzardTowerShow()) {
            document.getElementById("priceWizzardTowerUpgrade").style.display = "block";

            document.getElementById("priceWizzardTowerUpgrade").textContent = "wizzard tower upgrade " + wizzardTowerBooster.price;
        } else {

            document.getElementById("priceWizzardTowerUpgrade").style.display = "none";

        }
    }

    showShipmentUpgrade() {

        if (shipmentBooster.canShipmentShow()) {
            document.getElementById("priceShipmentUpgrade").style.display = "block";

            document.getElementById("priceShipmentUpgrade").textContent = "shipment upgrade " + shipment.price;
        } else {

            document.getElementById("priceShipmentUpgrade").style.display = "none";

        }
    } 

    showShipmentUpgrade() {

        if (shipmentBooster.canShipmentShow()) {
            document.getElementById("priceShipmentUpgrade").style.display = "block";

            document.getElementById("priceShipmentUpgrade").textContent = "shipment upgrade " + shipment.price;
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




