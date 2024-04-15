const Perro = require('../src/Perro');
const visitantePerro = require('../src/visitantePerro');
const Gato = require('../src/gato');
const visitanteGato = require('../src/visitanteGato');

test('datos perro', () => {
const perro = new Perro('Pepe',12);
const visitor = new visitantePerro();
perro.aceptar(visitor);
expect(visitor.totalNombre).toBe('Pepe');
expect(visitor.edad).toBe(12);
   
});
    test('datos gato', () => {
    const gato = new Gato('Don Gato',12);
    const visitor = new visitanteGato();
    gato.aceptar(visitor);
    expect(visitor.totalNombre).toBe('Don Gato');
    expect(gato.edad).toBe(12);
       
    });
    test('calcular años perrunos a años humanos', () => {
        const perro = new Perro('Pepe',12);
        const visitor = new visitantePerro();
        perro.aceptar(visitor);
        expect(visitor.totalNombre).toBe('Pepe');
        expect(visitor.edad).toBe(12);
        expect(visitor.totalEdad).toBe(84);
           
        });
    test('calcular años gatunos a años humanos', () => {
            const gato = new Gato('Pepe',10);
            const visitor = new visitanteGato();
            gato.aceptar(visitor);
            expect(visitor.totalNombre).toBe('Pepe');
            expect(visitor.edad).toBe(10);
            expect(visitor.totalEdad).toBe(70);
               
            });
            test('que ruido hace y que esta comiendo el gato', () => {
                const gato = new Gato('Pepe',10);
                const visitor = new visitanteGato();
                gato.aceptar(visitor);
                expect(visitor.totalNombre).toBe('Pepe');
                expect(gato.edad).toBe(10);
                expect(visitor.totalEdad).toBe(70);
                expect(visitor.ruido).toBe('miau miau');
                expect(visitor.comida).toBe('Comiendo pescado');
                   
                });
                test('que ruido hace y que esta comiendo el perro', () => {
                    const perro = new Perro('roko',20);
                    const visitor = new visitantePerro();
                    perro.aceptar(visitor);
                    expect(visitor.totalNombre).toBe('roko');
                    expect(visitor.edad).toBe(20);
                    expect(visitor.totalEdad).toBe(140);
                    expect(visitor.ruido).toBe('Guau Guau');
                    expect(visitor.comida).toBe('Comiendo carne');
                       
                    });

