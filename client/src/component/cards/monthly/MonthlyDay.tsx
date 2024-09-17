import React from "react";

interface Params {
  index: number;
  setSelectedWeek: (index: number) => void;
}

export const MonthlyDay = ({ index, setSelectedWeek }: Params) => {
  return (
    <>
      <td
        colSpan={7}
        id={index.toString()}
        // className={`card ${showDay ? "" : "d-none"}`}
        className="alert alert-warning alert-dismissible fade show w-100"
        role="alert"
      >
        <div className="card-body ">
          <div className="d-flex">Thu 05 | Night</div>
          <div>
            <div>
              <p>13°</p>
              <img></img>
            </div>
            <div>
              <div>
                <img /> <p>6% precip</p>
              </div>
              <div>
                <img /> <p>SSE 9 km/h</p>
              </div>
            </div>
          </div>
          <div>A few passing clouds. Low 13C. Winds light and variable.</div>
          <div>Card</div>
        </div>

        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={() => {
            setSelectedWeek(-1);
          }}
        ></button>
      </td>
    </>
  );
};
