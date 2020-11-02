export const days = [
    "Sunday", 
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday", 
    "Friday",
    "Saturday", 
];

export const months = [
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

export function theDate(date) {
    const dayStr = days[date.getDay()];
    const monthStr = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
  
    return `${dayStr}, ${monthStr} ${day}, ${year}`;
}