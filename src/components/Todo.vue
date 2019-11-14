<template>
    <div id="todoTable">
        <h1>To Do's</h1>
        <table class="table">
            <thead>
                <th v-for="(key, index) in gridColumns" v-bind:key="index">
                    {{ key }}
                </th>
                <th></th>
            </thead>
            <tbody>
                <tr v-for="(row, r_index) in this.$store.state.todoData" v-bind:key="r_index">
                    <td v-for="(cell, c_index) in row" v-bind:key="c_index">
                        <todo-cell :entry="cell" :index="r_index" :column="c_index"/>
                    </td>
                    <td>
                        <b-button 
                            @click="deleteTodo(r_index)"
                            variant="danger">Delete</b-button>
                    </td>
                </tr>
                <tr>
                    <td colspan="2"></td>
                    <td>
                        <b-button 
                            @click="addTodo()"
                            variant="success">Add</b-button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import TodoCell from "../components/TodoCell.vue"

export default {
    data: function(){ 
        return {
            gridColumns: ['Text','Due']
    }},
    methods: {
        deleteTodo(index) {
            this.$store.dispatch('deleteTodo',index)
            console.log(index)
        },
        addTodo(){
            this.$store.dispatch('addTodo')
        }
    },
    components: {
        TodoCell
    }
}
</script>