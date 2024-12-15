import React, { useState } from "react";

const ContentOrganizer = () => {
  const [categories, setCategories] = useState(["Marketing", "Sales", "Development"]);

  return (
    <div>
      <h3>Categories</h3>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default ContentOrganizer;