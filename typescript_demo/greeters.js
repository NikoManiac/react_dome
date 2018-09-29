var Student = /** @class */ (function () {
    function Student(firstName1, middleName, lastName) {
        this.firstName1 = firstName1;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + middleName + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello: " + person;
}
var user = { firstName: "Jane", lastName: "User" };
var user1 = new Student("Gennaro", "Gutmann", "Demetris");
document.body.innerHTML = greeter(user);
