describe('API Testing', () => {
    it('should make an API request and assert the response', () => {
      cy.request('GET', 'https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('userId');
          expect(response.body).to.have.property('id');
          expect(response.body).to.have.property('title');
          expect(response.body).to.have.property('completed');
        });
    })

    it('Should Post from API',()=>{
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1
        })
        .then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('id');
    
        });

    })
  })
  