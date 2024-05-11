import React from 'react'
import './index.scss'

const ContactForm = () => {
    const formHandler = (event) => {
        event.preventDefault();

    }
  return (
    <div class="app__flex">
        <h4>Get in contact with me!</h4>
        <form onSubmit={formHandler}>
            <label htmlFor="">Name</label>
            <input type="text" />
            <label htmlFor="">Email</label>
            <input type="email"/>
            <label htmlFor="">Message</label>
            <textarea rows="3" name="message" id="" />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default ContactForm