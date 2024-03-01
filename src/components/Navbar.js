import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default function Navbar(props) {
  // const [theme,setTheme]=useState({
  //   backgroundColor: 'white',
  //   color: 'black'
  // });
  // // setTheme = ()=>{

  // // }
  // const [mode,setMode] = useState("Enable dark mode");
  // const handleOnClick = ()=>{
    
  //   if(theme.backgroundColor !== 'black'){
  //     setTheme({
  //       backgroundColor: 'black',
  //       color: 'white'
  //     });
  //     setMode("Enable light mode")
  //   }
  //   else{
  //     setTheme({
  //       backgroundColor: 'white',
  //       color: 'black'
  //     });
  //     setMode("Enable dark mode")
  //   }
  // }
  const mystyle={
    margin: 0,
    padding: 0,
    display: 'flex'
  }
  return (
    
    <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`} >
    <div className="container-fluid" >
      <Link className="navbar-brand" to="/"  >{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav"  >
        <ul className="navbar-nav"  >
          <li className="nav-item">
            <Link className="nav-link active"   aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link"   href="/">Features</a>
          </li>
          <li className="nav-item">
            <Link className="nav-link"   to="/about"> {props.about}</Link>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
          </li> */}
        </ul>
        
      </div>
      {/* <div style={mystyle}> */}
        {/* <div>
          <input type="radio" value="lime" checked id='lime' className='rb mx-3' style={{backgroundColor: 'lime'}} />
        </div> */}
        {/* <div className="form-check">
        <input className="form-check-input" type="radio" name="lime" id="lime" value="lime" checked />
        <label className="form-check-label mx-1" for="lime">
        Lime
        </label>
      </div>
        <div className="form-check">
        <input className="form-check-input" type="radio" name="yellow" id="yellow" value="yellow"  />
        <label className="form-check-label mx-1" for="yellow">
        yellow
        </label>
      </div>
        <div className="form-check">
        <input className="form-check-input" type="radio" name="blue" id="blue" value="blue"  />
        <label className="form-check-label mx-1" for="blue">
        blue
        </label>
      </div>
      </div>
        <div > */}
        <div className="d-flex">
          <div className="bg-primary rounded mx-2" style={{height:'30px',width: '30px',cursor: 'pointer'}} onClick={()=>{props.toggleMode('primary')} }></div>
          <div className="bg-warning rounded mx-2" style={{height:'30px',width: '30px', cursor: 'pointer'}} onClick={()=>{props.toggleMode('warning')}}></div>
          <div className="bg-success rounded mx-2" style={{height:'30px',width: '30px', cursor: 'pointer'}} onClick={()=>{props.toggleMode('success')}}></div>
          <div className="bg-danger rounded mx-2" style={{height:'30px',width: '30px', cursor: 'pointer'}} onClick={()=>{props.toggleMode('danger')}}></div>
        </div>
          {/* dark/light mode below */}
          <div className={`form-check form-switch text-${props.mode}`} >
          <input className="form-check-input" type="checkbox" onClick={()=>{props.toggleMode(null)}} role="switch" id="flexSwitchCheckDefault"/>
          <label className={`form-check-label text-${props.mode==='dark'?'light':'dark'}`} htmlFor="flexSwitchCheckDefault">Enable {props.mode!=='dark'?"dark":"light"} mode </label>
          </div>
        </div>          
   
    </nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string
}

Navbar.defaultProps = {
    title: 'Set title here',
    about: 'About text here'
}
