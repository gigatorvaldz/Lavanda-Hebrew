import React from "react";
import css from "./Offer.module.scss";
import Image from "next/image";
import OfferImage from "@/assets/offerSection.png";

const OfferSection = () => {
  return (
    <section className={css.OfferSection}  dir="rtl">
      <div className={css.wrapper}>
        <Image
          className={css.OfferSectionImage}
          src={OfferImage}
          alt="Offer Section Image"
        />
        <h2 className={css.heading}>הפתרון לצרכי הניקיון שלך</h2>
        <strong className={css.content}>
          <p>אנו מציעים שירותי חדרנית מקצועיים לבתים ומשרדים.</p>
          <p>תנו לנו לטפל בניקיון, כדי שתוכלו ליהנות מחלל ללא רבב.</p>
        </strong>
      </div>
    </section>
  );
};

export default OfferSection;
