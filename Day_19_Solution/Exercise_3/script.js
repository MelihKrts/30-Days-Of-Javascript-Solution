// Day 19 Exercise Solution

// Day 19 Exercise Level 3 Solution

// Exercise 3.1

function personAccount(firstName, lastName) {
    let incomes = [];
    let expenses = [];

    function totalIncome() {
        let total = 0;
        for (const income of incomes) {
            total += income.amount
        }
        return total;
    }

    function totalExpense() {
        let total = 0;
        for (const expense of expenses) {
            total += expense.amount;
        }
        return total;
    }

    function accountInfo() {
        return `Person Account Info\nFirst Name: ${firstName}\nLast Name: ${lastName}\nTotal Income: ${totalIncome()}\nTotalExpense: ${totalExpense()}\nAccount Balance: ${accountBalance()}`;
    }

    function addIncome(amount, description) {
        incomes.push({ amount, description })
    }

    function addExpense(amount, description) {
        expenses.push({ amount, description });
    }
    function accountBalance() {
        return totalIncome() - totalExpense();
    }

    return {
        accountInfo,
        addIncome,
        addExpense,
        accountBalance,
    };
}

const accountProfiles = personAccount("Frank", "Sinatra");

accountProfiles.addIncome(2500, "Salary");
accountProfiles.addExpense(3997, "Credit Card Statement");

console.log(accountProfiles.accountInfo());