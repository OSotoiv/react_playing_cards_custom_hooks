import axios from "axios";
import { useState, useRef } from "react";
import uuid from "uuid";

const useAxios = (baseurl) => {
    const [cardList, setCardsList] = useState([]);
    const url = useRef(baseurl)
    async function addToCardList() {
        const response = await axios.get(url.current);
        setCardsList(cards => [...cards, { ...response.data, id: uuid() }]);
    }
    return [cardList, addToCardList];
}

export default useAxios;