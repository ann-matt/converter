let money = +prompt("Ваш бюджет на месяц?", "")
let time = prompt("Введите дату в формате YYYY-MM-DD", "")

console.log(money, time);

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
}






for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", '');
	let b = prompt("Во сколько обойдется?", '');

         if ( (typeof(a)) === 'string' && (typeof(a) != null) && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
            console.log('done')
        appData.expenses[a] = b;
         } 

        
};

appData.moneyPerDay = appData.budget / 30; 

alert("Daily expences: " + appData.moneyPerDay);

if (appData.money < 100) {
    console.log('low income');
} else if (appData.money > 100 && appData.money < 2000) {
    console.log('mid income');
} else {
    console.log('high income');
}