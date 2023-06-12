import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative bg-right min-h-[70vh] flex justify-center 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
    >
      <div className={`${styles.section} pl-8 w-[60%] 800px:w-[50%] flex-row`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#EA4886] font-[800] capitalize`}
        >
          Online Shopping <br /> Made Easy
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#272424ba]">
          Customers can browse the site to find products they are interested in,{" "}
          <br /> add them to their cart, and complete the checkout process.
        </p>
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5 bg-[#EA4886]`}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Shop Now
                 </span>
            </div>
        </Link>
      </div>
      <div className="w-[60%] 800px:w-[40%] flex-row">
        <img src="/mockup.svg" alt="hero benner" />
      </div>
      
    </div>
  );
};

export default Hero;
