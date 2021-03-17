import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Input from "./Input";
import Categories from "./categories";
import Icons from "./icons";
import s from "./emoji.module.scss";
import iconsPeople from "./iconsPeople";
import iconsAnimals from "./iconsAnimals";
import iconsFrequently from "./iconsFrequently";

interface Icon {
  codes: string;
  char: string;
  name: string;
  category: string;
}
type IconsType = Array<Icon>;

const Emoji: React.FC = () => {
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
    const helper = (icons: IconsType) =>
      icons.filter((item: Icon) => item.name.includes(word));
    setPeople(helper(iconsPeople));
    setAnimals(helper(iconsAnimals));
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
            {frequently.length ? (
              <Icons
                icons={frequently}
                title={{ id: "Frequently", name: "Frequently used" }}
                iconsFrequentlyHandler={() => {}}
              />
            ) : (
              ""
            )}
            {people.length ? (
              <Icons
                icons={people}
                title={{ id: "People", name: "People" }}
                iconsFrequentlyHandler={iconsFrequentlyHandler}
              />
            ) : (
              ""
            )}
            {animals.length ? (
              <Icons
                icons={animals}
                title={{ id: "Animals", name: "Animals" }}
                iconsFrequentlyHandler={iconsFrequentlyHandler}
              />
            ) : (
              ""
            )}
          </div>
          <Categories />
        </div>
      </BrowserRouter>
    </>
  );
};
export default Emoji;
