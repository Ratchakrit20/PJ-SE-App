import './Thank.css'
import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import Axios from 'axios';

function Thank() {
    Axios.defaults.withCredentials = true;
    const previewSource = true;
    const [imageFile, setImageFile] = useState('');

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImageFile(reader.result);
        }
    }

    const handleSubmitFile = (e) => {
        e.preventDefault();
        if (!previewSource) return;
        Axios.put(`api url`, { data: imageFile});
    }

    return(
        <div>
            <header>
                <Link to="/" ><img className='bt_home' src='/train3.jpg' alt='home'/></Link>
                <h2 className='header'> Payment </h2> 
            </header>
            <section className='section'>
                    <div className='grid'>
                    </div>
                    <div className='box_infomation_payment'>
                        <h3>การชำระเงิน</h3>
                        <img className='pic_payment' src='/payment.jpg'/>                       
                    </div>
                    <div className='upload'>
                        <form onSubmit={handleSubmitFile} >
                            <input
                                type="file"
                                onChange={handleFileInputChange}
                            />
                            <button type="submit">
                                submit
                            </button>
                        </form >
                    </div >

                    <div className='grid'>
                        <Link to='/' ><button type="primary" className='bt_next_payment' > เสร็จสิ้น </button></Link>     
                    </div>
            </section>
        </div>
        
    )
}

export default Thank