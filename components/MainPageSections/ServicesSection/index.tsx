import React from "react";
import css from "./Services.module.scss";
import Image from "next/image";
import ServicesPicture1 from "@/assets/services-1-1.png";
import ServicesPicture2 from "@/assets/services-1-2.png";
import ServicesPicture3 from "@/assets/services-2-1.png";
import ServicesPicture4 from "@/assets/services-2-2.png";

const ServicesSection = () => {
  return (
    <section className={css.ServicesSection}>
      <div className={css.wrapper}>
        <h2 className={css.heading}>שירותים</h2>
        <div className={css.serviceContent}>
          <div className={css.firstColumn}>
              <Image className={css.image} src={ServicesPicture1} alt="Clean room picture" />
            <p dir="rtl">
            לשירות המשרתת שלנו ניסיון של שנים במתן שירותי ניקיון, תוך הקפדה על ניקיון יסודי ויעיל של ביתכם.{" "}
            </p>
              <Image className={css.image} src={ServicesPicture2} alt="Clean room picture" />
          </div>
          <div className={css.secondColumn}>
            <p dir="rtl" className={css.first}>
            אנו מתגאים באמינות שלנו ובמחויבות שלנו לספק חווית ניקיון עקבית ואיכותית.
            </p>
            <div className={css.pictures}>
              <Image className={css.image} src={ServicesPicture3} alt="Clean room picture" />
              <Image className={css.image} src={ServicesPicture4} alt="Clean room picture" />
            </div>
            <p className={css.second} dir="rtl">
            תוכניות הניקיון שלנו מותאמות לצרכים ולהעדפות הספציפיות שלך, מה שמבטיח שהבית שלך ינוקה בדיוק איך שאתה רוצה.
            </p>
            <p className={css.third} dir="rtl">
            העוזרות שלנו מקצועיות, ידידותיות ומכבדות, מה שמבטיח שתקבלו שירות ברמה הגבוהה ביותר בכל פעם.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
