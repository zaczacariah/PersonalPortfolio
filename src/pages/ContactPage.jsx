import React from 'react'
import { motion } from 'framer-motion';
import { AppWrap } from '../wrapper'
import { ContactForm } from '../components'
const Contact = () => {
  return (
    <section className="app__header app__flex">
      <ContactForm />

    </section>
  )
}

export default AppWrap(Contact, 'contact', '', true);

