import React,{useState} from 'react'

 function App() {
  const [key1, setKey1] = useState("")
  const [key2, setKey2] = useState("")
  const [state, setstate] = useState("")
  function fun1(e){
setKey1(e.target.value)
  }
  function fun2(e){
    setKey2(e.target.value)
  }
  function fun(){
    document.getElementsByTagName("input")[0].value=""
    document.getElementsByTagName("input")[1].value=""
    setKey1("")
    setKey2("")
    setstate("")
  }
  var str1=key1;var str2=key2;var len=0;var res="";
  function main(){
   for(let i=0;i<str1.length;i++){
     for(let j=0;j<str2.length;j++)
   str1= str1.replace(str2.charAt(j),"")
  //  console.log(str1,str2)
  } 
  for(let i=0;i<str2.length;i++){
    for(let j=0;j<key1.length;j++)
  str2= str2.replace(key1.charAt(j),"")
  //console.log(str1,str2)
 } 
 len=(str1.length+str2.length)%6
  
  switch(len){
    case 1:res="Friends"
    break;
    case 2:res="Love"
    break;
    case 3:res="Affection"
    break;
    case 4:res="Marriage"
    break;
    case 5:res="Enemy"
    break;
    case 0:res="Sibilings"
    break;
    default:res="Please Enter valid input"
    break
  }
  setstate(res)
}   
  return (
    <div id="main">
      <input data-testid="input1" placeholder="input1" onChange={fun1}></input>
      <input data-testid="input2" placeholder="input2" onChange={fun2}></input>
      <button data-testid="calculate_relationship" onClick={main}>Calculate Relationship Future</button>
      <button data-testid="clear" onClick={fun}>Clear</button>
      <h3 data-testid="answer">{state}</h3> 
      </div>
  )
}

export default App