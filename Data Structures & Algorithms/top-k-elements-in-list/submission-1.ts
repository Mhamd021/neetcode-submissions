class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] 
    {
        const map = new Map<number,number>;
        for(let n of nums )
        {
            map.set(n,(map.get(n) || 0 ) + 1 );
        }
        const bucket : number[][] = Array.from(
        { length: nums.length    + 1 }  , () => [] );

        for(const [num,count] of map.entries())
        {
            bucket[count].push(num);
        }

        const result:number[] = [];
        for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) 
        {
            result.push(...bucket[i]);
        }
    return result;

    }
}
