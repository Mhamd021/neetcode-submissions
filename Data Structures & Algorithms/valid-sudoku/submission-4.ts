class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean 
    {
        const row = Array.from({length:9},()=> new Set<String>());
        const col =  Array.from({length:9},()=> new Set<String>());
        const box = Array.from({length:9},()=> new Set<String>());
        for(let r=0;r<board.length;r++)
        {
            for(let c=0;c<board[r].length;c++)
            {
                const cell = board[r][c];
                if(cell === '.') continue;
                const boxNumber = 3*Math.floor(r/3) + Math.floor(c/3);
                if(row[r].has(cell) || col[c].has(cell) || box[boxNumber].has(cell)) return false;

                box[boxNumber].add(cell);
                row[r].add(cell);
                col[c].add(cell);
            }
        }
        return true;
    }
}
