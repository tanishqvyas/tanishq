const monthNames = [
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

const greetingsArray = [
  "Good Evening",
  "Good Evening",
  "Good Evening",
  "Good Evening",
  "Good Evening",
  "Good Morning",
  "Good Morning",
  "Good Morning",
  "Good Morning",
  "Good Morning",
  "Good Morning",
  "Good Morning",
  "Good Afternoon",
  "Good Afternoon",
  "Good Afternoon",
  "Good Afternoon",
  "Good Afternoon",
  "Good Afternoon",
  "Good Evening",
  "Good Evening",
  "Good Evening",
  "Good Evening",
  "Good Evening",
  "Good Evening",
];

export const getGreeting = () => {
  let today = new Date();
  let currentHours = parseInt(today.getHours());
  return greetingsArray[currentHours];
};

export const getCurrentAge = (
  birthDay = 30,
  birthMonth = 0,
  birthYear = 2000
) => {
  let today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();

  if (currentMonth > birthMonth) {
    return currentYear - birthYear;
  } else if (currentMonth <= birthMonth) {
    const currentDay = today.getDate();
    if (currentDay < birthDay) {
      return currentYear - birthYear - 1;
    } else {
      return currentYear - birthYear;
    }
  }
};

export const formatDate = (datetimeString) => {
  let today = new Date(datetimeString);

  return (
    monthNames[today.getMonth()] +
    " " +
    today.getDate() +
    ", " +
    today.getFullYear()
  );
};
