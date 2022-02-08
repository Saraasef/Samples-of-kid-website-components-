import "./Baner.css";
import { Row, Col } from "react-grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import * as React from "react";


function Baner() {
  return (
    <>
      <grid>
        <Row>
          <Col className="banner shine" xs={12} md={4} lg={4}>
            <Card className="imagcard">
              <h6 className="imagdivfont">اجتماعی</h6>
              <CardMedia
                className="imghede"
                component="img"
                alt="Girl in a jacket"
                image="https://media.imna.ir/d/2020/08/03/3/1649548.jpg"
              />
              <a href="/Kid">
                <h6 className="imagdivfont">کودکان کار </h6>
              </a>
            </Card>
          </Col>
          <Col className="banner shine" xs={12} md={4} lg={4}>
            <Card className="imagcard">
              <h6 className="imagdivfont">زیست محیطی</h6>
              <CardMedia
                className="imghede"
                component="img"
                alt="استفاده مجدد از لباس"
                image="https://www.trustedclothes.com/blog/wp-content/uploads/2019/09/9-Helpful-TIps.png"
              />
              <a href="/Kid">
                <h6 className="imagdivfont">
                  مزایای زیست محیطی استفاده مجدد از لباس
                </h6>
              </a>
            </Card>
          </Col>
          <Col className="banner shine" xs={12} md={4} lg={4}>
            <Card className="imagcard">
              <h6 className="imagdivfont">اقتصادی</h6>
              <CardMedia
                className="imghede"
                component="img"
                alt="اقتصادی"
                image="https://img1.picmix.com/output/stamp/normal/4/8/1/3/1463184_11eaa.gif"
              />
              <a href="/Kid">
                <h6 className="imagdivfont">بازار داغ لباس‌های دست‌دوم</h6>
              </a>
            </Card>
          </Col>
        </Row>
      </grid>
    </>
  );
}
export default Baner;
