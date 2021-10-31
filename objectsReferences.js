myAccount = {
    name : "Aldo",
    expenses: 0,
    income: 0
}

const addExpense = function(acc,amount) {
    acc.expenses = acc.expenses + amount;
   
    console.log(acc);
}

//add income 

const addIncome= function(account,incomeAdded){
    account.income += incomeAdded;
}

//reset account 
const resetAccount= function(account){
    account.income = 0;
    account.expenses = 0;
}
//getAccountSummarry
const getAccountSummarry = function(account) {
    console.log(`Account for ${account.name} has $${account.income - account.expenses}. $${account.income} in income. $${account.expenses} in expenses.`);
}


addIncome(myAccount, 30);
addExpense(myAccount, 2);
addExpense(myAccount, 3);
getAccountSummarry(myAccount);
resetAccount(myAccount);
getAccountSummarry(myAccount)