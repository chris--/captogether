describe('Event list', function() {

    var baseURL = 'http://localhost:8000/#/capevent/list';
    
    beforeEach(function() {
        browser.get(baseURL);
    });
  
    it('should be not empty', function () {
        
        var capEvents = element.all(by.repeater('capEvent in capEvents'));
        expect(capEvents.count()).toBeGreaterThan(0);
        
    });
        
    it('should show correct data of Paddeltour Cap Event in the list', function() {
        
        var currentTitle = element(by.repeater('capEvent in capEvents').row(0).column('title')).getText();
        var currentDate = element(by.repeater('capEvent in capEvents').row(0).column('date')).getText();
        var currentCategory = element(by.repeater('capEvent in capEvents').row(0).column('category')).getText();
        var currentParticipants = element(by.repeater('capEvent in capEvents').row(0).column('participants')).getText();              
        
        expect(currentTitle).toEqual('Paddeltour');
        expect(currentDate).toEqual('19 Sep 2015');
        expect(currentCategory).toEqual('Sport');
        expect(currentParticipants).toEqual('10');        
       
    });
    
});
