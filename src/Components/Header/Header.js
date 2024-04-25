import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-between">
        <h4>
          Utilize all the resources at your disposal and make use of it{" "}
          <i class="text-warning bi bi-emoji-smile-fill"></i>
        </h4>
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

      <hr />
    </div>
  );
};

export default Header;
