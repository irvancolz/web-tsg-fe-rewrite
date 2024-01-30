const shortMonthNames = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

export function formatDate(time: string) {
  const date = new Date(time);
  const month = shortMonthNames[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}
