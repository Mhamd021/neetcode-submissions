class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number 
    {
        if(!height) return 0;

        let res : number = 0;
        let l=0;
        let r = height.length - 1;
        let leftmax =height[l] ;
        let rightmax =height[r]; 
        while(l<r)
        {
            if(leftmax < rightmax){
                l++;
                leftmax = Math.max(leftmax,height[l]);
                res += leftmax - height[l];            
                }
            else
            {
                r--;
                rightmax = Math.max(rightmax,height[r]);
                res += rightmax - height[r];
            }

        } 
        return res;
        
    }
}
