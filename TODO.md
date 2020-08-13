# Acceptance Criteria

* GIVEN a note-taking application
* WHEN I open the Note Taker
* THEN I am presented with a landing page with a link to a notes page
* WHEN I click on the link to the notes page
* THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
* WHEN I enter a new note title and the note’s text
* THEN a Save icon appears in the navigation at the top of the page
* WHEN I click on the Save icon
* THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
* WHEN I click on an existing note in the list in the left-hand column
* THEN that note appears in the right-hand column
* WHEN I click on the Write icon in the navigation at the top of the page
* THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column

## Getting started

* <code>GET /notes</code> should return the notes.html file.
* <code>GET *</code> should return the index.html file.

* The following API routes should be created:
  - <code>GET /api/notes</code> should read the db.json file and return all saved notes as JSON
  - <code>POST /api/notes</code> should recieve a new note to save on the request body, add it to the <code>db.json</code> file and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved.

## BONUS

Add the delete route to the application using the following guideline:
  * <code>DELETE /api/notes/:id</code> should receive a query parameter containing the id of a note to delete. in order to delete a note, will need to read all notes from the <code>db.json</code> file, remove the note with the given id property, and the rewrite the notes to the <code>db.json file</code>

