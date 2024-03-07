import React from 'react'
import "./Contact.css";
const Contact = () => {
    return (
        <>
            <section className="contact-section" id='contact'>
                <div className="main-contact">
                    <div className="contact">
                        <h1 className='cont'>Contact</h1>
                        <hr />
                        <p className='para1'>Lets get in touch and talk about your next project.</p>
                    </div>
                    <div class="container">
                        <form action="">
                            <input type="text" placeholder="Name" required />
                            <input type="text" placeholder="Email" required />
                            <input type="text" placeholder="Subject" required />
                            <input type="text" placeholder="Comment" requried />
                            <input type="submit" value="SEND MASSAGE" />
                        </form>
                    </div>
                    <div className="con-img">
                        <img src='https://www.w3schools.com/w3images/map.jpg' alt='road-img' />
                    </div>
                </div>
            </section>

        </>
    )
}

export default Contact
