var $noteTitle = $(".note-title");
var $noteText = $(".note-textarea");
var $saveNoteBtn = $(".save-note");
var $newNoteBtn = $(".new-note");
var $noteList = $(".list-container .list-group");

let noteListCopy = [];

// activeNote is used to keep track of the note in the textarea
var activeNote = {};

// A function for getting all notes from the db
getNotes = function() {
  return $.ajax({
    url: "/api/notes",
    method: "GET"
  });
};

// A function for saving a note to the db
saveNote = function(note) {
  return $.ajax({
    url: "/api/notes",
    data: note,
    method: "POST"
  });
};

// BONUS A function for deleting a note from the db
deleteNote = function(id) {
  

  return $.ajax({
    url: "api/notes/" + id,
    method: "DELETE"
  });
};

// If there is an activeNote, display it, otherwise render empty inputs
renderActiveNote = function() {
  $saveNoteBtn.hide();

  if (activeNote.id) {
    $noteTitle.attr("readonly", true);
    $noteText.attr("readonly", true);
    $noteTitle.val(activeNote.title);
    $noteText.val(activeNote.text);
  } else {
    $noteTitle.attr("readonly", false);
    $noteText.attr("readonly", false);
    $noteTitle.val("");
    $noteText.val("");
  }
};

// Get the note data from the inputs, save it to the db and update the view
handleNoteSave = function() {
  var newNote = {
    title: $noteTitle.val(),
    text: $noteText.val()
  };

  saveNote(newNote).then(function(data) {
    console.log(data);
    getAndRenderNotes();
    renderActiveNote();
  });
};

// BONUS Delete the clicked note
handleNoteDelete = function(event) {
  //console.log(event);
  //console.log(event.target);
  // console.log($(event.target).parent('.list-group-item'));
  
  // const targetParent = $(event.target).parent('.list-group-item');
  // targetParent.addClass('display-none');
  //alert("You deleted an item! refresh the page to see the changes!")

  // prevents the click listener for the list from being called when the button inside of it is clicked
  event.stopPropagation();

  var note = $(this)
    .parent(".list-group-item")
    .data()
    console.log(note);

  if (activeNote.id === note.id) {
    activeNote = {};
  }

  // console.log($(event.target).parent('.list-group-item'));
  // const targetParent = $(event.target).parent('.list-group-item');
  // targetParent.addClass('display-none');

  deleteNote(note.id).then(function() {
    getAndRenderNotes();
    //setTimeout(function(){getAndRenderNotes()}, 1000);
    renderActiveNote()
  });

};

// Sets the activeNote and displays it
handleNoteView = function() {
  activeNote = $(this).data();
  renderActiveNote();
};

// Sets the activeNote to and empty object and allows the user to enter a new note
handleNewNoteView = function() {
  activeNote = {};
  renderActiveNote();
};

// If a note's title or text are empty, hide the save button
// Or else show it
handleRenderSaveBtn = function() {
  if (!$noteTitle.val().trim() || !$noteText.val().trim()) {
    $saveNoteBtn.hide();
  } else {
    $saveNoteBtn.show();
  }
};

// Render's the list of note titles
renderNoteList = function(notes) {
  $noteList.empty();
  
  var noteListItems = [];

  for (var i = 0; i < notes.length; i++) {
    var note = notes[i];

    var $li = $(`<li id="${i}" class='list-group-item'>`).data(note);
    var $span = $("<span>").text(note.title);
    var $delBtn = $(
      "<i class='fas fa-trash-alt float-right text-danger delete-note'>"
    );

    $li.append($span, $delBtn);
    noteListItems.push($li);
    noteListCopy = noteListItems;
  }

  $noteList.append(noteListItems);
};

// Gets notes from the db and renders them to the sidebar
getAndRenderNotes = function() {
  return getNotes().then(function(data) {
    console.log(data);
    renderNoteList(data);
  });
};

$saveNoteBtn.on("click", handleNoteSave);
$noteList.on("click", ".list-group-item", handleNoteView);
$newNoteBtn.on("click", handleNewNoteView);
$noteList.on("click", ".delete-note", handleNoteDelete);
//$noteList.on("click", ".delete-note", changeClassOfLi);
$noteTitle.on("keyup", handleRenderSaveBtn);
$noteText.on("keyup", handleRenderSaveBtn);

// Gets and renders the initial list of notes
getAndRenderNotes();
