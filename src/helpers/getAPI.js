export const getAPI = async(url, setState) => {
    const api = await fetch(url);
    const data = await api.json();

    setState({
        data,
        isLoading: false,
        hasError: null
    });
}
