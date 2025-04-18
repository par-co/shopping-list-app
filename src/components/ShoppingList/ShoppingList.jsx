import "./ShoppingList.css";

export default function ShoppingList({
  shoppingListArr,
  handleCheckbox,
  handleDeleteItem
}) {
  const renderShoppingList = () => {
    return shoppingListArr.map(item => (
      <li className="row" key={item.id}>
        <input
          type="checkbox"
          id={item.id}
          checked={item.checked}
          onChange={() => handleCheckbox(item.id)}
        />
        <label htmlFor={item.id} className={`line-through-${item.checked}`}>
          {item.name}
        </label>
        <button
          className="delete-btn"
          onClick={() => handleDeleteItem(item.id)}
        >
          Delete
        </button>
      </li>
    ));
  };

  return shoppingListArr.length > 0 ? (
    <ul className="shopping-list">{renderShoppingList()}</ul>
  ) : null;
}
