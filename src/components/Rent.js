import React, { useState } from 'react';
import { RentInfo,InfoHead } from '../style';
import { useSelector,useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';
import { closeRent } from '../redux/state';
import CloseIcon from '@mui/icons-material/Close';
export default function Rent() {
    const rent=useSelector(state=>state.cars.rent)
    const car=useSelector((state)=>state.cars.value)
    const theme=useSelector(state=>state.cars.light)
    const params=useParams()
    const item=car.find(cars=>cars.id==params.id)
    const [num,setNum]=useState(1)
    const dispatch=useDispatch()
  return (
    <RentInfo rent={rent} theme={theme}>
        <InfoHead style={{background:"rgb(206, 4, 4) "}}>
            <h4>Rent:  {    item.name}</h4>
            <CloseIcon id="close" onClick={()=>{dispatch(closeRent())}}/>
        </InfoHead>
        <div className='scroll'>
        <labeL>Pick up date</labeL>
      <input type="date"></input>
      <label>Drop of date</label>
      <input type="date"></input>
      <label>Choose a color</label>
      <select>
        {item.color.map(color=>{
            return <option>
                {color}
            </option>
        })}
      </select>
      <labeL>Location</labeL>
      <input type="text"></input>
      <label>Select a day</label>
      <select onChange={(e)=>{
setNum(e.target.value)
      }}>
          <option value="1">
              1 day
          </option>
          <option value="2">
              2 day
          </option>
          <option value="3">
              3 day
          </option>
      </select>
      <h3>Price: {  item.price* num}</h3>
      <button className='rentbtn'>Rent</button>
      </div>
      </RentInfo>
  );
}
