import React,{useState} from 'react'

export default function App() {
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
  var len=0;var res="";
  var str1=key1.split("");
  var str2=key2.split("");
  function main(){
 
  for(let j=0;j<key2.length;j++){
    var a = str1.indexOf(key2.charAt(j));
   delete str1[a]}
 
 for(let j=0;j<key1.length;j++){
  var a = str2.indexOf(key1.charAt(j));
 delete str2[a]}

for(let i=0;i<key1.length;i++){
  if(str1[i]!=undefined)
  len++;
}
for(let i=0;i<key2.length;i++){
  if(str2[i]!=undefined)
  len++;
}
 
 console.log(len)
 len=len%6
  
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
      {/* <h3 data-testid="answer">{state}</h3>  */}
      {state?<h3 data-testid="answer">{state}</h3> :""}
      </div>
  )
}
