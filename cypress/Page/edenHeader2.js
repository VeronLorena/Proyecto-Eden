class edenHeader2 {
    getMenuButtons(){
        return cy.get("#navbar a");
    }
}
 
export default new edenHeader2();