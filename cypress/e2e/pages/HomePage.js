class HomePage {

    constructor() {
       
        this.menuMobile = '#open-navigation-menu-mobile';
        this.logoutButton = ':nth-child(12) > .next-bve2vl';

    }

logout() {

    cy.get(this.menuMobile).click();
    cy.wait(1000);
    cy.get(this.logoutButton).click();

}};

export default new HomePage(); 