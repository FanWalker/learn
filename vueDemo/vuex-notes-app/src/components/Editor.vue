<template>
    <div id="note-editor">
        <div class="form-group">
            <input type="text" name="title"
            class="title form-control"
            placeholder="请输入标题"
            @input="updateNote"
            v-model="currentNote.title">
            <textarea name="note-content" id="note-content" cols="30" rows="10"
            class="form-control" placeholder="请输入正文"
            @input=“updateNote></textarea>
        </div>
    </div>
</template>

<script>
    import { editNote } from '../vuex/actions';
    import { activeNote } from '../vuex/getters';

    export default{
        vuex: {
            getters: {
                activeNote
            },
            actions: {
                editNote
            }
        },
        computed: {
            //通过计算属性得到一个对象，再使用v-model
            currentNote; activeNote
        },
        methods: {
            updateNote(){
                this.editNote(this.currentNote);
            }
        }
    }
</script>

<style lang="scss" scoped>
    #note-editor {
        height: 100%;
        margin-left: 380px;

        .form-group{
            height: 50%;
        }
        .title{
            border: 0;
        }
        textarea{
            height: 100%;
            border: 0;
            border-radius: 0;
            padding-top: 15px;
        }
    }
</style>