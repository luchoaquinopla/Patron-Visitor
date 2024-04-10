
const producto = require('../src/producto');
const impuesto = require('../src/impuesto');
const descuento = require('../src/descuento');
const { MiVisitor } = require('../src/MiVisitor'); // Importa MiVisitor
test('calcular el total correctamente', () => {
    const celular = new producto('celular', 1000);
    const impuestoproducto = new impuesto(0.15);
    const descuentoproducto = new descuento(0.10);
   expect(celular.getNombre()).toBe('celular');
   expect(celular.getPrecio()).toBe(1000);
});
test('visitarProducto', () => {
    const producto1 = new producto('Producto de prueba', 100);
    const visitor = new MiVisitor();
    visitor.aceptar(producto1);
    expect(visitor.total).toBe(100); // Accede a la propiedad total a través de la instancia de MiVisitor
});
test('visitarImpuesto', () => {
    const celular = new producto('celular', 1000);
    const impuesto1 = new impuesto(0.15);
    const visitor = new MiVisitor();
    visitor.aceptarImpuesto(impuesto1); 
    expect(visitor.total).toBe(0.15); // Verificar que el total se actualiza correctamente según el impuesto
});

test('visitarDescuento', () => {
    const celular = new producto('celular', 1000);
    const descuento1 = new descuento(0.10);
    const visitor = new MiVisitor();
    visitor.aceptarDescuento(descuento1); // Aceptar el descuento en el visitor
    expect(visitor.total).toBe(0.10); // Verificar que el total se actualiza correctamente según el descuento
});
