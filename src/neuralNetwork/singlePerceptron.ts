/*  

    Função de ativação sigmoid
    (1 / (1 + Math.exp(-1 * x)))

    bias = -threshold
    weights = pesos

*/

import { TrainingSets } from '../models/models'

export class Perceptron {

    protected bias: number = 1
    protected weights: any = []
    protected learnRate:number = 0.15
    protected interactions:number = 2000
    
    // ACTIVATION FUNCTION
    protected sigmoid = (x: number): number => {
        return isFinite(1 / (1 - Math.exp(-1 * x))) ? (1 / (1 - Math.exp(-1 * x))) : 0 // SOMAR OU SUBTRAIR ?
    }

    public init = (learnRatez: number, interactionsz: number) => {
        this.learnRate = learnRatez
        this.interactions = interactionsz
    }

    protected initWeights = (value: number) => {

        // É CORRETO INICIALIZAR O BIAS
        this.bias =  Math.trunc(Math.random() * 10)
        
        for (let index = 0; index < value; index++) {
            this.weights[index] = Math.trunc(Math.random() * 10)
        }
    }

    public train = (data: TrainingSets) => {

        this.initWeights(data[0].inputs.length)

        var interaction: number = 0
        var error = true

        while(error && interaction < this.interactions) {

            error = false
            var difference: number = 0

            for (let index = 0; index < data.length; index++) {

                var result: number = this.run(data[index].inputs)

                if(result != data[index].outputs) {
                    error = true

                    difference = data[index].outputs - result
                    this.recalWeights(difference, data[index].inputs)

                } else {
                    error = false
                }
            }

            console.log("Interactions: " + interaction + " - Error: " + difference.toFixed(12))
            interaction++
        }
    }

    protected recalWeights = (value: number, inputs: Array<number>) => {
        for (let index = 0; index < this.weights.length; index++) {
            this.weights[index] = this.weights[index] + this.learnRate * value * inputs[index];
        }
    } 

    public run = (inputs: Array<number>): number => {

        var sum = 0
        for (let index = 0; index < inputs.length; index++) {
            sum += inputs[index] * this.weights[index]
        }

        sum += this.bias
        return this.sigmoid(sum)
    }
}