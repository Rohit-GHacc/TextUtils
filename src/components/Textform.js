import React , {useState} from 'react';

export default function Textform(props) {
    const [text,setText] = useState("Enter your text here");
    // text = "jasdjgfj " //wrong way to change the this.state.
    // setText("sasdfjdsa g") //correct way to change the state
    
    const handleUpClick = ()=>{
        console.log('upper case clicked');
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('success','Converted to upper case')
    }
    const handleOnChange = (event)=>{
        console.log("value changed");
        setText(event.target.value);
    }
    const handleClearClick = ()=>{
        setText("");
        props.showAlert('success','TextArea cleared')
    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('success','Converted to lower case')
    }
    const handleReverseClick = ()=>{
        
        
        let str = text.split("");
        let reverseArray = str.reverse();
        let joinArray = reverseArray.join("");
        setText(joinArray);
        props.showAlert('success','Reversed the text')

    }
  return (
    <>
        <div className="container mb-3 my-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{color: props.mode==='dark'?'white':'black'}}>{props.title}</label>
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{color: props.mode==='dark'?'white':'black',backgroundColor: props.mode==='dark'?'grey':'white'}} id="exampleFormControlTextarea1" rows="10"></textarea>
            <button disabled = {text.length<=0?true:false} className={`btn btn-${props.theme==='primary' || props.theme ==='danger'?'secondary':'primary'} my-3 mx-2`} onClick= {handleLowClick} >Convert to Lower Case</button>
            <button disabled = {text.length<=0?true:false} className={`btn btn-${props.theme==='primary' || props.theme ==='danger'?'secondary':'primary'} my-3 mx-2`} onClick = {handleUpClick}>Convert to Upper Case</button>
            <button disabled = {text.length<=0?true:false} className={`btn btn-${props.theme==='primary' || props.theme ==='danger'?'secondary':'primary'} my-3 mx-2`} onClick = {handleClearClick} >Clear text</button>
            <button disabled = {text.length<=0?true:false} className={`btn btn-${props.theme==='primary' || props.theme ==='danger'?'secondary':'primary'} my-3 mx-2`} onClick = {handleReverseClick}>Reverse the text</button>
        </div>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2 className='my-3'>Your Text Summary</h2>
            <b>{text.split(" ").filter((element)=>element.length!==0).length}</b> words and <b>{text.length}</b> characters
            {/* <b>{text.length >0?text.split(" ").length:0}</b> words and <b>{text.length}</b> characters */}
            <p>{text.length>0? 0.008 * text.split(" ").length:0} time to read</p>
            <h2 className='my-3'>Preview</h2>
            {text.length>1?text:"Enter some text in the textarea above to preview here"}
        </div>
</>
  )
}
