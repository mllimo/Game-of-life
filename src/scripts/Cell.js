/**
 * @author Antonio Raúl Guijarro Contreras <alu0101100494@ull.edu.es>
 * @file Generación de la clase Cell. Simulará el comportamiento y estructura básica de una célula del juego de la vida.
 * Se podrán generar nuevas clases que hereden de esta para especializar aun más su comportamiento.
 * @copyright Antonio Raúl Guijarro Contreras 2020
 * @since 07.05.2020
 */

import Point from './Point.js';

 /**
  * Clase Cell
  */
class Cell {
  /**
   * Contructor de la clase Cell
   * @param {Point} position 
   */
  constructor(isAlive = true) {
    this.isAlive = isAlive;
    this.neighbors = {alive: [], dead: []};
  }

  /**
   * Inserta un vecino en la lista de vecinos
   * @param {Cell} nei Vecino a añadir dentro de la lista de vecinos
   */
  set neighbor(nei) {
    if (nei != null)  {
      if (nei.isAlive) {
        this.neighbors.alive.push(nei);
      } else {
        this.neighbors.dead.push(nei);
      }
    }
  }

  /**
   * Comprueba si la célula está en un ambiente de subpoblación:
   * Cualquier célula viva con menos de dos vecinos vivos muere
   * @return {boolean} true si existe dicho ambiente : false
   */
  checkSubpopulation() {
    if (this.isAlive) {
      return this.neighbors.alive.length < 2;
    }
    return false;
  }

  /**
   * Comprueba si la célula está en un ambiente de sobrepoblación:
   * Cualquier célula viva con más de tres vecinos vivos muere
   * @return {boolean} true si existe dicho ambiente : false
   */
  checkOverpopulation() {
    if (this.isAlive) {
      return this.neighbors.alive.length > 3;
    }
    return false;
  }

  /**
   * Comprueba si la célula vive en un ambiente neutro:
   * Cualquier célula viva con dos o tres vecinos vivos vive hasta la próxima generación
   * @return {boolean} true si existe dicho ambiente : false
   */
  checkAlive() {
    if (this.isAlive) {
      return this.neighbors.alive.length === 2 || this.neighbors.alive.length === 3;
    }
    return false;
  }

  /**
   * Comprueba si la célula está en un ambiente apareamiento:
   * Cualquier célula muerta con exactamente tres vecinos vivos se convierte en una célula viva
   * @return {boolean} true si existe dicho ambiente : false
   */
  checkMating() {
    if (!this.isAlive) {
      return this.neighbors.alive.length === 3;
    }
    return false;
  }

  /**
   * Comprueba cual es el estado de la célula
   */
  check() {
    if (this.checkSubpopulation()) this.isAlive = false;
    if (this.checkOverpopulation()) this.isAlive = false;
    if (this.checkAlive()) this.isAlive = true;
    if (this.checkMating()) this.isAlive = true;
    return this.isAlive;
  }
}

export default Cell;