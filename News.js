import styles from "./News.module.scss";
import { Row, Col } from "react-grid";
import FireWorks from "./asset/img/FireWorks.JPG";
import kidtokid from "./asset/img/kidtokid.png";
import animation from "./asset/videos/animation.mp4";
import Story from "./Story.js";
import React from "react";
import { textAlign } from "@mui/system";
import divarlogo from "./asset/img/divar-logo.jfif";
import mini from "./asset/img/mini.png";
import nini from "./asset/img/nini.png";

function News() {
  return (
    <>
      <grid>
        <Row>
          <Col className={styles.news} xs={12} md={6} lg={6}>
            <div className={styles.newsfont1}>
              <span className={styles.newsfont1text}>
                <b>اطلاع رسانی و اخبار </b>
              </span>
            </div>
                <div className={styles.card}>
                  <img src={FireWorks} alt="FireWorks" className={styles.cardimg} />
                  <div className={styles.cardbody}>
                    <h6 className={styles.cardtitletextwhite}>
                      کید کالا فعالیت خود را آغاز کرد...
                    </h6>
                  </div>
              <div className={styles.linkkidkala}>
                <span className={styles.listactivity}>
                  <a href="/Story">داستان آغاز فعالیت کیدکالا ... </a>
                </span>
                <div className={styles.listactivity}></div>
              </div>
            </div>
          </Col>
          <Col className={styles.news} xs={12} md={6} lg={6}>
            <div className={styles.newsfont1}>
              <span className={styles.newsfont1text}>
                <b>آیا می دانید ...</b>
              </span>
            </div>
            <div className={styles.newsanimationvideodiv}>
              <video
                className={styles.newsanimationvideo}
                src={animation}
                autoPlay="true"
                controls
              ></video>
            </div>
            {/* <span>کید کالا = کمک به حفظ محیط زیست + مزیت اقتصادی </span> */}
          </Col>
        </Row>
      </grid>
    </>
  );
}
export default News;
