<template>
    <div class="note">
        <router-link :to="`/view/${note.id}`">{{note.title}}</router-link>
        <p>{{note.content}}</p>
        <div v-if="modify" >
            <button>Edit Note</button>
            <button>Delete</button>
        </div>
        <p>{{note.createdAt}}</p>
    </div>
</template>

<script>
export default {
    name: 'NoteItem',
    props: ["note", "modify"]
}

</script>

<style scoped>
.note{
    padding: 10px 5px;
    border-bottom: 0.5px solid rgb(214, 215, 216);
    text-align: left;
}

.note p{
    color: #888;
}
</style>

