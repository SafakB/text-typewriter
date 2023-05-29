/*
 * Typewriter Effect
 * Author: Safak Bahce
 * Date: 2023-05-29
 *
 * This script applies a typewriter effect to any HTML element with the 'typewriter' class. 
 * It uses the 'data-text' attribute for the text to type out and the 'data-speed' attribute to set the typing speed.
 * If these attributes are not provided, it uses a default text and speed (100ms).
*/

// Select all elements using the 'typewriter' class
let elements = document.getElementsByClassName('typewriter');

// Apply the typewriter effect to each element
for (let j = 0; j < elements.length; j++) {
    // Get the data-text attribute of the element. If it doesn't exist, use a default text
    let text = elements[j].getAttribute('data-text') || "Default text";

    // Get the data-speed attribute of the element. If it doesn't exist, use a default speed (100ms)
    let speed = parseInt(elements[j].getAttribute('data-speed'), 10) || 100;
    let i = 0;

    function typewriterEffect() {
        if (i < text.length) {
            elements[j].innerHTML += text.charAt(i);
            i++;
            setTimeout(typewriterEffect, speed);
        }
    }

    // Call the function
    typewriterEffect();
}