import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Input from "./Input";
import Categories from './Categories'
import Category from "./IconsCategory";
import iconsPeople from "./iconsPeople";
import iconsAnimals from "./iconsAnimals";
import iconsFrequently from "./iconsFrequently";
import { Icon, IconsType } from "./ts";
import s from "./emoji.module.scss";

const Emoji: React.FC = (): JSX.Element => {
  const [people, setPeople] = useState<IconsType>([]);
  const [animals, setAnimals] = useState<IconsType>([]);
  const [frequently, setFrequently] = useState<IconsType>([]);

  useEffect(() => {
    if (iconsPeople.length > 0) setPeople(iconsPeople);
    if (iconsAnimals.length > 0) setAnimals(iconsAnimals);
    if (iconsFrequently.length > 0) setFrequently(iconsFrequently);
  }, []);

  const searchHendler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let word = event.target.value.toLowerCase();

    const filterHendler = (icons: IconsType) =>
      icons.filter((item: Icon) => item.name.includes(word));

    setPeople(filterHendler(iconsPeople));
    setAnimals(filterHendler(iconsAnimals));
  };

  const iconsFrequentlyHandler = (icon: Icon) => {
    const filterDuplicate = (prev: IconsType, icon: Icon) =>
      prev.filter((el) => el.codes !== icon.codes);

    setFrequently((prev) => [...filterDuplicate(prev, icon), icon]);
  };

  return (
    <>
      <BrowserRouter>
        <div className={s.wrap}>
          <span className={s.title}>Emoji</span>
          <Input onChangeHandler={searchHendler} />
          <div className={s.wrapInner}>
            <Category
              category={frequently}
              id="Frequently"
              name="Frequently used"
              fn={() => {}}
            />
            <Category
              category={people}
              id="People"
              name="People"
              fn={iconsFrequentlyHandler}
            />
            <Category
              category={animals}
              id="Animals"
              name="Animals"
              fn={iconsFrequentlyHandler}
            />
          </div>
          <Categories />
        </div>
      </BrowserRouter>
    </>
  );
};
export default Emoji;
