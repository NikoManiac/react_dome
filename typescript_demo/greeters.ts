interface Person {
    firstName: string,
    lastName: string
}

class Student {
    fullName: string;
    constructor(public firstName: string, public middleName: string, public lastName: string) {
        this.fullName = firstName + middleName + lastName;

    }
}
function greeter(person: Person) {
    return "Hello: " + person;
}

let user = { firstName: "Jane", lastName: "User" };

let user1 = new Student("Gennaro", "Gutmann", "Demetris")
document.body.innerHTML = greeter(user);
