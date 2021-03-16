import React from "react";
import Input from "./Input";
import Categories from "./categories";
import IconsContainer from "./iconsContainer";
import s from "./emoji.module.scss";
import iconsPeople from "./iconsPeople";

interface Icon {
  codes: string;
  char: string;
  name: string;
}
type People = Array<Icon>;

const Emoji: React.FC = () => {
  const [people, setPeople] = React.useState<People | []>([]);

  React.useEffect(() => {
    iconsPeople.length > 0 ? setPeople(iconsPeople) : setPeople([]);
  }, []);

  const searchHendler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let word = event.target.value;
    setPeople(iconsPeople.filter((item: Icon) => item.name.includes(word)));
  };

  return (
    <>
      <div className={s.wrap}>
        <span className={s.title}>Emoji</span>
        <Input onChangeHandler={searchHendler} />
        <div className={s.wrapInner}>
          <IconsContainer icons={people} />
        </div>
        <Categories />
      </div>
    </>
  );
};
export default Emoji;
