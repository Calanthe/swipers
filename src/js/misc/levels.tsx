export const LEVELS = [
    //level 0
    [
        {
            positionX: 4,
            positionY: 1,
            type: 1,
            isFinishTile: true,
            hint: 'Use arrows or WASD to move the active blue tile to the finish one.' //TODO refactor
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
            hint: 'You will get maximum points if all of the active blue tiles reaches black tile in the same move.'
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
            hint: 'Click on different tile to change active color. Use inactive tiles as blockers.'
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
    [],
    //level 4
    [],
    //level 5
    []
];
