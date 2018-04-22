export interface iTodo {
    id: number,
    title: string,
    completed : boolean
}

export interface StoreState {
    todos : iTodo[]
}


// export interface IncrementEnthusiasm {
//     type: constants.INCREMENT_ENTHUSIASM;
// }

// export type EnthusiasmAction = IncrementEnthusiasm;
