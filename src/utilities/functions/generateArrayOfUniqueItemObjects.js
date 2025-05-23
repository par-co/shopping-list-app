import ItemObject from "../classes/ItemObject";
import generateArrayOfUniqueStrings from "./generateArrayOfUniqueStrings";
import { v4 as uuidv4 } from "uuid";

export default function generateArrayOfUniqueItemObjects(numberOfItemObjects) {
  const arrayOfUniqueStrings = generateArrayOfUniqueStrings(
    numberOfItemObjects
  );

  const arrayOfUniqueItemObjects = arrayOfUniqueStrings.map(
    string => new ItemObject(uuidv4(), string, false)
  );

  return arrayOfUniqueItemObjects;
}
