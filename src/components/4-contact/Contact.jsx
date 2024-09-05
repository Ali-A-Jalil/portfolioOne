import "./contact.css"
const Contact = () => {
  return (
    <section className="contact-us">
      
      <h1 className="title-contact"> <span className="icon-envelope" /> Contact Us</h1>
      <p className="subtitle-contact">Contact Us for more information and get notified when i publish something new.</p>

      <div className="contact-form">
        <form>
          <div className="input-email">
            <label htmlFor="email">Email Address :</label>
            <input required type="email" name="Email" id="email" placeholder="Your Email" />
          </div>

          <div className="input-message">
            <label htmlFor="massage">Your Message :</label>
            <textarea required name="text" id="massage" placeholder="Your Message"></textarea>
          </div>
          <button className="btn-submit" type="submit">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact