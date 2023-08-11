"use client";

import React from "react";
import css from "./Schedule.module.scss";
import Button from "@/UI/ControlButton";
import Tabs from "@/UI/Tabs";
import { useState } from "react";
import AdressInput from "@/UI/AdressInput";
import VisistFilter from "@/components/VisitFilter";
import classNames from "classnames";
import Schedule from "@/components/Schedule";
import AuthModal from "@/components/AuthModal";

const ScheduleSection = () => {
  const [activeTabs, setActiveTabs] = useState<string[]>([]);
  const [adress, setAdress] = useState<string>("");
  const [isAuthing, setIsAuthing] = useState<boolean>(false);
  const addTab = (e: React.MouseEvent) => {
    const value = e.currentTarget.innerHTML;
    const tab = activeTabs.find((tab) => tab === value);
    console.log(value, tab);

    if (tab) {
      setActiveTabs(activeTabs.filter((tab) => tab != value));
    } else {
      setActiveTabs([...activeTabs, value]);
    }

    console.log(activeTabs);
  };

  return (
    <section className={css.ScheduleSection}>
      <div className={css.filter}>
        <h2 className={css.heading}>לְסַנֵן</h2>
        <p className={css.description}>
        עליך לבחור את האפשרויות המועדפות עליך לבחירת עוזרת בית:
        </p>
        <div className={css.filterList} dir="rtl">
          <div className={css.adress}>
            <div className={classNames(css.steps, css.adressField)}>
              <p>כתובת</p>
              <span className={css.circle}>1</span>

            </div>
            <AdressInput
              value={adress}
              onChange={(e) => {
                setAdress(e.currentTarget.value);
              }}
            />
            <Button>לחפש</Button>
          </div>
          <div>
            <div className={css.steps}>
              <p>לחפש</p>
              <span className={css.circle}>2</span>
            </div>
            <Tabs
              onClick={addTab}
              items={["אף אחד", "חתול", "כֶּלֶב"]}
              activeItems={activeTabs}
            />
          </div>
          <div>
            <div className={classNames(css.steps, css.visit)}>
              <p>לְבַקֵר</p>
              <span className={css.circle}>3</span>

            </div>
            <VisistFilter />
          </div>
        </div>
      </div>
      <div className={css.schedule}>
        <h2 className={css.heading}>לוח זמנים</h2>

        <Schedule />
        <div className={css.order}>
          <Button
            onClick={() => {
              setIsAuthing(true);
            }}
          >
            להזמין
          </Button>
        </div>

        <AuthModal visible={isAuthing} setVisible={setIsAuthing} />
      </div>
    </section>
  );
};

export default ScheduleSection;
