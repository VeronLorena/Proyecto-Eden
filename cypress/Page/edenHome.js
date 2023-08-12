/// <reference types="cypress" />

class EdenHomeLocators {
    constructor(){
     this.menuButtons = "#navbar a";
     this.subTitles = "h5"
    }
}
export default class EdenHome {
    constructor(){
        this.locators = new EdenHomeLocators();
    }

    getMenuButtons(){
        return cy.get(this.locators.menuButtons);
    }

    getSubTitles(){
        return cy.get(this.locators.subTitles)
    }
}