<template>
    <div>
        <h1>Note title</h1>
        <div v-bind:key="note.id" v-for="note in notes" >
            <h5>{{note.title}}</h5>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Notes',
    props: ["notes"]
}
</script>

<style scoped>

</style>

