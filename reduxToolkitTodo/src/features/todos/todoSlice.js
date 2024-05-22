import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState ={
    todos: [{id:1,Text:"hello world"}]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                Text:action.payload,


            }
            state.todos.push(todo)

            
        },
        deleteTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!=action.payload)
        },
    }

}) 

export const {addTodo,deleteTodo}= todoSlice.actions

export default todoSlice.reducer