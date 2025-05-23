import "./Main.css";
import groceries from "../../assets/images/groceries.png";
import { useState, useEffect } from "react";
import MessageObject from "../../utilities/classes/MessageObject";
import ItemObject from "../../utilities/classes/ItemObject";
import { v4 as uuidv4 } from "uuid";
import Input from "../Input/Input";
import Message from "../Message/Message";
import ShoppingList from "../ShoppingList/ShoppingList";
import ClearButton from "../ClearButton/ClearButton";

export default function Main() {
  const initialInputValue = "";
  const [inputValue, setInputValue] = useState(initialInputValue);

  const initialShoppingListArr = [];
  const [shoppingListArr, setShoppingListArr] = useState(
    initialShoppingListArr
  );

  const initialMessageObj = new MessageObject();
  const [messageObj, setMessageObj] = useState(initialMessageObj);

  const resetInputValue = () => {
    setInputValue(initialInputValue);
  };

  const resetShoppingListArr = () => {
    setShoppingListArr(initialShoppingListArr);
  };

  const resetMessageObj = () => {
    setMessageObj(initialMessageObj);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const hasDuplicate = () => {
    if (inputValue.trim() !== "") {
      return shoppingListArr.some(
        (item) => item.name === inputValue.trim().toLowerCase()
      );
    } else {
      return false;
    }
  };

  const isTheInputValueValid = () => {
    if (inputValue.trim() === "" || hasDuplicate() === true) {
      return false;
    } else {
      return true;
    }
  };

  const add = () => {
    const updatedShoppingListArr = [
      ...shoppingListArr,
      new ItemObject(uuidv4(), inputValue.trim().toLowerCase(), false),
    ];
    setShoppingListArr(updatedShoppingListArr);
    resetInputValue();
  };

  const empty = () => {
    const updatedMessageObj = new MessageObject(
      "Please type something and then click the Add button or press Enter.",
      "empty"
    );
    setMessageObj(updatedMessageObj);
    resetInputValue();
  };

  const duplicate = () => {
    const updatedMessageObj = new MessageObject(
      "The item is already in the list.",
      "duplicate"
    );
    setMessageObj(updatedMessageObj);
    resetInputValue();
  };

  const dontAdd = () => {
    if (inputValue.trim() === "") {
      empty();
    } else {
      duplicate();
    }
  };

  const addOrNot = () => {
    if (isTheInputValueValid() === true) {
      add();
    } else {
      dontAdd();
    }
  };

  const handleClickAddBtn = () => {
    addOrNot();
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      addOrNot();
    }
  };

  const handleCheckbox = (id) => {
    const updatedShoppingListArr = shoppingListArr.map((eachItem) =>
      eachItem.id === id
        ? { ...eachItem, checked: !eachItem.checked }
        : eachItem
    );
    setShoppingListArr(updatedShoppingListArr);
  };

  const handleDeleteItem = (id) => {
    const updatedShoppingListArr = shoppingListArr.filter(
      (eachItem) => eachItem.id !== id
    );
    setShoppingListArr(updatedShoppingListArr);
  };

  const handleSuccess = () => {
    if (shoppingListArr.length > 0) {
      const allChecked = !shoppingListArr.some(
        (item) => item.checked === false
      );
      if (allChecked) {
        const updatedMessageObj = new MessageObject("You're done!", "success");
        setMessageObj(updatedMessageObj);
      }
    }
  };

  useEffect(() => {
    resetMessageObj();
    handleSuccess();
  }, [shoppingListArr]);

  return (
    <main className="main-component">
      <img src={groceries} alt="groceries" />
      <Input
        labelText="Add an item to the list:"
        placeholder="type here..."
        inputValue={inputValue}
        handleChange={handleChange}
        handleEnter={handleEnter}
        handleClickAddBtn={handleClickAddBtn}
      />
      <Message messageObj={messageObj} />
      <ShoppingList
        shoppingListArr={shoppingListArr}
        handleDeleteItem={handleDeleteItem}
        handleCheckbox={handleCheckbox}
      />
      <ClearButton
        shoppingListArr={shoppingListArr}
        resetShoppingListArr={resetShoppingListArr}
      />
    </main>
  );
}
