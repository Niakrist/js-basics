let numOne = 5;
let numTwo = 2;

let res = `numOne + numOne = ${numOne + numTwo}`;

document.write(res);

document.write("<br><br>");
document.write("<b>typeof:</b>");
document.write("<br><br>");

document.write("1. undefined: ");
document.write(typeof(undefined));

document.write("<br>2. 0: ");
document.write(typeof(0));

document.write("<br>21. 10: ");
document.write(typeof 10);

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


document.write("<br><br>");
document.write("<b>prompt - Введите число:</b>");
document.write("<br><br>");
let promptResult = prompt("Введите число", [1]);
document.write(`Вы ввели число: ${promptResult}`);

document.write("<br><br>");
document.write("<b>confirm - Ты изучаешь JS?</b>");
document.write("<br><br>");

let confirmResult = confirm("Ты изучаешь JS?");

if (confirmResult) {
  document.write('Красавчик');
} else {
  document.write('Пора начинать');
}

document.write("<br><br>");
document.write("Преобразование типов");
document.write("<br><br>");
document.write("Строковое");
document.write("<br><br>");

let value = true; // boolean
alert (typeof value); // напишет boolean, так как преобразуется в текст 
document.write(value); // будет true

document.write("<br><br>");
document.write("Численное");
document.write("<br><br>");
document.write("10 / 5");

let beStr = "hello," + " " + "world";
document.write(beStr);


let int = '10';

console.log(int);
console.log(+int);

let boo = true;

console.log(boo);
console.log(+boo);

let strEmpty = "";
console.log(strEmpty);
console.log(+strEmpty);

let a = 1, b = 1;

let c = ++a; // ? 2 / 2
let d = b++; // ? 1 / 2


document.write('a' > 'A');

let quest = prompt("В каком году был 2015 год");

if (Number(quest) === 2015) {
  alert('Вы правы');
} else {
  alert('А вот и нет');
}