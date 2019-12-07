import React, {useState, useEffect} from 'react';
import { fetchCharLocation } from "../../api/common";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import { profileLocationInfo } from "../../constants/common";
import get from "lodash/get";
import styles from "../CharacterChapterInfo/CharacterChapterInfo.module.css";
import Spinner from "../Spinner/Spinner";

const CharLocation = (props) => {
    const [loadingCharInfo, updateLoading] = useState(true);
    const [locationData, updateLocationData] = useState({});

    useEffect(() => {
        updateLoading(true)
        fetchCharLocation(props.apiUrl, updateLocationResponse.bind(this, updateLocationData), updateLoading);
    }, [props.apiUrl]);

    return (<div>
        {!loadingCharInfo && <div>
            <div className={styles["heading-text"]}>
                <div>Location Information</div>
                <hr />
            </div>
            {profileLocationInfo.map(sub => {
                if (sub === "residents") {
                    let count = get(locationData, sub).length || "0";
                    return <ProfileInfo key={sub} label={sub} value={count} />
                }
                return <ProfileInfo key={sub} label={sub} value={get(locationData, sub) || "unknown"} />
            })}
        </div>}
        {loadingCharInfo && <Spinner />}
    </div>);
}

const updateLocationResponse = (updateStateHandler, response) => {
    let data = get(response, "data") || {};
    updateStateHandler(data);
}

export default CharLocation;