import React from "react";
import css from "./Questions.module.scss";
import Image from "next/image";
import Accordion from "@/UI/Accordion";
import QuestionsPicture from "@/assets/questions-1.png";

const QuestionsSection = () => {
  return (
    <section className={css.QuestionsSection} dir="rtl">
      <div className={css.wrapper}>
        <h2 className={css.heading}>שאלות</h2>
        <Image
          className={css.picture}
          src={QuestionsPicture}
          alt="Questions picture"
        />
        <div className={css.questionList}>
          <Accordion label="מה זה שירות חדרנית?">
            <p className={css.first}>
            שירות חדרנית הינו שירות ניקיון מקצועי המעניק שירותי ניקיון קבועים או חד פעמיים לבתים או לעסקים.
            </p>
          </Accordion>
          <Accordion label="באיזו תדירות עלי להשתמש בשירותי חדרנית?">
            <p className={css.second}>
            כמשרתת, הייתי ממליץ לך להשתמש בשירותיה של עוזרת בתדירות שתרגיש צורך לשמור על הבית נקי ומסודר. חלק מהאנשים משתמשים בשירותי חדרנית מדי שבוע, פעמיים בשבוע, בעוד שאחרים עשויים להזדקק לניקיון חד פעמי בלבד.
            </p>
          </Accordion>
          <Accordion label="האם אני צריך לספק חומרי ניקוי וציוד?">
            <p className={css.third}>
            לעתים קרובות אנו מביאים מוצרי ניקוי משלנו, אבל אתה יכול גם להשאיר את שלך בשבילי לנקות.
            </p>
          </Accordion>
          <Accordion label="האם אני יכול להתאים אישית את שירות הניקיון שלי?">
            <p className={css.fourth}>
            כן, רוב שירותי המשרתת מאפשרים מידה מסוימת של התאמה אישית בהתאם לצרכי הניקיון וההעדפות הספציפיות שלך. אתה יכול להחליט לפני הזמנת השירות.
            </p>
          </Accordion>
          <Accordion label="האם שירותי חדרנית מבוטחים ומחויבים?">
            <p className={css.fifth}>
            כן, שירותי עוזרת בית מבוטחים ומוגנים בדרך כלל כדי להגן הן על הלקוח והן עלינו במקרה של תאונות, נזק או גניבה.
            </p>
          </Accordion>
          <Accordion label="האם אוכל לעזוב את ביתי בזמן ששירות המשרתת שם?">
            <p className={css.sixth}>
            בדרך כלל אתה חופשי לעזוב את ביתך בזמן שאני עובד, בתנאי שאתה עושה את הסידורים הדרושים כדי שאקבל גישה לביתך וכדי לשמור על חיות המחמד אם הן בבית.
            </p>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default QuestionsSection;
