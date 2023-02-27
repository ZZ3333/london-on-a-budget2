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
          <i class="bi bi-cup-hot"></i>
        </button>
      </a>
      <a href="/visual-arts">
        <button type="submit">
          <i class="bi bi-brush"></i>
        </button>
      </a>
      <a href="/family-and-attractions">
        <button type="submit">
          <i class="bi bi-emoji-smile-fill"></i>
        </button>
      </a>
    </div>
  );
};

export default IconsMenu;
