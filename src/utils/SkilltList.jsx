
import { useState } from "react";

const SkillsList = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const skills = {
    "Desarrollador Web": [
      "Single Page Applications (SPA)",
      "Web Apps",
    ],
    "Diseñador Web": [
      "Web corporativas",
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
    <div class="container">
      <h2 class="text-lg mb-2 text-Violet-text mt-10">Un poco sobre mi</h2>
      <h3 class="text-4xl text-Color-titulo font-semibold mb-10">¿Que hago?</h3>

      {Object.entries(skills).map(([category, items]) => (
        <div key={category} class="category p-2 mb-6 bg-Background-body border border-Violet-background rounded-lg cursor-pointer">
          <div
            class="flex justify-between items-center p-2"
            onClick={() => toggleItem(category)}
          >
            <span class="text-lg text-Color-titulo">{category}</span>
            <svg
              class={`arrow w-7 h-7 transform transition-transform text-Violet-background ${openCategory === category ? "rotate-180" : ""
                }`}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 13.17l5-5 1.41 1.41-6.41 6.42-6.41-6.42L7 8.17l5 5z"></path>
            </svg>
          </div>

          <ul
            class={`items border-t border-Violet-background transition-all overflow-hidden ${openCategory === category ? "max-h-40 opacity-100 py-2" : "max-h-0 opacity-0"
              }`}
          >
            {items.map((item, index) => (
              <li key={index} class="pl-4 text-Color-parrafo text-sm">
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
