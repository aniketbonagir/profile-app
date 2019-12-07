import React from 'react';
import styles from "./ProfileCard.module.css";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import get from "lodash/get";
import { profileInfoList } from "../../constants/common";
import ProfileImage from "../ProfileImage/ProfileImage";

const ProfileCard = (props) => {

    return (
        <div key={get(props, "data.id")} 
            className={styles["profile-ct"]} 
            onClick={ProfileCardClickHandler.bind(this, props.data, props.showModalHandler, props.updateInfoHandler)}
        >
            <ProfileImage name={get(props, "data.name") || ""} imageURL={get(props, "data.image") || ""} />
            <div className={styles["profile-info-ct"]}>
                {infoCardGenrator(get(props, "data"))}
            </div>
        </div>
    );
}

const ProfileCardClickHandler = (data, showModalHandler, updateInfoHandler) => {
    updateInfoHandler(data);
    showModalHandler(true);
};

const infoCardGenrator = (data) => {
    let infoCard = [];
    profileInfoList.forEach((sub) => {
        infoCard.push(
            <ProfileInfo key={sub} label={sub} value={data[sub] || "-"}/>
        );
    }, this);
    return infoCard;
}

export default ProfileCard;