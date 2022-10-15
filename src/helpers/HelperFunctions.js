import dateFormat from "dateformat";

export const getFormattedDate = () => {
  const date = new Date();
  var amOrPm = date.getHours() < 12 ? " AM" : " PM";
  date.toLocaleString("en-US");
  const dateFormatted = dateFormat(
    date.toString(),
    "dddd, mmmm dS, yyyy hh:mm"
  );
  //to get Tuesday, April 30th, 2019.
  return (dateFormatted + amOrPm).toString();
};
export const getFormattedDate2 = () => {
  const date = new Date();
  var amOrPm = date.getHours() < 12 ? " AM" : " PM";
  date.toLocaleString("en-US");
  const dateFormatted = dateFormat(date.toString(), "ddd, mmm dS hh:mm");
  //to get Tuesday, April 30th, 2019.
  return (dateFormatted + amOrPm).toString();
};
