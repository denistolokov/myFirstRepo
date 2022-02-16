'use strict';
// const image = document.querySelector('body')
// function changeBgImg() {
//     image.style.backgroundImage = "url('./image/you-dont-know-js.jpg')";
// }

// changeBgImg();

// const books = document.querySelectorAll('.book');
// console.log(books);
// books[1].after(books[0]);
// books[3].before(books[4]);
// books[5].after(books[2]);

// const bookNewName = document.querySelectorAll('h2 > a');
// bookNewName[2].textContent = 'Книга 3. this и Прототипы Объектов';


// const newOrderInBook = document.querySelectorAll('ul > li');
// newOrderInBook[16].before(newOrderInBook[8]);
// newOrderInBook[10].before(newOrderInBook[9, 12]);
// newOrderInBook[12].after(newOrderInBook[14]);
// newOrderInBook[45].after(newOrderInBook[38]);
// newOrderInBook[36].after(newOrderInBook[37]);
// newOrderInBook[37].after(newOrderInBook[45]);
// newOrderInBook[40].after(newOrderInBook[38]);
// newOrderInBook[43].after(newOrderInBook[41]);

// const newElement = document.createElement('li');
// newElement.textContent = "Глава 8: За пределами ES6";
// newOrderInBook[55].after(newElement);
// console.log(newOrderInBook);

// const removeMarket = document.querySelector('.adv');
// removeMarket.remove();



const title = document.getElementsByTagName('h1')[0];
const buttonPlus = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');

const inputRange = document.querySelector('.rollback input');
const inputRangeValue = document.querySelector('.rollback .range-value');

const startBtn = document.getElementsByClassName('handler_btn')[0];
const resetBtn = document.getElementsByClassName('handler_btn')[1];

const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const fullTotalCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];

let screens = document.querySelectorAll('.screen');

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    fullPrice: 0,
    servicePercentPrice: 0,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    servicesPercent: {},
    servicesNumber: {},

    init: function () {
        appData.addTitle()

        startBtn.addEventListener('click', appData.start)
        buttonPlus.addEventListener('click', appData.addScreenBlock)
    },

    addTitle: function () {
        document.title = title.textContent
    },

    start: function () {
        appData.addScreens();
        appData.addServices()
        appData.addPrices();
        // appData.getServicePercentPrices();

        // appData.logger();
        appData.showResult()
    },

    addScreens: function () {
        screens = document.querySelectorAll('.screen');

        screens.forEach(function (screen, index) {
            const select = screen.querySelector('select')
            const input = screen.querySelector('input')
            const selectName = select.options[select.selectedIndex].textContent

            appData.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value
            });
        })
        // console.log(appData.screens)
    },

    showResult: function () {
        total.value = appData.screenPrice
        totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber
        fullTotalCount.value = appData.fullPrice
    },

    addServices: function () {
        otherItemsPercent.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')
            // console.log(check)
            // console.log(label)
            // console.log(input)
            if (check.checked) {
                appData.servicesPercent[label.textContent] = +input.value;
            }
        })
        otherItemsNumber.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')
            // console.log(check)
            // console.log(label)
            // console.log(input)
            if (check.checked) {
                appData.servicesNumber[label.textContent] = +input.value;
            }
        })

    },

    addScreenBlock: function () {
        const cloneScreen = screens[0].cloneNode(true);

        screens[screens.length - 1].after(cloneScreen);
    },

    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price;
        }

        for (let key in appData.servicesNumber) {
            appData.servicePricesNumber += appData.servicesNumber[key];
        }

        for (let key in appData.servicesPercent) {
            appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100);
        }

        appData.fullPrice = appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent;
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
        // console.log(appData.fullPrice);
        // console.log(appData.servicePercentPrice);
        // console.log(appData.screens);
    },

};

appData.init();