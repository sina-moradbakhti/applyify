export interface HomeCategory {
  id: number;
  code: string,
  image?: string;
  flag: string;
  title: string;
  children?: HomeSubCategory[]
}

export interface HomeSubCategory {
  id: number;
  code: string,
  image?: string;
  flag: string;
  title: string;
}

