class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string 
    {
        let result = [];

        for(const s of strs)
        {
            result.push(s.length+'#'+s);
        }
        return result.join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] 
    {
        let res : string[] = [];
        let i=0;
        while(i<str.length)
        {
            let j = i;
            while(str[j] !== '#') j++;

            const length = Number(str.slice(i,j));
            const word = str.slice(j+1,j+length+1);
            res.push(word);
            i = j+length+1;
        }
        return res;
    }
}
