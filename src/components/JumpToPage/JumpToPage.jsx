import React from 'react';
import styles from "./JumpToPage.module.css";

const JumpToPage = (props) => {

    return (
        <div className={styles["ct"]}>
            <div className={styles["ct-input"]}>
                <input onChange={props.onPageChage} type="number" name="page" value={props.page} />
            </div>
            <div className={styles["ct-button"]}>
                <button onClick={props.updatePage} className={styles["base-button"]}>Jump</button>
            </div>
        </div>
    );
}

export default JumpToPage;