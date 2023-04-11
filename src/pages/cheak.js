import './Payment.css'
import { Link} from 'react-router-dom'
// import BookTicket from './BookTicket';
import { useState ,useEffect} from 'react';
import Axios from 'axios';
    
function Cheak() {
    const [phonenumber,setphonenumber] = useState("");
    const [employeeList,setEmployeeList] = useState([]);
    const [reloadPage, setReloadPage] = useState(true);
    
    function getEmployees (phonenumber) {
        
        Axios.get(`http://localhost:3001/databasetrain1/${phonenumber}`).then((response) => {
            console.log(response.data)
            setEmployeeList(response.data);
            console.log(employeeList)
        });
    }


    // useEffect(() => {
        
    //     // reload()
    //     console.log(reloadPage)
    //     if (reloadPage) {
    //       window.location.reload();
          
    //       setReloadPage(false)
    //       console.log(reloadPage)
    //     }
    // }, [reloadPage]);



    // const reload = () => {
    //     setReloadPage(true);
    //   };

    return(
        <div >
            <header>
                <Link to="/" ><img className='bt_home' src='/train3.jpg' alt='home'/></Link>
                <h2 className='header'> Check BookTicket </h2> 
            </header>
            <div className='row_input'>
                <input 
                        type="text"  
                        placeholder=' เบอร์โทรศัพท์ '  
                        // style={{marginLeft:"59rem"}}
                        className="field"
                        onChange={(event)=>{
                            setphonenumber(event.target.value)
                        }}
                />
                <button type="primary" className='bt' onClick={()=>window.location.reload()}> รีเฟรช </button>
                <button type="primary" className='bt' onClick={()=>{getEmployees(phonenumber)}}> ตรวจสอบ </button>
            </div>
            
            <section className='section'>
                    <div className='grid'>
                        <div className='box_infomation'>
                            <h3>ข้อมูลส่วนตัว</h3>
                            {employeeList.map((val,key)=>{
                                return(
                                    <ul>
                                        <li>ชื่อ : {val.firstname}</li>
                                        <li>นามสกุล : {val.lastname}</li>
                                        <li>ที่อยู่ : {val.address}</li>
                                        <li>เบอร์โทรศัพท์ : {val.phonenumber}</li>
                                        <li>Email : {val.email}</li>
                                        {/* <li>ชื่อ : {val.origin1}</li>
                                        <li>นามสกุล : {val.destination1}</li>
                                        <li>ที่อยู่ : {val.time1}</li>
                                        <li>เบอร์โทรศัพท์ : {val.class1}</li>
                                        <li>Email : {val.total1}</li> */}
                                    </ul>
                                )
                            })}
                            
                        </div>
                        <div className='box_infomation'>
                        <h3>ข้อมูลตั๋ว</h3>
                            {employeeList.map((val,key)=>{
                                return(
                                    <ul>
                                        <li>ต้นทาง : {val.origin1}</li>
                                        <li>ปลายทาง : {val.destination1}</li>
                                        <li>เวลา : {val.time1}</li>
                                        <li>ชั้นที่นั่ง : {val.class1}</li>
                                        <li>ราคาตั๋ว : {val.total1}</li>
                                    </ul>
                                )
                            })}
                        </div>   
                    </div>
                                         
                        <Link to='/' ><button type="primary" className='bt' > กลับ </button></Link>     
            </section>
        </div>
        
    )
}

export default Cheak