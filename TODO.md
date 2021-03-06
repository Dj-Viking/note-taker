# Acceptance Criteria

* DONE GIVEN a note-taking application
* DONE WHEN I open the Note Taker
* DONE THEN I am presented with a landing page with a link to a notes page
* DONE WHEN I click on the link to the notes page
* DONE THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
* DONE WHEN I enter a new note title and the note’s text
* DONE THEN a Save icon appears in the navigation at the top of the page
* DONE WHEN I click on the Save icon
* DONE THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
* DONE WHEN I click on an existing note in the list in the left-hand column
* DONE THEN that note appears in the right-hand column
* DONE WHEN I click on the Write icon in the navigation at the top of the page
* DONE THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column

## Getting started

* DONE <code>GET '/notes'</code> should return the notes.html file.
* DONE? <code>GET '*'</code> should return the index.html file.

* The following API routes should be created:
  - DONE <code>GET /api/notes</code> should read the db.json file and return all saved notes as JSON
  - DONE<code>POST /api/notes</code> should receive a new note to save on the request body, add it to the <code>db.json</code> file and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved.

## BONUS

Add the delete route to the application using the following guideline:
  * DONE <code>DELETE /api/notes/:id</code> should receive a query parameter containing the id of a note to delete. 
    - DONE in order to delete a note, will need to read all notes from the <code>db.json</code> file, 
    - DONE remove the note with the given id property, and the rewrite the notes to the <code>db.json file</code>

