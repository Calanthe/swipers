import { WALL_TYPE } from "../misc/constants";
export const LEVELS = [
	//level 1
	[
		{
			positionX: 6,
			positionY: 0,
			type: 1,
			isFinishTile: true,
			hint: "Use arrows or WASD to move the blue tile to the finish one.",
		},
		{
			positionX: 3,
			positionY: 5,
			type: 1,
			isFinishTile: false,
		},
	],
	//level 2
	[
		{
			positionX: 0,
			positionY: 6,
			type: 1,
			isFinishTile: true,
			hint:
				"You will get maximum points if all of the blue tiles reach finish tile in the same move.",
		},
		{
			positionX: 2,
			positionY: 3,
			type: 1,
			isFinishTile: false,
		},
		{
			positionX: 0,
			positionY: 0,
			type: 1,
			isFinishTile: false,
		},
	],
	//level 3
	[
		{
			positionX: 0,
			positionY: 6,
			type: 1,
			isFinishTile: true,
			hint:
				"Click on a different tile to change active color. Use inactive tiles as walls.",
		},
		{
			positionX: 2,
			positionY: 0,
			type: 1,
			isFinishTile: false,
		},
		{
			positionX: 4,
			positionY: 4,
			type: 2,
			isFinishTile: true,
		},
		{
			positionX: 3,
			positionY: 0,
			type: 2,
			isFinishTile: false,
		},
		{
			positionX: 6,
			positionY: 6,
			type: WALL_TYPE,
			isFinishTile: false,
		}
	],
	//level 4
	[
		{
			positionX: 3,
			positionY: 4,
			type: 1,
			isFinishTile: true,
			hint: "Use grey blocks as walls too.",
		},
		{
			positionX: 0,
			positionY: 0,
			type: 1,
			isFinishTile: false,
		},
		{
			positionX: 2,
			positionY: 2,
			type: 2,
			isFinishTile: true,
		},
		{
			positionX: 1,
			positionY: 0,
			type: 2,
			isFinishTile: false,
		},
		{
			positionX: 4,
			positionY: 5,
			type: WALL_TYPE,
			isFinishTile: false,
		},
		{
			positionX: 3,
			positionY: 3,
			type: WALL_TYPE,
			isFinishTile: false,
		},
	],
	//level 5
	[
		{
			positionX: 1,
			positionY: 1,
			type: 1,
			isFinishTile: true,
		},
		{
			positionX: 2,
			positionY: 3,
			type: 1,
			isFinishTile: false,
		},
		{
			positionX: 3,
			positionY: 4,
			type: 1,
			isFinishTile: false,
		},
		{
			positionX: 4,
			positionY: 5,
			type: 1,
			isFinishTile: false,
		},
		{
			positionX: 5,
			positionY: 6,
			type: 2,
			isFinishTile: true,
		},
		{
			positionX: 4,
			positionY: 4,
			type: 2,
			isFinishTile: false,
		},
		{
			positionX: 5,
			positionY: 3,
			type: 2,
			isFinishTile: false,
		},
		{
			positionX: 6,
			positionY: 2,
			type: 2,
			isFinishTile: false,
		},
		{
			positionX: 1,
			positionY: 2,
			type: WALL_TYPE,
			isFinishTile: false,
		},
		{
			positionX: 0,
			positionY: 1,
			type: WALL_TYPE,
			isFinishTile: false,
		},
		{
			positionX: 1,
			positionY: 0,
			type: WALL_TYPE,
			isFinishTile: false,
		},
		{
			positionX: 5,
			positionY: 0,
			type: WALL_TYPE,
			isFinishTile: false,
		},
		{
			positionX: 6,
			positionY: 1,
			type: WALL_TYPE,
			isFinishTile: false,
		},
	],
	//level 6
	[
		{
			positionX: 6,
			positionY: 1,
			type: 1,
			isFinishTile: true,
		},
		{
			positionX: 2,
			positionY: 3,
			type: 1,
			isFinishTile: false,
		},
		{
			positionX: 3,
			positionY: 4,
			type: 1,
			isFinishTile: false,
		},
		{
			positionX: 2,
			positionY: 2,
			type: 2,
			isFinishTile: true,
		},
		{
			positionX: 1,
			positionY: 0,
			type: 2,
			isFinishTile: false,
		},
		{
			positionX: 1,
			positionY: 2,
			type: 3,
			isFinishTile: false,
		},
		{
			positionX: 4,
			positionY: 6,
			type: 3,
			isFinishTile: true,
		},
	],
	//level 7
	[
		{
			positionX: 1,
			positionY: 0,
			type: 1,
			isFinishTile: true,
		},
		{
			positionX: 3,
			positionY: 4,
			type: 1,
			isFinishTile: false,
		},
		{
			positionX: 3,
			positionY: 0,
			type: 2,
			isFinishTile: true,
		},
		{
			positionX: 5,
			positionY: 4,
			type: 2,
			isFinishTile: false,
		},
		{
			positionX: 5,
			positionY: 0,
			type: 3,
			isFinishTile: true,
		},
		{
			positionX: 1,
			positionY: 4,
			type: 3,
			isFinishTile: false,
		},
		{
			positionX: 0,
			positionY: 1,
			type: WALL_TYPE,
			isFinishTile: false,
		},
		{
			positionX: 6,
			positionY: 1,
			type: WALL_TYPE,
			isFinishTile: false,
		},
	],
	//level 8
	[
		{
			positionX: 6,
			positionY: 0,
			type: 1,
			isFinishTile: true,
		},
		{
			positionX: 2,
			positionY: 1,
			type: 1,
			isFinishTile: false,
		},
		{
			positionX: 6,
			positionY: 4,
			type: 1,
			isFinishTile: false,
		},
		{
			positionX: 0,
			positionY: 6,
			type: 2,
			isFinishTile: true,
		},
		{
			positionX: 4,
			positionY: 5,
			type: 2,
			isFinishTile: false,
		},
		{
			positionX: 0,
			positionY: 2,
			type: 2,
			isFinishTile: false,
		},
		{
			positionX: 0,
			positionY: 0,
			type: 3,
			isFinishTile: true,
		},
		{
			positionX: 4,
			positionY: 1,
			type: 3,
			isFinishTile: false,
		},
		{
			positionX: 6,
			positionY: 6,
			type: 4,
			isFinishTile: true,
		},
		{
			positionX: 2,
			positionY: 5,
			type: 4,
			isFinishTile: false,
		},
	],
	//level 9
	[
		{
			positionX: 5,
			positionY: 1,
			type: 1,
			isFinishTile: true,
			hint: "Good luck!",
		},
		{
			positionX: 2,
			positionY: 5,
			type: 1,
			isFinishTile: false,
		},
		{
			positionX: 1,
			positionY: 5,
			type: 2,
			isFinishTile: true,
		},
		{
			positionX: 6,
			positionY: 6,
			type: 2,
			isFinishTile: false,
		},
		{
			positionX: 2,
			positionY: 1,
			type: 3,
			isFinishTile: true,
		},
		{
			positionX: 5,
			positionY: 4,
			type: 3,
			isFinishTile: false,
		},
		{
			positionX: 4,
			positionY: 3,
			type: 4,
			isFinishTile: true,
		},
		{
			positionX: 3,
			positionY: 2,
			type: 4,
			isFinishTile: false,
		},
		{
			positionX: 6,
			positionY: 0,
			type: WALL_TYPE,
			isFinishTile: false,
		},
	],
];
