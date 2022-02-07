'use strict';

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    rollback: 15,
    fullPrice: 0,
    servicePercentPrice: 0,
    allServicePrices: 0,
    service1: '',
    service2: '',

    asking: function () {
        appData.title = prompt("Как называется ваш проект", "Калькулятор верстки");
        appData.screens = prompt("Простые, Сложные, Интерективные", "Простые, сложные");

        do {
            appData.screenPrice = +prompt('Сколько будет стоить данная работа');
        } while (!isNumber(appData.screenPrice));

        appData.adaptive = confirm('Нужен ли адвптив на сайте');
    },

    getAllServicePrices: function () {
        let sum = 0;

        for (let i = 0; i < 2; i++) {

            if (i === 0) {
                appData.service1 = prompt('Какой дополнительный тип услуги нужен?');
            } else if (i === 1) {
                appData.service2 = prompt('Какой дополнительный тип услуги нужен?');
            }

            do {
                sum += +prompt('Сколько это будет стоить?');
            } while (!isNumber(sum));

        }

        return sum
    },

    getFullPrice: function () {
        return appData.screenPrice + appData.allServicePrices;
    },

    getTitle: function () {
        return appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase();
    },

    getServicePercentPrices: function () {
        return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
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
        for (let key in appData) {
            console.log(key + ': ' + appData[key]);
        }
    },
    start: function () {
        appData.asking();

        appData.title = appData.getTitle();
        appData.allServicePrices = appData.getAllServicePrices();
        appData.fullPrice = appData.getFullPrice();
        appData.servicePercentPrice = appData.getServicePercentPrices();

        appData.logger();
    },

};

appData.start();
//console.log(appData.fullPrice);
//console.log(appData.servicePercentPrice);
//console.log("allServicePrices", allServicePrices);
//console.log(screens);
//console.log(getRollbackMessage(fullPrice));
//console.log(getServicePercentPrices());
//console.log(servicePercentPrice);
//console.log(allServicePrices);
//console.log(title);
//console.log(screenPrice);
//console.log(adaptive);
//console.log(service1);
//console.log(servicePrice1);
//console.log(service2);
//console.log(servicePrice2);
//console.log(fullPrice);