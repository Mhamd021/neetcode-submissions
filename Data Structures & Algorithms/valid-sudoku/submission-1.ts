class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const row = Array.from({ length: 9 }, () => new Set());
        const col = Array.from({ length: 9 }, () => new Set());
        const squares = Array.from({ length: 9 }, () => new Set());

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const val = board[r][c];
                if (val === ".") continue;

                const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

                if (row[r].has(val) || col[c].has(val) || squares[boxIndex].has(val)) {
                    return false;
                }

                row[r].add(val);
                col[c].add(val);
                squares[boxIndex].add(val);
            }
        }

        return true;
    }
       
}
