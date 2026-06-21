class Solution {
   
    searchMatrix(matrix: number[][], target: number): boolean {
        let ROW = matrix.length;
        let COL = matrix[0].length;

        let top = 0 ;
        let bot = ROW - 1;
        while(top<=bot)
        {
            let row = Math.floor((top+bot) / 2 ); 
            if(target > matrix[row][COL - 1 ]) {top = row + 1}
            else if(target < matrix[row][0]){bot = row - 1 }
            else break;

        }
        if(!(top<=bot)) return false;

        const row = Math.floor((top + bot) / 2);
        let l = 0;
        let r = COL - 1 ;

        while(l<= r)
        {
            const mid = Math.floor((l+r)/2);
            if(target > matrix[row][mid])
            {
                l = mid + 1;
            }
            else if(target < matrix[row][mid]){r = mid - 1 }
            else return true;
        }
        return false;
    }
}
