<template>
  <div id="app">
    <toolbar
      v-on:clickNew="createNote"
      v-on:clickDelete="deleteNote"
      v-bind:searchNoteText="searchNoteText"
      v-on:inputSearchNoteText="updateSearch"
    >
    </toolbar>
    <note-container 
      v-bind:notes="notes" 
      v-bind:transformedNotes="transformedNotes"
      v-bind:selectedNote="selectedNote" 
      v-on:selectNote="selectNote" 
      v-on:inputNoteEditor="updateSelectedNote">
    </note-container>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar'
import NoteContainer from './components/NoteContainer'

export default {
  name: 'App',
  components: {
    Toolbar,
    NoteContainer
  },
  data: function() {
    var initialNotes = [
        {
          id: 1,
          body: 'This is a first test',
          timestamp: Date.now()
        },
        {
          id: 2,
          body: 'This is a second test',
          timestamp: Date.now()
        },
        {
          id: 3,
          body: 'This is a third test',
          timestamp: Date.now()
        }
    ];

    return {
      notes: initialNotes,
      selectedNote: initialNotes[0],
      searchNoteText: ''
    }
  },

  methods: {
    selectNote: function(note) {
      this.selectedNote = note
    },
    updateSelectedNote: function(body) {
      this.selectedNote.body = body
      this.selectedNote.timestamp = Date.now()
    },
    createNote: function() {
      var newNote = {
        id: Date.now(),
        body: "",
        timestamp: Date.now()
      }
      this.notes.push(newNote)
      this.selectedNote = newNote
    },
    deleteNote: function() {
      var index = this.notes.indexOf(this.selectedNote)
      if(index !== -1) {
        this.notes.splice(index, 1)
        if(this.transformedNotes.length > 0) {
          this.selectedNote = this.transformedNotes[0]
        } else {
          this.selectedNote = {}
        }
      }
    },
    updateSearch: function(newSearchText) {
      this.searchNoteText = newSearchText
      if(this.transformedNotes.length === 0){
        this.selectedNote = {}
      } else if(this.transformedNotes.indexOf(this.selectedNote) === -1) {
        this.selectedNote = this.transformedNotes[0];
      }
    }
  },
  computed: {
    transformedNotes: function() {
      return this.notes
      .filter(function(note){
          return  note.body.toLowerCase().indexOf(this.searchNoteText.toLowerCase()) !== -1
      }
      .bind(this))
      .slice().sort(function(a, b) {
          return b.timestamp - a.timestamp;
        });
    }
  }
}
</script>

<style>
/* RESET */
* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: none;
  box-sizing: border-box;
}

/* LAYOUT */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.toolbar {
  padding: 0.5em;
}
.toolbar-button, .toolbar-search {
  padding: inherit;
  border-radius: 0.3em;
}
.toolbar-search {
  float: right;
}
.note-container {
  display: flex;
  flex: 1;
}
.note-selectors {
  flex: 0 0 13em;
}
.note-selector {
  padding: 1em;
}
.note-selector p {
  margin: 0;
}
.note-editor {
  display: flex;
  flex: 1;
  flex-direction: column;
}
.note-editor-info {
  padding: 0.5em;
  text-align: center;
}
.note-editor-input {
  display: flex;
  flex: 1;
  width: 100%;
  padding: 0 2em 0 2em;
}

/* COLORS */
* {
  color: #454545;
  background-color: #FAFAF8;
}
.toolbar {
  background-color: #DCDADC;
}
.toolbar-button {
  background-color: #FFFFFF;
}
.toolbar-button:active {
  background-color: #AAAAAA;
}
.note-selectors {
  border-right: 1px solid #DCDADC;
}
.note-selector {
  border-bottom: 1px solid #DCDADC;
}
.note-selector.active {
  background-color: #FCE18D;
}
.note-selector-title {
  background-color: inherit;
}
.note-selector-timestamp {
  color: #626262;
  background-color: inherit;
}
.note-editor-info {
  color: #DCDADC;
}

/* TYPOGRAPHY */
body {
  font-family: sans-serif;
}
.note-selector-title {
  font-weight: bold;
}
.note-selector-timestamp {
  font-size: 0.7em;
}
.note-editor, .note-editor-input {
  font-size: 0.9em;
}
</style>