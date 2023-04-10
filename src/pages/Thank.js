import './Thank.css'
import { Link } from 'react-router-dom'

function Thank() {
    return(
        <div>
            <header>
                <Link to="/" ><img className='bt_home' src='/train3.jpg' alt='home'/></Link>
                <h2 className='header'> Thank you </h2> 
            </header>
            <section className='section'>
                    <div className='grid'>
                        <div className='box_infomation'>
                            <h3>ข้อมูลส่วนตัว</h3>
                            <ul>
                                <li>เย็ดหี</li>
                                <li>เย็ดหี</li>
                                <li>เย็ดหี</li>
                            </ul>
                        </div>
                        <div className='box_infomation'>
                            <h3>ข้อมูลตั๋ว</h3>
                            <p>ควย</p>
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
                    <div className='grid'>                   
                        <Link to='/'><button type="primary" className='bt_next_done' > เสร็จสิ้น </button></Link>     
                    </div>
            </section>
        </div>
        
    )
}

export default Thank