export const getGreeting = () => {
  let today = new Date();
  let currentHours = today.getHours();

  if (currentHours >= 0 && currentHours < 5) {
    return "Good Evening";
  } else if (currentHours >= 5 && currentHours < 12) {
    return "Good Morning";
  } else if (currentHours >= 12 && currentHours < 6) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
};


export const getCurrentAge = (birthDay = 30, birthMonth = 0, birthYear = 2000) => {

  let today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();

  if(currentMonth > birthMonth) {
    return currentYear - birthYear;
  } else if(currentMonth <= birthMonth) {
    const currentDay = today.getDate();
    if(currentDay < birthDay) {
      return currentYear - birthYear - 1;
    } else {
      return currentYear - birthYear;
    }
  }

}