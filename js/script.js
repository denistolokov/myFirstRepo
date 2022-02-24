'use strict';

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
    rollback: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    servicesPercent: {},
    servicesNumber: {},
    totalScreenCount: 0,

    init: function () {
        this.addTitle();
        startBtn.addEventListener('click', this.start.bind(this));
        resetBtn.addEventListener('click', this.reset.bind(this));
        inputRange.addEventListener("input", this.addRollback.bind(this));
        buttonPlus.addEventListener('click', this.addScreenBlock.bind(this));
    },

    addTitle: function () {
        document.title = title.textContent;
    },

    validateInput: function () {
        if (this.screens.find((item) => item.price == 0)) {
            return true;
        } else {
            return false;
        }
    },

    showResult: function () {
        total.value = this.screenPrice;
        totalCountOther.value = this.servicePricesPercent + appData.servicePricesNumber;
        fullTotalCount.value = this.fullPrice;
        totalCountRollback.value = this.servicePercentPrice;
        totalCount.value = this.totalScreenCount;
    },

    addRollback: function () {
        let spanRangeValue = document.querySelector(".rollback").querySelector("span");

        spanRangeValue.textContent = inputRange.value + '%';
        totalCountRollback.value =
            this.fullPrice - this.fullPrice * (inputRange.value / 100);
    },

    addScreenBlock: function () {
        const cloneScreen = screens[0].cloneNode(true);

        screens[screens.length - 1].after(cloneScreen);
    },

    addScreens: function () {
        appData.screens.length = 0;
        screens = document.querySelectorAll('.screen');

        screens.forEach((screen, index) => {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const selectName = select.options[select.selectedIndex].textContent;

            this.screens.push({
                id: index,
                name: selectName,
                count: +input.value,
                price: +select.value * +input.value,
            })

        })

    },

    addServices: function () {
        otherItemsPercent.forEach((item) => {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                this.servicesPercent[label.textContent] = +input.value;
            }
        })

        otherItemsNumber.forEach((item) => {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                this.servicesNumber[label.textContent] = +input.value;
            }

        })

    },



    addPrices: function () {
        for (let screen of this.screens) {
            this.screenPrice += +screen.price;
            this.totalScreenCount += screen.count;
        }

        for (let key in this.servicesNumber) {
            this.servicePricesNumber += this.servicesNumber[key];
        }

        for (let key in this.servicesPercent) {
            this.servicePricesPercent +=
                this.screenPrice * (this.servicesPercent[key] / 100);
        }

        this.fullPrice =
            +this.screenPrice + this.servicePricesNumber + this.servicePricesPercent;

        this.servicePercentPrice =
            this.fullPrice - (this.fullPrice * (inputRange.value / 100));
    },

    disabledElam: function () {
        const select = document.querySelectorAll('.screen select');
        select.forEach((item) => {
            item.disabled = !item.disabled;
        });

        const input = document.querySelectorAll('.screen input[type=text]');
        input.forEach((item) => {
            item.disabled = !item.disabled;
        });
    },

    disabledButton: function () {
        startBtn.style.display = 'none';
        resetBtn.style.display = 'block';
    },

    disabledButtonText: function () {
        startBtn.style.display = 'block';
        resetBtn.style.display = 'none';
    },

    resetInputValue: function () {
        const input = document.querySelectorAll('.screen input[type=text]');
        input.forEach((item) => {
            item.value = "";
        });

        const select = document.querySelectorAll('.screen select')
        select.forEach((item) => {
            item.options.selectedIndex = 0;
        });

        const total = document.querySelectorAll('.total-input')
        total.forEach((item) => {
            item.value = "0";
        });
        const check = document.querySelectorAll('input[type=checkbox]')
        check.forEach((item) => {
            item.checked = false;
        });

        inputRange.value = 0;
        inputRangeValue.textContent = inputRange.value + "%";

        for (let i = 1; i < screens.length; i++) {
            screens[i].remove();
        };
    },

    start: function () {
        appData.addScreens();
        if (this.validateInput() === false) {
            this.addServices();
            this.addPrices();
            this.showResult();
            this.disabledElam();
            this.disabledButton();

            // appData.logger();
        }
    },

    reset: function () {
        this.resetInputValue();
        this.disabledElam();
        this.disabledButtonText();

        this.addScreens();
    },

    // logger: function () {
    //     // console.log(appData.fullPrice);
    //     // console.log(appData.servicePercentPrice);
    //     // console.log(appData.screens);
    // },

};



appData.init();