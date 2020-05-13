let expect;

if (typeof require !== 'undefined') { // Execution in node
  expect = require('chai').expect;
} else { // Execution in browser
  expect = chai.expect;
}

import Cell from '../scripts/Cell.js';

describe('Clase Cell tests', ()=>{

  describe('Comportamiento del constructor', ()=>{
    it('Debería generar un objeto Cell', () => {
      let CellTest = new Cell();
      expect(CellTest).to.be.a('Object');
    });
    it('Debería tener los siguientes atriburos miembro:', () => {
      let CellTest = new Cell();
      expect(CellTest).to.have.property('neighbors');
      expect(CellTest).to.have.property('isAlive');
    });
  });

  describe('Métodos de la clase', () => {
    it ('Tiene que tener un método para poder comprobar si la célula morirá por subpoblación', () => {
      let CellTest = new Cell();
      expect(CellTest.checkSubpopulation).to.exist;
    });
    it ('Tiene que tener un método para poder comprobar si la célula morirá por sobrepoblación', () => {
      let CellTest = new Cell();
      expect(CellTest.checkOverpopulation).to.exist;
    });
    it ('Tiene que tener un método para poder comprobar si la célula morirá por no tener los suficientes vecinos', () => {
      let CellTest = new Cell();
      expect(CellTest.checkAlive).to.exist;
    });
    it ('Tiene que tener un método para poder comprobar si una célula muerta puede renacer (apareamiento)', () => {
      let CellTest = new Cell();
      expect(CellTest.checkMating).to.exist;
    });
    it ('Tiene que tener un método para poder comprobar el estado general de la célula', () => {
      let CellTest = new Cell();
      expect(CellTest.check).to.exist;
    });
  });
});