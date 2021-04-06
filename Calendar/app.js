const date = new Date();
//Date represents a Javascript object that renders a single moment in time
//It is the number of miliseconds from midnight on January 1, 1970, UTC. till today.
//This object has a bunch of methods that helps you to make conversions
const renderCalendar = () => {
  date.setDate(1);
  //setDate() sets the day of the month for a specified date according to local time, built in method of Date object

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
   //getFullYear() returns the year in the 4 digits for 4-digit format, according to local time.
   //getMonth() returns the month in an array, so it begins with 0 and goes to 11, that's why we +1
   //getDate() returns the day of month, 1 to 31, according to local time
  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;
   //months array
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  //adding the current month to the h1 with class date (the top of calendar, where the month name is written).
  document.querySelector(".date h1").innerHTML = months[date.getMonth()];
  //This method below is the "mark" right below the month name, the toDateString returns "date" portion of the Date as 'Thu Apr 1 2013', for example.
  document.querySelector(".date p").innerHTML = new Date().toDateString();
  //the days string that will hold the current value
  let days = "";
  
  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();