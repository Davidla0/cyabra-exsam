import { createApiClient } from "./api";
import { storageService } from "./async-storage.service"

var STORAGE_KEY = 'IMDB'

async function query(filterBy: any) {
    const movies: any = await storageService.query(STORAGE_KEY)
    
    let res:any = movies
    if (!movies[0]) {
        console.log('no movies');
        const api = createApiClient();
        res = await api.getMovies()
        res = await storageService.postMany(STORAGE_KEY, res.data.results)

    }
    else if (filterBy?.txt) {
        console.log(filterBy);
        
        let expression = filterBy.txt
        const regex = new RegExp(expression, "i")
        res = movies.filter((t: any) => regex.test(t[filterBy.label]))
    }
 
    return res
}

export const movieService = {
    query,
    
}