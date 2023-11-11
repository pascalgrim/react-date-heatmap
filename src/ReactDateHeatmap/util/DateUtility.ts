import { DateEntry } from "../types";

export function getEarliestDate(dates: Date[]) {
  let earliestDate = dates[0];

  for (let i = 1; i < dates.length; i++) {
    if (dates[i] < earliestDate) {
      earliestDate = dates[i];
    }
  }

  return earliestDate;
}
export function getLatestDate(dates: Date[]) {
  let latestDate = dates[0];

  for (let i = 1; i < dates.length; i++) {
    if (dates[i] > latestDate) {
      latestDate = dates[i];
    }
  }

  return latestDate;
}

export function getDateEntries(
  activeDates: Date[],
  startDate: Date,
  endDate: Date
) {
  const dateEntries = [];
  const currentDate = new Date(startDate);
  endDate.setHours(23, 59, 59, 999);
  while (currentDate <= endDate) {
    const tmpDate = new Date(currentDate);
    const entry: DateEntry = {
      date: tmpDate,
      formatted: formatDateToDDMMYYYY(tmpDate),
      active: getActiveState(tmpDate, activeDates),
      quantity: getNumberOfDatesInArray(tmpDate, activeDates),
    };
    dateEntries.push(entry);
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return dateEntries;
}

function getNumberOfDatesInArray(date: Date, dateArray: Date[]) {
  let counter = 0;
  dateArray.forEach((d) => {
    if (formatDateToDDMMYYYY(d) === formatDateToDDMMYYYY(date)) {
      counter++;
    }
  });
  return counter;
}

function getActiveState(date: Date, dates: Date[]) {
  return dates.some((d) => {
    return formatDateToDDMMYYYY(date) === formatDateToDDMMYYYY(d);
  });
}

function formatDateToDDMMYYYY(date: Date) {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Monate sind 0-basiert
  const year = date.getFullYear().toString();

  return `${day}.${month}.${year}`;
}
export function numberToMonthName(monthNumber: number) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  if (monthNumber >= 1 && monthNumber <= 12) {
    return months[monthNumber - 1];
  } else {
    return "invalid month number";
  }
}
