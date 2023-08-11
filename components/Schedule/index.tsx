import React from "react";
import css from "./Schedule.module.scss";
import ScheduleItem from "./ScheduleItem";

const Schedule = () => {
  return (
    <div className={css.container}>
      <div className={css.row}>
        <span className={css.time}>8.00 </span>
      </div>
      <div className={css.row}>
        <span className={css.time}>9.00 </span>
      </div>
      <div className={css.row}>
        <span className={css.time}>10.00 </span>
      </div>
      <div className={css.row}>
        <span className={css.time}>11.00 </span>
      </div>
      <div className={css.row}>
        <span className={css.time}>12.00 </span>
      </div>
      <div className={css.row}>
        <span className={css.time}>13.00 </span>
      </div>
      <div className={css.row}>
        <span className={css.time}>14.00 </span>
      </div>
      <div className={css.row}>
        <span className={css.time}>15.00 </span>
      </div>
      <div className={css.row}>
        <span className={css.time}>16.00 </span>
      </div>
      <div className={css.row}>
        <span className={css.time}>17.00 </span>
      </div>
      <div className={css.row}>
        <span className={css.time}>18.00 </span>
      </div>
      <div className={css.row}>
        <span className={css.time}>19.00 </span>
      </div>
      <div className={css.row}>
        <span className={css.time}>20.00 </span>
      </div>
      <div className={css.row}>
        <span className={css.time}>21.00 </span>
      </div>
      <div className={css.row}>
        <span className={css.time}>22.00 </span>
      </div>

      <div className={css.schedule} dir="rtl">
        <div className={css.weekHeading}>
          שֶׁלִי
          <span className={css.circle}>6</span>
        </div>
        <div className={css.weekHeading}>
          יו שלישי
          <span className={css.circle}>7</span>
        </div>
        <div className={css.weekHeading}>
          היינועושים
          <span className={css.circle}>8</span>
        </div>
        <div className={css.weekHeading}>
          לאסוף
          <span className={css.circle}>9</span>
        </div>
        <div className={css.weekHeading}>
          יוםשישי
          <span className={css.circle}>10</span>
        </div>
        <div className={css.weekHeading}>
          ישב
          <span className={css.circle}>11</span>
        </div>
        <div className={css.weekHeading}>
          שמש
          <span className={css.circle}>12</span>
        </div>

        <ScheduleItem day="Saturday" start={2} end={6} />
        <ScheduleItem day="Monday" start={3} end={7} />
        <ScheduleItem day="Monday" start={9} end={13} />
        <ScheduleItem day="Tuesday" start={4} end={6} />
        <ScheduleItem day="Sunday" start={7} end={13} />
        <ScheduleItem day="Wednesday" start={8} end={9} />
        <ScheduleItem day="Thursday" start={2} end={4} />
      </div>
    </div>
  );
};

export default Schedule;
