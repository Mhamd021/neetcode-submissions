class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean 
    {
        s = s.toLocaleLowerCase().trim().replace(/[^a-z0-9]/g,'');

        let left =0;
        let right = s.length -1;
        while(left < right)
        {
            if(s[right] !== s[left]) return false;

            left++;
            right--;
        }
        return true;
    }
}
