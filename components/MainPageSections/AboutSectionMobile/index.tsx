import List from "@/UI/List";
import React from "react";
import css from "./AboutSectionMobile.module.scss";
import Image from "next/image";

import AboutPicture1 from "@/assets/AboutMobile-1.png";
import AboutPicture2 from "@/assets/AboutMobile-2.png";
import AboutPicture3 from "@/assets/AboutMobile-3.png";
import AboutPicture4 from "@/assets/AboutMobile-4.png";
import AboutPicture5 from "@/assets/AboutMobile-5.png";
import AboutPicture6 from "@/assets/AboutMobile-6.png";
import AboutPicture7 from "@/assets/AboutMobile-7.png";

const AboutSectionMobile = () => {
  return (
    <section className={css.AboutSection}>
      <div className={css.wrapper}>
        <h2 className={css.heading}>About cleaning</h2>

        <div className={css.first}>
        <List
            title="ניקיון החדר כולל:"
            items={[
              "אבק משטחים",
              "שאיבת אבק או טאטוא רצפה",
              "ניקוי חלונות ומראות",
              "סידר מיטות וארגון העומס",
            ]}
          />
          <Image src={AboutPicture1} alt="about section picture of room" />
        </div>

        <div className={css.second}>
          <div className={css.pictures}>
            <Image src={AboutPicture2} alt="about section picture of kitchen" />
            <Image src={AboutPicture3} alt="about section picture of kitchen" />
          </div>
          <List
            title="ניקיון המטבח כולל:"
            items={[
              "משטחים ומשטחים",
              "מכשירים",
              "ארונות ומגירות",
              "רצפות וכיורים",
            ]}
          />
        </div>

        <div className={css.third}>
        <List
            title="ניקיון חדר האמבטיה כולל:"
            items={[
              "קרצוף וחיטוי משטחים",
              "ניקוי מקלחת, אמבטיה ושירותים",
              "ניגוב מראות ומתקנים",
              "ניקוי או טאטוא הרצפה",
            ]}
          />
          <Image src={AboutPicture4} alt="about section picture of bathroom" />
        </div>

        <div className={css.fourth}>
          <Image src={AboutPicture5} alt="about section picture of hallway" />

          <List
            title="ניקיון מסדרון כולל:"
            items={[
              "ניקוי אבק וניגוב משטחים",
              "שואב אבק לרצפה ",
              "ניקוי גופי תאורה",
              "הסרת קורי עכביש",
            ]}
          />
        </div>

        <div className={css.bottom}>
          <Image src={AboutPicture6} alt="about section picture of hallway" />
          <Image src={AboutPicture7} alt="about section picture of hallway" />
        </div>
      </div>
    </section>
  );
};

export default AboutSectionMobile;
