import { useState } from "react";
const FormModal = ({ isOpen, setIsOpen,data }) => {
  const [name, setName] = useState(data.name);
const [url, setUrl] = useState(data.url);
const [img, setImage] = useState(data.img);

const handleName = (e) => setName(e.currentTarget.value);
const handleUrl = (e) => setUrl(e.currentTarget.value);
const handleImage = (e) => setImage(e.currentTarget.value);

const editPage=(e)=>{
  e.preventDefault(e)
  
  fetch(`http://localhost:8080/webpages/${data.id}`,{
    method:'PUT',
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({name:name,url:url,img:img})
  })
  .then(alert("You have added a new webpage!"))
  .then(window.location.reload())
}
  return (
  <>
  {isOpen ?
  <div className='modalStyle'>
  <form onSubmit={editPage}>
    <label htmlFor="">Edit webpage name</label>
  <input type="text" name="name" placeholder="Edit name" required  onChange={handleName} value={name}/>
  <label htmlFor="">Change webpage url</label>
  <input type="text" name="url" placeholder="Change url" required onChange={handleUrl} value={url}/>
  <label htmlFor="">Change webpage icon url</label>
  <input type="text" name="img" placeholder="Change image url" required onChange={handleImage} value={img} />
  <br />
  <input style={{ cursor: 'pointer' }} type="submit" value="submit" className="btn4" />
  <br/>
  <input type='button' value='close' style={{ cursor: 'pointer' }} onClick={() => setIsOpen(!isOpen)} className= "btn5"/>
  </form>
  </div>
  :null}
  </>
  
  )
  
  }
  
  
  
  export default FormModal