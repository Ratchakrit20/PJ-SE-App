import './Personalinfo.css'
import { useState} from 'react';
import {useNavigate} from 'react-router-dom'
import "./Admin.css"
// import { render } from "@testing-library/react";
// import axios from 'axios';

function Admin() {
    const navigate = useNavigate();
    const [id,setid] = useState("")
    const [password,setpassword] = useState("")
    
        const cheak = (id,password)=>{
            console.log(id)
            console.log(password)
            
            if(id==="admin"&&password==="admin123"){
                console.log("ผ่านเเล้ว")
                // cheak1 = false
                navigate("/Admin/Delete1");
                // setcheak0(false);                       
        }else{
            // render("IdหรือPasswordไม่ถูกต้อง")
            console.log("ไม่ผ่าน")
        }
        }

        const inputID = (event) =>{
            console.log(event.target.value)
            setid(event.target.value)
        }

        const inputPassword = (event) =>{
            console.log(event.target.value)
            setpassword(event.target.value)
        }


    return(
        <div>
            <header>
                {/* <Link to="/" ><img className='bt_home' src='/train3.jpg' alt='home'/></Link> */}
                <h2 className='header'> Admin </h2> 
            </header>
            <div className='row_input'>
                <p>โปรดป้อนรหัสผ่าน</p>
                <input 
                    type="text"  
                    placeholder=' ID '  
                    className="field"
                    id="id"
                    value={id}
                    onChange={inputID}
                />
                <input 
                    type="text"  
                    placeholder=' PASSWORD '  
                    className="field"
                    id="password"
                    value={password}
                    onChange={inputPassword}
                />
                <button type="primary" className='bt_admincon' onClick={()=>{cheak(id,password)}}> ยืนยัน </button>
                  
                <div>
                    
                </div>               
            </div>
            <button type="primary" className='bt_back_admin' onClick={() => navigate(-1)}> กลับ </button>
        </div>
    )
}

export default Admin