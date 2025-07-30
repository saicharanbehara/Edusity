import React from 'react'
import '../Contact/Contact.css'
import message from '../../assets/msg-icon.png'
import mail from '../../assets/mail-icon.png'
import phone from '../../assets/phone-icon.png'
import location from '../../assets/location-icon.png'
import whiteArrow from '../../assets/white-arrow.png'
const Contact = () => {
     const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fe08252e-efd5-4f39-bdaa-08d4846b21d9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
}
  return (
    <div className='Contact'>
         <div className="Contact-col">
            <h3>
                Send us Message
                <img src={message} />
            </h3>
            <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
            <ul>
                <li>
                    <img src={mail} />
                    Contact@GreatStack.dev</li>
                <li>
                    <img src={phone} />
                    +1 123-456-7890</li>
                <li>
                    <img src={location} />
                    77 Massachusetts Ave, CambridgeMA 02139, United States</li>
            </ul>
         </div>
         <div className="Contact-col">
            <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type='text' name='name' placeholder='Enter Your name' required/>
                    <label>Phone Number</label>
                    <input type='tel' name='phone' placeholder='Enter Your mobile number' required/>
                    <label>Your Email </label>
                    <input type='text' name='Email' placeholder='Enter Your email Id' required/>
                    <label>Wite Your Message Here </label>
                    <textarea name='message' placeholder='Enter Your Message' rows={6} required></textarea>
                    <button type='Submit' className='btn dark-btn'>Submit Now<img src={whiteArrow}/></button>
            </form>

            <span>
                {result}
            </span>
         </div>

    </div>
  )
}

export default Contact