class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number 
    {
        const stack:number[] = [];
        let maxArea =0;
        heights.push(0);
        for(let i=0;i<heights.length;i++)
        {
            while(stack.length > 0 && heights[i] < heights[stack[stack.length - 1]])
            {
                const h = heights[stack.pop()!];
                const left = stack.length === 0 ? -1 : stack[stack.length - 1];
                const width = i - left - 1;
                maxArea = Math.max(maxArea,h*width);
            }
            stack.push(i);
        }
        return maxArea
    }
}
