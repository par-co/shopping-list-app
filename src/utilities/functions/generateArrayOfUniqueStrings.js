export default function generateArrayOfUniqueStrings(numberOfStrings) {
  let arrayOfUniqueStrings = [];

  for (let i = 1; i <= numberOfStrings; i++) {
    arrayOfUniqueStrings.push(`string${i}`);
  }

  return arrayOfUniqueStrings;
}
