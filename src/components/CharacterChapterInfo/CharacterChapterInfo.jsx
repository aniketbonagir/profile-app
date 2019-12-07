import React, { useState, useEffect } from 'react'; 
// import ProfileInfo from "../ProfileInfo/ProfileInfo";
import { fetchEpisodeData } from "../../api/common";
import get from "lodash/get";
import capitalize from "lodash/capitalize";
import styles from "./CharacterChapterInfo.module.css";
import Spinner from "../Spinner/Spinner";

const CharacterChapterInfo = (props) => {
    const [loadingChapterInfo, updateCharLoading] = useState(true);
    const [chapterData, updateChapterData] = useState([]);

    const fetchChapterData = () => {
        updateCharLoading(true)
        fetchEpisodeData("episode/" + props.episodeIdList.toString(), updateChapterResponse.bind(this, updateChapterData), updateCharLoading);
    };


    useEffect(fetchChapterData, []);

    return (
        <div>
            <div>
                <div>Episode List</div>
                <hr style={{ border: "1px solid black"}}/>
            </div>
            {loadingChapterInfo && <Spinner />}
            {!loadingChapterInfo && chapterData.length > 0 && 
                <div className={styles["epinfo-ct"]} key="names">
                    <div className={styles["label"]}>{capitalize("chapter names")} :</div>
                    <div className={styles["value"]}>{getNamesList(chapterData)}</div>
                </div>
            }
            {loadingChapterInfo && chapterData.length === 0 && <div>No Data</div>}
        </div>
    );
}


const getNamesList = (list) => {
    const names = list.map(sub => sub.name);
    return names.join(", ");
}

const updateChapterResponse = (updateStateHandler, response) => {
    let data = get(response, "data") || [];
    data = (Array.isArray(data)) ? data : [data];
    updateStateHandler(data);
}

export default CharacterChapterInfo;