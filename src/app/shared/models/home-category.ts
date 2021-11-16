export interface HomeCategory {
  id: number;
  code: string,
  image: string;
  title: string;
  children?: HomeSubCategory[]
}

export interface HomeSubCategory {
  id: number;
  code: string,
  image: string;
  title: string;
}

