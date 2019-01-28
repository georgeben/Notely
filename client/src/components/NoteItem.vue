<template>
    <div class="note">
        <router-link :to="`/view/${note.id}`">{{note.title}}</router-link>
        <p>{{note.content}}</p>
        <div v-if="modify" >
            <button class=" btn edit"><router-link :to="`/edit/${note.id}`" class="edit-link" >Edit</router-link></button>
            <button class="btn delete"  data-toggle="modal" data-target="#exampleModal" >Delete</button>

        </div>
        <p>{{note.createdAt}}</p>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Delete Note</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    Are you sure you want to delete {{note.title}}?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button @click="deleteNote" type="button" class="btn delete" data-dismiss="modal">Delete note</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'NoteItem',
    props: ["note", "modify"],
    methods: {
        deleteNote(){
            axios.delete(`http://localhost:3000/api/notes/${this.note.id}`)
            .then(res => {
                this.$emit('delete-note', this.note.id);
            })
            .catch(err => {
                console.log(err)
            })
        }
    }
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

.edit{
    background-color: rgb(0, 76, 255);
    color: white;
    margin-right: 10px;
}

.edit-link{
    color: white;
}

.delete{
    background-color: red;
    color: white;

}
</style>

