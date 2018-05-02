import { eFilter } from "./enum";

export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

export interface IStoreState {
  todos: ITodo[];
  filter: eFilter;
}

// export interface IncrementEnthusiasm {
//     type: constants.INCREMENT_ENTHUSIASM;
// }

// export type EnthusiasmAction = IncrementEnthusiasm;
