import React, { useEffect, useState, useRef } from "react";
import Input from "./Input";
import NavCategories from "./NavCategories";
import IconsCategory from "./IconsCategory";
import iconsPeople from "./data/iconsPeople";
import iconsAnimals from "./data/iconsAnimals";
import iconsFrequently from "./data/iconsFrequently";
import iconsFood from "./data/iconsFood";
import iconsFlags from "./data/iconsFlags";
import iconsActivities from "./data/iconsActivities";
import { IconType, IconsType, RefType, InputType } from "./ts";
import s from "./emoji.module.scss";

const Emoji: React.FC = (): JSX.Element => {
  const [frequently, setFrequently] = useState<IconsType>([]);
  const [people, setPeople] = useState<IconsType>([]);
  const [animals, setAnimals] = useState<IconsType>([]);
  const [food, setFood] = useState<IconsType>([]);
  const [activities, setActivities] = useState<IconsType>([]);
  const [flags, setFlags] = useState<IconsType>([]);

  useEffect(() => {
    if (iconsFrequently.length) setFrequently(iconsFrequently);
    if (iconsPeople.length) setPeople(iconsPeople);
    if (iconsAnimals.length) setAnimals(iconsAnimals);
    if (iconsFood.length) setFood(iconsFood);
    if (iconsActivities.length) setActivities(iconsActivities);
    if (iconsFlags.length) setFlags(iconsFlags);
  }, []);

  const searchHendler = (event: InputType) => {
    let word = event.target.value.toLowerCase();

    const filterHendler = (icons: IconsType) =>
      icons.filter((item: IconType) => item.name.includes(word));

    setPeople(filterHendler(iconsPeople));
    setAnimals(filterHendler(iconsAnimals));
    setFood(filterHendler(iconsFood));
    setActivities(filterHendler(iconsActivities));
    setFlags(filterHendler(iconsFlags));
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
  const Activities = useRef();
  const Flags = useRef();
  const Places = useRef();
  const Objects = useRef();

  const onClickCategory = React.useCallback((ref: RefType) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
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
            <IconsCategory
              category={food}
              id="Food"
              name="Food"
              fn={iconsFrequentlyHandler}
              inputRef={Food}
            />
            <IconsCategory
              category={activities}
              id="Activities"
              name="Activities"
              fn={iconsFrequentlyHandler}
              inputRef={Activities}
            />
            <IconsCategory
              category={flags}
              id="Flags"
              name="Flags"
              fn={iconsFrequentlyHandler}
              inputRef={Flags}
            />
          </div>
          <NavCategories
            inputRef={{
              Frequently,
              People,
              Animals,
              Food,
              Activities,
              Flags,
              Places,
              Objects,
            }}
            fn={onClickCategory}
          />
        </div>
    </>
  );
};
export default Emoji;
