window.onscroll = function () {
  if (window.scrollY >= 466) {
    let trustedP = document.querySelector(".trusted p");
    trustedP.style.animation = "fade-in .6s ease-in-out forwards";
    let trustedImages = document.querySelectorAll(
      ".container .row .row .col-sm-12 img"
    );
    trustedImages.forEach((img) => {
      img.style.animation = "fade-in .6s ease-in-out forwards";
    });
  }
  if (window.scrollY >= 786) {
    let mainTrustedImg = document.querySelector(
      ".trusted .container .row .img-col img"
    );
    let mainTrustedHeading = document.querySelector(
      ".trusted .container .row .heading-text h2"
    );
    let mainTrustedP = document.querySelector(
      ".trusted .container .row .heading-text p"
    );
    let trustedCard = document.querySelectorAll(
      ".trusted .container .row .card"
    );
    trustedCard.forEach((card) => {
      card.style.animation = "fade-up .6s ease-in-out forwards";
    });
    mainTrustedImg.style.animation = "fade-right .6s ease-in-out forwards";
    mainTrustedHeading.style.animation = "fade-left .6s ease-in-out forwards";
    mainTrustedP.style.animation = "fade-left .6s ease-in-out forwards";
  }
  if (window.scrollY >= 1300) {
    let leftHeading = document.querySelector(
      ".smart-jackpot .col-12 .col-sm-12:first-child h2"
    );
    let rightP = document.querySelector(
      ".smart-jackpot .col-12 .col-sm-12:last-child p"
    );

    leftHeading.style.animation = "fade-right .6s ease-in-out forwards";
    rightP.style.animation = "fade-left .6s ease-in-out forwards";
  }
  if (window.scrollY >= 1680) {
    let jackpotCard = document.querySelectorAll(
      ".smart-jackpot .row .col-sm-12 .card"
    );
    jackpotCard.forEach((card) => {
      card.style.animation = "fade-up .6s ease-in-out forwards";
    });
  }
  if (window.scrollY >= 2000) {
    let mainDesignImg = document.querySelector(
      ".design .container .row .col-sm-12:first-child img"
    );
    mainDesignImg.style.animation = "fade-right .6s ease-in-out forwards";
    let designContentText = document.querySelector(
      ".design .col-sm-12:last-child"
    );
    designContentText.style.animation = "fade-left .6s ease-in-out forwards";
  }
  if (window.scrollY >= 2496) {
    let ourAppCenter = document.querySelector(".our-app .text-center");
    let ourAppCard = document.querySelectorAll(
      ".our-app .container .col-sm-12"
    );
    ourAppCenter.style.animation = "fade-in .6s ease-in-out forwards";
    ourAppCard.forEach((card) => {
      card.style.animation = "fade-in .6s ease-in-out forwards";
    });
  }
  if (window.scrollY >= 3331) {
    let container = document.querySelector(".features-we-build > .container");
    container.style.animation = "fade-in .6s ease-in-out forwards ";
  }
  if (window.scrollY >= 3900) {
    let featureCenter = document.querySelector(".awesome-features");
    featureCenter.style.animation = "fade-in .6s ease-in-out forwards";
  }
  if (window.scrollY >= 4902) {
    let clientsImg = document.querySelector(".clients-section .clients");
    let clientsCarousel = document.querySelector("#Clients-carousel");
    clientsImg.style.animation = "fade-up .6s ease-in-out forwards";
    clientsCarousel.style.animation = "fade-left .6s ease-in-out forwards";
  }
  if (window.scrollY >= 5429) {
    let textCenter = document.querySelector(".faq .text-center");
    let container = document.querySelector(".faq .container");
    textCenter.style.animation = "fade-in .6s ease-in-out forwards";
    container.style.animation = "fade-in .6s ease-in-out forwards";
  }
};
