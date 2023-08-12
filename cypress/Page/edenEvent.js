/// <reference types="cypress" />

class EdenEventLocators {
    constructor(){
        this.eventTitle = "fechad-funciones span";
    }
}
export default class EdenEvent {
    constructor(){
        this.locators = new EdenEventLocators();
    }

    getEventTitle(){
        returncy.get(this.locators.eventTitle);
    }

}