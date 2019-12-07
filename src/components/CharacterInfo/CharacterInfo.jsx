import React from 'react';
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import { profileInfoDetailsList } from "../../constants/common";
import get from "lodash/get";
import moment from "moment";
import styles from "../CharacterChapterInfo/CharacterChapterInfo.module.css";

const CharacterInfo = (props) => {
    return (<div>
        <div className={styles["heading-text"]}>
            <div>Character Information</div>
            <hr />
        </div>
        {profileInfoDetailsList.map(sub => {
            if (sub === "created") {
                return <ProfileInfo key={sub} label={sub} value={moment(get(props.data, sub)).fromNow() || "unknown"} />
            }
        return <ProfileInfo key={sub} label={sub} value={get(props.data, sub) || "unknown"} />
    })}
    </div>);
}

export default CharacterInfo;