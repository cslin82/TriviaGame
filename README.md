# TriviaGame
Trivia Game for HW5

Using HTML, CSS, and jQuery JavaScript, build a trivia game of multiple choice or true/false questions. Pick a theme.

Give the player a limited amount of time for the whole quiz (timed form) or each question (timed questions). For timed form, present all questions at once. For timed questions, present questions sequentially.

At the end of the game, present score, and present option to restart game without reloading page.

## As Implemented

[Simple version](bootstrap-trivia.html) uses HTML radio buttons to make answers mutually exclusive. Simple ternary operator to score questions.

[Advanced version](bootstrap-trivia-advanced.html) dynamically manipulates DOM and uses Bootstrap's `.list-group` to hold answers. Changes the color using bootstrap classes to show incorrect and correct answers.

Questions are stored with the correct answer first (zeroth element), and their placement on the page is by a shuffled array. Questions are presented in shuffled order as well. Both are randomized using a shuffled array containing the indexes. The shuffle is a Fisher-Yates implemenation by Mike Bostock, source in comments.

## Enhancements

* Add images and clear the questions like in the demo
* Additional styling, customization of Bootstrap theme
* Match UI elements to Smithsonian colors
* Add more questions to bank, selectable difficulty in number of questions, time per question.
