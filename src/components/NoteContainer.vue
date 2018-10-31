<template>
  <div class="note-container">
    <note-selectors 
      v-bind:notes="notes" 
      v-bind:transformedNotes="transformedNotes"
      v-bind:selectedNote="selectedNote" 
      v-on:selectNote="selectNote">
    </note-selectors>

    <note-editor 
      v-bind:selectedNote="selectedNote"
      v-on:inputNoteEditor="inputNoteEditor"
    >
    </note-editor>
  </div>
</template>
    
<script>
import NoteSelectors from './NoteSelectors'
import NoteEditor from './NoteEditor'

export default {
	name: 'note-container',
  components: {
    NoteSelectors,
    NoteEditor
  },
  props: ['notes', 'transformedNotes', 'selectedNote'],
  methods: {
    selectNote: function(note) {
      this.$emit('selectNote', note);
    },
    inputNoteEditor: function(body) {
      this.$emit('inputNoteEditor', body)
    }
  }
}
</script>