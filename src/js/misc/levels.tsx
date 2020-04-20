import { WALL_TYPE } from "../misc/constants";
export const LEVELS = [
    //level 0
    [
        {
            positionX: 4,
            positionY: 1,
            type: 1,
            isFinishTile: true,
            hint: 'Use arrows or WASD to move the blue tile to the finish one.' //TODO refactor
        },
        {
            positionX: 4,
            positionY: 6,
            type: 1,
            isFinishTile: false
        }
    ],
    //level 1
    [
        {
            positionX: 0,
            positionY: 8,
            type: 1,
            isFinishTile: true,
            hint: 'You will get maximum points if all of the blue tiles reach finish tile in the same move.'
        },
        {
            positionX: 2,
            positionY: 3,
            type: 1,
            isFinishTile: false
        },
        {
            positionX: 5,
            positionY: 5,
            type: 1,
            isFinishTile: false
        },
        {
            positionX: 0,
            positionY: 0,
            type: 1,
            isFinishTile: false
        }
    ],
    //level 2
    [
        {
            positionX: 8,
            positionY: 0,
            type: 1,
            isFinishTile: true,
            hint: 'Click on a different tile to change active color. Use inactive tiles as blockers.'
        },
        {
            positionX: 6,
            positionY: 6,
            type: 1,
            isFinishTile: false
        },
        {
            positionX: 1,
            positionY: 3,
            type: 2,
            isFinishTile: true
        },
        {
            positionX: 4,
            positionY: 7,
            type: 2,
            isFinishTile: false
        }
    ],
    //level 3
    [
        {
            positionX: 5,
            positionY: 5,
            type: 1,
            isFinishTile: true,
            hint: 'Use grey blocks as walls.'
        },
        {
            positionX: 0,
            positionY: 0,
            type: 1,
            isFinishTile: false
        },
        {
            positionX: 4,
            positionY: 2,
            type: 2,
            isFinishTile: true
        },
        {
            positionX: 1,
            positionY: 0,
            type: 2,
            isFinishTile: false
        },
        {
            positionX: 6,
            positionY: 6,
            type: WALL_TYPE,
            isFinishTile: false
        },
        {
            positionX: 5,
            positionY: 3,
            type: WALL_TYPE,
            isFinishTile: false
        }
    ],
    //level 4
    [
        {
            positionX: 8,
            positionY: 3,
            type: 1,
            isFinishTile: true,
            hint: 'Try with even more colors.'
        },
        {
            positionX: 2,
            positionY: 5,
            type: 1,
            isFinishTile: false
        },
        {
            positionX: 3,
            positionY: 6,
            type: 1,
            isFinishTile: false
        },
        {
            positionX: 4,
            positionY: 4,
            type: 2,
            isFinishTile: true
        },
        {
            positionX: 1,
            positionY: 0,
            type: 2,
            isFinishTile: false
        },
        {
            positionX: 1,
            positionY: 4,
            type: 3,
            isFinishTile: false
        },
        {
            positionX: 6,
            positionY: 8,
            type: 3,
            isFinishTile: true
        }
    ],
    //level 5
    [
        {
            positionX: 7,
            positionY: 1,
            type: 1,
            isFinishTile: true,
            hint: 'Good luck!'
        },
        {
            positionX: 2,
            positionY: 7,
            type: 1,
            isFinishTile: false
        },
        {
            positionX: 1,
            positionY: 7,
            type: 2,
            isFinishTile: true
        },
        {
            positionX: 8,
            positionY: 8,
            type: 2,
            isFinishTile: false
        },
        {
            positionX: 2,
            positionY: 2,
            type: 3,
            isFinishTile: true
        },
        {
            positionX: 6,
            positionY: 6,
            type: 3,
            isFinishTile: false
        },
        {
            positionX: 5,
            positionY: 5,
            type: 4,
            isFinishTile: true
        },
        {
            positionX: 3,
            positionY: 4,
            type: 4,
            isFinishTile: false
        },
        {
            positionX: 8,
            positionY: 0,
            type: WALL_TYPE,
            isFinishTile: false
        }
    ]
];
