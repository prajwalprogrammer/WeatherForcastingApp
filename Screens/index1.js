import axios from 'axios'
import React from 'react'
export const getWhether= async(pro)=>{
  //console.log(this.props.city)
  try {
    const {data}=await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${pro}&appid=d54fd2f3e4405a94d10ef49f90c1a91f`)
  // alert(data)
    return data;
    
  } catch (error) {
   // alert("City Not Found")
    return null; 
   // alert(error.message)
  }
//  .then((Res)=>{
//  console.log(Res.data)
//  })
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