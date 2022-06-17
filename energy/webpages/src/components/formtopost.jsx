const Form = ({addFunction}) => {
  
  return ( 
  <form onSubmit={addFunction} className="newPageForm" >
    <h3>Add a new webpage</h3>
<input type="text" name="name" id="name"  placeholder="Please provide webpage name"  />
<br />
<br />
<input type="text" name="url" id="url"   placeholder="Please provide  webpage url" />
<br />
<br />
<input type="text" name="img" id="img"  placeholder="Please provide  webpage icon url" />
<br />
<br />
<input type="submit" value="Upload" className="btn"  />
  </form>
   );

   
}

 
export default Form;