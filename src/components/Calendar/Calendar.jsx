export const Calendar = () => {
  const dateArray = new Array(7);

  for (let i = 0; i <= 7; i++) {
    const dat = new Date();
    dat.setDate(dat.getDate() + i);
    const fDate = dat.toDateString().split(" ");
    const finalDate = `${fDate[0]}, ${fDate[2] * 1} ${fDate[1]}`;
    dateArray[i] = finalDate;
  }

  // [dateArray[0], dateArray[1]] = ["Today", "Tomorrow"];
  //   dateArray[1] = "Tomorrow";
  //   console.log("cal::", dateArray);
  return dateArray;
};
