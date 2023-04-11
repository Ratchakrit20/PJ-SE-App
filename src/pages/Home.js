import './Home.css'
import React from 'react'
import {Link} from 'react-router-dom'
import { Button } from "@material-ui/core";
import './Admin.css'
// import { useState } from 'react';

function Home() {
    // const [employeeList, setEmployeeList] = useState([])
    // const [number, setNumber] = useState(0)
    // function addvalue(){
    //     var num
    //     employeeList.push("ควย")
    //     setEmployeeList(employeeList)
    //     num = number + 1
    //     setNumber(num)
    // }
    // function cleardata(){
    //     setEmployeeList([])
    //     setNumber(0)
    // }
    return (
        <div>
            <header>
                <Link to="./Admin" ><img className='pic_admin' style={{marginLeft:"5rem"}} src='/admin2.png' alt='home'/></Link>
                <h2 className='header_main'>จองตั๋วรถไฟ</h2>
            </header>   
            <div className = 'pic'>
                <img src='/train3.jpg' alt='home'/>
            </div>
            <div className = 'row'>
                {/* <Link to = './BookTicket'><button variant="contained" className='bt_main1'> จองตั๋ว </button></Link> */}
                <Link to = './Personalinfo'><Button style={{ margin:'auto', fontSize: '40px',marginTop:'55px', backgroundColor:'#6B7AA1', color:'white' }} variant="contained" className='bt_main1'> จองตั๋ว </Button></Link>
                {/* <Button type="primary" className='bt_main'> เช็คตั๋ว </Button> */}
                <Link to = './cheak'><Button style={{ margin:'auto', fontSize: '40px',marginTop:'55px', backgroundColor:'#A86464', color:'white' }} variant="contained" className='bt_main2'> เช็คตั๋ว </Button></Link>
                {/* <button type="primary" className='bt' onClick={addvalue}> array </button> */}
                {/* <p>{employeeList}</p>
                <p>{number}</p> */}
                {/* <button type="primary" className='bt' onClick={cleardata}> clear </button> */}
            </div>
        </div>
    )
}

export default Home