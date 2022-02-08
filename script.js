'use strict';

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const isString = function (str) {
    // if (typeof str !== "string") {
    //     return false
    // }
    //return !isNaN(str) && !isNaN(parseFloat(str))
    return !isNaN(str) && isFinite(str);
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
    asking: function () {
        // do {
        // appData.title = prompt("Как называется ваш проект", "Калькулятор верстки");
        // } while (isString(appData.title));

        for (let i = 0; i < 2; i++) {
            let name;
            do {
                let name = prompt("Какие типы экранов нужно разработать?");
            } while (isString(appData.name))
            let price = 0

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

    addValidateString: function () {
        do {
            appData.title = prompt("Как называется ваш проект", "Калькулятор верстки");
        } while (isString(appData.title));
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

appData.start();