export type T_Neuron = {
    weights: Array<number>, // [63]
    character: string // A,B,C,D,E,F,G
}

export type T_VetorInput = {
    typeFont: number, // 1,2,3
    character: string, // A,B,C,D,E,F,G
    vetorTrain: Array<number> // [63]
}

export type T_State = {
    neurons: T_Neuron[]
}