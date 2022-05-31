/*  

    Função de ativação sigmoid
    (1 / (1 + Math.exp(-1 * x)))

    bias = -threshold
    weights = pesos

*/

type trainingSets = [
    {inputs: Array<number>, outputs: number},
    {inputs: Array<number>, outputs: number},
    {inputs: Array<number>, outputs: number},
    {inputs: Array<number>, outputs: number},
    {inputs: Array<number>, outputs: number},
    {inputs: Array<number>, outputs: number},
]

type inputs = Array<number>

type outputs = 0

export class Perceptron {

    protected bias: number = 1
    protected weights: any = []
    protected learnRate:number = 0.15
    protected interactions:number = 1000
    
    // ACTIVATION FUNCTION
    protected sigmoid = (x: number): number => {
        return (1 / (1 - Math.exp(-1 * x)))
    }

    public init = (learnRatez: number, interactionsz: number) => {
        this.learnRate = learnRatez
        this.interactions = interactionsz
    }

    protected initWeights = (value: number) => {

        this.bias =  Math.trunc(Math.random() * 10)
        
        for (let index = 0; index < value; index++) {
            this.weights[index] = Math.trunc(Math.random() * 10)
        }
    }

    public train = (data: trainingSets) => {

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

    protected recalWeights = (value: number, inputs: any) => {
        for (let index = 0; index < this.weights.length; index++) {
            this.weights[index] = this.weights[index] + this.learnRate * value * inputs[index];
        }
    } 

    public run = (inputs: inputs): number => {

        var sum = 0
        for (let index = 0; index < inputs.length; index++) {
            sum += inputs[index] * this.weights[index]
        }

        sum += this.bias

        return this.sigmoid(sum)

    }
}