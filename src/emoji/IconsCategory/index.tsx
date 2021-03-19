import React from "react";
import Category from "./IconsCategory";
import { CategoryType } from "../ts";

const Container = ({ category, id, name, fn, inputRef }: CategoryType): JSX.Element => {
  return (
    <>
      {category.length ? (
        <Category category={category} id={id} name={name} fn={fn} inputRef={inputRef}/>
      ) : (
        ""
      )}
    </>
  );
};

export default Container;
