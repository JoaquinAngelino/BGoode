const { Product, conn } = require('../../src/database');

  describe('Product model', () => {
    describe('Validators', () => {
      beforeEach(() => conn.sync({ force: true }));
      describe('create product ', () => {
        expect.assertions(1);
        it('should throw an error if name is not provided', () => {
          const product = {
            type: 'type',
            price: 'price',
            new: true,
          };
          return Product.create(product)
            .catch((err) => {
              expect(err.message).toBe('notNull Violation: product.name cannot be null');
            });
        });
  
        expect.assertions(1);
        it('should throw an error if type is not provided', () => {
          const product = {
            name: 'name',
            price: 'price',
            new: true,
          };
          return Product.create(product)
            .catch((err) => {
              expect(err.message).toBe('notNull Violation: product.type cannot be null');
            });
        });

        expect.assertions(1);
        it('should throw an error if price is not provided', () => {
          const product = {
            name: 'name',
            type: 'type',
            new: true,
          };
          return Product.create(product)
            .catch((err) => {
              expect(err.message).toBe('notNull Violation: product.price cannot be null');
            });
        });

        expect.assertions(1);
        it('should throw an error if condition is not provided', () => {
          const product = {
            name: 'name',
            type: 'type',
            price: 'price',
          };
          return Product.create(product)
            .catch((err) => {
              expect(err.message).toBe('notNull Violation: product.new cannot be null');
            });
        });
      });
    });
  });
