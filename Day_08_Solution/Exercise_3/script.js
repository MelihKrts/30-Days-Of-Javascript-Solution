// Day 8 Exercise Solution 

// Day 8 Exercise Level 3 Solution

// Exercise 3.1

const personAccount = {
    firtsName: "Melih",
    lastName: "Karataş",
    incomes: {
        salary: 15000,
        courses: 3745
    },
    expenses: {
        rent: 4500,
        food: 2975
    },

    totalIncome: function () {
        let total = 0;
        for (const income of Object.keys(personAccount.incomes)) {
            total += personAccount.incomes[income];
        }
        return total;
    },

    totalExpense: function () {
        let total = 0;
        for (const charge of Object.keys(personAccount.expenses)) {
            total += personAccount.expenses[charge];
        }
        return total
    },

    accountInfo() {
        return `${this.firtsName} ${this.lastName}`;
    },

    addIncome(incomeName, value) {
        this.incomes[incomeName] = value;
    },

    addExpense(expenseName, value) {
        this.expenses[expenseName] = value;
    },

    accountBalance: function () {
        return this.totalIncome() - this.totalExpense()
    }
}

console.log(personAccount.accountInfo());
personAccount.addIncome("Annual", 15000);
personAccount.addExpense("Art", 750);
console.log("Total Income: ", personAccount.totalIncome());
console.log("Balance: ", personAccount.accountBalance());

// Exercise 3.1 Solution

const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
]

function signUp(newUser) {
    const existingUser = users.find(user => user.email === newUser.email);
    if (existingUser) {
      return "User already has an account.";
    }
  
    users.push(newUser);
    return "User added successfully.";
  }

  function signIn(email, password) {
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      user.isLoggedIn = true;
      return "User signed in successfully.";
    }
  
    return "Invalid email or password.";
  }


//   Exercise 3.3 Solution

function rateProduct(productId, userId, rating) {
    const product = products.find(product => product._id === productId);
    if (product) {
      product.ratings.push({ userId, rate: rating });
      return "Product rated successfully.";
    }
  
    return "Product not found.";
  }

  function averageRating(productId) {
    const product = products.find(product => product._id === productId);
    if (product && product.ratings.length > 0) {
      const totalRatings = product.ratings.reduce((sum, rating) => sum + rating.rate, 0);
      const average = totalRatings / product.ratings.length;
      return average.toFixed(2); // Limit to 2 decimal places
    }
  
    return "No ratings available for this product.";
  }
  
  

//  Exercise 3.4

const likeProduct = (productId, userId) => {
    const product = products.find(product => product._id === productId);
    if (product) {
      const userLiked = product.likes.includes(userId);
      if (userLiked) {
        product.likes = product.likes.filter(id => id !== userId);
        console.log('Ürün beğeniden kaldırıldı:', product);
      } else {
        product.likes.push(userId);
        console.log('Ürün beğenildi:', product);
      }
    } else {
      console.log('Ürün bulunamadı.');
    }
  };

  console.log(signUp("melih@melih.com",123123));
  console.log(signUp({
    _id: 'xyz123',
    username: 'John',
    email: 'john@example.com',
    password: 'password',
    createdAt: new Date(),
    isLoggedIn: false
  }));
  
  console.log(signIn('alex@alex.com', '123123'));
  
  console.log(rateProduct('eedfcf', 'ab12ex', 4.2));
  
  console.log(averageRating('hedfcg'));