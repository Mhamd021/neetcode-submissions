class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const set = new Set();

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const cell = board[r][c];
                if (cell === ".") continue;

                const boxNumber = Math.floor(r / 3) * 3 + Math.floor(c / 3);
                const row = `row:${r},cell:${cell}`;
                const col = `col:${c},cell:${cell}`;
                const box = `boxNumber:${boxNumber},cell:${cell}`;
                if (set.has(row) || set.has(col) || set.has(box)) 
                    return false;
                
                set.add(row).add(col).add(box);

                
            }
        }

        return true;
    }
       
}
