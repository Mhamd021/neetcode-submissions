class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number 
    {
        let longest=0;
        let left=0;
        let set = new Set();
        for(let right=0;right<s.length;right++)
        {
            const char = s[right];
            while(set.has(char))
            {
                set.delete(s[left]);
                left++;
            }
            set.add(char);
            longest = Math.max(longest,right-left + 1);
        }
        return longest;
    }
}
