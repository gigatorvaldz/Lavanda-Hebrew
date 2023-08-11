import DropDown from "@/UI/DropDown";
import React from "react";

import css from "./VisitFilter.module.scss";

interface VisistFilterI {}

const VisistFilter = ({}: VisistFilterI) => {

  return (
    <div className={css.container}>
      <DropDown
        type="click"
        options={["רגיל", "שיפוץ", "העברה", "חיצוני"]}
      />
      <div className={css.tab}>ספינת משא</div>
      <div className={css.tab}>כל שבוע</div>
    </div>
  );
};

export default VisistFilter;
