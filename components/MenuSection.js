
import React, {useState, useEffect} from "react";
import styles from "../styles/MenuSection.module.scss";
import {connect} from 'react-redux";
import useSWR from "swr";

const MenuSection = ({UI}) => {
    //const { data, error } = useSWR(
    //"https://api.github.com/repos/vercel/swr",
    //fetcher
  //);
    <div className={styles.MenuSectionContainer}>
    MenuSection
    </div>
}
const mapStateToProps = (state, props) => ({
    UI: state.UI,
    props: props
})
export default connect(mapStateToProps)(MenuSection)
                    