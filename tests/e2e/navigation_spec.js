describe('Navigation bar', function() {

    var baseURL = 'http://localhost:8000';
    
    beforeEach(function() {
        browser.get(baseURL);
    });
  
                    
    it('should redirect to Create Event page', function() {
        var createButton = element(by.id('createButton'));
        createButton.click();
        expect(browser.getCurrentUrl()).toMatch(/\/capevent\/detail/);
    });
    
    it('should redirect to View Events page', function() {
        
    });
    
});
