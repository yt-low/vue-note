<template>
	<div class="note-editor" v-if="selectedNote.id">
      <p class="note-editor-info">
      	{{ selectedNote.timestamp | formatTimeStamp }}
      </p>
      <textarea 
      	class="note-editor-input" 
      	v-bind:value="selectedNote.body"
      	v-on:input="input($event)" 
      >
      </textarea>
    </div>
</template>

<script>
export default {
	name: 'note-editor',
	props: ['selectedNote'],
	methods: {
		input: function($event) {
			this.$emit('inputNoteEditor', $event.target.value)
		}
	}
}
</script>