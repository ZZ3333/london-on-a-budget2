import React, { useState } from "react";

const IconsMenu = () => {
  return (
    <div>
      <a href="/music">
        <button type="submit">
          <span data-testid="music"></span>
          <i class="bi bi-music-note-beamed"></i>
        </button>
      </a>
      <a href="/sports">
        <button type="sports">
          <span data-testid="sports">
          <i class="bi bi-dribbble"></i>
          </span>
        </button>
      </a>
      <a href="/food-and-drink">
        <button type="submit">
        <span data-testid="food_&_drinks">
          <i class="bi bi-cup-hot"></i>
        </span>
        </button>
      </a>
      <a href="/visual-arts">
        <button type="submit">
        <span data-testid="visual_arts">
          <i class="bi bi-brush"></i>
        </span>
        </button>
      </a>
      <a href="/family-and-attractions">
        <button type="submit">
          <span data-testid="family_&_attractions">
            <i class="bi bi-emoji-smile-fill"></i>
          </span>
        </button>
      </a>
    </div>
  );
};

export default IconsMenu;
