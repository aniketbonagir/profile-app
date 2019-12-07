import React, {memo} from 'react';
import Modal from "../Modal/Modal";
import CharacterInfo from "../CharacterInfo/CharacterInfo";
import styles from "./ProfileDetails.module.css";
import CharLocation from "../CharLocation/CharLocation";
import CharacterChapterInfo from "../CharacterChapterInfo/CharacterChapterInfo";
import get from "lodash/get";

const ProfileDetails = (props) => {
    return (
        <Modal show={true} modalClosed={props.closeModal}>
            <div>
                <div>
                    <div className={styles["char-info-loc-ct"]}>
                        <CharacterInfo data={props.showInfoData}/>
                        <CharLocation apiUrl={get(props.showInfoData, "location.url") || ""}/>
                    </div>
                </div>
                <div className={styles["episode-ct"]}>
                    <CharacterChapterInfo episodeIdList={getEpisodeIds(get(props.showInfoData, "episode"))}/>
                </div>
            </div>
        </Modal>
    );
}

const getEpisodeIds = (episodeListURls = []) => {
    return episodeListURls.map(sub => {
        let id = sub.split("/episode/")[1];
        return id;
    })
}

export default memo(ProfileDetails);