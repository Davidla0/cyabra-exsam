import React, { useEffect } from "react"
import { useLocation } from "react-router"
import { useStoreDispatch } from "../../hooks/use-store-dispatch"
import { useForm } from "../../hooks/useFormRegister"
import { loadMovies } from "../../store/movie.action"


export const AppFilter = () => {
    const [register, setSearch, search] = useForm({label: '', txt: ''}, () => {onChange()})
    const dispatch = useStoreDispatch()
    const location = useLocation()

    useEffect(() => {
        setSearch((search:any) => ({...search, label: '', txt: ''}))
    }, [location.pathname])

    const onChange = () => {
        let time
        clearTimeout(time)
        time = setTimeout(() => {
            dispatch(loadMovies(search))
        }, 300)
    }
   

    return <React.Fragment>
            {/* <select name="label" id="labels" onChange={(e) => onSearch(e.target)}> */}
            <select id="labels"  value={search.label} {...register(`label`, 'number')}>
                <option value="">choose</option>
                <option value="title">title</option>
                <option value="genres">genre</option>
                <option value="description">year</option>
                <option value="stars">actor</option>
            </select>
            <input 
            placeholder="Search IMDB" 
            value={search.txt}
            {...register(`txt`, 'search')} 
            />
    </React.Fragment>
}