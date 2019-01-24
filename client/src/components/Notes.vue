<template>
    <div>
        <h3>Notely feed</h3>
        <div v-bind:key="note.id" v-for="note in notes" >
            <NoteItem v-bind:note="note" />
        </div>
    </div>
</template>

<script>
import NoteItem from './NoteItem.vue';

export default {
    name: 'Notes',
    props: ["notes"],
    components: {
        NoteItem,
    }
}
</script>

<style scoped>

</style>

