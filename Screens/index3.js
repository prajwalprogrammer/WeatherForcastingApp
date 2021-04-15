import axios from 'axios'
import React from 'react'
export const getWhether1= async(Pro)=>{
 
    try {
      const {data}=await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${Pro}&appid=d54fd2f3e4405a94d10ef49f90c1a91f`);
      return data;

    } catch (error) {
      return null;
    }
  
  
    
//   .then((Res)=>{
// // console.log(Res.data)
// // return Res.data;
  //   var c=0
  // var t=0
  // const l=22
  // const y=((((Data.list[0].dt_txt).split(" "))[0]).split("-"))[2]
  // var y1=y+5
  //   for (var j = y; j <= y; j = j + 1) {
  //     for (var i=0;i<l;i=i+1){
  //       if((((((Data.list[i].dt_txt).split(" "))[0]).split("-"))[2])==j){
  //         c+=1
  //         t+=(Data.list[i].main.temp)
  //       }
  //     arrR.push(t)
  //     arrD.push(j)
  //     }
  //   }
  //   console.log(arrD)
  //   console.log(arrR)
//   }).catch(err=>console.log(err.message))
 // console.log(Data.data)
}

export const getWhether4= async(Pro1,pro2)=>{
 
  try {
    const {data}=await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${Pro1}&lon=${pro2}&appid=e34d92e189fc02f803fea1c7f452dee2`);
    return data;

  } catch (error) {
    return null;
  }
}
