import FormModal from "./formtoedit";
import { useState } from "react";

const TableBody = ({data,deleteFunction}) => {
  const {id,name,url,img}=data
  const[isOpen,setIsOpen]=useState(false)
  return ( 
    <><tr>
    <td><img src={img} alt={name} /></td>
    <td>{name}</td>
    <td><a href={url} target="_blank" >{name}</a></td>
    <td className="btnGroup">
      <button onClick={()=>deleteFunction(id)} className="btn2" >Delete</button>
      <button id={id} className="btn3" onClick={() => setIsOpen(!isOpen)}>Edit</button>
    </td>
    
  </tr>
  <FormModal isOpen={isOpen} setIsOpen={setIsOpen} data={data}/>
  </>
      
   );
}
 
export default TableBody;