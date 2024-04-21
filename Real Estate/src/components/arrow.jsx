import React, { useEffect } from "react";
import $ from "jquery";

const SmoothScrollArrow = () => {
  useEffect(() => {
    const smoothScroll = () => {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        1000
      );
    };

    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $("#scrollArrow").fadeIn();
      } else {
        $("#scrollArrow").fadeOut();
      }
    });

    $("#scrollArrow").on("click", function () {
      smoothScroll();
    });
  }, []);

  return (
    <div id="scrollArrow" className="scroll-arrow">
      <img className="arrow" src="/images/arrow.png" alt="Scroll Up" />
    </div>
  );
};

export default SmoothScrollArrow;
