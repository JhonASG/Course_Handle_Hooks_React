import { getAPI } from "../helpers/getAPI"
import { useEffect, useState } from "react";

export const useFetch = ( url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    });

    useEffect(() => {
        getAPI(url, setState);
    }, [url]);

    return {
        ...state
    };
}
