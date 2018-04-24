export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

export interface IStoreState {
  todos: ITodo[];
  filter: string;
}

// export interface IncrementEnthusiasm {
//     type: constants.INCREMENT_ENTHUSIASM;
// }

// export type EnthusiasmAction = IncrementEnthusiasm;
