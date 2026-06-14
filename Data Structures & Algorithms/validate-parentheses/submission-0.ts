class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean 
    {
        const stack : string[] = [];
        for(const char of s)
        {
            if(char === '(' || char === '{' || char === '[') stack.push(char);

            else{
                const top = stack[stack.length -1];
                if(char === ')' && top === '(' ||
                 char === '}' && top === '{' ||
                 char === ']' && top === '[' ) stack.pop();

                 else return false;
            }
            
        }
        return stack.length === 0;
    }
}
