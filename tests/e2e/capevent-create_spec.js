describe('Event creation', function() {

    var baseURL = 'http://localhost:8000/#/capevent/detail';
    
    beforeEach(function() {
        browser.get(baseURL);
    });
  
                    
    it('should succeffully create a CapEvent', function() {
        
        var titleField = element(by.id('title'));
        var dateField = element(by.id('date'));
        var categoryField = element(by.id('category'));
        var participantsField = element(by.id('participants'));
        var geolocationField = element(by.id('geolocation'));
        var saveButton = element(by.id('save'));
        
        titleField.sendKeys('Bowling Spielen');        
        dateField.sendKeys('01 Oct 2015');        
        categoryField.sendKeys('Spiele');        
        participantsField.sendKeys('2');        
        geolocationField.sendKeys('53.570631, 10.084447');
        saveButton.click();
        
        //If capEvent creation successful, the user is redirected to the Cap Event list view
        expect(browser.getCurrentUrl()).toMatch(/\/capevent\/list/);
    });
    
    it('should not allow to create a Cap Event if title if not filled', function() {
        
    });
    
});
