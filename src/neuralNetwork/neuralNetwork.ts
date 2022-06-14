import { store } from '../redux/store/store'
import { addNeural } from '../redux/reducers/addNeural'
import { T_VetorInput, T_Neuron } from '../models/models'

export class Neural {

    // VETORES DE TRAINAMENTO
    protected TrainingSetsz = {
        A: {
            A0: [
                -1,-1,1,1,-1,-1,-1,
                -1,-1,-1,1,-1,-1,-1,
                -1,-1,-1,1,-1,-1,-1,
                -1,-1,1,-1,1,-1,-1,
                -1,-1,1,-1,1,-1,-1,
                -1,1,1,1,1,1,-1,
                -1,1,-1,-1,-1,1,-1,
                -1,1,-1,-1,-1,1,-1,
                1,1,1,-1,1,1,1,
            ],
            A1: [
                -1,-1,-1,1,-1,-1,-1,
                -1,-1,-1,1,-1,-1,-1,
                -1,-1,-1,1,-1,-1,-1,
                -1,-1,1,-1,1,-1,-1,
                -1,-1,1,-1,1,-1,-1,
                -1,1,1,1,1,1,-1,
                -1,1,-1,-1,-1,1,-1,
                -1,1,-1,-1,-1,1,-1,
                -1,1,-1,-1,-1,1,-1,
            ],
            A2: [
                -1,-1,-1,1,-1,-1,-1,
                -1,-1,-1,1,-1,-1,-1,
                -1,-1,1,-1,1,-1,-1,
                -1,1,-1,-1,-1,1,-1,
                -1,1,-1,-1,-1,1,-1,
                1,1,1,1,1,1,1,
                1,-1,-1,-1,-1,-1,1,
                1,-1,-1,-1,-1,-1,1,
                1,-1,-1,-1,-1,-1,1,
            ]
        },
    
        B: {
            B0: [
                1,1,1,1,1,1,-1,
                -1,1,-1,-1,-1,-1,1,
                -1,1,-1,-1,-1,-1,1,
                -1,1,-1,-1,-1,-1,1,
                -1,1,1,1,1,1,-1,
                -1,1,-1,-1,-1,-1,1,
                -1,1,-1,-1,-1,-1,1,
                -1,1,-1,-1,-1,-1,1,
                1,1,1,1,1,1,-1,
            ],
            B1: [
                1,1,1,1,1,1,-1,
                1,-1,-1,-1,-1,-1,1,
                1,-1,-1,-1,-1,-1,1,
                1,-1,-1,-1,-1,-1,1,
                1,1,1,1,1,1,-1,
                1,-1,-1,-1,-1,-1,1,
                1,-1,-1,-1,-1,-1,1,
                1,-1,-1,-1,-1,-1,1,
                1,1,1,1,1,1,-1,
            ],
            B2: [
                1,1,1,1,1,1,1,
                1,-1,-1,-1,-1,-1,1,
                1,-1,-1,-1,-1,-1,1,
                1,-1,-1,-1,-1,-1,1,
                1,1,1,1,1,1,-1,
                1,-1,-1,-1,-1,-1,1,
                1,-1,-1,-1,-1,-1,1,
                1,-1,-1,-1,-1,-1,1,
                1,1,1,1,1,1,1,
            ]
        },
    
        C: {
            C0: [
                -1,-1,1,1,1,1,1,
                -1,1,-1,-1,-1,-1,1,
                1,-1,-1,-1,-1,-1,-1,
                1,-1,-1,-1,-1,-1,-1,
                1,-1,-1,-1,-1,-1,-1,
                1,-1,-1,-1,-1,-1,-1,
                1,-1,-1,-1,-1,-1,-1,
                -1,1,-1,-1,-1,-1,1,
                -1,-1,1,1,1,1,-1,
            ],
            C1: [
                -1,-1,1,1,1,1,-1,
                -1,1,-1,-1,-1,-1,1,
                1,-1,-1,-1,-1,-1,-1,
                1,-1,-1,-1,-1,-1,-1,
                1,-1,-1,-1,-1,-1,-1,
                1,-1,-1,-1,-1,-1,-1,
                1,-1,-1,-1,-1,-1,-1,
                -1,1,-1,-1,-1,-1,1,
                -1,-1,1,1,1,1,-1,
            ],
            C2: [
                -1,-1,1,1,1,1,-1,
                -1,1,-1,-1,-1,-1,1,
                1,-1,-1,-1,-1,-1,1,
                1,-1,-1,-1,-1,-1,-1,
                1,-1,-1,-1,-1,-1,-1,
                1,-1,-1,-1,-1,-1,-1,
                1,-1,-1,-1,-1,-1,1,
                -1,1,-1,-1,-1,-1,1,
                -1,-1,1,1,1,1,-1,
            ]
        },
    
        D: {
            D0: [
                1,1,1,1,1,1,1,
                -1,1,-1,-1,-1,-1,1,
                -1,1,-1,-1,-1,-1,1,
                -1,1,-1,-1,-1,-1,1,
                -1,1,-1,-1,-1,-1,1,
                -1,1,-1,-1,-1,-1,1,
                -1,1,-1,-1,-1,-1,1,
                -1,1,-1,-1,-1,-1,1,
                1,1,1,1,1,1,1,
            ],
            D1: [
                1,1,1,1,1,-1,-1,
                -1,1,-1,-1,-1,1,-1,
                -1,1,-1,-1,-1,-1,1,
                -1,1,-1,-1,-1,-1,1,
                -1,1,-1,-1,-1,-1,1,
                -1,1,-1,-1,-1,-1,1,
                -1,1,-1,-1,-1,-1,1,
                -1,1,-1,-1,-1,1,-1,
                1,1,1,1,1,-1,-1,
            ],
            D2: [
                1,1,1,1,1,1,1,
                -1,1,-1,-1,-1,-1,1,
                -1,1,-1,-1,-1,-1,1,
                -1,1,-1,-1,-1,-1,1,
                -1,1,-1,-1,-1,-1,1,
                -1,1,-1,-1,-1,-1,1,
                -1,1,-1,-1,-1,-1,1,
                -1,1,-1,-1,-1,-1,1,
                1,1,1,1,1,1,1,
            ]
        },
    
        E: {
            E0: [
                1,1,1,1,1,1,1,
                -1,1,-1,-1,-1,-1,1,
                -1,1,-1,-1,-1,-1,-1,
                -1,1,-1,1,-1,-1,-1,
                -1,1,1,1,-1,-1,-1,
                -1,1,-1,1,-1,-1,-1,
                -1,1,-1,-1,-1,-1,-1,
                -1,1,-1,-1,-1,-1,1,
                1,1,1,1,1,1,1,
            ],
            E1: [
                1,1,1,1,1,1,1,
                -1,1,-1,-1,-1,-1,1,
                -1,1,-1,-1,-1,-1,-1,
                -1,1,-1,-1,-1,-1,-1,
                -1,1,1,1,1,-1,-1,
                -1,1,-1,-1,-1,-1,-1,
                -1,1,-1,-1,-1,-1,-1,
                -1,1,-1,-1,-1,-1,1,
                1,1,1,1,1,1,1,
            ],
            E2: [
                1,1,1,1,1,1,1,
                1,-1,-1,-1,-1,-1,1,
                1,-1,-1,-1,-1,-1,-1,
                1,-1,-1,1,-1,-1,-1,
                1,1,1,1,-1,-1,-1,
                1,-1,-1,1,-1,-1,-1,
                1,-1,-1,-1,-1,-1,-1,
                1,-1,-1,-1,-1,-1,1,
                1,1,1,1,1,1,1,
            ],
        },
    
        F: {
            F0: [
                1,1,1,1,1,1,1,
                -1,1,-1,-1,-1,-1,-1,
                -1,1,-1,-1,-1,-1,-1,
                -1,1,-1,-1,-1,-1,-1,
                -1,1,1,1,1,-1,-1,
                -1,1,-1,-1,-1,-1,-1,
                -1,1,-1,-1,-1,-1,-1,
                -1,1,-1,-1,-1,-1,-1,
                1,1,1,-1,-1,-1,-1,
            ],
            F1: [
                1,1,1,1,1,1,1,
                -1,1,-1,-1,-1,-1,-1,
                -1,1,-1,-1,-1,-1,-1,
                -1,1,-1,1,-1,-1,-1,
                -1,1,1,1,-1,-1,-1,
                -1,1,-1,1,-1,-1,-1,
                -1,1,-1,-1,-1,-1,-1,
                -1,1,-1,-1,-1,-1,-1,
                1,1,1,-1,-1,-1,-1,
            ],
            F2: [
                1,1,1,1,1,1,1,
                1,-1,-1,-1,-1,-1,-1,
                1,-1,-1,-1,-1,-1,-1,
                1,-1,-1,-1,-1,-1,-1,
                1,1,1,1,1,-1,-1,
                1,-1,-1,-1,-1,-1,-1,
                1,-1,-1,-1,-1,-1,-1,
                1,-1,-1,-1,-1,-1,-1,
                1,-1,-1,-1,-1,-1,-1,
            ],
        },
    
        G: {
            G0: [
                -1,-1,1,1,1,-1,-1,
                -1,1,-1,-1,-1,1,-1,
                1,-1,-1,-1,-1,-1,-1,
                1,-1,-1,1,-1,-1,-1,
                1,-1,-1,1,1,1,-1,
                1,-1,-1,1,-1,-1,1,
                1,-1,-1,-1,-1,-1,1,
                -1,1,-1,-1,-1,1,-1,
                -1,-1,1,1,1,-1,-1,
            ],
            G1: [
                -1,-1,1,1,1,-1,-1,
                -1,1,-1,-1,-1,1,-1,
                1,-1,-1,-1,-1,-1,-1,
                1,-1,-1,-1,-1,-1,-1,
                1,-1,-1,-1,1,1,-1,
                1,-1,-1,-1,-1,-1,1,
                1,-1,-1,-1,-1,-1,1,
                -1,1,-1,-1,-1,1,-1,
                -1,-1,1,1,1,-1,-1,
            ],
            G2: [
                1,1,1,1,1,1,1,
                1,-1,-1,-1,-1,-1,1,
                1,-1,-1,-1,-1,-1,-1,
                1,-1,-1,-1,-1,-1,-1,
                1,-1,-1,-1,1,1,1,
                1,-1,-1,-1,-1,-1,1,
                1,-1,-1,-1,-1,-1,1,
                1,-1,-1,-1,-1,-1,1,
                1,1,1,1,1,1,1,
            ]
        },
    }

    // NEURONIOS DE SAIDA
    protected OutNeuron: T_Neuron[] = []

    // 21 VETORES DE TREINAMENTO (INPUT)
    protected VetorInput: T_VetorInput[] = []

    // INICIALIZA OS VETORES DE TREINAMENTO
    protected initVetorTrain = () => {

        for (let index = 0; index <= 20; index++) {
            this.VetorInput[index] = {
                typeFont: 0,
                character: '',
                vetorTrain: []
            }
        }

        this.VetorInput[0].typeFont = 1
        this.VetorInput[0].character = 'A'
        this.VetorInput[0].vetorTrain = this.TrainingSetsz.A.A0

        this.VetorInput[1].typeFont = 2
        this.VetorInput[1].character = 'A'
        this.VetorInput[1].vetorTrain = this.TrainingSetsz.A.A1

        this.VetorInput[2].typeFont = 3
        this.VetorInput[2].character = 'A'
        this.VetorInput[2].vetorTrain = this.TrainingSetsz.A.A2

        this.VetorInput[3].typeFont = 1
        this.VetorInput[3].character = 'B'
        this.VetorInput[3].vetorTrain = this.TrainingSetsz.B.B0

        this.VetorInput[4].typeFont = 2
        this.VetorInput[4].character = 'B'
        this.VetorInput[4].vetorTrain = this.TrainingSetsz.B.B1

        this.VetorInput[5].typeFont = 3
        this.VetorInput[5].character = 'B'
        this.VetorInput[5].vetorTrain = this.TrainingSetsz.B.B2

        this.VetorInput[6].typeFont = 1
        this.VetorInput[6].character = 'C'
        this.VetorInput[6].vetorTrain = this.TrainingSetsz.C.C0

        this.VetorInput[7].typeFont = 2
        this.VetorInput[7].character = 'C'
        this.VetorInput[7].vetorTrain = this.TrainingSetsz.C.C1

        this.VetorInput[8].typeFont = 3
        this.VetorInput[8].character = 'C'
        this.VetorInput[8].vetorTrain = this.TrainingSetsz.C.C2

        this.VetorInput[9].typeFont = 1
        this.VetorInput[9].character = 'D'
        this.VetorInput[9].vetorTrain = this.TrainingSetsz.D.D0

        this.VetorInput[10].typeFont = 2
        this.VetorInput[10].character = 'D'
        this.VetorInput[10].vetorTrain = this.TrainingSetsz.D.D1

        this.VetorInput[11].typeFont = 3
        this.VetorInput[11].character = 'D'
        this.VetorInput[11].vetorTrain = this.TrainingSetsz.D.D2

        this.VetorInput[12].typeFont = 1
        this.VetorInput[12].character = 'E'
        this.VetorInput[12].vetorTrain = this.TrainingSetsz.E.E0

        this.VetorInput[13].typeFont = 2
        this.VetorInput[13].character = 'E'
        this.VetorInput[13].vetorTrain = this.TrainingSetsz.E.E1

        this.VetorInput[14].typeFont = 3
        this.VetorInput[14].character = 'E'
        this.VetorInput[14].vetorTrain = this.TrainingSetsz.E.E2

        this.VetorInput[15].typeFont = 1
        this.VetorInput[15].character = 'F'
        this.VetorInput[15].vetorTrain = this.TrainingSetsz.F.F0

        this.VetorInput[16].typeFont = 2
        this.VetorInput[16].character = 'F'
        this.VetorInput[16].vetorTrain = this.TrainingSetsz.F.F1

        this.VetorInput[17].typeFont = 3
        this.VetorInput[17].character = 'F'
        this.VetorInput[17].vetorTrain = this.TrainingSetsz.F.F2

        this.VetorInput[18].typeFont = 1
        this.VetorInput[18].character = 'G'
        this.VetorInput[18].vetorTrain = this.TrainingSetsz.G.G0

        this.VetorInput[19].typeFont = 2
        this.VetorInput[19].character = 'G'
        this.VetorInput[19].vetorTrain = this.TrainingSetsz.G.G1

        this.VetorInput[20].typeFont = 3
        this.VetorInput[20].character = 'G'
        this.VetorInput[20].vetorTrain = this.TrainingSetsz.G.G2
    }

    // INIT WEIGHT
    protected initWeight = () => {

        // 64 -> BIAS NA 64° POSIÇÃO


        for (let i = 0; i < 7; i++) {

            let aux: number[] = []

            this.OutNeuron[i] = {
                character: '', weights: []
            }

            
            for (let j = 0; j < 64; j++) {
                aux[j] = 0
            }

            this.OutNeuron[i] = {
                character: '', weights: aux
            }
        }

    }

    // INIT CHARACTER
    protected initCharacter = () => {

        this.OutNeuron[0].character = "A"
        this.OutNeuron[1].character = 'B'
        this.OutNeuron[2].character = 'C'
        this.OutNeuron[3].character = 'D'
        this.OutNeuron[4].character = 'E'
        this.OutNeuron[5].character = 'F'
        this.OutNeuron[6].character = 'G'

    }

    protected getStore = ()=> {
        const state = store.getState()
        return state.neural.neurons
    }

    protected dispatchStore = async () => {
        await store.dispatch(addNeural(this.OutNeuron))
    }

    public Training() {

        this.initWeight()
        this.initCharacter()
        this.initVetorTrain()

        var cycle: number = 0
        var net: number
        var expReturn: number
        var isFinished: boolean = false
        var minError:number = 0.01
        var partError2: number = 0.0
        var start: boolean = true
        var learnRate: number = 0.01 // TAXA DE APRENDIZAGEM

        while(!isFinished) {
    
            start = true 
            cycle++
            partError2 = 0.0
    
            // 21 PARA OS 3 TIPOS ATÉ O G (3 TIPOS X 7 NEURONIOS) 21 VETORES DE TESTE
            for (let currentVector = 0; currentVector < 21; currentVector++) {
                
                // ITERA TODOS OS NEURONIOS DE SAIDA
                for (let outNeuron = 0; outNeuron < 7; outNeuron++) {
                    net = 0.0
    
                    // CRIA O PESO (NET)
                    for (let index = 0; index < 63; index++) {
                        net += this.VetorInput[currentVector].vetorTrain[index] * this.OutNeuron[outNeuron].weights[index]
                    }
    
                    // SOMA OS PESOS CALCULADOS ACIMA COM O BIAS
                    net += this.OutNeuron[outNeuron].weights[63]

                    // SE O CARACTER CORRESPONDENTE AO VETOR DE ENTRADA == AO CARACTERE DO VETOR DE SAIDA 
                    if(this.VetorInput[currentVector].character == this.OutNeuron[outNeuron].character) {
                        expReturn = 1
                    } else {
                        expReturn = -1
                    }
    
                    for (let index = 0; index < 64; index++) {
                        if(index == 63) { // BIAS
                            this.OutNeuron[outNeuron].weights[index] += learnRate * (expReturn - net)
                        } else {
                            this.OutNeuron[outNeuron].weights[index] += learnRate * ((expReturn - net) * this.VetorInput[currentVector].vetorTrain[index])
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
                this.dispatchStore()
            }
    
        }
    
    }

    public Run(vectorToTrain: Array<number>) {

        let Neurons = this.getStore()

        vectorToTrain[63] = 1 // BIAS SEMPRE 1

        var threshold: number = 0

        var result

        for (let outNeuron = 0; outNeuron < 7; outNeuron++) {

            result = 0
            for (let idxVectorInput = 0; idxVectorInput < 64; idxVectorInput++) {
                result = result + (vectorToTrain[idxVectorInput] * Neurons[outNeuron].weights[idxVectorInput])
            }

            /*
                ACTIVATION FUNCTION
                1 IF X > threshold
                -1 IF X <= threshold
            */

            if(result > threshold) {
                // RETURN CARACTER IN SCREEN
                return Neurons[outNeuron].character
            } else {
                return "?"
            }

        }
    }
}