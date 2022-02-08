import styles from "./meneu.module.css"; //for using the module in styles//
import { Row, Col } from "react-grid";
import { useState } from "react";
// import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Router } from "react-router";
import { Link } from "react-router-dom";
import Boy from "./Boy";
import Search from "./Search.js";
import GirlIcon from "@mui/icons-material/Girl";
import BoyIcon from "@mui/icons-material/Boy";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import BedroomBabyIcon from "@mui/icons-material/BedroomBaby";
import DvrIcon from "@mui/icons-material/Dvr";

function Meneu() {
  return (
    <Row className={styles.meneu}>
      <Col sm={12} md={12} lg={12}>
         <div className={styles.search}><Search/></div>
        <div className={styles.meneudivcol}>
          <div className={styles.meneudiv}>
              <ul>
                <li>
                  <GirlIcon className={styles.toggleicon} />
                  <a className={styles.toggle} href="Dressgirl">
                    لباس دخترانه
                  </a>
                  <Link to="/Dressgirl"></Link>
                </li>
                <li>
                  <BoyIcon className={styles.toggleicon} />
                  <a className={styles.toggle} href="Boy">
                    لباس پسرانه
                  </a>
                  <Link to="/Boy"></Link>
                </li>
              </ul>
              <ul>
                <li>
                  <ChildCareIcon className={styles.toggleicon} />
                  <a className={styles.toggle} href="Baby">
                    لباس بچه گانه
                  </a>
                  <Link to="/Baby"></Link>
                </li>
              </ul>
              <ul>
                <li>
                  <BedroomBabyIcon className={styles.toggleicon} />
                  <a className={styles.toggle} href="Toy">
                    اسباب بازی/ملزومات
                  </a>
                  <Link to="/Toy"></Link>
                </li>
              </ul>
              <ul>
                <li>
                  <DvrIcon className={styles.toggleicon} />
                  <a className={styles.toggle} href="Electronic">
                    کتاب/الکترونیک
                  </a>
                  <Link to="/Electronic"></Link>
                </li>
              </ul> 
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Meneu;
