import React from "react";
import styles from "./Button.module.css";

const PageButton = (props) => {

    const clickHandler = () => {
        props.handler(props.path);
    };

    return (
        <div className={styles["ct"]}>
            <button disabled={props.path === ""} onClick={clickHandler} type="button">{props.name}</button>
        </div>
    );
}



export default PageButton;