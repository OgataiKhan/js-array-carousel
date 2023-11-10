# Carosello Mono Array

This project is an image carousel that uses javascript to cycle through different images when the user clicks on the up or down arrows.

1. In javascript we create an array containing the file names of the images and save it as a variable.
2. We create an "items" variable that will contain the html div element that will contain all our images.
3. We create a variable that represents the position of the currently active slide in the array.
4. We create variables that represent the "prev" and "next" arrows in our document
5. We use a for loop to add the images to the html using a template literal.
6. We add the "active" class to the first slide.
7. We create a variable that selects all of our slides in the html.
8. We use addEventListener to cycle through the images when we click on the arrows, making sure we can't continue past the first and last image.

## Bonus 1

The carousel becomes cyclical. When the user clicks "down" from the last image it will bring them to the first image and vice-versa.

## Bonus 2

Add thumbnails for all the images on the right, highlighting the thumbnail of the active image.

1. We create a "thumbnails" variable that will contain html div element that will contain all our thumbnails.
2. We add the thumbnails with the existing for loop
3. We add the "highlighted" class to the first thumbnail
4. We create a variable that selects all of our thumbnails in the html.
5. We manage the "highlighted" class of our active thumbnail the same way we did with the "active" class of our active image

## Bonus 3

Clicking on a image's thumbnail makes it the active image.