<template>
	<div class="toolbar">
	  <button 
	  	class="toolbar-button"
	  	v-on:click="clickNew"
	  >
	  	New
  	  </button>
	  <button 
	  	class="toolbar-button"
	  	v-on:click="clickDelete"
  	  >
  	  	Delete
  	  </button>
	  <input 
	  	class="toolbar-search" 
	  	type="text" 
		placeholder="Search..."
		v-bind:value="searchNoteText" 
		v-on:input="inputSearchNoteText($event)">
	</div>
</template>

<script>
import { EventBus } from '../EventBus.js'
export default {
	name: 'toolbar',
	props: ['searchNoteText'],
	methods: {
		clickNew: function() {
			EventBus.$emit('createNote')
		},
		clickDelete: function() {
			EventBus.$emit('deleteNote')
		},
		inputSearchNoteText: function($event) {
			EventBus.$emit('updateSearch', $event.target.value)
		}
	}
}
</script>