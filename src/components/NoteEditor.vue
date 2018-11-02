<template>
      <div class="note-editor" v-if="selectedNote.id">
            <div class="editor-scrollbar-container" style="height:0px">
                <div class="editor-scrollbar" id="editor-scrollbar"></div>
            </div> 
            <p class="note-editor-info">
            	{{ selectedNote.timestamp | formatTimeStamp }}
            </p>
            <textarea 
                  id="note-editor-input"
            	class="note-editor-input" 
            	v-bind:value="selectedNote.body"
            	v-on:input="input($event)" 
            >
            </textarea>
      </div>
</template>

<script>
import { EventBus } from '../EventBus'
export default {
	name: 'note-editor',
	props: ['selectedNote'],
	methods: {
		input: function($event) {
			EventBus.$emit('updateSelectedNote', $event.target.value)
		}
	}
}
</script>