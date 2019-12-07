import React from "react";
import styles from "./ProfileInfo.module.css";
import capitalize from "lodash/capitalize";

const ProfileInfo = (props) => {
    return (
        <div className={styles["ct"]}>
            <div className={styles["label"]}>{(props.label === "origin.name") ? "Origin" : capitalize(props.label)} :</div>
            <div className={styles["value"]}>{props.value}</div>
        </div>
    );
}

export default ProfileInfo;