import styles from "./Category.module.css"; //for using the module in styles//
import { Row, Col } from "react-grid";
import { Link } from "react-router-dom";
import full from "./asset/img/full.jpg";
import kid from "./asset/img/ourstory.JPG";
import category1 from "./asset/img/category1.jpg";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import * as React from "react";
import Typography from "@mui/material/Typography";
import arrow from "./asset/img/arrow.gif";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";

function Category() {
  return (
    <Row>
      <Col className={styles.Category1} lg={4} md={4} sm={12}>
        <Card className={styles.Categorycard}>
        <Typography>
            <div className={styles.step1fonttypo}>
              <a className={styles.step1font} href="CategoryA" alt="Catrgory">
                <img className={styles.step1fontimg} src={arrow} />{" "}
                <span className={styles.text}>
                  گام اول: تعیین کالا های بدون استفاده
                </span>
              </a>
              <Link to="/CategoryA"></Link>
            </div>
          </Typography>
          <div className={styles.colcategory}>
            <CardMedia
              component="img"
              alt="green"
              className={styles.colcategoryimg}
              image={full}
            />
          </div>
        </Card>
      </Col>
      <Col className={styles.Category2} lg={4} md={4} sm={12}>
        <Card className={styles.Categorycard}>
        <Typography>
            <div className={styles.step1fonttypo}>
              <a className={styles.step1font} href="CategoryB" alt="Catrgory">
                <img className={styles.step1fontimg} src={arrow} />{" "}
                <span className={styles.text}>
                  گام دوم: معرفی کالای خود در کیدکالا
                </span>
              </a>
              <Link to="/CategoryB"></Link>
            </div>
          </Typography>
          <div className={styles.colcategory}>
            <CardMedia
              component="img"
              alt="green"
              className={styles.colcategoryimg}
              image={kid}
            />
          </div>
        </Card>
      </Col>
      <Col className={styles.Category3} lg={4} md={4} sm={12}>
        <Card className={styles.Categorycard}>
        <Typography>
            <div className={styles.step1fonttypo}>
              <a className={styles.step1font} href="Category1" alt="Catrgory">
                <img className={styles.step1fontimg} src={arrow} />
                <span className={styles.text}>
                  گام سوم: دریافت مبلغ و یا جنس خود
                </span>
              </a>
              <Link to="/Category3"></Link>
            </div>
          </Typography>
          <div className={styles.colcategory}>
            <CardMedia
              component="img"
              alt="green"
              className={styles.colcategoryimg}
              image={category1}
            />
          </div>
        </Card>
      </Col>
    </Row>
  );
}
export default Category;
