import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container my-1">
      <div className="row">
        <div className="col-lg-9 col-sm-12">
          <h4>
            Utilize all the resources at your disposal
            <i class="text-dark bi bi-emoji-smile-fill mx-2"></i>
          </h4>
          <p>
            Developed By Robin Rajesh <a className="text-primary" href="https://www.linkedin.com/in/robin-rajesh-a43360191/" target="_blank"><i class="bi bi-linkedin"></i></a>
          </p>
        </div>
        <div className="col-lg-3 col-sm-12">
          <div className="text-end">
            <Link to="/">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/Assets/Images/get handy logo animation.gif"
                }
                alt="..."
                height="70"
              />
            </Link>
          </div>
        </div>
      </div>

      <hr />
    </div>
  );
};

export default Header;
