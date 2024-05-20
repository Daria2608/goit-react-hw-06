import css from './App.module.css'
import Filters from './components/Filters/Filters'
import ContactList from './components/ContactList/ContactList'
import ContactForm from './components/ContactForm/ContactForm'

export default function App() {
  

  return (
      <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <Filters />
      <ContactForm/>
      <ContactList />
</div>
  )
}
