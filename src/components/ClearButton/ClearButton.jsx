import "./ClearButton.css";

export default function ClearButton({ shoppingListArr, resetShoppingListArr }) {
  if (shoppingListArr.length > 0) {
    return (
      <button className="clear-btn" onClick={resetShoppingListArr}>
        Clear the list
      </button>
    );
  }
}
