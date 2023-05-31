import { Storage } from "@plasmohq/storage";
import { test } from "node:test";
import React, { useEffect, useState } from "react";


const styleDarkMode = document.createElement("style");
const styleDarkHome = document.createElement("style");
const styleDarkContact = document.createElement("style");
const styleDarkActivity = document.createElement("style");

export default function darkMode() {
  // const darkColor = "rgba(4, 18, 26, 255)";
  // const whiteColor = "rgba(250, 250, 250)";
  // const greyColor = "rgba(22,24,28,255)";
  // const blueColor = "rgba(0, 197, 255)";

  const classNames = Array.from(
    Array.from(
      document.querySelectorAll("[class]")
    ).reduce(
      (set, elements) => (elements.classList.forEach(c => set.add(c)), set),
      new Set()
    )
  ).sort();

  console.table(classNames);

  function applyDarkMode(element) {
    
    const textColorsToReplace = ['black', '#000', '#000000', '#33475b', 'rgb(51, 71, 91)'];
    const backgroundColorsToReplace = ['white', '#FFF', '#FFFFFF', 'rgba(0, 0, 0, 0)', 'rgb(255, 255, 255)', 'rgb(81, 111, 144)', 'rgb(37, 51, 66)'];

    // Couleurs de remplacement pour le mode sombre
    const darkTextColor = '#CCC';
    const darkBackgroundColor = '#333';

    // Vérifie et modifie la couleur de texte
    const textColor = window.getComputedStyle(element).color;
    console.log("text" + " " + textColor);
    if (textColorsToReplace.includes(textColor)) {
      element.style.color = darkTextColor;
    }

    // Vérifie et modifie la couleur de fond
    const backgroundColor = window.getComputedStyle(element).backgroundColor;
    console.log("background" + " " + backgroundColor)
    if (backgroundColorsToReplace.includes(backgroundColor)) {
      element.style.backgroundColor = darkBackgroundColor;
    }

    // Parcours les éléments enfants
    
  }
  classNames.forEach(className => {
    const classes = document.getElementsByClassName(className.toString()) as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < classes.length; i++) {
      applyDarkMode(classes[i]);
    }
  })



  // console.table(classNames);

  // classNames.forEach(className => {
  //   const elements = document.getElementsByClassName(className.toString()) as HTMLCollectionOf<HTMLElement>;
  //   for (let i = 0; i < elements.length; i++) {
  //     elements[i].style.cssText = `background-color: ${darkColor}; color: ${whiteColor}`;
  //   }
  // });

  // const darkModeStyles = `
  // nav {
  //     background-color: ${greyColor}!important;
  //     color: ${whiteColor};
  //   }
  //   #hs-nav-v4 .primary-links>li.active>a, #hs-nav-v4 .primary-links>li.currentPage>a {
  //     background-color: ${greyColor}!important;
  //   }
  //   .navSearch-input {
  //     background-color: ${greyColor}!important;
  //   }
  //   .results-header header--full-width {
  //     background-color: ${darkColor}!important;
  //   }

  //   .private-alert__title {
  //     color: ${darkColor};
  //   }

  //   body,
  //   .private-template__section--stretch,
  //   .private-header,
  //   .private-button--tertiary,
  //   .private-button--unstyled,
  //   .col-xs-12,
  //   .SetupGuideLayout__SetupGuideNavContainer-hatnox-1,
  //   .UINavList__Ul-bzb0ye-0 {
  //     background-color: ${darkColor} !important;
  //     color: ${whiteColor};
  //   }

  //   .dVdmzr {
  //     background-color: transparent;
  //   }
  //   .ljQpdU {
  //     background-color: ${darkColor}!important;
  //   }
  //   .private-card__section {
  //     background-color: ${greyColor};
  //     color: ${whiteColor};
  //   }


  // `;

  // styleDarkMode.innerHTML = darkModeStyles;
  // document.head.appendChild(styleDarkMode);

  // //  page accueil 
  // const darkModeHome = `
  //   .private-template__section--header {
  //     background-color: ${darkColor};
  //   }
  //   .private-button--secondary {
  //     background-color: #ff7a59;
  //     color: ${whiteColor};
  //   }
  //   .widget-card {
  //     background-color: ${greyColor};
  //     color: ${whiteColor}
  //   }

  //   .widget-card .private-card__section {
  //     background-color: transparent !important;
  //   }

  // `

  // styleDarkHome.innerHTML = darkModeHome;
  // document.head.appendChild(styleDarkHome);

  // //page contact 

  // /*
  //   gHnHIK = div barre de recherche au dessus du tableau
  //   gZHdNR = th des tableaux 
  //   LbseA = 



  // */
  // const darkModeContact = `

  // .gHnHIK {
  //   color: ${darkColor};
  // }

  // .gZHdNR {
  //   background-color: ${greyColor} !important;  
  // }

  // .LbseA {
  //   background-color: transparent;
  // }


  // tr {
  //   border-color: ${blueColor};
  // }

  // .gZHdNR thead th {
  //   background-color: ${greyColor};
  //   color: ${whiteColor}
  // }
  // `
  // styleDarkContact.innerHTML = darkModeContact;
  // document.head.appendChild(styleDarkContact);
  // /*
  //  ikgKGw = div carte flux d'activité;
  // */


  // const darkModeActivity = `
  //   .ikgKGw {
  //     background-color: ${greyColor};
  //   }

  //   .private-selectable-box {
  //     background-color: transparent !important;
  //   }

  //   .stream-notifications div {
  //     // faire le changement de background color ici 
  //   }
  // `
  // styleDarkActivity.innerHTML = darkModeActivity;
  // document.head.appendChild(styleDarkActivity);
}





