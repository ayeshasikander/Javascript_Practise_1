

# Interactive Rectangle Color Changer

## Project Overview

This project is a basic JavaScript exercise aimed at learning and practicing fundamental JavaScript concepts. It creates a rectangle on a webpage and implements dynamic color changes and intensity adjustments based on mouse movement within the rectangle.

## Project Details

- The project's main feature is a rectangle that changes its color and intensity in response to mouse movements.

- When the mouse pointer is inside the rectangle and on the right side, the rectangle's color gradually transitions to blue. As the mouse moves from right to left within this region, the blue color's intensity deepens.

- Conversely, when the mouse pointer is inside the rectangle and on the left side, the rectangle's color changes to red. As the mouse moves from left to right within this region, the red color's intensity also deepens.

- When the mouse pointer is precisely at the center of the rectangle, the rectangle's color turns black.

- These color changes occur only when the mouse pointer is within the actual half-width of the rectangle, either from left to right or right to left.

- Finally, when the mouse pointer leaves the rectangle, the rectangle's color smoothly transitions back to white.

## JavaScript Implementation

Here's a snippet of the JavaScript code used to achieve these dynamic color changes:

```javascript
var rect = document.querySelector("#center");
rect.addEventListener("mousemove", function (detail) {
    var rectangleLocation = rect.getBoundingClientRect();
    var insideValue = detail.clientX - rectangleLocation.left;
    if (insideValue < rectangleLocation.width / 2) {
        var redColor = gsap.utils.mapRange(
            0, rectangleLocation.width / 2, 255, 0, insideValue
        );
        gsap.to(rect, {
            backgroundColor: `rgb(${redColor},0,0)`,
            ease: Power4,
        });
    } else {
        var blueColor = gsap.utils.mapRange(
            rectangleLocation.width / 2, rectangleLocation.width, 0, 255, insideValue
        );
        gsap.to(rect, {
            backgroundColor: `rgb(0,0,${blueColor})`,
            ease: Power4,
        });
    }
});

rect.addEventListener("mouseleave", function () {
    gsap.to(rect, {
        backgroundColor: "white",
    });
});
```

## Purpose

This project serves as an educational exercise to reinforce JavaScript skills and gain hands-on experience with concepts like event handling, DOM manipulation, and color transitions.

Feel free to use this project as a practical learning tool or as a reference for similar interactive web elements.

---
