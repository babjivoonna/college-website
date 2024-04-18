import React from 'react'
import './Contact.css'
import msg_icon from '../../Assets/msg-icon.png'
import mail_icon from '../../Assets/mail-icon.png'
import phone_icon from '../../Assets/phone-icon.png'
import location_icon from '../../Assets/location-icon.png'
import white_arrow from '../../Assets/white-arrow.png'


function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4195e252-5226-4281-85e7-833338138276");

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
      event.target.reset()
    }
  };
  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>Send us a message
          <img src={msg_icon} alt="" />
        </h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem assumenda ad beatae quibusdam.</p>
        <ul>
          <li>
            <img src={mail_icon}alt="" />
            babjivoonna189@gmail.com</li>
          <li> <img src={phone_icon} alt="" />9381560748</li>
          <li> <img src={location_icon} alt="" />vishakapatnam,<br/>Andhra Pradesh,India</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label htmlFor="">
            Your name
          </label>
          <input type="text"  name="name" placeholder='enter your name' required/>
          <label htmlFor="">Phone Number</label>
          <input type="tel" name='phone' placeholder="enter your number " required />
          <label htmlFor="">Write you messages here</label>
          <textarea name="message"  rows="6"
          placeholder='enter your message'
          >
          </textarea>
          <button type='submit' className="btn dark-btn">Submit now
            <img src={white_arrow} alt="" />
            </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
