import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container my-1">
      <div className="row">
        <div className="col-9">
          <h4>
            Utilize all the resources at your disposal
            <i class="text-dark bi bi-emoji-smile-fill mx-2"></i>
          </h4>
          <p>
            Optimize your outcomes by leveraging every available asset and
            maximizing their utility to achieve your objectives effectively.
          </p>
        </div>
        <div className="col-3">
          <div className="text-end">
            <Link to="/">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/Assets/Images/get handy logo animation.gif"
                }
                alt="..."
                height="100"
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
