//Modelo de Page Object mas sencillo
class edenHeader2 {
    getMenuButtons(){
        return cy.get("#navbar a");
    }
}
 
export default new edenHeader2();