import React ,{useState} from 'react'

export default function Maintext(props) { 
    // state for text !!
    const [text ,setText] = useState('')
    
    
    //covert to upper case
    const convertUppercase =()=>{
          let param = text.toUpperCase();
          setText(param);
          props.showAlert('Converted to Uppercase' ,'info')
      }
    //convert to lower case
    const convertLowercase =()=>{
          let param = text.toLowerCase();
          setText(param);
          props.showAlert('Converted to Lowercase' ,'info')
      }
      // to clear text 
    const clearText =()=>{
          let param = '';
          setText(param);
          props.showAlert('All Removed ' ,'danger')
     }
     // to clear text 
    const copyText =()=>{
      
       navigator.clipboard.writeText(text);
       props.showAlert('Text copied to clipboard' ,'success')
 }
    const textonChange =(event)=>{
        setText(event.target.value);
     }
   
    
  return (
    <>
    <div className='container my-3' style={{color:props.mode==='light'?'black':'white'}}>
   
     <div className="mb-3">
        <h4>{props.heading}</h4>
        <textarea className="form-control" id="Maintext1" rows="8" value={text} onChange={textonChange} style={{backgroundColor:props.mode==='light'?'white':'#252323' ,color:props.mode==='light'?'black':'white'}}></textarea>
     </div>
        <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'dark':'light'} mx-2 my-2` } onClick={convertUppercase}>Covert to Uppercase </button> 
        <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'dark':'light'} mx-2 my-2` } onClick={convertLowercase}>Covert to Lowercase </button> 
        <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'dark':'light'} mx-2 my-2` } onClick={clearText}>Clear Text </button>
        <button disabled={text.length===0} className="btn btn-success mx-2 my-2" onClick={copyText}>Copy to Clipboard </button> 
     </div>

    <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
       <h4>Text Summary</h4>
       <p>Words:{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} &nbsp; Characters:{text.replace(/\s+/g, '').length} &nbsp; Average Reading time :{0.008*text.split(/ \s+/).filter((element)=>{return element.length!==0}).length} min </p>
    </div>

    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
       <h5>Preview</h5> 
       <p>{`${text.length===0?'Nothing to Preview :(':text}`}</p>
    </div>

    </>
  )
}
