import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../images/Platter.jpg";

const Header = () => {
  return (
    <header className="header">
      <section>
        <div className="banner">
          <h2>Little Lemon</h2>
          <h3>San Francisco</h3>
          <p>
          We proudly run a family-owned Mediterranean restaurant, dedicated to crafting traditional recipes infused with a contemporary flair.
          </p>
          <Link to="/booking">
            <button aria-label="On Click">Reserve Table</button>
          </Link>
        </div>
        <div className="banner-img">
          <img src={bannerImg} alt="" />
        </div>
      </section>
    </header>
  );
};

export default Header;
