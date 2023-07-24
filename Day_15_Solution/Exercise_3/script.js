// Day 15 Exercise Solution 

// Day 15 Exercise Level 3 Solution

// Exercise 3.1

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

class Statistic {
    constructor(data) {
        this.data = data;
    }

    count() {
        return this.data.length
    }

    sum() {
        return this.data.reduce((acc, val) => acc + val, 0);
    }

    min() {
        return Math.min(...this.data);
    }

    max() {
        return Math.max(...this.data);
    }

    range() {
        return this.max() - this.min();
    }

    mean() {
        return this.sum() / this.count();
    }

    median() {
        const sorted = this.data.slice().sort((a, b) => a - b);
        const middleValue = Math.floor(sorted.length / 2);
        if (sorted % 2 == 0) {
            return (sorted[middleValue - 1] + sorted[middleValue]) / 2;
        }
        else {
            return sorted[middleValue];
        }
    }

    mode() {
        const frequency = {};
        this.data.forEach((val) => {
            frequency[val] = (frequency[val] || 0) + 1;
        });

        let modeValue;
        let modeCount = 0;
        for (const val in frequency) {
            if (frequency[val] > modeCount) {
                modeValue = val;
                modeCount = frequency[val];
            }
        }

        return { mode: Number(modeValue), count: modeCount };
    }

    var() {
        const mean = this.mean();
        const squarred = this.data.map((val) => (val - mean) ** 2);
        return this.sumOfArray(squarred) / this.count();
    }

    std() {
        return Math.sqrt(this.var());
    }

    freqDist() {
        const frequency = {};
        this.data.forEach((val) => {
            frequency[val] = (frequency[val] || 0) + 1;
        });

        const sortedFrequency = Object.entries(frequency).sort((a, b) => b[1] - a[1]);
        return sortedFrequency.map(([value, count]) => [count, Number(value)]);
    }

    sumOfArray(array) {
        return array.reduce((acc, val) => acc + val, 0);
    }
}

const statistic = new Statistic(ages);

console.log('Count:', statistic.count()); // 25
console.log('Sum: ', statistic.sum()); // 744
console.log('Min: ', statistic.min()); // 24
console.log('Max: ', statistic.max()); // 38
console.log('Range: ', statistic.range()); // 14
console.log('Mean: ', statistic.mean()); // 29.76
console.log('Median: ', statistic.median()); // 29
console.log('Mode: ', statistic.mode()); // { mode: 26, count: 5 }
console.log('Variance: ', statistic.var()); // 17.507199999999996
console.log('Standard Deviation: ', statistic.std()); // 4.187006720096438
console.log('Frequency Distribution: ', statistic.freqDist());

// Exercise 3.2

class PersonAccount {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.incomes = new Map();
        this.expenses = new Map();
    }

    addIncome(description, amount) {
        this.incomes.set(description, amount);
    }

    addExpense(description, amount) {
        this.expenses.set(description, amount);
    }

    accountInfo() {
        return `Person Account Info\nFirst name: ${this.firstName}, Last name: ${this.lastName}, Total Income: ${this.totalIncome()}, Total Expenses: ${this.totalExpense()}, Account Balanced: ${this.accountBalance()}`;
    }

    totalIncome() {
        let total = 0;
        for (const amount of this.incomes.values()) {
            total += amount;
        }
        return total;
    }

    totalExpense() {
        let total = 0;
        for (const amount of this.expenses.values()) {
            total += amount;
        }
        return total;
    }

    accountBalance() {
        return this.totalIncome() - this.totalExpense();
    }
}

const person = new PersonAccount("Melih", "Karataş");

person.addIncome("Salary", 12000);
person.addIncome("Online Courses", 2575);

person.addExpense("Rent", 1754);
person.addExpense("Credit Card Statement", 3691.04);

console.log(`Total Income: ${person.totalIncome()}`);
console.log(`Total Expense: ${person.totalExpense()}`);
console.log(`Account Balance Details: ${person.accountBalance()}`);
console.log(person.accountInfo());


