import { HomeCategory } from "../shared/models/home-category";

export class AppState {
  private constructor() {}
  static shared: AppState = new AppState();

  categories: HomeCategory[] = [];
}
