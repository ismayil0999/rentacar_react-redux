import styled from "styled-components";
const Headers=styled.div`
width:100%;
height:70px;
background:${props=>props.theme===true ? "black" : "rgb(206, 4, 4) "};
margin:0;
color:white;
display:flex;
align-items:center;
justify-content:space-between;
padding-left:3%;
box-sizing:border-box;
padding-right:3%;
#sort{
  display:none;
}
@media screen and (max-width:915px){
#sort{
  display:block;
}
}
`
const Select=styled.select`
width:90%;
height:40px;
border:1px solid black;
outline:none;
`
const PriceRangeBox=styled.div`
width:90%;
display:flex;
justify-content:space-between;
gap:5px;
`
const PriceInput=styled.input`
width:45%;
height:35px;
border:1px solid black;
padding-left:10px;
font-size:14px;
color:grey;
outline:none;
`
const FindButton=styled.button`
width:90%;
padding:10px;
color:white;
background:rgb(206, 4, 4);
border:none;
outline:none;
`
//Styles on cars component item
const Container=styled.div`
display:flex;
gap:20px;
flex-wrap: wrap;
flex-shrink: 0;
width:70%;
justify-content:center;
align-items:flex-start;
@media screen and (max-width:915px){
   width:100%;
}
`
const HeadContainer=styled.div`
width:100%;
display:flex;
box-sizing: border-box;
padding-top:100px;
background:${props=>props.theme===true ? "black" : "rgb(243, 243, 243)"}
`
const Box=styled.div`
width:200px;
height:280px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
padding:0;
position:relative;
background:${props=>props.theme===true ? "#2D2C2C" : "white"};
margin-top:10px;
box-shadow: 0 5px 20px 5px rgb(0 0 0 / 12%);
//border:${props=>props.theme===true ? "1px solid white" : "none"};
  button{
  background:rgb(206, 4, 4);
  border:none;
  outline:none;
  width:100px;
  padding:4px;
  color:white;
  height:30px;
}
h3{
  color:grey;
  width:100%;
  background:rgb(206, 4, 4);
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  padding-left:13px;
  text-align:start;
  box-sizing:border-box;
  color:white;
  padding:7px;
margin-top:-0px;
height:50px !important;
}
@media screen and (max-width:423px){
    width:90%;
 }
 h4{
  display:flex;
  align-items:center;
  justify-content:flex-start;
  width:100%;
  color:rgb(206, 4, 4);
  padding-bottom:18px;
  padding-left:10px;
}
`
const Image=styled.img`
width:195px;
height:140px;
`
const Price=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:100%;
box-sizing:border-box;
gap:74px;
position:absolute;
bottom:0;
`
const SearchArea=styled.div`
width:30%;
flex-direction: column;
display:flex;
align-items: center;
gap:20px;
padding-right: 20px;
height:620px;
box-sizing: border-box;
padding-top:10px;
@media screen and (max-width:915px){
    position:absolute;
    width:100%;
    top:0%;
    left:${props=>props.search===true ? "0%" : "-100%"};
    background:rgb(243, 243, 243);
    height:100%;
    padding-top:30px;
}
`
const OurBenefits=styled.div`
display:flex;
width:100%;
justify-content:center;
flex-wrap:nowrap;
flex-shrink:0 !important;
align-items:center;
gap:50px;
overflow-x:scroll;
div{
  display:flex;
  flex-direction:column;
  align-items:center;
  min-width:200px;
  background:white;
  box-shadow: 0 5px 20px 5px rgb(0 0 0 / 12%);
}
`
export {Headers,Select,PriceRangeBox,PriceInput,FindButton,Price,Image,Box,SearchArea,Container,HeadContainer,OurBenefits}