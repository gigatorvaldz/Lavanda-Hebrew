import React from "react";
import css from "./Home.module.scss";
import Button from "@/UI/Button";

const HomeSection = () => {
  return (
    <section className={css.HomeSection} dir="rtl">
      <div className={css.wrapper}>
        <h2 className={css.heading}>
        הרם את החלל שלך עם שירותי ניקוי נוצצים.
        </h2>
        <strong className={css.content}>
        השאירו את הניקיון למומחים, תהנו מהזמן הפנוי שלכם.
        </strong>
        <Button>עבור לבחירה</Button>
      </div>
    </section>
  );
};

export default HomeSection;
