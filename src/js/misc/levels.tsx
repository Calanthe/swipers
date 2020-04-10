import { FINISH_TYPE } from "./constants";

export const LEVELS = [
    //level 0
    [
        {
            positionX: 4,
            positionY: 1,
            type: FINISH_TYPE,
            tip: 'Use arrows or WASD to move the active blue tile to the finish one.'
        },
        {
            positionX: 4,
            positionY: 6,
            type: 1
        }
    ],
    //level 1
    [
        {
            positionX: 0,
            positionY: 8,
            type: FINISH_TYPE,
            tip: 'You will get maximum points if all of the active blue tiles reaches black tile in the same move.'
        },
        {
            positionX: 2,
            positionY: 3,
            type: 1
        },
        {
            positionX: 5,
            positionY: 5,
            type: 1
        },
        {
            positionX: 0,
            positionY: 0,
            type: 1
        }
    ],
    //level 2
    [],
    //level 3
    [],
    //level 4
    [],
    //level 5
    []
];
