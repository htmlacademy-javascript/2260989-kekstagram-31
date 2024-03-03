// 1-ое задание (Проверка на количество символов)
function result(string, maxSymbols) {
  //Добавляем условие через тернарный оператор
  return string.length <= maxSymbols ? 'true' : 'false';
}

result('проверяемая строка', 20);
result('проверяемая строка', 18);
result('проверяемая строка', 10);

// Делу - время
function checkMeetingTime(startWork, endWork, startMeeting, meetingDuration) {

  // Преобразуем принятое время в объект Date
  const workStart = new Date('2024-03-03 ${startWork}');
  const workEnd = new Date('2024-03-03 ${endWork}');
  const meetingStart = new Date('2024-03-03 ${startMeeting}');

  // Прибавим продолжительность встречи к времени начала встречи
  meetingStart.setMinutes(meetingStart.getMinutes() + meetingDuration);

  // Проверяем попадает ли время встречи в рабочее время
  return meetingStart >= workStart && meetingStart <= workEnd;
}

checkMeetingTime('08:00', '17:30', '14:00', 90);
checkMeetingTime('8:0', '10:0', '8:0', 120);
checkMeetingTime('08:00', '14:30', '14:00', 90);
checkMeetingTime('14:00', '17:30', '08:0', 90);
checkMeetingTime('8:00', '17:30', '08:00', 900);
