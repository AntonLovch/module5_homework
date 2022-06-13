let myMap = new Map();
myMap.set(`Черногория`, `Подгорица`);
myMap.set(`Венгрия`, `Будапешт`);
myMap.set(`Чехия`, `Прага`);
for (let name of myMap.keys()) {
    console.log(name + ' - ' + myMap.get(name))
}