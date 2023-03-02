import Navbar from "../navbar/Navbar";

import React, { useEffect, useState } from "react";
import './LandingPage.css';

const LandingPage = () => {

  return (
    <>
      <Navbar />
      <main>
        <div class="container py-4">
          <header class="pb-3 mb-4 border-bottom">
            <a
              href="/"
              class="d-flex align-items-center text-dark text-decoration-none"
            >
              <span class="fs-4"></span>
            </a>
          </header>
          <div class="p-5 mb-4 bg-light rounded-3">
            <div class="container-fluid py-5">
              <p class="col-md-8 fs-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <button class="btn btn-dark btn-lg" type="button">
                MAIN ACTION
              </button>
            </div>
          </div>

          <div class="row align-items-md-stretch">
            <div class="col-md-6">
              <div class="h-100 p-5  bg-light rounded-3">
                <h1 className="display-4">Experience</h1>
                <p></p>
                <button class="btn btn-outline-secondary" type="button">
                  ACTION
                </button>
              </div>
            </div>
            <div class="col-md-6">
              <div class="h-100 p-5 bg-light  rounded-3">
                <h1 className="display-4">Experience</h1>
                <p></p>
                <button class="btn btn-outline-secondary" type="button">
                  ACTION
                </button>
              </div>
            </div>
          </div>
          <br></br>
          <div class="row align-items-md-stretch">
            <div class="col-md-12">
              <div class="h-100 p-5 text-white bg-dark rounded-3">
                <p>extra div here</p>
              </div>
            </div>
          </div>

          <footer class="pt-3 mt-4 text-muted border-top"></footer>
        </div>
      </main>
    </>
  );
};

export default LandingPage;
