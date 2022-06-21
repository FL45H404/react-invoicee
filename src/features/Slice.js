import {createSlice} from '@reduxjs/toolkit'
export const initialState={
list:[],
isLogin:false,
userData:{}
}

export const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        addLists:(state,action)=>{
            state.list=[...state.list,action.payload]
        },
        addUser:(state)=>{
            state.isLogin=!state.isLogin
        },
        removeUser:(state)=>{
            state.isLogin=!state.isLogin
        },
        addUserData:(state,action)=>{
        //    return {...state,userData:action.payload}
           state.userData=action.payload
        },
        removeUserData:(state)=>{
            state.userData={}
        }

        }
    }
)

export const {addLists,addUser,removeUser,addUserData,removeUserData}=userSlice.actions
export const isLogin=(state)=>state.user.isLogin
export default userSlice.reducer