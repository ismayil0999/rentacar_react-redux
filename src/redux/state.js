import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
 
export const getCars=createAsyncThunk("getCars",async()=>{
   const response= await axios.get("https://mocki.io/v1/6f3e2d0c-aebf-45ec-a656-4ee1d2def35c")
   return response.data
})
const options=[
    {
        name:"Chevrolet"
    },
    {
        name:"Hundai"
    },
    {
        name:"Mercedes"
    },
    {
        name:"Bmw"
    },
    {
        name:"Kia"
    },
    {
        name:"Toyota"
    },
    {
        name:"Ford"
    },
    {
        name:"Lamborghini"
    },
    {
        name:"Toyota"
    }
]
export const data=createSlice({
    name:"cars",
   initialState:{
       value:[],
       loading:false,
       options:options,
       filter:[],
       light:false,
       search:false
   },
   reducers:{
       filterCars:(state,action)=>{
           const filteredCars=state.filter.filter(car=>car.price>action.payload.minPrice || car.price<=action.payload.maxPrice   || car.model===action.payload.model)
        state.value=filteredCars
        state.search=false
     },
    changeTheme:(state)=>{
if(state.light===false){
    state.light=true
}else{
    state.light=false
}
    },
    openSearch:(state)=>{
state.search=true
    },
    closeSearch:(state)=>{
state.search=false
    }
    },
   extraReducers:(builder)=>{
       builder.addCase(getCars.pending,(state,action)=>{
           state.loading=true;
       });
       builder.addCase(getCars.fulfilled,(state,action)=>{
           state.value=action.payload;
           state.filter=action.payload
           state.loading=false
       });
       builder.addCase(getCars.rejected,(state,action)=>{
           state.loading=false
       })
   }
})
 export const {filterCars,changeTheme,openSearch,closeSearch}=data.actions
export default data.reducer