export function getRandomDateArray(length: number) {
  const startDate = new Date(2022, 5, 7);
  const endDate = new Date(2022, 11, 31);
  const dateArray = [];
  for (let i = 0; i < length; i++) {
    const randomTime =
      startDate.getTime() +
      Math.random() * (endDate.getTime() - startDate.getTime());
    const randomDate = new Date(randomTime);
    dateArray.push(randomDate);
  }
  return dateArray;
}
