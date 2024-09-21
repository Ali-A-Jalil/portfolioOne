import "./contact.css"
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import doneAnimation from "../../../public/Animation/Animation - 1726861382180.json"
import ContactAnimation from "../../../public/Animation/contactUs.json"
const Contact = () => {

  const [state, handleSubmit] = useForm("xpwagdqo");


  return (
    <section className="contact-us">
      
      <h1 className="title-contact"> <span className="icon-envelope" /> Contact Us</h1>
      <p className="subtitle-contact">Contact Us for more information and get notified when i publish something new.</p>

      <div style={{justifyContent:"space-between", display:"flex"}} className="contact-form">
        <form className="form-contact" onSubmit={handleSubmit}>
          <div className="input-email">
            <label htmlFor="email">Email Address :</label>
            <input autoComplete="off" required type="email" name="email" id="email" placeholder="Your Email" />

            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div className="input-message">
            <label htmlFor="massage">Your Message :</label>
            <textarea required name="message" id="massage" placeholder="Your Message"></textarea>

            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>
          <button  disabled={state.submitting} className="btn-submit" type="submit">Submit</button>
          {state.succeeded &&  
            <h6 style={{display:"flex"}} className="success-message" >
              <Lottie loop={false} style={{ height:"3rem", margin:"-10", padding:"0"}} animationData={doneAnimation} />Your message has been sent successfully !
            </h6> }
        </form>

        <div className="animationContact">
          <Lottie loop={true} animationData={ContactAnimation} />
        </div>
      </div>
    </section>
  )
}

export default Contact