# ReMemory
ReMemory is a React.js memory game. This application is broken into UI components, manages component state, and responds to user click events.

### How It Works
* The object of the game is to click on an image only once, and the images reshuffle after each click in order to test your memory.
* The application renders different images to the screen. Each image listens for click events.
* The application keeps track of the user's score. The user's score is incremented when clicking an image for the first time. 
* The user's score is reset to 0 if they click the same image more than once.
* Every time an image is clicked, the images rendered to the page reshuffle in random order.
* When the user's score is reset after an incorrect guess, the game restarts.
* When the user correctly clicks on every image only once, the user wins and the game restarts.

### Technologies Used
JavaScript, React, Bootstrap, jQuery, HTML, CSS

![ReMemory Screenshot](https://github.com/natplusultra/ReMemory/blob/master/memory-game/public/images/ReMemory%20Screenshot.png)
