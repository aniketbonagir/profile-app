import React from 'react';
import Loader from 'react-loader-spinner'
import styles from "./Spinner.module.css";

const Spinner = () => {
    return (<div className={styles["spinner"]}>
        <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
        />
    </div>);
}

export default Spinner;