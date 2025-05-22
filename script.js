let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();



let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
}

/* function checkSavings () {
    let askAboutSavings = confirm('Do you have any savings?', '');
    if (askAboutSavings == true) {
        appData.savings = +prompt('How much do you have?', '');
    }
}
checkSavings(); */

function chooseExpenses () {
    for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", '');
	let b = prompt("Во сколько обойдется?", '');

         if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
            console.log('done')
        appData.expenses[a] = b;
         } else {
            i = i - 1;
         } 
    };
}

chooseExpenses();

console.log(money, time);


appData.moneyPerDay = (appData.budget / 30).toFixed(1); 

alert("Daily expences: " + appData.moneyPerDay);

if (appData.money < 100) {
    console.log('low income');
} else if (appData.money > 100 && appData.money < 2000) {
    console.log('mid income');
} else {
    console.log('high income');
}

function checkSavings () {
    if (appData.savings == true) {
        let save = +prompt('How much do you have?', '');
        let percent = +prompt('What is your interest?', '');

        appData.monthIncome = save/100/12*percent;
        alert(`Your monthly income from deposit is ${appData.monthIncome.toFixed(1)}`);
    }
}
checkSavings();

function chooseOptExpenses () {
    for (let i = 0; i < 3; i++) {
        let optExp = prompt('Статья необязательных расходов?', '');
    appData.optionalExpenses = optExp;
}
}
chooseOptExpenses();