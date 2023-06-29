// Exercise 3

// Exercise 3.1

const word = "Love is the best thing in this world. Some found their love and some are still looking for their love";
var regex = /love/gi;
console.log(word.match(regex));
console.log(word.match(regex).length);

// Exercise 3.2

const because = "You cannot end a sentence with because because because is a conjunction";
var regex = /because/gi;
console.log(because.match(regex));
console.log(because.match(regex).length);

// Exercise 3.3

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

const replace = sentence.replace(/[^a-zA-Z0-9 ]/g, '');

const mostAppearingWord = (str) => {
    let words = str.split(' ')
    let uniqueWords = words.filter((word, i) => word[i])
    let resultContent = 0;
    let result = '';

    for (let i in uniqueWords) {
        let count = 0;
        for (let j in words) if (words[j] == uniqueWords[i]) count++
        if (resultContent < count) {
            resultContent = count;
            result = uniqueWords[i]
        }
    }

    return result
}

console.log(replace);
console.log(mostAppearingWord(replace));

// Exercise 3.4
let text = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month."
let salaries = text.match(/\d+/g);
let totalAnnualIncome = 0;
salaries.forEach(element => {
    totalAnnualIncome += Number(element);
})
console.log(totalAnnualIncome
)






