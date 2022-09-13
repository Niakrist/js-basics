let numOne = 5;
let numTwo = 2;

let res = `numOne + numOne = ${numOne + numTwo}`;

document.write(res);

document.write("<br><br>");

document.write("1. undefined: ");
document.write(typeof(undefined));

document.write("<br>2. 0: ");
document.write(typeof(0));

document.write("<br>3. 10n: ");
document.write(typeof(10n));

document.write("<br>4. true: ");
document.write(typeof(true));

document.write("<br>5. foo: ");
document.write(typeof("foo"));

document.write("<br>6. Symbol(id): ");
document.write(typeof(Symbol("id")));

document.write("<br>7. Math: ");
document.write(typeof(Math));

document.write("<br>8. Null: ");
document.write(typeof(null));

document.write("<br>9. alert: ");
document.write(alert);