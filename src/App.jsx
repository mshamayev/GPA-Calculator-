import 'bootstrap/dist/css/bootstrap.css'
import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import {Form} from 'react-bootstrap';


/*
need text widget for users to enter GPA>
drop down menu for scale>
drop down for conversion>
add validation for text widget 
add convert button>
output for user to view GPA text widget>
*/
const findGPA = (userGPA, totalGPA, conversion) =>{
  var conversionGPA = (userGPA/totalGPA) * conversion;
  console.log(conversionGPA);
  return conversionGPA;
}
function App() {
  const [userGPA, setUserGPA] = useState()
  const [userScale, setUserScale] = useState()
  const [convertScale, setConvertScale] = useState()
  const [showA, setShowA] = useState(false);
  const toggleShowA = () => setShowA(!showA);
  console.log(userGPA)
  console.log("userScale;", userScale)
  console.log("convertScale;", convertScale)
  return (
    <div className='App'>
      <style> {'body {background-color: grey;} '}</style>
      <h1 style={
        {
          color:'pink',
        }
      }>

        GPA Calculator 
      </h1>
      
     
      <Form.Select id='Scale' aria-label="Default select example">
      <option value='0'>GPA Scale</option>
      <option id='4S'   value="4" onClick={()=> setUserScale(4)}>4.0 Scale</option>
      <option id='100S' value="100" onClick={()=> setUserScale(100)}>100.0 Scale</option>
    </Form.Select>

    <Form.Select id='Convert' aria-label="Default select example">
      <option value='0'>Conversion</option>
      <option id='4C'   value="4" onClick={()=> setConvertScale(4)}>4.0 Scale</option>
      <option id='100C' value="100" onClick={()=> setConvertScale(100)}>100.0 Scale</option>
    </Form.Select>
      

      <input 
        name="userGPA" 
        placeholder='Enter GPA...' 
        type='float'
        min={0} 
        required 
        onChange={e => setUserGPA(e.target.value)}
        value={userGPA}
      
        />
     <Row>
      <Col md={15} className="mb-2">
        <Button onClick={toggleShowA} className="mb-2" variant="outline-light">
          Convert
        </Button>
        <Toast show={showA} onClose={() => setShowA(fase) }>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>These values are approximate.</small>
          </Toast.Header>
          <Toast.Body>{findGPA(userGPA, userScale, convertScale)}</Toast.Body>
        </Toast>
      </Col>
     </Row>

    </div>
  )
}

export default App
