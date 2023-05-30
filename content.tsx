import { Storage } from "@plasmohq/storage";
import React, { useEffect, useState } from "react";


const styleDarkMode = document.createElement("style");
const styleDarkHome = document.createElement("style");
const styleDarkContact = document.createElement("style");

export default function darkMode() {
  const newColorBody = "rgba(4, 18, 26, 255)";
  const newTextColor = "rgba(250, 250, 250)";
  const testColor = "rgba(22,24,28,255)";
  const blueColor = "rgba(0, 197, 255)";

  // page après -> connexion

  const darkModeStyles = `
  nav {
      background-color: ${testColor}!important;
      color: ${newTextColor};
    }
    #hs-nav-v4 .primary-links>li.active>a, #hs-nav-v4 .primary-links>li.currentPage>a {
      background-color: ${testColor}!important;
    }
    .navSearch-input {
      background-color: ${testColor}!important;
    }
    .results-header header--full-width {
      background-color: ${newColorBody}!important;
    }

    body,
    .private-template__section--stretch,
    .private-header,
    .private-button--tertiary,
    .private-button--unstyled,
    .col-xs-12,
    .SetupGuideLayout__SetupGuideNavContainer-hatnox-1,
    .UINavList__Ul-bzb0ye-0 {
      background-color: ${newColorBody} !important;
      color: ${newTextColor};
    }

    .dVdmzr {
      background-color: transparent;
    }
    .ljQpdU {
      background-color: ${newColorBody}!important;
    }
    .private-card__section {
      background-color: ${testColor};
      color: ${newTextColor};
    }
    
   
  `;

  styleDarkMode.innerHTML = darkModeStyles;
  document.head.appendChild(styleDarkMode);

  //  page accueil 
  const darkModeHome = `
    .private-template__section--header {
      background-color: ${newColorBody};
    }
    .private-button--secondary {
      background-color: #ff7a59;
      color: ${newTextColor};
    }
    .widget-card {
      background-color: ${testColor};
      color: ${newTextColor}
    }

    .widget-card .private-card__section {
      background-color: transparent !important;
    }

  `

  styleDarkHome.innerHTML = darkModeHome;
  document.head.appendChild(styleDarkHome);

  //page contact 
  const darkModeContact = `
  
  .gHnHIK {
    color: ${newColorBody};
  }
  
  .gZHdNR {
    background-color: ${testColor} !important;  
  }

  .LbseA {
    background-color: transparent;
    border-color: ${blueColor};
  }

  .cBvQKy {
    border-color: ${blueColor};
  }

  tr {
    border-color: ${blueColor};
  }

  .gZHdNR thead th {
    background-color: ${testColor};
    color: ${newTextColor}
  }
  `
  styleDarkContact.innerHTML = darkModeContact;
  document.head.appendChild(styleDarkContact);
}





