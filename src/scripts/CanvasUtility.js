/**
 * @author Antonio Raúl Guijarro Contreras <alu0101100494@ull.edu.es>
 * @file Módulo para poder realizar acciones comunes en un canvas
 * @copyright Antonio Raúl Guijarro Contreras 2020
 * @since 07.05.2020
 * @module CanvasUtility
 */

/* istanbul ignore next */
/**
 * Función que permite borrar todo el contenido de un canvas
 * @param {Context} ctx - ctxo del canvas que se desea borrar
 * @param {canvas} canvas - canvas que se desea borrar
 */
function clearScreen(ctx, canvas) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

/* istanbul ignore next */
/**
 * Función que permite ajustar los puntos por pulgada de un canvas,
 * consiguiendo que, tras su redimensión a un tamaño mayor del estándar,
 * los dibujos que se hagan sobre el mismo no se vean borrosos. Para tal fin,
 * la función tiene en cuanta la resolución actual del usuario que visualiza
 * la página web en la que se encuentra el canvas
 * @param {canvas} canvas - canvas al que se ajusta su DPI.
 */
function fixDpi(canvas) {
  const DEVICE_PIXEL_RATIO = window.devicePixelRatio;
  const styleHeight = parseFloat(getComputedStyle(canvas).
        getPropertyValue('height').slice(0, -2));
  const styleWidth = parseFloat(getComputedStyle(canvas).
        getPropertyValue('width').slice(0, -2));
  canvas.setAttribute('height', styleHeight * DEVICE_PIXEL_RATIO);
  canvas.setAttribute('width', styleWidth * DEVICE_PIXEL_RATIO);
}

export {fixDpi, clearScreen};