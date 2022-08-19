describe('Проверка поискового запроса Google', function () {
   it('Проверка того, что при поисковом запросе Яндекс в поисковой выдаче предлагать посмотреть картинки.', function () {
        cy.visit('https://www.google.com/');
        cy.get('.gLFyf').type('Котята');
        cy.get('.CqAVzb > center > .gNO89b').click();
        cy.contains('Похожие запросы');
        })
})















