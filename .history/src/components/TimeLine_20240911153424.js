import React, { useState } from "react";

const menuItems = [
  { id: 1, label: "Étape 1", description: "Première étape du processus" },
  { id: 2, label: "Étape 2", description: "Deuxième étape du processus" },
  { id: 3, label: "Étape 3", description: "Troisième étape du processus" },
];

function TimelineMenu() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (id) => {
    setSelectedItem(id);
  };

  return (
    <div className="timeline">
      {menuItems.map((item, index) => (
        <div key={item.id} className="timeline-item">
          {/* Ligne verticale animée */}
          {index > 0 && (
            <div
              className={`timeline-line ${
                selectedItem >= menuItems[index - 1].id
                  ? "completed animate-line"
                  : "incomplete"
              }`}
            ></div>
          )}
          {/* Élément de timeline avec description */}
          <div
            onClick={() => handleClick(item.id)}
            className={`timeline-dot ${
              selectedItem >= item.id ? "active" : ""
            }`}
          >
            <span className="timeline-label">{item.label}</span>
            <p className="timeline-description">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TimelineMenu;
