
describe('Тестирование staya', function () {
    
    it('Тестируем авторизацию и наличие на странице слов Мои заказы', function () {
        cy.visit('https://staya.dog');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('korea77@mail.ru');
        cy.get('.auth-form > form > [type="password"]').type('Staya123!');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Мои заказы');
   
        })
})