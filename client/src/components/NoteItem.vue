<template>
    <div class="note">
        <h5>{{note.title}}</h5>
        <p>{{note.content}}</p>
        <div v-if="modify" >
            <button>Edit Note</button>
            <button>Delete</button>
        </div>
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

