import React, { useEffect, useState, useRef } from "react";
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
  const [people, setPeople] = useState<IconsType | []>([]);
  const [animals, setAnimals] = useState<IconsType | []>([]);
  const [frequently, setFrequently] = useState<IconsType | []>([]);

  const wrapInner = useRef(null as null | HTMLDivElement);

  useEffect(() => {
    iconsPeople.length > 0 ? setPeople(iconsPeople) : setPeople([]);
    iconsAnimals.length > 0 ? setAnimals(iconsAnimals) : setAnimals([]);
    iconsFrequently.length > 0
      ? setFrequently(iconsFrequently)
      : setFrequently([]);
  }, []);

  const searchHendler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let word = event.target.value.toLowerCase();
    setPeople(iconsPeople.filter((item: Icon) => item.name.includes(word)));
    setAnimals(iconsAnimals.filter((item: Icon) => item.name.includes(word)));
    setFrequently(
      iconsFrequently.filter((item: Icon) => item.name.includes(word))
    );
  };

  const iconsFrequentlyHandler = (icon: Icon) => {
    setFrequently((prev) => [...prev, icon]);
  };

  return (
    <>
      <div className={s.wrap}>
        <span className={s.title}>Emoji</span>
        <Input onChangeHandler={searchHendler} />
        <div className={s.wrapInner} ref={wrapInner}>
          {frequently.length ? (
            <Icons
              icons={frequently}
              title={{ id: "Frequently", name: "Frequently used" }}
              iconsFrequentlyHandler={iconsFrequentlyHandler}
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
    </>
  );
};
export default Emoji;
