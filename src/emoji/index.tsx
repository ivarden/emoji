import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import Input from "./Input";
import Categories from "./Categories";
import IconsCategory from "./IconsCategory";
import iconsPeople from "./data/iconsPeople";
import iconsAnimals from "./data/iconsAnimals";
import iconsFrequently from "./data/iconsFrequently";
import { IconType, IconsType, RefType, InputType } from "./ts";
import s from "./emoji.module.scss";

const Emoji: React.FC = (): JSX.Element => {
  const [people, setPeople] = useState<IconsType>([]);
  const [animals, setAnimals] = useState<IconsType>([]);
  const [frequently, setFrequently] = useState<IconsType>([]);

  useEffect(() => {
    if (iconsPeople.length) setPeople(iconsPeople);
    if (iconsAnimals.length) setAnimals(iconsAnimals);
    if (iconsFrequently.length) setFrequently(iconsFrequently);
  }, []);

  const searchHendler = (event: InputType) => {
    let word = event.target.value.toLowerCase();

    const filterHendler = (icons: IconsType) =>
      icons.filter((item: IconType) => item.name.includes(word));

    setPeople(filterHendler(iconsPeople));
    setAnimals(filterHendler(iconsAnimals));
  };

  const iconsFrequentlyHandler = (icon: IconType) => {
    const filterDuplicate = (prev: IconsType, icon: IconType) =>
      prev.filter((el) => el.codes !== icon.codes);

    setFrequently((prev) => [...filterDuplicate(prev, icon), icon]);
  };

  const Frequently = useRef();
  const People = useRef();
  const Animals = useRef();
  const Food = useRef();
  const Activity = useRef();
  const Flags = useRef();
  const Places = useRef();
  const Objects = useRef();

  const onClickCategory = (ref: RefType) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <BrowserRouter>
        <div className={s.wrap}>
          <span className={s.title}>Emoji</span>
          <Input onChangeHandler={searchHendler} />
          <div className={s.wrapInner}>
            <IconsCategory
              category={frequently}
              id="Frequently"
              name="Frequently used"
              fn={() => {}}
              inputRef={Frequently}
            />
            <IconsCategory
              category={people}
              id="People"
              name="People"
              fn={iconsFrequentlyHandler}
              inputRef={People}
            />
            <IconsCategory
              category={animals}
              id="Animals"
              name="Animals"
              fn={iconsFrequentlyHandler}
              inputRef={Animals}
            />
          </div>
          <Categories
            inputRef={{
              Frequently,
              People,
              Animals,
              Food,
              Activity,
              Flags,
              Places,
              Objects,
            }}
            fn={onClickCategory}
          />
        </div>
      </BrowserRouter>
    </>
  );
};
export default Emoji;
