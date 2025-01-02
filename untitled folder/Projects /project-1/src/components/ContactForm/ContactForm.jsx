import { MdMessage } from 'react-icons/md'
import { IoCallOutline } from "react-icons/io5";
import Button from '../Button/Button'
import styles from './ContactForm.module.css'


const ContactForm = () => {
  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
            <Button text = "VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
            <Button text = "VIA CALL" icon={<IoCallOutline fontSize="24px" />} />

        </div>
        <div className={styles.contact_image}></div>
    </section>
  )
}

export default ContactForm
