import React, { useState } from "react";

const menuItems = [
  { id: 1, label: "Step 1" },
  { id: 2, label: "Step 2" },
  { id: 3, label: "Step 3" },
  { id: 4, label: "Step 4" },
];

function TimelineMenu() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (id) => {
    setSelectedItem(id);
  };

  return (
    <div className="flex flex-col items-start p-4">
      {menuItems.map((item, index) => (
        <div key={item.id} className="flex items-center">
          {/* Point circulaire */}
          <div className="flex flex-col items-center">
            <div
              onClick={() => handleClick(item.id)}
              className={`w-4 h-4 rounded-full border-2 cursor-pointer transition-colors ${
                selectedItem === item.id
                  ? "border-blue-500 bg-blue-500"
                  : "border-gray-400"
              }`}
            ></div>
            {/* Barre verticale entre les éléments */}
            {index < menuItems.length - 1 && (
              <div
                className={`h-10 border-l-2 transition-colors ${
                  selectedItem === item.id ||
                  selectedItem === menuItems[index + 1].id
                    ? "border-blue-500"
                    : "border-gray-400"
                }`}
              ></div>
            )}
          </div>
          {/* Texte de l'élément */}
          <span
            onClick={() => handleClick(item.id)}
            className={`ml-4 cursor-pointer transition-colors ${
              selectedItem === item.id
                ? "text-white bg-blue-500 p-2 rounded"
                : "text-gray-700"
            }`}
          >
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export default TimelineMenu;
