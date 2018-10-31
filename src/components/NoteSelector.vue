<template>
	<div 
		class="note-selector" 
		v-bind:class="{active: note === selectedNote}"
	>
	    <p class="note-selector-title">
	    	{{ note.body | formatTitle }}
    	</p>
	    <p class="note-selector-timestamp">
	    	{{ note.timestamp | formatTimeStamp }}
    	</p>
  	</div>
</template>

<script>
export default {
	name: 'note-selector',
	props: ['note', 'selectedNote'],
}
</script>