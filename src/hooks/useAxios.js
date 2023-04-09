import axios from "axios";
import { useState, useRef } from "react";
import uuid from "uuid";

const useAxios = (baseurl) => {
    const [cardList, setCardsList] = useState([]);
    const url = useRef(baseurl)
    async function addToCardList(path) {
        if (path) {
            console.log('path!', path)
            const response = await axios.get(url.current + path);
            setCardsList(cards => [...cards, { ...response.data, id: uuid() }]);
        } else if (!path) {
            console.log('NOpath!', path)
            const response = await axios.get(url.current);
            setCardsList(cards => [...cards, { ...response.data, id: uuid() }]);
        }
    }
    function clearCardList() { setCardsList([]) }
    return [cardList, addToCardList, clearCardList];
}

export default useAxios;