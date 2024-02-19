// 1-ое задание
function result(string, maxSymbols) {
  //Добавляем условие через тернарный оператор
  return (string.length <= maxSymbols) ? 'true' : 'false';
}

result('проверяемая строка', 20);
result('проверяемая строка', 18);
result('проверяемая строка', 10);

// 2-ое задание (1 вариант)
function isPalindrome(string) {
  //Удаляем все пробелы и приводим строку к нижнему регистру
  const stringLowerCase = string.replace(/ /g, '').toLowerCase();
  //Используем метод split() для разделения строки на отдельные элементы.
  //Используем метод reverse() для расположения всех элементов в обратном порядке.
  //Полученные элементы при помощи метода join() объединяем обратно в строку.
  const reversedString = stringLowerCase.split('').reverse().join('');
  //Проверяем является ли строка палиндромом.
  return stringLowerCase === reversedString;
}

isPalindrome('топот');
isPalindrome('ДовОд');
isPalindrome('Кекс');
isPalindrome('Лёша на полке клопа нашёл ');

// 2 вариант
function palindrome(str) {
  // Удаляем все пробелы и приводим строку к нижнему регистру
  const cleanStr = str.replace(/ /g, '').toLowerCase();
  // Проверяем, является ли строка палиндромом
  for (let i = 0; i < cleanStr.length / 2; i++) {
    if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

palindrome('ДовОд'); // Вернет true
palindrome('Лёша на полке клопа нашёл '); // Вернет true
palindrome('Кекс всему голова'); //Вернет false

//Дополнительное задание
function extractNumbers(input) {
  let str = input;

  // Если передано число, преобразуем его в строку
  if (typeof input === 'number') {
    str = input.toString();
  }
  const digits = str.match(/\d/g); // Извлекаем все цифры от 0 до 9 из строки в массив
  if (digits === null) {
    return NaN; // Если цифр в массиве не обнаружено, возвращаем NaN
  }

  const number = parseInt(digits.join(''), 10); // Преобразуем массив цифр в строку и затем в число
  return number;
}

extractNumbers('2023 год');
extractNumbers('ECMAScript 2022');
extractNumbers('1 кефир, 0.5 батона');
extractNumbers('агент 007');
extractNumbers('а я томат');
extractNumbers(2023);
extractNumbers(-1);
extractNumbers(1.5);
