import List from "@/UI/List";
import css from "./About.module.scss";
import AboutCleaningKitchen from "@/assets/about-1.png";
import AboutCleaningRoom1 from "@/assets/about-2.png";
import AboutCleaningRoom2 from "@/assets/about-3.png";
import AboutCleaningHallway from "@/assets/about-4.png";
import AboutCleaningBathroom1 from "@/assets/about-5.png";
import AboutCleaningBathroom2 from "@/assets/about-6.png";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className={css.AboutSection}>
      <div className={css.wrapper}>
        <h2 className={css.heading}>לגבי ניקיון</h2>

        <div className={css.first}>
          <List
            title="ניקיון המטבח כולל:"
            items={[
              "משטחים ומשטחים",
              "מכשירים",
              "ארונות ומגירות",
              "רצפות וכיורים",
            ]}
          />
          <Image
            className={css.picture}
            src={AboutCleaningKitchen}
            alt="Kitchen picture"
          />
        </div>

        <div className={css.second}>
          <Image
            className={css.firstpicture}
            src={AboutCleaningRoom1}
            alt="Room picture"
          />
          <Image
            className={css.secondpicture}
            src={AboutCleaningRoom2}
            alt="Room picture"
          />
          <List
            title="ניקיון החדר כולל:"
            items={[
              "אבק משטחים",
              "שאיבת אבק או טאטוא רצפה",
              "ניקוי חלונות ומראות",
              "סידר מיטות וארגון העומס",
            ]}
          />
        </div>

        <div className={css.third}>
          <Image
            className={css.picture}
            src={AboutCleaningHallway}
            alt="Hallway picture"
          />
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

        <div className={css.fourth}>
          <List
            title="ניקיון חדר האמבטיה כולל:"
            items={[
              "קרצוף וחיטוי משטחים",
              "ניקוי מקלחת, אמבטיה ושירותים",
              "ניגוב מראות ומתקנים",
              "ניקוי או טאטוא הרצפה",
            ]}
          />
          <Image
            className={css.firstpicture}
            src={AboutCleaningBathroom1}
            alt="Bathroom picture"
          />
          <Image
            className={css.secondpicture}
            src={AboutCleaningBathroom2}
            alt="Bathroom picture"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
