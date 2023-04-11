import './Personalinfo.css'
import './BookTicket.css'
import { Link } from 'react-router-dom'
import { useState, createContext } from 'react';
import Axios from 'axios';

export const AppContext = createContext(null)

function Personal() {
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [address, setaddress] = useState("");
    const [phonenumber, setphonenumber] = useState("");
    const [email, setemail] = useState("");
    const [employeeList, setEmployeeList] = useState([]);

    const [isActive, setIsActive] = useState(false);
    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [selected, setSelected] = useState("")
    const [selected1, setSelected1] = useState("")
    const [selected2, setSelected2] = useState("")
    const [selected3, setSelected3] = useState("")
    const [totalLay, setTotallay] = useState(0)

    const origins = [
        'กรุงเทพ'
    ]
    const destination = [
        'เชียงใหม่', 'ลำปาง', 'พิษณุโลก', 'นครสวรรค์',
        'ลพบุรี', 'อยุธยา', 'หนองคาย', 'ขอนแก่น',
        'อุบลราชธานี', 'ศรีสะเกษ', 'บุรีรัมย์', 'นครราชสีมา',
        'สระบุรี', 'นครศรีธรรมราช', 'ตรัง', 'ยะลา',
        'หาดใหญ่', 'สุราษฎร์ธานี', 'หัวหิน'
    ]
    const time = [
        '8:00', '15:00', '18:00'
    ]
    const layer = [
        '1', '2', '3'
    ]
    const price_layer1 = [
        1653, 1572, 1354, 1038, 684, 543, 1557, 1398, 1520, 1476, 1376, 1230, 738, 1472, 1480, 1675, 1594, 1379, 982
    ]
    const price_layer2 = [
        1041, 1004, 889, 630, 374, 65, 998, 909, 981, 961, 785, 715, 154, 868, 871, 942, 905, 808, 532
    ]
    const price_layer3 = [
        271, 256, 219, 198, 58, 45, 231, 187, 245, 237, 217, 100, 54, 283, 285, 355, 339, 297, 194
    ]
    //------------------------------------------------------------------------------------------------------------

    // const getEmployees = () =>{
    //     Axios.get('http://localhost:3001/databasetrain').then((response) => {
    //       setEmployeeList(response.data);
    //     });
    //   }

    const addEmployee = () => {
        Axios.post("http://localhost:3001/create", {
            firstname: firstname,
            lastname: lastname,
            address: address,
            phonenumber: phonenumber,
            email: email,
            origin1: selected,
            destination1: selected1,
            time1: selected2,
            class1: selected3,
            total1: totalLay,
        }).then(() => {
            setEmployeeList([
                ...employeeList,
                {
                    firstname: firstname,
                    lastname: lastname,
                    address: address,
                    phonenumber: phonenumber,
                    email: email,
                    origin1: selected,
                    destination1: selected1,
                    time1: selected2,
                    class1: selected3,
                    total1: totalLay,
                },
            ]);
        });
    };

    const handleChange = (e) => {
        setphonenumber(e.target.value)
    }
    // const handleSubmit =(e) =>{
    //     e.preventDefault();
    //     props.onSubmit(phonenumber);
    // }

    return (
        <div>
            <header>
                <Link to="/" ><img className='bt_home' src='/train3.jpg' alt='home' /></Link>
                <h2 className='header'> BookTicket </h2>
            </header>

            {/* <button type="primary" className='bt_back' onClick={() => navigate(-1)}> กลับ </button>   */}
            {/* ------------------------------------------------------------------------------------------------------------------------------------------------------- */}

            <div className='row_tickets'>
                <div className='drop_down'>
                    <div className='text'>ต้นทาง</div>
                    <div className='drop_bt' onClick={(e) =>
                        setIsActive(!isActive)}>
                        {selected}
                        <span class="triangle"></span>
                    </div>
                    {isActive && (
                        <div className='drop_content' >
                            {origins.map((origins, index) => (
                                <div onClick={e => {
                                    setSelected(origins)

                                    setIsActive(false)
                                }
                                } className='drop_item'>{origins}</div>
                            ))}
                        </div>
                    )}
                </div>
                <div className='drop_down'>
                    <div className='text'>ปลายทาง</div>
                    <div className='drop_bt' onClick={(e) =>
                        setIsActive1(!isActive1)}>
                        {selected1}
                        <span class="triangle"></span>
                    </div>
                    {isActive1 && (
                        <div className='drop_content' >
                            {destination.map((destination, index) => (
                                <div onClick={e => {
                                    setSelected1(destination)

                                    if (index === 0 && selected3 === layer[0]) { setTotallay(price_layer1[0]) }
                                    if (index === 0 && selected3 === layer[1]) { setTotallay(price_layer2[0]) }
                                    if (index === 0 && selected3 === layer[2]) { setTotallay(price_layer3[0]) }

                                    if (index === 1 && selected3 === layer[0]) { setTotallay(price_layer1[1]) }
                                    if (index === 1 && selected3 === layer[1]) { setTotallay(price_layer2[1]) }
                                    if (index === 1 && selected3 === layer[2]) { setTotallay(price_layer3[1]) }

                                    if (index === 2 && selected3 === layer[0]) { setTotallay(price_layer1[2]) }
                                    if (index === 2 && selected3 === layer[1]) { setTotallay(price_layer2[2]) }
                                    if (index === 2 && selected3 === layer[2]) { setTotallay(price_layer3[2]) }

                                    if (index === 3 && selected3 === layer[0]) { setTotallay(price_layer1[3]) }
                                    if (index === 3 && selected3 === layer[1]) { setTotallay(price_layer2[3]) }
                                    if (index === 3 && selected3 === layer[2]) { setTotallay(price_layer3[3]) }

                                    if (index === 4 && selected3 === layer[0]) { setTotallay(price_layer1[4]) }
                                    if (index === 4 && selected3 === layer[1]) { setTotallay(price_layer2[4]) }
                                    if (index === 4 && selected3 === layer[2]) { setTotallay(price_layer3[4]) }

                                    if (index === 5 && selected3 === layer[0]) { setTotallay(price_layer1[5]) }
                                    if (index === 5 && selected3 === layer[1]) { setTotallay(price_layer2[5]) }
                                    if (index === 5 && selected3 === layer[2]) { setTotallay(price_layer3[5]) }

                                    if (index === 6 && selected3 === layer[0]) { setTotallay(price_layer1[6]) }
                                    if (index === 6 && selected3 === layer[1]) { setTotallay(price_layer2[6]) }
                                    if (index === 6 && selected3 === layer[2]) { setTotallay(price_layer3[6]) }

                                    if (index === 7 && selected3 === layer[0]) { setTotallay(price_layer1[7]) }
                                    if (index === 7 && selected3 === layer[1]) { setTotallay(price_layer2[7]) }
                                    if (index === 7 && selected3 === layer[2]) { setTotallay(price_layer3[7]) }

                                    if (index === 8 && selected3 === layer[0]) { setTotallay(price_layer1[8]) }
                                    if (index === 8 && selected3 === layer[1]) { setTotallay(price_layer2[8]) }
                                    if (index === 8 && selected3 === layer[2]) { setTotallay(price_layer3[8]) }

                                    if (index === 9 && selected3 === layer[0]) { setTotallay(price_layer1[9]) }
                                    if (index === 9 && selected3 === layer[1]) { setTotallay(price_layer2[9]) }
                                    if (index === 9 && selected3 === layer[2]) { setTotallay(price_layer3[9]) }

                                    if (index === 10 && selected3 === layer[0]) { setTotallay(price_layer1[10]) }
                                    if (index === 10 && selected3 === layer[1]) { setTotallay(price_layer2[10]) }
                                    if (index === 10 && selected3 === layer[2]) { setTotallay(price_layer3[10]) }

                                    if (index === 11 && selected3 === layer[0]) { setTotallay(price_layer1[11]) }
                                    if (index === 11 && selected3 === layer[1]) { setTotallay(price_layer2[11]) }
                                    if (index === 11 && selected3 === layer[2]) { setTotallay(price_layer3[11]) }

                                    if (index === 12 && selected3 === layer[0]) { setTotallay(price_layer1[12]) }
                                    if (index === 12 && selected3 === layer[1]) { setTotallay(price_layer2[12]) }
                                    if (index === 12 && selected3 === layer[2]) { setTotallay(price_layer3[12]) }

                                    if (index === 13 && selected3 === layer[0]) { setTotallay(price_layer1[13]) }
                                    if (index === 13 && selected3 === layer[1]) { setTotallay(price_layer2[13]) }
                                    if (index === 13 && selected3 === layer[2]) { setTotallay(price_layer3[13]) }

                                    if (index === 14 && selected3 === layer[0]) { setTotallay(price_layer1[14]) }
                                    if (index === 14 && selected3 === layer[1]) { setTotallay(price_layer2[14]) }
                                    if (index === 14 && selected3 === layer[2]) { setTotallay(price_layer3[14]) }

                                    if (index === 15 && selected3 === layer[0]) { setTotallay(price_layer1[15]) }
                                    if (index === 15 && selected3 === layer[1]) { setTotallay(price_layer2[15]) }
                                    if (index === 15 && selected3 === layer[2]) { setTotallay(price_layer3[15]) }

                                    if (index === 16 && selected3 === layer[0]) { setTotallay(price_layer1[16]) }
                                    if (index === 16 && selected3 === layer[1]) { setTotallay(price_layer2[16]) }
                                    if (index === 16 && selected3 === layer[2]) { setTotallay(price_layer3[16]) }

                                    if (index === 17 && selected3 === layer[0]) { setTotallay(price_layer1[17]) }
                                    if (index === 17 && selected3 === layer[1]) { setTotallay(price_layer2[17]) }
                                    if (index === 17 && selected3 === layer[2]) { setTotallay(price_layer3[17]) }

                                    if (index === 18 && selected3 === layer[0]) { setTotallay(price_layer1[18]) }
                                    if (index === 18 && selected3 === layer[1]) { setTotallay(price_layer2[18]) }
                                    if (index === 18 && selected3 === layer[2]) { setTotallay(price_layer3[18]) }

                                    setIsActive1(false)
                                }
                                } className='drop_item'>{destination}</div>
                            ))}
                        </div>
                    )}
                </div>
                <div className='drop_down'>
                    <div className='text'>เวลา</div>
                    <div className='drop_bt' onClick={(e) =>
                        setIsActive2(!isActive2)}>
                        {selected2}
                        <span class="triangle"></span>
                    </div>
                    {isActive2 && (
                        <div className='drop_content' >
                            {time.map(time => (
                                <div onClick={e => {
                                    setSelected2(time)
                                    setIsActive2(false)
                                }
                                } className='drop_item'>{time}</div>
                            ))}
                        </div>
                    )}
                </div>
                <div className='drop_down'>
                    <div className='text'>ชั้น</div>
                    <div className='drop_bt' onClick={(e) =>
                        setIsActive3(!isActive3)}>
                        {selected3}
                        <span class="triangle"></span>
                    </div>
                    {isActive3 && (
                        <div className='drop_content' >
                            {layer.map((layer, index) => (
                                <div onClick={e => {
                                    setSelected3(layer)
                                    console.log(selected1)
                                    if (index === 0 && selected1 === destination[0]) { setTotallay(price_layer1[0]) }
                                    if (index === 0 && selected1 === destination[1]) { setTotallay(price_layer1[1]) }
                                    if (index === 0 && selected1 === destination[2]) { setTotallay(price_layer1[2]) }
                                    if (index === 0 && selected1 === destination[3]) { setTotallay(price_layer1[3]) }
                                    if (index === 0 && selected1 === destination[4]) { setTotallay(price_layer1[4]) }
                                    if (index === 0 && selected1 === destination[5]) { setTotallay(price_layer1[5]) }
                                    if (index === 0 && selected1 === destination[6]) { setTotallay(price_layer1[6]) }
                                    if (index === 0 && selected1 === destination[7]) { setTotallay(price_layer1[7]) }
                                    if (index === 0 && selected1 === destination[8]) { setTotallay(price_layer1[8]) }
                                    if (index === 0 && selected1 === destination[9]) { setTotallay(price_layer1[9]) }
                                    if (index === 0 && selected1 === destination[10]) { setTotallay(price_layer1[10]) }
                                    if (index === 0 && selected1 === destination[11]) { setTotallay(price_layer1[11]) }
                                    if (index === 0 && selected1 === destination[12]) { setTotallay(price_layer1[12]) }
                                    if (index === 0 && selected1 === destination[13]) { setTotallay(price_layer1[13]) }
                                    if (index === 0 && selected1 === destination[14]) { setTotallay(price_layer1[14]) }
                                    if (index === 0 && selected1 === destination[15]) { setTotallay(price_layer1[15]) }
                                    if (index === 0 && selected1 === destination[16]) { setTotallay(price_layer1[16]) }
                                    if (index === 0 && selected1 === destination[17]) { setTotallay(price_layer1[17]) }
                                    if (index === 0 && selected1 === destination[18]) { setTotallay(price_layer1[18]) }

                                    if (index === 1 && selected1 === destination[0]) { setTotallay(price_layer2[0]) }
                                    if (index === 1 && selected1 === destination[1]) { setTotallay(price_layer2[1]) }
                                    if (index === 1 && selected1 === destination[2]) { setTotallay(price_layer2[2]) }
                                    if (index === 1 && selected1 === destination[3]) { setTotallay(price_layer2[3]) }
                                    if (index === 1 && selected1 === destination[4]) { setTotallay(price_layer2[4]) }
                                    if (index === 1 && selected1 === destination[5]) { setTotallay(price_layer2[5]) }
                                    if (index === 1 && selected1 === destination[6]) { setTotallay(price_layer2[6]) }
                                    if (index === 1 && selected1 === destination[7]) { setTotallay(price_layer2[7]) }
                                    if (index === 1 && selected1 === destination[8]) { setTotallay(price_layer2[8]) }
                                    if (index === 1 && selected1 === destination[9]) { setTotallay(price_layer2[9]) }
                                    if (index === 1 && selected1 === destination[10]) { setTotallay(price_layer2[10]) }
                                    if (index === 1 && selected1 === destination[11]) { setTotallay(price_layer2[11]) }
                                    if (index === 1 && selected1 === destination[12]) { setTotallay(price_layer2[12]) }
                                    if (index === 1 && selected1 === destination[13]) { setTotallay(price_layer2[13]) }
                                    if (index === 1 && selected1 === destination[14]) { setTotallay(price_layer2[14]) }
                                    if (index === 1 && selected1 === destination[15]) { setTotallay(price_layer2[15]) }
                                    if (index === 1 && selected1 === destination[16]) { setTotallay(price_layer2[16]) }
                                    if (index === 1 && selected1 === destination[17]) { setTotallay(price_layer2[17]) }
                                    if (index === 1 && selected1 === destination[18]) { setTotallay(price_layer2[18]) }

                                    if (index === 2 && selected1 === destination[0]) { setTotallay(price_layer3[0]) }
                                    if (index === 2 && selected1 === destination[1]) { setTotallay(price_layer3[1]) }
                                    if (index === 2 && selected1 === destination[2]) { setTotallay(price_layer3[2]) }
                                    if (index === 2 && selected1 === destination[3]) { setTotallay(price_layer3[3]) }
                                    if (index === 2 && selected1 === destination[4]) { setTotallay(price_layer3[4]) }
                                    if (index === 2 && selected1 === destination[5]) { setTotallay(price_layer3[5]) }
                                    if (index === 2 && selected1 === destination[6]) { setTotallay(price_layer3[6]) }
                                    if (index === 2 && selected1 === destination[7]) { setTotallay(price_layer3[7]) }
                                    if (index === 2 && selected1 === destination[8]) { setTotallay(price_layer3[8]) }
                                    if (index === 2 && selected1 === destination[9]) { setTotallay(price_layer3[9]) }
                                    if (index === 2 && selected1 === destination[10]) { setTotallay(price_layer3[10]) }
                                    if (index === 2 && selected1 === destination[11]) { setTotallay(price_layer3[11]) }
                                    if (index === 2 && selected1 === destination[12]) { setTotallay(price_layer3[12]) }
                                    if (index === 2 && selected1 === destination[13]) { setTotallay(price_layer3[13]) }
                                    if (index === 2 && selected1 === destination[14]) { setTotallay(price_layer3[14]) }
                                    if (index === 2 && selected1 === destination[15]) { setTotallay(price_layer3[15]) }
                                    if (index === 2 && selected1 === destination[16]) { setTotallay(price_layer3[16]) }
                                    if (index === 2 && selected1 === destination[17]) { setTotallay(price_layer3[17]) }
                                    if (index === 2 && selected1 === destination[18]) { setTotallay(price_layer3[18]) }

                                    setIsActive3(false)
                                }
                                } className='drop_item'>{layer}</div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className='block_price'>
                <p>ราคา(รวมภาษี 7%) : {(totalLay)} </p>
            </div>
            <div className='row_input'>
                <p>โปรดป้อนข้อมูลติดต่อของคุณ</p>
                <input
                    type="text"
                    placeholder='ชื่อจริง'
                    className="field"
                    onChange={(event) => {
                        setfirstname(event.target.value)
                    }
                    } />
                <input
                    type="text"
                    placeholder=' นามสกุล '
                    className="field"
                    onChange={(event) => {
                        setlastname(event.target.value)
                    }}
                />
                <input
                    type="text"
                    placeholder=' ที่อยู่ '
                    className="field"
                    onChange={(event) => {
                        setaddress(event.target.value)
                    }}
                />
                <form>
                    <input
                        type="text"
                        placeholder=' เบอร์โทรศัพท์ '
                        className="field"
                        value={phonenumber}
                        onChange={handleChange}
                    />
                </form>
                <input
                    type="text"
                    placeholder=' Email '
                    className="field"
                    onChange={(event) => {
                        setemail(event.target.value)
                    }}
                />
                <div>
                </div>
            </div>
            <Link to='./Thank'><button className='bt' onClick={addEmployee}>ยืนยันการจอง</button></Link>
            <div>
                <p></p>
            </div>
        </div>


    )
}

export default Personal