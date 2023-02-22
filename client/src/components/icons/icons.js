import React, { useState } from "react";

const Icons = () => {
    return (
        <div>
            <a href="/music">
               <button type="submit"><i class="music"></i></button> 
            </a>
            <a href="/sports">
               <button type="submit"><i class="sports"></i></button> 
            </a>
            <a href="/food-and-drink">
               <button type="submit"><i class="food-and-drink"></i></button> 
            </a>
            <a href="/visual-arts">
               <button type="submit"><i class="visual-arts"></i></button> 
            </a>
            <a href="/family-and-attractions">
               <button type="submit"><i class="family-and-attractions"></i></button> 
            </a>
        </div>
    )
}

export default Icons;


