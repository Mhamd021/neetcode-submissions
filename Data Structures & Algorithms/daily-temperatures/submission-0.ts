class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] 
    {
        const stack: number[] = [];
        const n = temperatures.length  ;
        const  result = new Array(n).fill(0);

        for(let i=n-1;i>=0;i--)
        {
            const temperature = temperatures[i];
        while(stack.length>0 && temperatures[stack[stack.length-1]] <= temperature) stack.pop();
        
            if(stack.length >0)
        {
            result[i] = stack[stack.length-1] -i;
        }
            stack.push(i);
        }
        return result;
    }
}
