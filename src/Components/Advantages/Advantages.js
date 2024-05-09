import React from "react";

export default function () {
  return (
    <>
    <hr/>
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
      </div>
    </>
  );
}
