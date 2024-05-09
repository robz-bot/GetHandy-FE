import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <>
      <hr />
      <div class="container marketing text-center">
        <h2 className="text-center mx-2">Advantages</h2>
        <div class="row">
          <div class="col-lg-4">
            <img
              src="https://source.unsplash.com/random/?smile"
              alt="mdo"
              width="130"
              height="130"
              class="rounded-circle"
            />

            <h3 class="fw-normal">Totally free to use</h3>
            <small className=" ">
              We hold the belief that our tools should be accessible to all, as
              they were crafted by developers for developers, without any cost
              barriers.
            </small>
          </div>
          <div class="col-lg-4">
            <img
              src="https://source.unsplash.com/random/?less"
              alt="mdo"
              width="130"
              height="130"
              class="rounded-circle"
            />

            <h3 class="fw-normal">Do more with less</h3>
            <small className=" ">
              Having all the tools conveniently located in one place, with a
              straightforward and user-friendly interface, simplifies the
              process of accessing what you require.
            </small>
          </div>
          <div class="col-lg-4">
            <img
              src="https://source.unsplash.com/random/?mobile"
              alt="mdo"
              width="130"
              height="130"
              class="rounded-circle"
            />

            <h3 class="fw-normal">Compatible with all devices</h3>
            <small className=" ">
              All-in-one is a platform-independent browser-based application
              that operates seamlessly on any device without the need for
              downloading or installing software.
            </small>
          </div>
        </div>
        <hr />
        <h2 className="text-center my-2">Other Apps</h2>
        <div class="row d-flex align-items-center  justify-content-center ">
          <div class="col-lg-4">
            <img
              src={process.env.PUBLIC_URL + "/Assets/alooze.png"}
              alt="mdo"
              width="130"
              height="130"
              class="rounded-circle"
            />
            <br />
            <h4 class="fw-normal">
              <a
                href="https://alooze.vercel.app/"
                className="text-end icon-link gap-1 icon-link-hover  text-dark text-decoration-none "
                target="_blank"
              >
                AlooZe
                <i className="bi bi-box-arrow-up-right text-dark mx-2"></i>
              </a>
            </h4>
            <small className=" ">
              AlooZe collects data from around the world and organises it into
              networks of user touchpoints around certain themes, producing
              user-friendly results.
            </small>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}
