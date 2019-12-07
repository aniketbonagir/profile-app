import React, { useState } from 'react'; 
import Spinner from "../Spinner/Spinner";
import styles from "./ProfileImage.module.css";


const ProfileImage = (props) => {
    const [loadingImage, setLoading] = useState(true);

    const imageLoadSuccess = () => {
        setLoading(false);
    }

    const imageLoadError = () => {
        setLoading(false);
    }

    return (<div>
        <img
            className={(loadingImage) ? styles["image-loading"] : styles["profile-image"]}
            src={props.imageURL}
            onLoad={imageLoadSuccess}
            onError={imageLoadError}
            alt={props.name || ""}
        />
        {loadingImage && <Spinner />}
    </div>);

}

export default ProfileImage;