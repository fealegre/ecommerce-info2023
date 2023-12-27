import { useEffect, useState } from 'react'
const useFetch = (URL) => {

    const [data, setData] = useState(null)    
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(true)

    useEffect(() => {
        fetch(URL)
            .then(res => {
                if (!res.ok) {
                    throw Error('No existen datos para este recurso');
                }
                return res.json()                
            })
            .then(data => {
                setData(data)
                setIsLoading(false)
                setError(null)
            })
            .catch(err => {
                setIsLoading(false)
                setError(err.message)
            })
    }, [URL])

    return { data, isLoading, error}
}

export default useFetch