import FormModal from './components/formtoedit';
import Form from './components/formtopost';
import TableHead from './components/thead';
import TableBody from './components/tbody';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {
  const[webpages,setWebpages]=useState([])

  
  




  const newPage=(e)=>{
    
    e.preventDefault(e)
    const name=e.target.elements.name.value
    const url=e.target.elements.url.value
    const img=e.target.elements.img.value
    

    fetch(' http://localhost:8080/webpages',{
      method:'POST',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({name:name,url:url,img:img})
    })
    .then(alert("You have added a new webpage!"))
    .then(window.location.reload())
  }


  const deletePage=(id)=>{
    fetch(`http://localhost:8080/webpages/${id}`, {
  method: "DELETE"
})
.then(alert("Deleted!"))
.then(window.location.reload())
  }



  useEffect(()=>{
    fetch(' http://localhost:8080/webpages')
    .then(res=>res.json())
    .then(data=>{setWebpages(data)})
    },[])




  return (
   <>
   <h1>See all {webpages.length} webpages</h1>
   <div className="allForms">
    <Form addFunction={newPage}/>

   </div>
   
<table>
<TableHead/>
<tbody>
{  
  webpages.map((page,i)=><TableBody key={i} data={page} deleteFunction={deletePage}  />)
}
</tbody>
</table>
   </>
  );
}

export default App;
