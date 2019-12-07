import axios from "../axios-profile";

export const fetchList = (url, setListData, updateLoading) => {
    fetchData(url, setListData, updateLoading, []);
}

export const fetchCharLocation = (url, setLocData, updateLoading) => {
    fetchData(url, setLocData, updateLoading, {});
}

export const fetchEpisodeData = (url, setEpData, updateLoading) => {
    fetchData(url, setEpData, updateLoading, []);
}

const fetchData = (url, setListData, updateLoading, defaultValue) => {
    try {
        let data = getDataFromStorage(url);
        if (data != null) {
            setListData(data);
            updateLoading(false);
        } else {
            axios.get(url)
                .then(response => {
                    if(!response || response === undefined) {
                        throw(response);
                    }
                    setListData(response);
                    setDataInStorage(url, response);
                    updateLoading(false);
                })
                .catch(error => {
                    setListData(defaultValue);
                    updateLoading(false);
                });
        }
    } catch(err) {
        setListData(defaultValue);
        updateLoading(false);
    }
}

const getDataFromStorage = (url) => {
    let data = getDataFromLocalStorage(url);
    return JSON.parse(data);
}

const setDataInStorage = (url, data) => {
    SetInLocalStorage(url, JSON.stringify(data));
}

const SetInLocalStorage = (key, data) => {
    localStorage.setItem(key, data);
}

const getDataFromLocalStorage = (key) => {
    return localStorage.getItem(key);
}