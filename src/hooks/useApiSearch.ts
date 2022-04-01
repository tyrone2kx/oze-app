import React, { useState, useEffect } from 'react'
import { useDebounce } from 'use-debounce/lib';
import Notify from '../utils/Notify';
import axios from 'axios';


const useApiSearch = () => {

    const [searchText, setSearchText] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [searchResults, setSearchResults] = useState<any[]>([])
    const [debounceSearchText] = useDebounce(searchText, 300)
    const [loading, setLoading] = useState<boolean>(false)
    const [page, setPage] = useState<number>(1);


    const searchApi = async () => {
        setLoading(true)
        try {
            const { data } = await axios.get(`http://api.github.com/search/users?q=${debounceSearchText}&page=${page}`)
            console.log("data: ", data)
            setLoading(false)
        }
        catch (error: any) {
            setLoading(false)
            setError(error?.message as string)
            Notify(error?.message, "error")
        }
    }

    useEffect(() => {
        searchApi();
    }, [searchText, page])

    return {
        searchText,
        searchResults,
        loading,
        page,
        setPage,
        setSearchText
    }
}

export default useApiSearch