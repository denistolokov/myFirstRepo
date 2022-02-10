'use strict';

const books = document.querySelectorAll('.book');
console.log(books);
books[1].after(books[0]);
books[3].before(books[4]);
books[5].after(books[2]);

const bookNewName = document.querySelectorAll('h2 > a');
bookNewName[2].textContent = 'Книга 3. this и Прототипы Объектов';


const newOrderInBook = document.querySelectorAll('ul > li');
newOrderInBook[16].before(newOrderInBook[8]);
newOrderInBook[10].before(newOrderInBook[9, 12]);
newOrderInBook[12].after(newOrderInBook[14]);
newOrderInBook[45].after(newOrderInBook[38]);
newOrderInBook[36].after(newOrderInBook[37]);
newOrderInBook[37].after(newOrderInBook[45]);
newOrderInBook[40].after(newOrderInBook[38]);
newOrderInBook[43].after(newOrderInBook[41]);

const newElement = document.createElement('li');
newElement.textContent = "Глава 8: За пределами ES6";
newOrderInBook[55].after(newElement);
console.log(newOrderInBook);

const removeMarket = document.querySelector('.adv');
removeMarket.remove();

// const backgroundImage = document.querySelector('body')



// const testTitle = document.getElementsByTagName('h1');
// console.log(testTitle[0]);

// const handlerButton = document.getElementsByClassName('handler_btn');
// console.log(handlerButton);

// const screenButton = document.querySelector('screen-btn');
// console.log(screenButton);

// const otherItemsPercent = document.querySelectorAll('.other-items.percent');
// otherItemsPercent.forEach(function (item) {
//     console.log(item);
// })

// const otherItemsNumber = document.querySelectorAll('.other-items.number');
// otherItemsNumber.forEach(function (item) {
//     console.log(item);
// })

// const inputTypeRangel = document.querySelector('.main-controls__views element.main-controls__item rollback.main-controls__range.range')
// console.log(inputTypeRangel);

// const inputTypeRange2 = document.querySelector('.main-controls__views element.main-controls__item rollback.main-controls__range.range-value');
// console.log(inputTypeRange2);

// const totalInput = document.getElementsByClassName('total-input');
// const imput1 = totalInput[0]
// const imput2 = totalInput[1]
// const imput3 = totalInput[2]
// const imput4 = totalInput[3]
// const imput5 = totalInput[4]
// console.log(imput1);
// console.log(imput2);
// console.log(imput3);
// console.log(imput4);
// console.log(imput5);

// let screenClass = document.querySelectorAll('.screen');
// console.log(screenClass);

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const isString = function (str) {
    if (typeof isString !== str)
        // return false;
        return !isNaN(str)
    // && isFinite(str);
}

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    fullPrice: 0,
    servicePercentPrice: 0,
    allServicePrices: 0,
    services: {},

    start: function () {
        appData.addValidateString();
        appData.asking();
        appData.addPrices();
        appData.getTitle();
        appData.getFullPrice();
        appData.getServicePercentPrices();

        appData.logger();
    },

    addValidateString: function () {
        do {
            appData.title = prompt("Как называется ваш проект", "Калькулятор верстки");
        } while (isString(appData.title));

    },

    asking: function () {
        for (let i = 0; i < 2; i++) {
            let price = 0
            do {
                let name = prompt("Какие типы экранов нужно разработать?");
            } while (isString(name))

            do {
                price = +prompt('Сколько будет стоить данная работа');
            } while (!isNumber(price));

            appData.screens.push({ id: i, name: name, price: price });
        }

        for (let i = 0; i < 2; i++) {
            let name = prompt('Какой дополнительный тип услуги нужен?');
            let price = 0;

            do {
                price += +prompt('Сколько это будет стоить?');
            } while (!isNumber(price));

            appData.services[name] = +price;
        }

        appData.adaptive = confirm('Нужен ли адвптив на сайте');
    },


    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price;
        }

        for (let key in appData.services) {
            appData.allServicePrices += appData.services[key];
        }
    },

    getFullPrice: function () {
        appData.fullPrice = appData.screenPrice + appData.allServicePrices;
    },

    getTitle: function () {
        appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase();
    },

    getServicePercentPrices: function () {
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    },

    getRollbackMessage: function (price) {
        if (price >= 30000) {
            return 'Даём скидку в 10%';
        } else if (price >= 15000 && price < 30000) {
            return 'Даём скидку в 5%';
        } else if (price < 15000 && price > 0) {
            return 'Скидка не предусмотрена';
        } else if (price <= 0) {
            return 'Что-то пошло не так';
        }
    },

    logger: function () {
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        console.log(appData.screens);
    },

};

// appData.start();