import React from "react";
import s from "./input.module.scss";

interface Args {
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
  fill?: string;
}

const Input: React.FC<Args> = ({
  onChangeHandler,
  fill = "#9D9FA3",
}): JSX.Element => {
  return (
    <div className={s.input}>
      <div className={s.searchIcon}>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 5.75C10 8.09721 8.09721 10 5.75 10C3.40279 10 1.5 8.09721 1.5 5.75C1.5 3.40279 3.40279 1.5 5.75 1.5C8.09721 1.5 10 3.40279 10 5.75ZM9.25101 10.3117C8.28141 11.0569 7.06745 11.5 5.75 11.5C2.57436 11.5 0 8.92564 0 5.75C0 2.57436 2.57436 0 5.75 0C8.92564 0 11.5 2.57436 11.5 5.75C11.5 7.06745 11.0569 8.28141 10.3117 9.25101L13.5303 12.4697C13.8232 12.7626 13.8232 13.2374 13.5303 13.5303C13.2374 13.8232 12.7626 13.8232 12.4697 13.5303L9.25101 10.3117Z"
            fill={fill}
          />
        </svg>
      </div>
      <input placeholder="Search" onChange={onChangeHandler} />
    </div>
  );
};
export default Input;
