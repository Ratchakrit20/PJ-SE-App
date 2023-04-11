import './Personalinfo.css'
import { useState} from 'react';
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
              <p></p>
              {employeeList.map((val,key)=>{
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
              })}
            </div>
          </div>
            

    </div>







                
    )
}

export default Delete1