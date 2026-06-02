class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] 
    {
        const record:  Record<string,string[]> = {};

        for(let word of strs)
        {
            const key = [...word].sort().join('');
            record[key] ||=[];
            record[key].push(word);

        }
            return Object.values(record);
    }
}
