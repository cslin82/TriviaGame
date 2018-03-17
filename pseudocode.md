# Trivia game pseudocode and planning

## HTML elements

* Header/title
* Play area
    * question
    * answers
    * timer
* Footer?


* jQuery objects needed for all **when are the jQuery objects created? does it all go inside the document ready function block?**

* Images

## Variables needed

* Question bank Array/object: questions and answers, mark correct answer
* Or hard-code in HTML for easier assignment

## Functions/routines needed

### Common or easier version

* answer checker, scorer
* timer, questions hider

### Advanced version

* event listners for answering
* reset game
* randomizer?
* shuffle multiple choice answers

### Method to convert question data into HTML/jQuery elements

* (Clear previous question)
* Create new divs or ul/li with question, and all answer choices
* Set data or classes as needed
* Add `click` handler to answer choices
* Add to container div

### Advanced game click handler

* Check to see if clicked answer is correct
* If correct, do stuff
* If incorrect, do other stuff
* More questions? Trigger new question, otherwise end game

### End game

* Calculate percentage score
* Hide things