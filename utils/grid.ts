export const initGrid = (gridHeight: number, gridWidth: number) => {
    let grid = []
    
    for (let h = 0; h <= gridHeight - 1; h++) {
		const current = Array(gridWidth).fill('');
		grid.push(current)
	}

    return grid
}