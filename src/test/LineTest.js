let expect;

if (typeof require !== 'undefined') { // Execution in node
  expect = require('chai').expect;
} else { // Execution in browser
  expect = chai.expect;
}
import Line from '../scripts/Line.js';
import Point from '../scripts/Point.js';

describe('Clase Line tests', ()=>{

  describe('Comportamiento del constructor', ()=>{
    it('Debería generar un objeto Line', () => {
      let LineTest = new Line();
      expect(LineTest).to.be.a('Object');
    });
    it('Debería tener los siguientes atriburos miembro:', () => {
      let LineTest = new Line();
      expect(LineTest).to.have.property('start');
      expect(LineTest).to.have.property('end');
    });
  });

  describe('Métodos de la clase', () => {
    it ('Tiene que tener un método para poder dibujar una linea', () => {
      let LineTest = new Line();
      expect(LineTest.baseDraw).to.exist;
    });
    it ('draw tiene que poder ser ejecutado sin errores', () => {
      let LineTest = new Line();
      expect(LineTest.draw()).not.to.throw;
    });
    it ('Tiene que tener un método para poder calcular la longitud de la recta', () => {
      let LineTest = new Line();
      expect(LineTest.length).to.exist;
    });
    it ('Tiene que devolver correctamente la longitud de la recta', () => {
      let pointA = new Point(0,0);
      let pointB = new Point(10,0);
      let LineTest = new Line(pointA, pointB);
      expect(LineTest.length()).to.eql(10);
    });
    it ('Tiene que tener un método que genere los valores base de la ecuación de la recta', () => {
      let LineTest = new Line();
      expect(LineTest.build).to.exist;
    });
    it ('El método de construcción de la recta tiene que poder funcionar', () => {
      let LineTest = new Line();
      expect(LineTest.slope).to.eql(0);
      expect(LineTest.ordinate).to.eql(0);
    });
    it ('Tiene que tener un método que calcule la posición de Y dado una posción de X', () => {
      let LineTest = new Line();
      expect(LineTest.calculateY).to.exist;
    });
    it ('calculateY tiene que poder funcionar', () => {
      let LineTest = new Line(new Point(0,0), new Point(5,5));
      expect(LineTest.calculateY(4)).to.eq(4);
    });
    it ('Tiene que tener un método que compruebe si un punto pertenece a la recta', () => {
      let LineTest = new Line(new Point(0,0), new Point(1,1));
      expect(LineTest.isPointInLine(new Point(4,4))).to.eq(true);
      expect(LineTest.isPointInLine(new Point(1,2))).to.eq(false);
    });

  });
});