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
        <div key={item.id} className="flex flex-col items-start">
          {/* Timeline Item */}
          <div
            onClick={() => handleClick(item.id)}
            className={`flex items-center cursor-pointer transition-colors mb-4 ${
              selectedItem >= item.id ? "text-white" : "text-gray-700"
            }`}
          >
            <div
              className={`w-4 h-4 rounded-full border-2 mr-4 transition-colors ${
                selectedItem >= item.id
                  ? "border-blue-500 bg-blue-500"
                  : "border-gray-400"
              }`}
            ></div>
            <span className="text-lg">{item.label}</span>
          </div>
          {/* Vertical Line */}
          {index < menuItems.length - 1 && (
            <div
              className={`h-8 border-l-2 ml-2 transition-colors ${
                selectedItem >= item.id + 1
                  ? "border-blue-500"
                  : selectedItem === item.id
                  ? "border-blue-300"
                  : "border-gray-400"
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
}

export default TimelineMenu;
