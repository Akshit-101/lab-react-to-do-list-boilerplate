import React from "react";

export default function DisplayItems({ listOfItems, handleUpdate, handleDelete }) {
  return (
    <div className="display-items-container">
      {listOfItems.map((currItem) => (
        <div key={currItem.key} className="display-item">
          <input
            type="text"
            value={currItem.itemDescription}
            onChange={(event) => handleUpdate(event.target.value, currItem.key)}
          />
          <button onClick={() => handleDelete(currItem.key)}>Delete Item</button>
        </div>
      ))}
    </div>
  );
}
