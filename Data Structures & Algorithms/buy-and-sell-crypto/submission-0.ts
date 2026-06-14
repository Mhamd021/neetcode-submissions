class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number 
    {
       const stack: number[] = [];
        let result = 0;
        stack.push(prices[0]);
        for(let price of prices)
        {
            
            if(price < stack[stack.length -1 ]) stack.push(price);

            if(stack.length > 0 && price > stack[stack.length - 1 ])
            {
               const profit =  price - stack[stack.length -1];
                result = Math.max(result,profit); //4
            }

    
        }
       return result;
    }
}
