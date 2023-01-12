import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { Select,PriceRangeBox,PriceInput,FindButton,SearchArea } from '../style';
import { filterCars} from '../redux/state';

export default function Search() {
    const options=useSelector(state=>state.cars.options);
    const search=useSelector(state=>state.cars.search);
    const theme=useSelector((state)=>state.cars.light)
 const [model,setModel]=useState("")
 const [minPrice,setMinPrice]=useState()
 const [maxPrice,setMaxPrice]=useState()
const dispatch=useDispatch()
  return (
   <SearchArea search={search} theme={theme}>
      <Select onChange={(e)=>{setModel(e.target.value)}}>
           <option disabled>Marka</option>
         {options.map(option=>{
             return <option>{option.name}</option>
         })}
     </Select>
    <PriceRangeBox>
        <PriceInput placeholder='min-price' onChange={e=>setMinPrice(Number(e.target.value))}  />
        <PriceInput placeholder='max-price' onChange={e=>setMaxPrice(Number(e.target.value))} />
         </PriceRangeBox>
        <FindButton value="1" onClick={()=>{
dispatch(filterCars({
    model:model,
    minPrice:minPrice,
    maxPrice:maxPrice,
    }))
}} >FIND A CAR</FindButton>
    </SearchArea>
  );
}
