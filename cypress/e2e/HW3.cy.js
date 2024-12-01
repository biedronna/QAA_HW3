import LoginPage from "../e2e/pages/LoginPage";
import HomePage from "../e2e/pages/HomePage";

describe("Usercan visit GoIt", () => {

    beforeEach("Go to page", () => {

        LoginPage.visit();
    });
    
   
    it("First log in and log out", () =>  {

       LoginPage.loginUser("user888@gmail.com", "1234567890");  //logowanie ze strony logowania
       HomePage.logout();                                       //wylogowanie ze strony glownej
    });



  });