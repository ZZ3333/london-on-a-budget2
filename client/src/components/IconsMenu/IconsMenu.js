import React from "react";

const IconsMenu = () => {
  return (
    <div>
      <a href="/music">
        <button type="submit">
          <i className="bi bi-music-note-beamed"></i>
        </button>
      </a>
      <a href="/sports">
        <button type="submit">
          <i className="bi bi-dribbble"></i>
        </button>
      </a>
      <a href="/food-and-drink">
        <button type="submit">
          <i className="bi bi-cup-hot"></i>
        </button>
      </a>
      <a href="/visual-arts">
        <button type="submit">
          <i className="bi bi-brush"></i>
        </button>
      </a>
      <a href="/family-and-attractions">
        <button type="submit">
          <i className="bi bi-emoji-smile-fill"></i>
        </button>
      </a>
    </div>
  );
};

export default IconsMenu;
