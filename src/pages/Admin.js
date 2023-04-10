import './Personalinfo.css'
import { useState,useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import "./Admin.css"
import { render } from "@testing-library/react";
import axios from 'axios';

function Admin() {
    const navigate = useNavigate();
    const [id,setid] = useState("")
    const [password,setpassword] = useState("")
    const [employeeList,setEmployeeList]=useState([])
    const [employee,setEmployee]=useState([])
    var [cheak0,setcheak0] = useState(true);
    let cheak1 = true
    const cheakid = [
        '123'
    ]
    const cheakpassword = [
        '123'
    ]
    // const getEmployees = (phonenumber) =>{
    //     axios.get(`http://localhost:3001/admin/${phonenumber}`).then((response) => {
    //       setEmployeeList(response.data);
    //     });
    //   }

    //   useEffect(() => {
    //         axios.get(`http://localhost:3001/admin/${id}`).then((response) => {
    //             console.log(response.data)
    //             setEmployeeList(response.data);
    //         });
    //     }, []);

        // useEffect(() => {
        //     axios
        //         .get(`http://localhost:3001/admin`)
        //         .then((response) => {
        //             console.log(response.data);
        //             setEmployeeList(response.data);
        //         })
        //         .catch((error) => {
        //             console.error(error);
        //         });
        // }, [id]);

        // useEffect(() => {
        //     axios
        //         .get(`http://localhost:3001/show`)
        //         .then((response) => {
        //             console.log([response.data]);
        //             setEmployee([response.data]);
        //         })
        //         .catch((error) => {
        //             console.error(error);
        //         });
        // }, []);

        const cheak = (id,password)=>{
            console.log(id)
            console.log(password)
            console.log("ควย")
            if(id==="asd"&&password==="asd"){
                console.log("ควยผ่านเเล้ว")
                // cheak1 = false
                navigate("/Admin/Delete1");
                // setcheak0(false);                       
        }else{
            render("IdหรือPasswordไม่ถูกต้อง")
            console.log("ควยสัส")
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
                <button type="primary" className='bt_next' onClick={()=>{cheak(id,password)}}> ยืนยัน </button>
                  
                <div>
                    
                </div>
                {/* <div>
                    {(cheak0)?<div></div>:<div>{employee.map((val,key)=>{
                                                                            return(
                                                                                <div className='emplyee card'>
                                                                                <div className='card-body text-left'>
                                                                                    <p className="card-text">ชื่อ : {val.result[key].firstname}</p>
                                                                                    <p className="card-text">นามสกุล : {val.result[key].lastname}</p>
                                                                                    <p className="card-text">ที่อยู่ : {val.result[key].address}</p>
                                                                                    <p className="card-text">เบอร์โทรศัพท์ : {val.result[key].phonenumber}</p>
                                                                                    <p className="card-text">Email : {val.result[key].email}</p>
                                                                                    <p className="card-text">ต้นทาง : {val.result[key].origin1}</p>
                                                                                    <p className="card-text">ปลายทาง : {val.result[key].destination1}</p>
                                                                                    <p className="card-text">เวลา : {val.result[key].time1}</p>
                                                                                    <p className="card-text">ชั้น : {val.result[key].class1}</p>
                                                                                    <p className="card-text">Email : {val.result[key].total1}</p>
                                                                                    <div className='d-flex'>
                                                                                    
                                                                                    <button className='btn btn-warning' >Update</button>
                                                                                    <button className='btn btn-danger' >Update</button>
                                                                                    </div>
                                                                                    
                                                                                </div>
                                                                                </div>
                                                                            )
                                                                            })}</div>}
                </div> */}
            </div>
            <button type="primary" className='bt_back_admin' onClick={() => navigate(-1)}> กลับ </button>
        </div>
    )
}

export default Admin