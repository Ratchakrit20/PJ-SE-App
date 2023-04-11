import './Payment.css'
import { Link, useNavigate} from 'react-router-dom'
// import BookTicket from './BookTicket';
import { useState,useEffect } from 'react';
import Axios from 'axios';




function Payment() {
    const navigate = useNavigate();
    const [phonenumber,setphonenumber] = useState("NULL");
    const [employeeList,setEmployeeList] = useState([]);
    // const [number, setNumber] = useState(0)
    const [reloadPage, setReloadPage] = useState(false);
    // const getEmployees = (phonenumber) =>{
    //     Axios.get(`http://localhost:3001/databasetrain/${phonenumber}`).then((response) => {
    //       setEmployeeList(response.data);
    //     });
    //   }

    const items = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' }
      ];

    function App() {
    return (
        <div>
        {items.map((item) => (
            <div key={item.id}>{item.name}</div>
        ))}
        </div>
    );
    }
      
    // const getEmployees = () => {
    //     Axios.get(`http://localhost:3001/databasetrain`).then((response) => {
    //         console.log(response.data.result)  
    //         employeeList.push(response.data.result)
    //         setEmployeeList(employeeList)        
    //         // setEmployeeList(response.data.result);

    //     })
    // }

    // useEffect(() => {
    //     getEmployees();
        
    //     if (reloadPage) {
    //       window.location.reload();
    //     }
    // }, [reloadPage]);

    // useEffect(() => {
    //     Axios.get('http://localhost:3001/databasetrain').then((response) => {
    //         // setEmployeeList(response.data.result);
    //     });
    //   }, []);

    useEffect(() => {
        Axios.get('http://localhost:3001/databasetrain').then((response) => {
            setEmployeeList(response.data.result);
            
        if (reloadPage) {
          window.location.reload();
        }
        });
      }, [reloadPage]);



    
    // const arr = ['ควย','เย็ดหี']
    // function addvalue(){
    //     var num
    //     employeeList.push(arr)
    //     setEmployeeList(employeeList)
    //     num = number + 1
    //     setNumber(num)
    // }
    // function cleardata(){
    //     setEmployeeList([])
    //     setNumber(0)
    // }

    return(
        <div>
            <header>
                <Link to="/" ><img className='bt_home' src='/train3.jpg' alt='home'/></Link>
                <h2 className='header'> Payment </h2> 
            </header>
            <input 
                    type="text"  
                    placeholder=' เบอร์โทรศัพท์ '  
                    className="field"
                    
                    onChange={(event)=>{
                        setphonenumber(event.target.value)
                    }}
                />
            {/* <button type="primary" className='bt_next' onClick={()=>{getEmployees(phonenumber)}}> get </button> */}
            <section className='section'>
                    <div className='grid'>
                        <div className='box_infomation'>
                            <h3>ข้อมูลส่วนตัว</h3>
                            {/* <p>{employeeList[0]}</p> */}
                            <p>{App()}</p>
                            {employeeList.map((order) =>
                            // console.log("order",order.id)
                            (
                                    <div >
                                    <p>Order ID: {order.result.id}</p>
                                    <p>Customer Name: {order.result.firstname}</p>
                                    <p>Total Amount: {order.result.lastname}</p>
                                    <p>Total Amount: {order.result.address}</p>
                                    <p>Total Amount: {order.result.phonenumber}</p>
                                    <p>Total Amount: {order.result.email}</p>
                                    </div>
                                ))}


                            {/* {employeeList.map((val, key) => {
                                console.log(val)
                                    return (
                                        <ul key={val.id}>
                                        
                                        <li>ชื่อ : {val.firstname}</li>
                                        <li>นามสกุล : {val.lastname}</li>
                                        <li>ที่อยู่ : {val.address}</li>
                                        <li>เบอร์โทรศัพท์ : {val.phonenumber}</li>
                                        <li>Email : {val.email}</li>
                                        </ul>
                                    );
                                    })} */}
                            
                        </div>
                        <div className='box_infomation'>
                            <h3>ข้อมูลตั๋ว</h3>
                            <p>{employeeList}</p>
                            <ol>
                                <li>เย็ดหี</li>
                                <li>เย็ดหี</li>
                                <li>เย็ดหี</li>
                            </ol>
                        </div>   
                    </div>
                    <div className='box_infomation_payment'>
                        <h3>การชำระเงิน</h3>
                        <p>ควย</p>
                        <p>ควย</p>
                        <p>ควย</p>
                    </div>
                    <button type="primary" className='bt_next' > get </button>
                    <p>{employeeList}</p>
                    <div className='grid'>
                        <button type="primary" className='bt_back_payment' onClick={() => navigate(-1)}> กลับ </button>                 
                        <Link to='./Thank' ><button type="primary" className='bt_next_payment' > ถัดไป </button></Link>     
                    </div>
            </section>

            {/* <button type="primary" className='bt_next' onClick={addvalue}> get </button>
            <button type="primary" className='bt_next' onClick={cleardata}> get </button>
            <p>{employeeList}</p>
            <button type="primary" className='bt' onClick={addvalue}> array </button>
                <p>{employeeList}</p>
                <p>{employeeList[0]}</p>
                <p>{number}</p>
            <button type="primary" className='bt' onClick={cleardata}> clear </button> */}

        </div>
        
    )
}

export default Payment













// import './Payment.css'
// import { Link, useNavigate} from 'react-router-dom'
// // import BookTicket from './BookTicket';
// import { useState,useContext } from 'react';
// import Axios from 'axios';
// import Personal from './Personalinfo';
// export default class Payment extends Personal{
//     constructor(props){
//         super(props)
//         this.state={
//             phonenumber: Personal.name,
//             employeeList:[]
//         }
//       }
      
//     render(){
//         // const navigate = useNavigate();
//         // const [phonenumber,setphonenumber] = useState("");
//         // const [employeeList,setEmployeeList] = useState([]);
//         const getEmployees = (phonenumber) =>{
//         Axios.get(`http://localhost:3001/databasetrain/${phonenumber}`).then((response) => {
//         //   setEmployeeList(response.data);
//           this.setState({employeeList:response.data});
//             });
//         }
//         return(
//             <div>
//             <div></div>
//             <header>
//                 <Link to="/" ><img className='bt_home' src='/train3.jpg' alt='home'/></Link>
//                 <h2 className='header'> Payment </h2> 
//             </header>
//             {/* <input 
//                     type="text"  
//                     placeholder=' เบอร์โทรศัพท์ '  
//                     className="field"
                    
//                     onChange={(event)=>{
//                         setphonenumber(event.target.value)
//                     }}
//                 /> */}
//             <button type="primary" className='bt_next' onClick={()=>{getEmployees(this.state.phonenumber)}}> get </button>
//             <section className='section'>
//                     <div className='grid'>
//                         <div className='box_infomation'>
//                             <h3>ข้อมูลส่วนตัว</h3>
//                             {this.state.employeeList.map((val,key)=>{
//                                 return(
//                                     <ul>
//                                         <li>ชื่อ : {val.firstname}</li>
//                                         <li>นามสกุล : {val.lastname}</li>
//                                         <li>ที่อยู่ : {val.address}</li>
//                                         <li>เบอร์โทรศัพท์ : {val.phonenumber}</li>
//                                         <li>Email : {val.email}</li>
//                                     </ul>
//                                 )
//                             })}
                            
//                         </div>
//                         <div className='box_infomation'>
//                             <h3>ข้อมูลตั๋ว</h3>
//                             <p>ควย</p>
//                             <ol>
//                                 <li>เย็ดหี</li>
//                                 <li>เย็ดหี</li>
//                                 <li>เย็ดหี</li>
//                             </ol>
//                         </div>   
//                     </div>
//                     <div className='box_infomation_payment'>
//                         <h3>การชำระเงิน</h3>
//                         <p>ควย</p>
//                         <p>ควย</p>
//                         <p>ควย</p>
//                     </div>
//                     <div className='grid'>
//                         <button type="primary" className='bt_back_payment' > กลับ </button>                 
//                         <Link to='./Thank' ><button type="primary" className='bt_next_payment' > ถัดไป </button></Link>     
//                     </div>
//             </section>
//         </div>
//         )
//     }
// }