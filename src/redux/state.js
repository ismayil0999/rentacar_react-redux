import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
 
export const getCars=createAsyncThunk("getCars",async()=>{
   const response= await axios.get("https://mocki.io/v1/c58522f4-4615-4f14-b68b-85b61fc1d0ad")
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
       search:false,
       info:false,
       rent:false,
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
    },
    showInfo:(state)=>{
state.info=true
    },
    closeInfo:(state)=>{
        state.info=false
            },
            showRent:(state)=>{
                state.rent=true
                    },
                    closeRent:(state)=>{
                        state.rent=false
                            },
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
 export const {filterCars,changeTheme,openSearch,closeSearch,showInfo,closeInfo,showRent,closeRent}=data.actions
export default data.reducer