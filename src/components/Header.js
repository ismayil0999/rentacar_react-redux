import React from 'react';
import { Headers } from '../style';
import LightModeIcon from '@mui/icons-material/LightMode';
import SortIcon from '@mui/icons-material/Sort';
import {useDispatch,useSelector } from 'react-redux';
import { changeTheme,openSearch } from '../redux/state';
export default function Header() {
  const theme=useSelector(state=>state.cars.light)
  const search=useSelector(state=>state.cars.search)
  const dispatch=useDispatch()
  return (
   <Headers theme={theme}>
     <SortIcon fontSize='large' id="sort" onClick={()=>{dispatch(openSearch())}}/>
<h1>RentAuto</h1>
<LightModeIcon fontSize='large' onClick={()=>{dispatch(changeTheme())}}/>
   </Headers>
  );
}
