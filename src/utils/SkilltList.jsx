
import { useState } from "react";

const SkillsList = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const skills = {
    "Desarrollador Web": [
      "Single Page Applications (SPA)",
      "Web Apps",
    ],
    "Diseñador Web": [
      "Web corporitivas",
      "Porfolios",
      "Lading Page",
      "Sitios Web",
      "Ecommerce",
      "Tiendas Online"
    ],
  };

  const toggleItem = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <div className="container mt-10">
      <h3 className="text-4xl text-White-Principal font-semibold mb-10">¿Que hago?</h3>

      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="category p-4 mb-2 bg-Background-body border border-Violet-background rounded-lg cursor-pointer">
          <div
            className="flex justify-between items-center p-2"
            onClick={() => toggleItem(category)}
          >
            <span className="text-lg text-White-Name">{category}</span>
            <svg
              className={`arrow w-7 h-7 transform transition-transform text-Violet-background ${openCategory === category ? "rotate-180" : ""
                }`}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 13.17l5-5 1.41 1.41-6.41 6.42-6.41-6.42L7 8.17l5 5z"></path>
            </svg>
          </div>

          <ul
            className={`items border-t border-Violet-background transition-all overflow-hidden ${openCategory === category ? "max-h-40 opacity-100 py-2" : "max-h-0 opacity-0"
              }`}
          >
            {items.map((item, index) => (
              <li key={index} className="pl-4 text-White-Name text-sm">
                • {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SkillsList;
