import { useState, useEffect } from 'react'
import { useDebounce } from 'use-debounce';
import Notify from '../utils/Notify';
import axios from 'axios';


export interface IResult {
    avatar_url: string,
    id: number,
    score: number,
    login: string,
    url: string,
}

const LIMIT: number = 30;

const useApiSearch = () => {

    const [searchText, setSearchText] = useState<string>("");
    const [searchResults, setSearchResults] = useState<IResult[]>([])
    const [debounceSearchText] = useDebounce(searchText, 300)
    const [loading, setLoading] = useState<boolean>(false)
    const [page, setPage] = useState<number>(1);
    const [isPageChange, setIsPageChange] = useState<boolean>(false)
    const [showPaginationButton, setShowPaginationButton] = useState<boolean>(false);



    useEffect(() => {
        const searchApi = async () => {
            setLoading(true)
            try {
                const { data } = await axios.get(`http://api.github.com/search/users?q=${debounceSearchText}&page=${page}`)

                if (Math.ceil(data.total_count / LIMIT) > page) {
                    setShowPaginationButton(true)
                }
                else setShowPaginationButton(false)
                if (isPageChange) {
                    setSearchResults(prev => ([...prev, ...data.items as IResult[]]))
                }
                else {
                    setSearchResults(data.items as IResult[])
                }
                setLoading(false)
            }
            catch (error: any) {
                setLoading(false)
                const err = error?.data?.message || "An error occurred."
                Notify(err, "error");
            }
        }
       if (debounceSearchText) searchApi();
       else {
        setSearchResults([])
        setShowPaginationButton(false)
       }
    }, [debounceSearchText, page, isPageChange])

    return {
        searchText,
        searchResults,
        loading,
        page,
        setPage,
        setSearchText,
        showPaginationButton,
        setIsPageChange,
        isPageChange
    }
}

export default useApiSearch