export interface Icon {
  codes: string;
  char: string;
  name: string;
  category: string;
}

export type IconsType = Array<Icon>;

export type CategoryType = {
  category: IconsType;
  id: string;
  name: string;
  fn: Function;
};

export type IconsCategoryType = {
  icons: Array<Icon>;
  title: { id: string; name: string };
  iconsFrequentlyHandler: Function;
};
