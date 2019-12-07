import React, { useState, useEffect }  from 'react';
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import styles from "./ProfileListPage.module.css";
import get from "lodash/get";
import { fetchList } from "../../api/common";
import PageButton from "../../components/Button/Button";
import FragHoc from "../../hoc/FragHoc/FragHoc";
import WithErrorHandler from "../../hoc/WithErrorHandler/withErrorHandler";
import axios from "../../axios-profile";
import ProfileDetails from "../../components/ProfileDetails/ProfileDetails";
import Spinner from "../../components/Spinner/Spinner";
import JumpToPage from "../../components/JumpToPage/JumpToPage";


const ProfileListPage = (props) => {
    const [listData, updateListData] = useState({});
    const [loading, updateLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [listApiUrl, updateListApiUrl] = useState("character");
    const [showDetailsFlag, updateModalDetailsFlag] = useState(false);
    const [showInfoData, updateInfo] = useState({});
    useEffect(() => {
        updateLoading(true)
        fetchList(listApiUrl, updateListData, updateLoading);
    }, [listApiUrl]);

    const onPageCountChange = (e) => {
        setPage(e.target.value);
    }

    const onJumpClick = () => {
        updateListApiUrl("character/?page=" + page);
    }

    if(loading) {
        return (<Spinner />);
    }

    return (
        <FragHoc>
            {showDetailsFlag && <ProfileDetails showInfoData={showInfoData} closeModal={modalCloseHandler.bind(this, updateModalDetailsFlag)} />}
            <div className={styles["ct-header"]}>
                <PageButton handler={updateListApiUrl} path={(get(listData, "data.info") && get(listData, "data.info.prev")) || ""} name="Previous"/>
                <PageButton handler={updateListApiUrl} path={(get(listData, "data.info") && get(listData, "data.info.next")) || ""} name="Next" />
                <JumpToPage page={page} onPageChage={onPageCountChange} updatePage={onJumpClick} />
                <div>
                    <span className={styles["total-label"]}>Total Profiles</span> - <span className={styles["total-page-count"]}>{(get(listData, "data.info") && get(listData, "data.info.count")) || ""}</span>
                </div>
            </div>
            <div className={styles["ct-list"]}>
                {generateList(listData, updateModalDetailsFlag, updateInfo)}
            </div>
        </FragHoc>
    );
};

const modalCloseHandler = (handler) => {
    handler(false);
}

const generateList = (listData, updateModalDetailsFlag, updateInfo) => {
    if (Array.isArray(get(listData, "data.results")) && get(listData, "data.results").length > 0) {
        return profileCardGenerator(get(listData, "data.results"), updateModalDetailsFlag, updateInfo)
    } else {
        return <div>404 Page not found</div>
    }
}

const profileCardGenerator = (data, showModalHandler, updateInfoHandler) => {
    return data.map((character) => {
        return (
        <ProfileCard
            key={character.id} 
            data={character} 
            showModalHandler={showModalHandler}
            updateInfoHandler={updateInfoHandler}
        />);
    });
}

export default WithErrorHandler(ProfileListPage, axios);