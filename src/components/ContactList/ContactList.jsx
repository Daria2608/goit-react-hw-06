import { useSelector } from "react-redux"
import Contact from "../Contact/Contact"
import css from './ContactList.module.css'

export default function ContactList() {

    const contacts = useSelector((state) => state.contacts.items)
    const filters = useSelector((state) => state.filters.name)    
    const filterContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filters.toLowerCase()))
    return (
        <ul className={css.list}>
            {filterContacts.map((contact) => (
                <li className={css.listItem} key={contact.id}>
                    <Contact data={contact} />
                </li>
            ))}
        </ul>
    )
}