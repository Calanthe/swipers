import { WALL_TYPE } from "../misc/constants";
import { tileInLevel } from "../misc/tsTypes";
import { isMobile } from "../misc/utils";

const firstLevelHint = isMobile()
	? `Swipe up, down or sideways
to move the blue circle 
to the square finish tile.`
	: `Use the arrow keys (or WASD)
to move the blue circle 
to the square finish tile.`;

export const LEVELS: tileInLevel[][] = [
	//level 1
	[
		{
			positionX: 6,
			positionY: 0,
			type: 1,
			isFinishTile: true,
			hint: firstLevelHint,
			stars: {
				maxMoves: 2, //how many moves are needed to get maximum 3 stars
				minMoves: 3, //how many moves are needed to get 2 stars
				maxPoints: 0, //how many points are needed to get maximum 3 stars, if 0 - it doesn't matter, only moves count
			},
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
			hint: `You will get more points 
					if all of the blue circles reach
					the finish tile in the same move.`,
			stars: {
				maxMoves: 2,
				minMoves: 4,
				maxPoints: 40,
			},
		},
		{
			positionX: 3,
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
			hint: `Select a different colored tile 
				to change active color.`,
			stars: {
				maxMoves: 4,
				minMoves: 6,
				maxPoints: 0,
			},
		},
		{
			positionX: 4,
			positionY: 0,
			type: 1,
			isFinishTile: false,
		},
		{
			positionX: 6,
			positionY: 6,
			type: 2,
			isFinishTile: true,
		},
		{
			positionX: 2,
			positionY: 0,
			type: 2,
			isFinishTile: false,
		},
	],
	//level 4
	[
		{
			positionX: 0,
			positionY: 6,
			type: 1,
			isFinishTile: true,
			hint: `Use inactive tiles as walls.`,
			stars: {
				maxMoves: 6,
				minMoves: 8,
				maxPoints: 0,
			},
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
		},
	],
	//old level 4
	// [
	// 	{
	// 		positionX: 3,
	// 		positionY: 4,
	// 		type: 1,
	// 		isFinishTile: true,
	// 		stars: {
	// 			maxMoves: 18,
	// 			minMoves: 20,
	// 		}
	// 	},
	// 	{
	// 		positionX: 0,
	// 		positionY: 0,
	// 		type: 1,
	// 		isFinishTile: false,
	// 	},
	// 	{
	// 		positionX: 2,
	// 		positionY: 2,
	// 		type: 2,
	// 		isFinishTile: true,
	// 	},
	// 	{
	// 		positionX: 1,
	// 		positionY: 0,
	// 		type: 2,
	// 		isFinishTile: false,
	// 	},
	// 	{
	// 		positionX: 4,
	// 		positionY: 5,
	// 		type: WALL_TYPE,
	// 		isFinishTile: false,
	// 	},
	// 	{
	// 		positionX: 3,
	// 		positionY: 3,
	// 		type: WALL_TYPE,
	// 		isFinishTile: false,
	// 	},
	// ],
	//level 5
	[
		{
			positionX: 1,
			positionY: 1,
			type: 1,
			isFinishTile: true,
			stars: {
				maxMoves: 7,
				minMoves: 9,
				maxPoints: 80,
			},
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
			stars: {
				maxMoves: 8,
				minMoves: 10,
				maxPoints: 60,
			},
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
			stars: {
				maxMoves: 10,
				minMoves: 11,
				maxPoints: 0,
			},
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
			stars: {
				maxMoves: 12,
				minMoves: 14,
				maxPoints: 100,
			},
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
			stars: {
				maxMoves: 16,
				minMoves: 18,
				maxPoints: 0,
			},
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
