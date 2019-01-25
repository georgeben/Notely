<template>
    <div class="notes">
        <div v-bind:key="note.id" v-for="note in notes" >
            <NoteItem v-bind:note="note" v-bind:modify="modify" v-on:delete-note="$emit('delete-note', note.id)" />
        </div>
    </div>
</template>

<script>
import NoteItem from './NoteItem.vue';

export default {
    name: 'Notes',
    props: ["notes", "modify"],
    components: {
        NoteItem,
    }
}
</script>

<style scoped>
    .notes{
        background-color: #fff;
        width: 65%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 10px;
    }
</style>

