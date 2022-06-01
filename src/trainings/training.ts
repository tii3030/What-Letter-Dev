import { TrainingSets } from '../models/models'

export var training: TrainingSets = [
    {inputs: [0,0,0,0,0,0,0], outputs: 0},
    {inputs: [1,0,0,0,0,0,0], outputs: 0},
    {inputs: [1,1,0,0,0,0,0], outputs: 0},
    {inputs: [1,1,1,0,0,0,0], outputs: 0},
    {inputs: [0,0,0,0,0,0,1], outputs: 0},
    {inputs: [0,0,0,0,0,1,1], outputs: 0},
    {inputs: [0,0,0,0,1,1,1], outputs: 0},
    {inputs: [0,0,1,0,1,0,0], outputs: 0},
    {inputs: [0,1,1,0,1,1,0], outputs: 0},
    {inputs: [1,1,1,0,1,1,1], outputs: 0},
    {inputs: [1,1,0,0,1,1,0], outputs: 0},
    {inputs: [0,1,1,0,0,1,1], outputs: 0},
    {inputs: [0,0,1,0,0,0,0], outputs: 1},
    {inputs: [0,0,0,0,1,0,0], outputs: 1},
    {inputs: [0,0,0,1,0,0,0], outputs: 1},
    {inputs: [0,0,1,1,0,0,0], outputs: 1},
    {inputs: [0,0,0,1,1,0,0], outputs: 1},
    {inputs: [0,0,1,1,1,0,0], outputs: 1},
]