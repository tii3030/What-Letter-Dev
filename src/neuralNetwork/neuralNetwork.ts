type T_Neuron = {
    weights: Array<number>, // [63]
    character: string // A,B,C,D,E,F,G
}

type T_VetorInput = {
    typeFont: number, // 1,2,3
    character: string, // A,B,C,D,E,F,G
    vetorTrain: Array<number> // [63]
}

// 7 NEURONIOS
var Neuron: T_Neuron[] = []

// 21 VETORES DE TREINAMENTO (INPUT)
var VetorInput: T_VetorInput[] = []

// NEURONIOS DE SAIDA
var OutNeuron: T_Neuron[] = []
    OutNeuron[0].character = 'A'
    OutNeuron[1].character = 'B'
    OutNeuron[2].character = 'C'
    OutNeuron[3].character = 'D'
    OutNeuron[4].character = 'E'
    OutNeuron[5].character = 'F'
    OutNeuron[6].character = 'G'

// INIT WEIGHT
const initWeight = () => {

    // 64 -> BIAS NA 64° POSIÇÃO

    for (let i = 0; i < OutNeuron.length; i++) {
        for (let j = 0; j < 64; j++) {
            OutNeuron[i].weights[j] = 0
        }
    }

}

// INICIALIZA OS VETORES DE TREINAMENTO
const initVetorTrain = () => {

    VetorInput[0].typeFont = 1
    VetorInput[0].character = 'A'
    VetorInput[0].vetorTrain = TrainingSetsz.A.A0

    VetorInput[1].typeFont = 2
    VetorInput[1].character = 'A'
    VetorInput[1].vetorTrain = TrainingSetsz.A.A1

    VetorInput[2].typeFont = 3
    VetorInput[2].character = 'A'
    VetorInput[2].vetorTrain = TrainingSetsz.A.A2

    VetorInput[3].typeFont = 1
    VetorInput[3].character = 'B'
    VetorInput[3].vetorTrain = TrainingSetsz.B.B0

    VetorInput[4].typeFont = 2
    VetorInput[4].character = 'B'
    VetorInput[4].vetorTrain = TrainingSetsz.B.B1

    VetorInput[5].typeFont = 3
    VetorInput[5].character = 'B'
    VetorInput[5].vetorTrain = TrainingSetsz.B.B2

    VetorInput[6].typeFont = 1
    VetorInput[6].character = 'C'
    VetorInput[6].vetorTrain = TrainingSetsz.C.C0

    VetorInput[7].typeFont = 2
    VetorInput[7].character = 'C'
    VetorInput[7].vetorTrain = TrainingSetsz.C.C1

    VetorInput[8].typeFont = 3
    VetorInput[8].character = 'C'
    VetorInput[8].vetorTrain = TrainingSetsz.C.C2

    VetorInput[9].typeFont = 1
    VetorInput[9].character = 'D'
    VetorInput[9].vetorTrain = TrainingSetsz.D.D0

    VetorInput[10].typeFont = 2
    VetorInput[10].character = 'D'
    VetorInput[10].vetorTrain = TrainingSetsz.D.D1

    VetorInput[11].typeFont = 3
    VetorInput[11].character = 'D'
    VetorInput[11].vetorTrain = TrainingSetsz.D.D2

    VetorInput[12].typeFont = 1
    VetorInput[12].character = 'E'
    VetorInput[12].vetorTrain = TrainingSetsz.E.E0

    VetorInput[13].typeFont = 2
    VetorInput[13].character = 'E'
    VetorInput[13].vetorTrain = TrainingSetsz.E.E1

    VetorInput[14].typeFont = 3
    VetorInput[14].character = 'E'
    VetorInput[14].vetorTrain = TrainingSetsz.E.E2

    VetorInput[15].typeFont = 1
    VetorInput[15].character = 'F'
    VetorInput[15].vetorTrain = TrainingSetsz.F.F0

    VetorInput[16].typeFont = 2
    VetorInput[16].character = 'F'
    VetorInput[16].vetorTrain = TrainingSetsz.F.F1

    VetorInput[17].typeFont = 3
    VetorInput[17].character = 'F'
    VetorInput[17].vetorTrain = TrainingSetsz.F.F2

    VetorInput[18].typeFont = 1
    VetorInput[18].character = 'G'
    VetorInput[18].vetorTrain = TrainingSetsz.G.G0

    VetorInput[19].typeFont = 2
    VetorInput[19].character = 'G'
    VetorInput[19].vetorTrain = TrainingSetsz.G.G1

    VetorInput[20].typeFont = 3
    VetorInput[20].character = 'G'
    VetorInput[20].vetorTrain = TrainingSetsz.G.G2
}

// VETORES DE TRAINAMENTO
var TrainingSetsz = {
    A: {
        A0: [
            0,0,1,1,0,0,0,
            0,0,0,1,0,0,0,
            0,0,0,1,0,0,0,
            0,0,1,0,1,0,0,
            0,0,1,0,1,0,0,
            0,1,1,1,1,1,0,
            0,1,0,0,0,1,0,
            0,1,0,0,0,1,0,
            1,1,1,0,1,1,1,
        ],
        A1: [
            0,0,0,1,0,0,0,
            0,0,0,1,0,0,0,
            0,0,0,1,0,0,0,
            0,0,1,0,1,0,0,
            0,0,1,0,1,0,0,
            0,1,1,1,1,1,0,
            0,1,0,0,0,1,0,
            0,1,0,0,0,1,0,
            0,1,0,0,0,1,0,
        ],
        A2: [
            0,0,0,1,0,0,0,
            0,0,0,1,0,0,0,
            0,0,1,0,1,0,0,
            0,1,0,0,0,1,0,
            0,1,0,0,0,1,0,
            1,1,1,1,1,1,1,
            1,0,0,0,0,0,1,
            1,0,0,0,0,0,1,
            1,0,0,0,0,0,1,
        ]
    },

    B: {
        B0: [
            1,1,1,1,1,1,0,
            0,1,0,0,0,0,1,
            0,1,0,0,0,0,1,
            0,1,0,0,0,0,1,
            0,1,1,1,1,1,0,
            0,1,0,0,0,0,1,
            0,1,0,0,0,0,1,
            0,1,0,0,0,0,1,
            1,1,1,1,1,1,0,
        ],
        B1: [
            1,1,1,1,1,1,0,
            1,0,0,0,0,0,1,
            1,0,0,0,0,0,1,
            1,0,0,0,0,0,1,
            1,1,1,1,1,1,0,
            1,0,0,0,0,0,1,
            1,0,0,0,0,0,1,
            1,0,0,0,0,0,1,
            1,1,1,1,1,1,0,
        ],
        B2: [
            1,1,1,1,1,1,1,
            1,0,0,0,0,0,1,
            1,0,0,0,0,0,1,
            1,0,0,0,0,0,1,
            1,1,1,1,1,1,0,
            1,0,0,0,0,0,1,
            1,0,0,0,0,0,1,
            1,0,0,0,0,0,1,
            1,1,1,1,1,1,1,
        ]
    },

    C: {
        C0: [
            0,0,1,1,1,1,1,
            0,1,0,0,0,0,1,
            1,0,0,0,0,0,0,
            1,0,0,0,0,0,0,
            1,0,0,0,0,0,0,
            1,0,0,0,0,0,0,
            1,0,0,0,0,0,0,
            0,1,0,0,0,0,1,
            0,0,1,1,1,1,0,
        ],
        C1: [
            0,0,1,1,1,1,0,
            0,1,0,0,0,0,1,
            1,0,0,0,0,0,0,
            1,0,0,0,0,0,0,
            1,0,0,0,0,0,0,
            1,0,0,0,0,0,0,
            1,0,0,0,0,0,0,
            0,1,0,0,0,0,1,
            0,0,1,1,1,1,0,
        ],
        C2: [
            0,0,1,1,1,1,0,
            0,1,0,0,0,0,1,
            1,0,0,0,0,0,1,
            1,0,0,0,0,0,0,
            1,0,0,0,0,0,0,
            1,0,0,0,0,0,0,
            1,0,0,0,0,0,1,
            0,1,0,0,0,0,1,
            0,0,1,1,1,1,0,
        ]
    },

    D: {
        D0: [
            1,1,1,1,1,1,1,
            0,1,0,0,0,0,1,
            0,1,0,0,0,0,1,
            0,1,0,0,0,0,1,
            0,1,0,0,0,0,1,
            0,1,0,0,0,0,1,
            0,1,0,0,0,0,1,
            0,1,0,0,0,0,1,
            1,1,1,1,1,1,1,
        ],
        D1: [
            1,1,1,1,1,0,0,
            0,1,0,0,0,1,0,
            0,1,0,0,0,0,1,
            0,1,0,0,0,0,1,
            0,1,0,0,0,0,1,
            0,1,0,0,0,0,1,
            0,1,0,0,0,0,1,
            0,1,0,0,0,1,0,
            1,1,1,1,1,0,0,
        ],
        D2: [
            1,1,1,1,1,1,1,
            0,1,0,0,0,0,1,
            0,1,0,0,0,0,1,
            0,1,0,0,0,0,1,
            0,1,0,0,0,0,1,
            0,1,0,0,0,0,1,
            0,1,0,0,0,0,1,
            0,1,0,0,0,0,1,
            1,1,1,1,1,1,1,
        ]
    },

    E: {
        E0: [
            1,1,1,1,1,1,1,
            0,1,0,0,0,0,1,
            0,1,0,0,0,0,0,
            0,1,0,1,0,0,0,
            0,1,1,1,0,0,0,
            0,1,0,1,0,0,0,
            0,1,0,0,0,0,0,
            0,1,0,0,0,0,1,
            1,1,1,1,1,1,1,
        ],
        E1: [
            1,1,1,1,1,1,1,
            0,1,0,0,0,0,1,
            0,1,0,0,0,0,0,
            0,1,0,0,0,0,0,
            0,1,1,1,1,0,0,
            0,1,0,0,0,0,0,
            0,1,0,0,0,0,0,
            0,1,0,0,0,0,1,
            1,1,1,1,1,1,1,
        ],
        E2: [
            1,1,1,1,1,1,1,
            1,0,0,0,0,0,1,
            1,0,0,0,0,0,0,
            1,0,0,1,0,0,0,
            1,1,1,1,0,0,0,
            1,0,0,1,0,0,0,
            1,0,0,0,0,0,0,
            1,0,0,0,0,0,1,
            1,1,1,1,1,1,1,
        ],
    },

    F: {
        F0: [
            1,1,1,1,1,1,1,
            0,1,0,0,0,0,0,
            0,1,0,0,0,0,0,
            0,1,0,0,0,0,0,
            0,1,1,1,1,0,0,
            0,1,0,0,0,0,0,
            0,1,0,0,0,0,0,
            0,1,0,0,0,0,0,
            1,1,1,0,0,0,0,
        ],
        F1: [
            1,1,1,1,1,1,1,
            0,1,0,0,0,0,0,
            0,1,0,0,0,0,0,
            0,1,0,1,0,0,0,
            0,1,1,1,0,0,0,
            0,1,0,1,0,0,0,
            0,1,0,0,0,0,0,
            0,1,0,0,0,0,0,
            1,1,1,0,0,0,0,
        ],
        F2: [
            1,1,1,1,1,1,1,
            1,0,0,0,0,0,0,
            1,0,0,0,0,0,0,
            1,0,0,0,0,0,0,
            1,1,1,1,1,0,0,
            1,0,0,0,0,0,0,
            1,0,0,0,0,0,0,
            1,0,0,0,0,0,0,
            1,0,0,0,0,0,0,
        ],
    },

    G: {
        G0: [
            0,0,1,1,1,0,0,
            0,1,0,0,0,1,0,
            1,0,0,0,0,0,0,
            1,0,0,1,0,0,0,
            1,0,0,1,1,1,0,
            1,0,0,1,0,0,1,
            1,0,0,0,0,0,1,
            0,1,0,0,0,1,0,
            0,0,1,1,1,0,0,
        ],
        G1: [
            0,0,1,1,1,0,0,
            0,1,0,0,0,1,0,
            1,0,0,0,0,0,0,
            1,0,0,0,0,0,0,
            1,0,0,0,1,1,0,
            1,0,0,0,0,0,1,
            1,0,0,0,0,0,1,
            0,1,0,0,0,1,0,
            0,0,1,1,1,0,0,
        ],
        G2: [
            1,1,1,1,1,1,1,
            1,0,0,0,0,0,1,
            1,0,0,0,0,0,0,
            1,0,0,0,0,0,0,
            1,0,0,0,1,1,1,
            1,0,0,0,0,0,1,
            1,0,0,0,0,0,1,
            1,0,0,0,0,0,1,
            1,1,1,1,1,1,1,
        ]
    },
}

var vectorToTrain =  [
    0,0,0,1,1,0,0,
    0,0,0,1,0,0,0,
    0,0,0,1,0,0,0,
    0,1,0,0,1,0,0,
    0,0,1,0,1,0,0,
    0,1,1,0,1,1,0,
    0,1,0,0,0,0,1,
    0,1,0,0,0,1,0,
    0,1,1,0,0,1,0,
]



export function initTraining() {

    var cycle: number = 1
    var net: number
    var expReturn: number
    var isFinished: boolean = false
    var minError:number = 0.1
    var partError2: number = 0.0
    var start: boolean = true

    var threshold: number = 0
    var learnRate: number = 0.01 // TAXA DE APRENDIZAGEM

    while(!isFinished) {

        start = true 
        cycle++
        partError2 = 0.0

        // 21 PARA OS 3 TIPOS ATÉ O G (3 TIPOS X 7 NEURONIOS) 21 VETORES DE TESTE
        for (let currentVector = 0; currentVector < 21; currentVector++) {
            
            // ITERA TODOS OS NEURONIOS DE SAIDA
            for (let outNeuron = 0; outNeuron < 7; outNeuron++) {
                net = 0

                // CRIA O PESO (NET)
                for (let index = 0; index < 63; index++) {
                    net += VetorInput[index].vetorTrain[index] * OutNeuron[index].weights[index]
                }

                // SOMA OS PESOS CALCULADOS ACIMA COM O BIAS
                net += OutNeuron[outNeuron].weights[63]

                // SE O CARACTER CORRESPONDENTE AO VETOR DE ENTRADA == AO CARACTERE DO VETOR DE SAIDA 
                if(VetorInput[currentVector].character == OutNeuron[outNeuron].character) {
                    expReturn = 1
                } else {
                    expReturn = -1
                }

                for (let index = 0; index < 64; index++) {
                    if(index == 63) { // BIAS
                        OutNeuron[outNeuron].weights[index] += learnRate * (expReturn - net)
                    } else {
                        OutNeuron[outNeuron].weights[index] += learnRate * ((expReturn - net) * VetorInput[currentVector].vetorTrain[index])
                    }
                }

                if(start) {
                    partError2 = 0.5 * ((expReturn - net) * (expReturn - net))
                    start = false
                } else if((0.5 * ((expReturn - net) * (expReturn - net))) > partError2) {
                    partError2 = 0.5 * ((expReturn - net) * (expReturn - net))
                }
            }

        }

        // VERIFICAR CONDIÇÃO DE PARADA
        if(partError2 <= minError) {
            isFinished = true
        }

    }


    vectorToTrain[63] = 1 // BIAS SEMPRE 1
}



