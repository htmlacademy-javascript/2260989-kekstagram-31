// 1-ое задание (Проверка на количество символов)
function result(string, maxSymbols) {
  //Добавляем условие через тернарный оператор
  return string.length <= maxSymbols ? "true" : "false";
}

result("проверяемая строка", 20);
result("проверяемая строка", 18);
result("проверяемая строка", 10);
