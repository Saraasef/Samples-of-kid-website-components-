import styles from "./Footer.module.css";
import { Row, Col } from "react-grid";
import kid from "./asset/img/logos_black.png";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import SummarizeIcon from "@mui/icons-material/Summarize";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import VideoFileIcon from "@mui/icons-material/VideoFile";
import divarlogo from "./asset/img/divar-logo.jfif";
import mini from "./asset/img/mini.png";
import nini from "./asset/img/nini.png";
import kidtokid from "./asset/img/kidtokid.png";

function Footer() {
  return (
    <Row>
      <Col className={styles.footerBox1} lg={3} md={3} sm={12}>
        <div className={styles.textBoxrow1}>
          <span className={styles.textBox}>درباره ما</span>
          <br />
          <a href="/Story">
            <h5 className={styles.introduction}>کیدکالا کیست ؟ </h5>{" "}
          </a>

          <br />
          <span className={styles.textBox}> هدف کیدکالا: </span>
          <br />
          <h5 className={styles.textBoxspan}>
            کمک به استفاده مجدد تعداد زیادی لباس و وسایل{" "}
          </h5>
          <br />
          <span className={styles.textBox}>عضویت در مجله کیدکالا</span>
          <br />
          <div className={styles.formsubscribe}>
            <form
              className={styles.formsubscribe}
              novalidate="novalidate"
              method="post"
              id="newsletter-validate-detail"
            >
              <MailOutlineIcon />
              <input
                className={styles.emailbox}
                name="email"
                type="email"
                id="emailbox-footer"
                placeholder="آدرس ایمیل خود را وارد کنید"
                data-validate={{ required: true, "validate-email": true }}
              />
              <button className={styles.membership} title="عضویت" type="submit">
                <ArrowCircleLeftIcon />
              </button>{" "}
            </form>
          </div>
        </div>
      </Col>
      <Col className={styles.footerBox2} lg={3} md={3} sm={12}>
        <div className={styles.footerBoxdiv}>
          <span className={styles.textBox}>با ما در تماس باشید</span>
          <br />
          <div className={styles.phone}>
            <ContactPhoneIcon />
            <a href="tel:+982148633333" rel="nofollow">
              ۰۲۱-۲۳۶۳۳۳۳۳
            </a>
          </div>
          <br />
          <div className={styles.email}>
            <AlternateEmailIcon />
            <a href="mailto:support@kidkila.com" rel="nofollow">
              ایمیل کیدکالا
            </a>
          </div>
          <br />
          <div>
            <a className={styles.textBox} href="/Privacy">
              حريم شخصی
            </a>
          </div>
          <br />
          <h5 className={styles.textBoxspan}>
            کیدکالا بر حفظ حريم خصوصی كاربران تاكيد دارد
          </h5>
        </div>
      </Col>
      <Col className={styles.footerBox3} lg={3} md={3} sm={12}>
        <div className={styles.footerBoxdiv}>
          <span>
            <a className={styles.textBox}>خدمات مشتریان</a>
          </span>
          <br></br>

          <span className={styles.textBoxspan}>
            در تمامی ایام هفته می‌توانید با ما در ارتباط باشید.
          </span>
          <br />
          <br />
          <a href="/Support" className={styles.textBox}>
            پشتیبانی ما شامل موارد زیر می باشد:
          </a>
          <br />
          <br />
          <table className={styles.table}>
            <tr>
              <td>
                <SummarizeIcon />
              </td>
              <td>
                <ThumbDownOffAltIcon />
              </td>
              <td>
                <VideoFileIcon />
              </td>
            </tr>
            <tr>
              <td>ثبت آگهی</td>
              <td>انتقاد و پیشنهاد</td>
              <td>آموزش ویدئویی</td>
            </tr>
          </table>
        </div>
      </Col>
      <Col className={styles.footerBox4} lg={3} md={3} sm={12}>
        <div className={styles.footerBoxdiv}>
          <table className={styles.table}>
            <tr>
              <td>لینک های داخلی</td>
              <td>لینک های خارجی</td>
            </tr>
            <tr>
              <td>
                <a href="https://divar.ir/" alt="divar">
                  <img src={divarlogo} alt="divar" className={styles.divar} />
                </a>
                <a href="https://www.nazdone.com" alt="nazdoneh">
                  <img src={nini} alt="nazdoneh" className={styles.divar} />
                </a>
              </td>
              <td>
                <a href="https://www.kidtokid.pt/" alt="divar">
                  <img src={kidtokid} alt="kidtokid" className={styles.divar} />
                </a>
                <a href="https://mini-cycle.com/" alt="divar">
                  <img src={mini} alt="mini" className={styles.divar} />
                </a>
              </td>
            </tr>
          </table>
          <br />
          <br />
          <div  className={styles.iconsfooterrow2div}>
            <img
              className={styles.iconsfooterrow2}
              src="https://www.modiseh.com/media/wysiwyg/codazon/samplepage/telegram.png"
              alt="شبکه های اجتماعی "
            />
            <img
              className={styles.iconsfooterrow2}
              src="https://www.modiseh.com/media/wysiwyg/codazon/samplepage/instagram.png"
              alt="شبکه های اجتماعی "
            />
            <img
              className={styles.iconsfooterrow2}
              src="https://www.modiseh.com/media/wysiwyg/codazon/samplepage/linked-in.png"
              alt="شبکه های اجتماعی "
            />
            <img
              className={styles.iconsfooterrow2}
              src="https://www.modiseh.com/media/wysiwyg/codazon/samplepage/blog.png"
              alt="شبکه های اجتماعی "
            />
            <img
              className={styles.iconsfooterrow2}
              src="https://www.modiseh.com/media/wysiwyg/codazon/samplepage/aparat.png"
              alt=""
            />
          </div>
        </div>
      </Col>
      <div className={styles.kidkalafooterdiv}>
        <img className={styles.kidkalafooter} src={kid} alt="kidkalalogo" />
        <span className={styles.copyright}>
          کلیه حقوق این سایت متعلق به گروه کیدکالا است{" "}
        </span>
      </div>
    </Row>
  );
}
export default Footer;
