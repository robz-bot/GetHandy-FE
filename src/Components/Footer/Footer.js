import React from "react";

export default function Footer() {
  return (
    <>
      <div class=" container d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p>
          © 2024
          <span className="mx-1 text-primary fw-bold ">
            Get Handy <i class="bi bi-hand-index-thumb-fill"></i>
          </span>
          - All rights reserved.
        </p>
        <ul class="list-unstyled d-flex">
          <li class="ms-3">
            Developed By Robin Rajesh
            <a
              class="link-body-emphasis text-primary mx-4"
              href="https://www.linkedin.com/in/robin-rajesh-a43360191/"
              target="_blank"
            >
              <i class="bi bi-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
