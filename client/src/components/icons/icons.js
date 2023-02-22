import React, { useState } from "react";

const icons = () => {
    return (
        <div>
            <a href="/music">
               <button type="submit"><i class="music" onClick={handleMusicSubmit}></i></button> 
            </a>
            <a href="/sports">
               <button type="submit"><i class="sports" onClick={handleSportsSubmit}></i></button> 
            </a>
            <a href="/food-and-drink">
               <button type="submit"><i class="food-and-drink" onClick={handleRestaurantsSubmit}></i></button> 
            </a>
            <a href="/visual-arts">
               <button type="submit"><i class="visual-arts" onClick={handleArtsSubmit}></i></button> 
            </a>
            <a href="/family-and-attractions">
               <button type="submit"><i class="family-and-attractions" onClick={handleAttractionsSubmit}></i></button> 
            </a>
        </div>
    )
}

export default icons;


