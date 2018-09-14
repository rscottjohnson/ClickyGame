# ClickyGame
### A memory game made with React.
ClickyGame is a web app that presents users with a set of images, and lets users click them in a memory game style fashion that reshuffles the images with each click.

## Motivation
ClickyGame is a one page app, which complies with the guidelines of:
* Breaking up the application's UI into components
* Management of component state
* Responding to user events
* Deployment to Github Pages

## Project Usefulness
This web app is useful as a demonstration of how React can render content dynamically on a page following user interaction.

The application renders different images to the screen, and each image listens for click events.  The application keeps track of the user's score, which is incremented when a user clicks an image for the first time.  The user's score resets to 0 if they click the same image more than once.

Every time an image is clicked, the images rendered to the page shuffle themselves in a random order.

Once the user's score is reset after an incorrect guess, the game restarts.

## APIs / Libraries / Technology Used
The following APIs, libraries, and technology are used:

* React

## Credits
ClickyGame was created by Scott Johnson.