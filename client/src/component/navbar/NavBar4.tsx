import { Link } from "react-router-dom";
import { Years } from "../cards/monthly/components/dropdowns/Years";
import { Months } from "../cards/monthly/components/dropdowns/Months";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";

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

  const { selectedMonth, setSelectedMonth } = useContext(WeatherContext);

  return (
    <>
      <ul className="nav justify-content-between ">
        <li className="nav-item">
          <Link
            className="nav-link"
            to=""
            onClick={() => {
              setSelectedMonth((prevSelectedMonth: number) => {
                if (prevSelectedMonth === 1) return 1;
                else return prevSelectedMonth - 1;
              });
            }}
          >
            <BsArrowLeft /> {months[selectedMonth - 1]}
          </Link>
        </li>
        <span className="m-0 d-flex  justify-content-center">
          <li className="nav-item">
            <Months
              currentMonth={selectedMonth}
              setCurrentMonth={setSelectedMonth}
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
              setSelectedMonth((prevSelectedMonth: number) => {
                if (prevSelectedMonth === 11) return 11;
                return prevSelectedMonth + 1;
              });
            }}
          >
            {months[selectedMonth + 1]} <BsArrowRight />
          </Link>
        </li>
      </ul>
    </>
  );
};

NavBar4.propTypes = {};

export default NavBar4;
