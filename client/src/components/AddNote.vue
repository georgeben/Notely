<template>
    <form>
        <div class="form-group">
            <label for="exampleFormControlInput1">Note Title</label>
            <input v-model="title" type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter the title of your note">
        </div>
        <div class="form-group">
            <textarea v-model="content" class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Type your note here"></textarea>
        </div>
        <div class="form-check">
            <input v-model="publish" type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Publish</label>
        </div>
        <button type="submit" class="btn btn-primary">Save note</button>
    </form>
</template>

<script>
export default {
    name: 'AddNote',
    data(){
        return {
            title: '',
            content: '',
            publish: true,
        }
    },
}
</script>

<style scoped>

</style>
