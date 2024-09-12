import React, { useState } from "react";

const menuItems = [
  { id: 1, label: "DECOUVERT" },
  { id: 2, label: "DISCUTEZ" },
  { id: 3, label: "PARTAGEZ" },
  { id: 4, label: "ORGANISEZ" },
];

function TimelineMenu() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (id) => {
    setSelectedItem(id);
  };

  return (
    <div className="lg:flex lg:flex-row lg:justify-around lg:items-center">
      <div className="relative flex flex-col items-start p-4">
        {menuItems.map((item, index) => (
          <div
            key={item.id}
            className="flex flex-col items-start relative mb-8"
          >
            {/* Timeline Item */}
            <div
              onClick={() => handleClick(item.id)}
              className={`flex items-center cursor-pointer transition-all ${
                selectedItem === item.id ? "text-green" : "text-gray-700"
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full border-2 mr-4 transition-colors ${
                  selectedItem === item.id
                    ? "bg-green"
                    : "bg-gray-200 border-gray-200"
                }`}
              ></div>
              <span
                className={`transition-transform duration-300 text-3xl ${
                  selectedItem === item.id
                    ? "text-5xl font-bold"
                    : "text-base text-gray-500 text-4xl"
                }`}
              >
                {item.label}
              </span>
            </div>
            {/* Vertical Line */}
            {index < menuItems.length - 1 && (
              <div
                className={`h-12 bg-gray-200 border-gray-200 border-l-2 absolute top-1/2 transform -translate-y-1/2 left-2 transition-colors ${
                  selectedItem === item.id
                    ? "border-blue-500"
                    : "border-gray-400"
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>
      <div className="w-96 h-8 bg-green">
        <p>Bonjour</p>
      </div>
    </div>
  );
}

export default TimelineMenu;
