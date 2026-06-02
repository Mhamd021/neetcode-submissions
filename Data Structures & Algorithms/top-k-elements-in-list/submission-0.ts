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
        
    return Array.from(map.entries()).sort((a,b) => b[1]-a[1]).slice(0,k).map(entry => entry[0]);

    }
}
