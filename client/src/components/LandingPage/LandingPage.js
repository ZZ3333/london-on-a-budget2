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
          <div class="p-5 mb-4 text-white bg-dark rounded-3">
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
              <button class="btn btn-light btn-lg" type="button">
                MAIN ACTION
              </button>
            </div>
          </div>

          <div class="row align-items-md-stretch"></div>
      
          <div class="row align-items-md-stretch">
            <div class="col-md-12">
              <div class="h-100 p-5  bg rounded-3">
                <div class="container col-xxl-12 px-4 py-5 rounded-3">
                  <div class="row flex-lg-row-reverse align-items-center g-5 py-5 shadow-lg">
                    <div class="col-10 col-sm-8 col-lg-6 ">
                      <img
                        src="https://i.postimg.cc/zvQWtF2X/iphone-g657d0fa51-1920.jpg"
                        class="d-block mx-lg-auto img-fluid"
                        alt="Bootstrap Themes"
                        width="700"
                        height="500"
                        loading="lazy"
                      ></img>
                    </div>
                    <div class="col-lg-6">
                      <h1 class="display-5 fw-bold lh-1 mb-3">TAGLINE</h1>
                      <p class="lead">
                        DESCRIBE USER EXPERIENCE WITH LEADS TO CALLS TO ACTION
                      </p>
                      <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button
                          type="button"
                          class="btn btn-dark btn-lg px-4 me-md-2"
                        >
                          Join Us
                        </button>
                        <button
                          type="button"
                          class="btn btn-outline-secondary btn-lg px-4"
                        >
                          Log In
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
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
