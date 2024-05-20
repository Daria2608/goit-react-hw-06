import css from './Filters.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from '../../redux/filtersSlice'

export default function Filters() {
    const filteredContacts = useSelector((state) => state.filters.name)
    // console.log(filteredContacts);
    const dispatch = useDispatch()
    const onSearch = (value) => {
    dispatch(changeFilter(value))
    }

    return (
        <div>
            <p className={css.text}>Find contact by name</p>
            <input className={css.input} type="text" value={filteredContacts} onChange={(e) => onSearch(e.target.value)}/>
        </div>
    )
}