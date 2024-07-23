import { Link } from "react-router-dom";
import { Years } from "../cards/monthly/components/dropdowns/Years";
import { Months } from "../cards/monthly/components/dropdowns/Months";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import ThemeSwitcher from "../cards/monthly/components/dropdowns/ThemeSwitcher";
import { useState } from "react";

const NavBar4 = () => {
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  var [currMonth, setCurrMonth] = useState<number>(new Date().getMonth());

  return (
    <>
      <ul className="nav justify-content-between ">
        <li className="nav-item">
          <Link
            className="nav-link"
            to=""
            onClick={() => {
              setCurrMonth((prevCurrMonth) => {
                if (prevCurrMonth === 1) return 1;
                else return prevCurrMonth - 1;
              });
            }}
          >
            <BsArrowLeft /> {months[currMonth - 1]}
          </Link>
        </li>
        <span className="m-0 d-flex  justify-content-center">
          <li className="nav-item">
            <Months
              currentMonth={currMonth}
              setCurrentMonth={setCurrMonth}
            ></Months>
          </li>
          <li className="nav-item">
            <Years></Years>
          </li>
        </span>

        <li className="nav-item">
          <Link
            className="nav-link"
            to=""
            onClick={() => {
              setCurrMonth((prevCurrMonth) => {
                if (prevCurrMonth === 11) return 11;
                return prevCurrMonth + 1;
              });
            }}
          >
            {months[currMonth + 1]} <BsArrowRight />
          </Link>
        </li>
      </ul>
    </>
  );
};

NavBar4.propTypes = {};

export default NavBar4;
