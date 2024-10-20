import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    userData: [],
    userData2:[],
    userData3:[],
   
};



const UserDetailsSlice = createSlice({

    
    name: 'userDetails',
    initialState,
    reducers: {

        setUserData(state, action) {
            state.userData = action.payload;
        },
        setUserData2(state,action){
            state.userData2 =action.payload
        },
        setUserData3(state,action){
            state.userData3 =action.payload
        }



    }

})

export const { setUserData ,setUserData2,setUserData3} = UserDetailsSlice.actions;
export default UserDetailsSlice.reducer