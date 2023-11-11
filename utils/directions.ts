export class Direction {
	name: string;
	placement: "x" | "y";
	F: number;
	B: number;
	next!: Direction;
	prev!: Direction;

	constructor(name: string, placement: "x" | "y", signForForward: number, signForBackward: number) {
		this.name = name
		this.placement = placement
		this.F = signForForward
		this.B = signForBackward
	}
}

export const initDirections = () => {
	const NORTH = new Direction('N', 'y', 1, -1)
	const EAST  = new Direction('E', 'x', 1, -1)
	const SOUTH = new Direction('S', 'y', -1, 1)
	const WEST  = new Direction('W', 'x', -1, 1)

	NORTH.next = EAST
	NORTH.prev = WEST

	EAST.prev = NORTH
	EAST.next = SOUTH

	SOUTH.prev = EAST
	SOUTH.next = WEST

	WEST.prev = SOUTH
	WEST.next = NORTH

	return NORTH
}