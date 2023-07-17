import './Personalinfo.css'
import { useState} from 'react';
import {  Container, Table } from "react-bootstrap";
import {Link} from 'react-router-dom'
import "./Admin.css"
import axios from 'axios';

function Delete1() {
    // const navigate = useNavigate();
    // const [id,setid] = useState("")
    // const [password,setpassword] = useState("")
    const [employeeList,setEmployeeList]=useState([])
    
    const getEmployees = () =>{
        axios.get('http://localhost:3001/show').then((response) => {
          console.log([response.data])
          setEmployeeList(response.data);
        });
      }
      const deleteEmployee = (id) => {
        axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
          setEmployeeList(
            employeeList.filter((val) => {
              return val.id !== id;
            })
          );
        });
      };      
    return(
        <div>
          <header>
            <Link to="/" ><img className='bt_home' src='/train3.jpg' alt='home'/></Link>
            <h2 className='header'> ตรวจสอบ </h2> 
          </header>
          <p></p>
          <div className="App container">
          <div className="employees">
            <button className='btn btn-primary' onClick={getEmployees}>Show employees</button>
            <p style={{color:"red"}}>*ถ้าข้อมูลไม่ขึ้นโปรดกดปุ่มรีเฟรช*</p>
            <button type="primary" className='bt_reload_admin' onClick={() => window.location.reload(false)}> รีเฟรช </button>
              <p></p>
              {/* {employeeList.map((val,key)=>{
                console.log(key)
                return(
                  <div className='emplyee card'>
                    <div className='card-body text-left' >
                      <p className="card-text">ชื่อ : {val.firstname}</p>
                      <p className="card-text">นามสกุล : {val.lastname}</p>
                      <p className="card-text">ที่อยู่ : {val.address}</p>
                      <p className="card-text">เบอร์โทรศัพท์ : {val.phonenumber}</p>
                      <p className="card-text">Email : {val.email}</p>
                      <p className="card-text">ต้นทาง : {val.origin1}</p>
                      <p className="card-text">ปลายทาง : {val.destination1}</p>
                      <p className="card-text">เวลา : {val.time1}</p>
                      <p className="card-text">ชั้นที่นั่ง : {val.class1}</p>
                      <p className="card-text">ราคาตั๋ว : {val.total1}</p>
                      <div className='d-flex'>
                    
                      <button className='btn btn-danger' onClick={()=>{deleteEmployee(val.id)}}>Delete</button>
                      </div>
                      
                    </div>
                  </div>
                )
              })} */}
              <Container>
                <Table style={{border:"black"}} striped bordered hover variant="white" >
                    <thead style={{background:"#BDE2FF"}}>
                        <tr>
                            <th width="30%">ชื่อ</th>
                            <th width="30%">นามสกุล</th>
                            <th width="30%">ที่อยู่</th>
                            <th width="30%">เบอร์โทรศัพท์</th>
                            <th width="30%">Email</th>
                            <th width="30%">ต้นทาง</th>
                            <th width="30%">ปลายทาง</th>
                            <th width="30%">เวลา</th>
                            <th width="30%">ชั้น</th>
                            <th width="30%">ราคาตั๋ว</th>
                            <th width="30%">ลบข้อมูล</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employeeList.map((element, index)=>{
                            return  (
                            <tr key={index}>
                                <td>{element.firstname}</td>
                                <td>{element.lastname}</td>
                                <td>{element.address}</td>
                                <td>{element.phonenumber}</td>  
                                <td>{element.email}</td>
                                <td>{element.origin1}</td>
                                <td>{element.destination1}</td>
                                <td>{element.time1}</td>
                                <td>{element.class1}</td> 
                                <td>{element.total1}</td>
                                <td>{<button className='btn btn-danger' onClick={()=>{deleteEmployee(element.id)}}>Delete</button>}</td>                          
                            </tr>)
                        })}
                    </tbody>
                </Table>
            </Container>          

            </div>
          </div>
    </div>            
    )
}

export default Delete1