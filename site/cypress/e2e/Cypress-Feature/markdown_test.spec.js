describe('Visual testing', () => {
    it('autograding markdown testing', () => {
        // cy.viewport(1150, 900);
        cy.login('instructor');
        cy.visit(['testing', 'gradeable', 'open_homework', 'grading', 'grade?who_id=BVgjdVcF8tSiwnD&sort=id&direction=ASC']);
        cy.get('#nav-sidebar-collapse-sidebar').click();
        cy.get('[data-testid="details-tc-expand-all"]').click();
        cy.get('[data-testid="test-box-block"]').scrollIntoView().should('be.visible');
        cy.get('[data-testid="test-box-block"]').compareSnapshot('autograding_code', 1.0, {
            clip: { x: 0, y: 20, width: 1150, height: 900 },
        });
    });
});