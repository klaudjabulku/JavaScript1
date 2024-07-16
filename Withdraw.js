function withdraw (person, amount){
    if (amount > person.balance){
        console.log ("You don't have enough money! Save some more money")
    }
    else {
        person.balance -= amount;
        console.log ("Withdrawal done successfully!. Your balance now is:" + person.balance)
    }
};

let personKlaudja = {
    balance: 15000,
    firstName: 'Klaudja'
};

withdraw (personKlaudja, 10000);
withdraw(personKlaudja, 5000);
withdraw(personKlaudja, 20000);
