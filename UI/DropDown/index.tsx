"use client"

import React, { useState, useRef, useEffect } from "react";
import st from "./Dropdown.module.scss";
import { BsChevronCompactDown } from "react-icons/bs";
import { useToggleDropDown } from "@/hooks/useToggleDropDown";

interface DropDownProps {
  type: "hover" | "click";
  options: (string | number)[];
  children?: React.ReactNode;
  substring?: string[];
}



const DropDown: React.FC<DropDownProps> = ({ options, type, substring }) => {
  const [selectedOption, setSelectedOption] = useState<
    (typeof options)[number]
  >(options[0]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dropContent = useRef<HTMLDivElement>(null);

  const [dropDownFocusOn, dropDownFocusOff, dropDownToggle] = useToggleDropDown(
    isOpen,
    setIsOpen,
    dropContent
  );

  return (
    <div
      ref={dropContent}
      className={st.dropDown}
      onMouseEnter={
        type === "hover"
          ? () => {
              dropDownFocusOn();
            }
          : undefined
      }
      onMouseLeave={
        type === "hover"
          ? () => {
              dropDownFocusOff();
            }
          : undefined
      }
      onClick={
        type === "click"
          ? () => {
              dropDownToggle();
            }
          : undefined
      }
    >
      <div className={st["dropDown__title"] + " " + (isOpen ? st.opened : "")}>
        {selectedOption}
        {substring && substring.map((filter) => <p key={filter}>{filter}</p>)}
        <BsChevronCompactDown
          className={st.arrowDown + " " + (isOpen ? st.opened : "")}
        />
      </div>
      {isOpen && (
        <div
          className={st["dropDown__contentWrapper"]}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={st["dropDown__content"]}>
            <ul className={st["dropDown__options"]}>
              {options.map((option) => (
                <li
                  key={option}
                  onClick={(e: React.MouseEvent<HTMLLIElement>) => {
                    setIsOpen(false);
                    setSelectedOption(
                      (e.target as HTMLLIElement)
                        .textContent as (typeof options)[number]
                    );
                  }}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
