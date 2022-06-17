// const { application } = require('express');
const fs = require('fs');
const path = require('path');

module.exports = app => {
  
  // Setup for notes variable
  fs.readFile("db/db.json", "utf-8", (err,data) => {
    
    if (err) throw err;

    var notes = JSON.parse(data);

    // API Routes
    // API get route
    app.get('/api/notes', function(req, res) {
      // return all saved notes as JSON
      res.json(notes);
    });

    // api post route
    api.post('/api/notes/:id', function (req, res) {
      // New notes received will be added to db.json, then returns the new note
      let newNote = req.body;
      notes.push(newNote);
      updateDb();
      return console.log("Added new note: " + newNote.title)
    });

    // Retrieves note w/ a specific ID
    app.get('/api/notes/:id' function(req, res) {
      res.json(notes[req.params.id]);
    });

    // Deletes a note w/ a specific ID
    app.delete('/api/notes/:id' function (req, res) {
      notes.splice(req.params.id, 1);
      updateDb();
      console.log("Deleted note with the ID " = req.params.id);
    });

    // Display notes.html when notes directory is accessed
    app.get('/notes', function(req, res) {
      res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    // Display index.html when all other routes are accessed
    app.get('*', function (req, res) {
      res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    //updates the json file whenever a note is added or deleted
    function updateDb() {
      fs.writeFile('db/db.json', JSON.stringify(notes, '\t'), err => {
        if (err) throw err;
        return true;
      });
    }

  });

}