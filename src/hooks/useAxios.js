import axios from "axios";
import { useState, useRef } from "react";


const useAxios = (baseurl, format) => {
    const [cardList, setCardsList] = useState([]);
    const url = useRef(baseurl)
    async function addToCardList(path) {
        if (path) {
            console.log('path!', path)
            const { data } = await axios.get(url.current + path);
            setCardsList(cards => [...cards, format(data)]);
        } else if (!path) {
            console.log('NOpath!', path)
            const { data } = await axios.get(url.current);
            setCardsList(cards => [...cards, format(data)]);
        }
    }
    function clearCardList() { setCardsList([]) }
    return [cardList, addToCardList, clearCardList];
}

export default useAxios;
