//lesson 02 complicated
//создаем переменную и присваиваем ей занчение
let num = 266219;
// создаем переменную-счетчик, которая будет хранить зачение произведения цифр переменной num
let newNum = 1;
// прописываем цикл для перебора цифр числа num
for (i = 0; i < num.toString().length; i++) {
  // присваиваем переменной-счетчику значение путем присваивания с умножением каждого итого элемента числа num, преобразованного в строку
  newNum *= num.toString()[i];
}
// возведение в степень полученного произведения цифр переменной num
newNum **= 3;
// вывод в консоль первых двух чисел возведенной в 3 степень переменной num
console.log(newNum.toString().slice(0, 2));
