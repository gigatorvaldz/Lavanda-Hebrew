import classNames from "classnames";
import css from "./Header.module.scss";
import { Questrial } from "next/font/google";

const questrial = Questrial({ weight: "400", subsets: ["latin"] });

const Header = () => {
  return (
    <header className={classNames(css.container, questrial.className)}>
      <ul className={css.list}>
        <li>
          <a>שירותים</a>
        </li>
        <li>
          <a>לוח זמנים</a>
        </li>
        <li>
          <a>על אודות</a>
        </li>
        <li>
          <a>אנשי קשר</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
