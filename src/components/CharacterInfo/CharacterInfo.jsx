import React from 'react';
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import { profileInfoDetailsList } from "../../constants/common";
import get from "lodash/get";
import moment from "moment";

const CharacterInfo = (props) => {
    return (<div>
        <div>
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