import React, { useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getCars, showInfo,showRent } from '../redux/state';
import { Price,Image,Box,Container,HeadContainer } from '../style';
import CircularProgress from '@mui/material/CircularProgress';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Search from './Search';
import { NavLink } from 'react-router-dom';
export default function Cars() {
  const car=useSelector((state)=>state.cars.value)
  const theme=useSelector((state)=>state.cars.light)
  const isLoading=useSelector((state)=>state.cars.loading)
  const color=car.map(cars=>cars.color)
const dispatch=useDispatch()
useEffect(()=>{
dispatch(getCars())
},[])

  return (
   <HeadContainer theme={theme}>
 <Container>
 {
  isLoading===true ? 
  <CircularProgress/> :  
  car.map((cars)=>{
    return <Box theme={theme}>
       <h3>{cars.name}</h3>
       <Image src={cars.img}></Image>  
     
       <h4 style={{color:theme===true ? "white" : "rgb(206, 4, 4)"}}>{cars.price} <AttachMoneyIcon/></h4>
       <Price>
         <NavLink to={`/info/${cars.id}`}>
        <button style={{background:"#17A2B8"}} onClick={()=>dispatch(showInfo())}>Info</button>
        </NavLink>
       <NavLink className="active" to={`/rent/${cars.id}`}>
       <button onClick={()=>{dispatch(showRent())}}>Rent</button> 
       </NavLink>
       </Price>
     </Box>
  })
 }
</Container>
<Search/>
</HeadContainer>
  );
}
