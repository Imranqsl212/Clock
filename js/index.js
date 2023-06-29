const clockTime = () => {
  const now = new Date();
  const time = document.querySelector(".wrapper h1");
  let hours = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();
  const formattedMin = min < 10 ? `0${min}` : min;
  const formattedSec = sec < 10 ? `0${sec}` : sec;
  const formattedHours = hours < 10 ? `0${hours}` : hours;
  time.textContent = `${formattedHours}:${formattedMin}:${formattedSec}`;
};
const showDay = () => {
  const day = new Date();
  const numDay = day.getDay();
  let weekDay = "";
  switch (numDay) {
    case 1:
      weekDay = "Понедельник";
      break;
    case 2:
      weekDay = "Вторник";
      break;
    case 3:
      weekDay = "Среда";
      break;
    case 4:
      weekDay = "Четверг";
      break;
    case 5:
      weekDay = "Пятница";
      break;
    case 6:
      weekDay = "Суббота";
      break;
    case 7:
      weekDay = "Воскресенье";
      break;
    default:
      weekDay = "error";
      break;
  }
  const daynumber = day.getDate()
  const monthNum = day.getMonth() + 1;//сделал +1 чтоб не с нуля начиналось а как обычно с 1
  let month = "";
  switch (monthNum) {
    case 1:
      month = "Январь";
      break;
    case 2:
      month = "Февраль";
      break;
    case 3:
      month = "Март";
      break;
    case 4:
      month = "Апрель";
      break;
    case 5:
      month = "Май";
      break;
    case 6:
      month = "Июнь";
      break;
    case 7:
      month = "Июль";
      break;
    case 8:
      month = "Август";
      break;
    case 9:
      month = "Сентябрь";
      break;
    case 10:
      month = "Октябрь";
      break;
    case 11:
      month = "Ноябрь";
      break;
    case 12:
      month = "Декабрь";
      break;
    default:
      month = "error";
      break;
  }
  document.querySelector(".wrapper h2").textContent = `${weekDay} , ${month} ${daynumber}`;
};
setInterval(clockTime, 1000);
clockTime();
showDay();
//я бы мог сделать лучше, но хотелось побыстрее дз сделать а так у меня всё работает,
//я не спал до 00:00:00 чтоб посмотреть обновилась ли дата и день недели 
//но когда перезапустил она обновилась
