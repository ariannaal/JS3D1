// Crea una classe User per la creazione di oggetti di tipo “utente”. Il suo costruttore dovrà inizializzare ogni oggetto utente con i seguenti attributi:- firstName- lastName- age- location

//Aggiungi alla classe User anche un metodo che restituisca il confronto con l'età di un'altra persona. Ad esempio, date due istanze della classe utente “x” e “y” inizializzate con le proprietà sopra descritte, il metodo dovrà restituire una frase simile a “x è più vecchio di y” a seconda del risultato del confronto.
// Crea degli oggetti a partire dalla classe User e verifica che la comparazione tra le età funzioni correttamente.

console.log("Esercizio 1");

class User {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }
    isTheAgeTheSame(userToCompare) {

         if (this.age === userToCompare.age) {
            return `${this.firstName} ${this.lastName} e ${userToCompare.firstName} ${userToCompare.lastName} hanno la stessa età.`
        } else if (this.age > userToCompare.age) {
            return `${this.firstName} ${this.lastName} è più vecchia di ${userToCompare.firstName} ${userToCompare.lastName}`
        } else {
            return `${userToCompare.firstName} ${userToCompare.lastName} è più vecchia di ${this.firstName} ${this.lastName}`
         }
    }
}



const user1 = new User("Taylor", "Swift", 34, "Pennsylvania");
const user2 = new User("Lana", "Del Rey", 38, "New York");

console.log(user1);
console.log(user2);

// console.log(user1.isTheAgeTheSame(user2));
const result = user1.isTheAgeTheSame(user2); //user2 è il parametro di confronto. user1 è l'oggetto con cui confronto 
console.log(result);


//
console.log("Metodo statico");


class UserStatic {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    
    static isTheAgeTheSameStatic(user3, user4) {
        if (user3.age === user4.age) {
            return `${user3.firstName} ${user3.lastName} e ${user4.firstName} ${user4.lastName} hanno la stessa età.`
        } else if (user3.age > user4.age) {
            return `${user3.firstName} ${user3.lastName} è più vecchio di ${user4.firstName} ${user4.lastName}`
        } else {
            return `${user4.firstName} ${user4.lastName} è più vecchio di ${user3.firstName} ${user3.lastName}`
         }
    }


};

const user3 = new UserStatic("Billie", "Eilish", 22, "California");
const user4 = new UserStatic("Bruno", "Mars", 38, "Hawaii");

console.log(UserStatic.isTheAgeTheSameStatic(user3, user4));




