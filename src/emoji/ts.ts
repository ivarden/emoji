export type IconType = {
  codes: string;
  char: string;
  name: string;
  category: string;
}

export type IconsType = Array<IconType>;

export type CategoryType = {
  category: any;
  id: string;
  name: string;
  fn: Function;
  inputRef: React.MutableRefObject<undefined>;
};

export type IconsCategoryType = {
  icons: Array<IconType>;
  title: { id: string; name: string };
  iconsFrequentlyHandler: Function;
};

export type RefType = React.MutableRefObject<HTMLInputElement>;

export type InputType = React.ChangeEvent<HTMLInputElement>;
