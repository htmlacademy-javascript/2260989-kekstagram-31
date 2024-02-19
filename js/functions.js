function getResult (checkedString, maxSymbols) {
  return (checkedString.length <= maxSymbols) ? 'true' : 'false';
}

getResult ('проверяемая строка', 20);
getResult ('проверяемая строка', 18);
getResult ('проверяемая строка', 10);
