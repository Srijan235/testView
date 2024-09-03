import { useState } from 'react';
import './Menu.css'; // Import CSS for Menu

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(prevState => !prevState);
  };

  const handleItemClick = (view) => {
    // onSelect(view);
    setIsOpen(false); // Close the menu after selection
    if(view === "grid"){
      window.location.href = "/grid-view";
    }else if(view === "tiles"){
      window.location.href = "/tiles-view";
    }
  };

  return (
    <div className="menu-container">
      <div className="horizontal-menu">
        <button
          onClick={handleButtonClick}
          className="hamburger-btn"
          aria-expanded={isOpen}
          aria-controls="menu-items"
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <div id="menu-items" className={`menu-items ${isOpen ? "open" : ""}`}>
          <a href='/grid-view' onClick={() => handleItemClick("grid")}>Grid View</a>
          <a onClick={() => handleItemClick("tiles")}>
            Tile View
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
