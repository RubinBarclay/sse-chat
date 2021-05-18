import React from "react";
import Style from "./CSS/home.module.scss";
import TestImage from "../img/TestImage.jpg";

function Searchbar() {
  return (
    <div>
      <div className={Style.formSection}>
        <form>
          <input
            type="search"
            className={Style.searchBar}
            placeholder="Search for photos"
          ></input>

          <button type="submit" className={Style.submitButton}>
            <i class="fa fa-search"></i>
          </button>
        </form>
      </div>

      <div className={Style.imgContainer}>
        <img src={TestImage} className={Style.images}></img>
      </div>
    </div>
  );
}

export default Searchbar;