let title = "My first project";
let screens = "Простые, Сложные, Интерективные";
screens = screens.toLowerCase().split(',');

let screenPrice = 1000;
let rollback = 15;
let fullPrice = 10000;
let adaptive = true;


console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);

console.log("Стоимость верстки экранов " + screenPrice + " рублей");
console.log("стоимость разработки сайта " + fullPrice + " рублей")
//процент посреднику
console.log(fullPrice * (rollback / 100));
console.log(screens)

console.log(screens);