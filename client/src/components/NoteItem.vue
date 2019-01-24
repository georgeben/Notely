<template>
    <div>
        <h5>{{note.title}}</h5>
        <p>{{note.content}}</p>
    </div>
</template>

<script>
export default {
    name: 'NoteItem',
    props: ["note"]
}

</script>

<style scoped>

</style>

