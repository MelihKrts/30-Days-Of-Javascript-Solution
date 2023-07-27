// Day 17 Exercise Solution 

// Day 17 Exercise Level 3 Solution

// Exercise 3.1

const personAccount = {
    firstName: "",
    lastName: "",
    incomes: new Map(),
    expenses: new Map(),

    totalIncome() {
        let totalIncome = 0;
        for (const amount of this.incomes.values()) {
            totalIncome += amount;
        }
        return totalIncome;
    },

    totalExpense() {
        let totalExpense = 0;
        for (const amount of this.expenses.values()) {
            totalExpense += amount;
        }
        return totalExpense;
    },

    accountInfo() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            totalIncome: this.totalIncome(),
            totalExpense: this.totalExpense(),
            accountBalance: this.totalIncome() - this.totalExpense(),
        };
    },

    addIncome(description, amount) {
        if (typeof amount !== "number" || amount <= 0) {
            throw new Error("Amount must be a positive number");
        }
        this.incomes.set(description, amount);
    },

    addExpense(description, amount) {
        if (typeof amount !== "number" || amount <= 0) {
            throw new Error("Amount must be a positive number");
        }
        this.expenses.set(description, amount);
    },

    accountBalance() {
        return this.totalIncome() - this.totalExpense();
    },

    saveToLocalStorage() {
        const dataToSave = {
            firstname: this.firstname,
            lastname: this.lastname,
            incomes: [...this.incomes],
            expenses: [...this.expenses],
        };
        localStorage.setItem("personAccount", JSON.stringify(dataToSave));
    },

    loadFromLocalStorage() {
        const data = JSON.parse(localStorage.getItem("personAccount"));
        if (data) {
            this.firstname = data.firstname;
            this.lastname = data.lastname;
            this.incomes = new Map(data.incomes);
            this.expenses = new Map(data.expenses);
        }
    },

};

personAccount.firstName = "User";
personAccount.lastName = "User Surname";

personAccount.addIncome("Salary", 5000);
personAccount.addIncome("Bonus", 375);

personAccount.addExpense("Credit Card Statement", 1779);

personAccount.saveToLocalStorage();
personAccount.loadFromLocalStorage();

console.log(personAccount.accountInfo());

