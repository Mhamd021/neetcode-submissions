class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
     const cars = position.map(
        (p,i) => [p, (target-p)/speed[i]]
     );
     cars.sort((a,b) => b[0] - a[0] );
     let fleets=0;
     let maxTime =0;
     for(const [,time] of cars)
     {
        if(time > maxTime)
        {
            fleets++;
            maxTime = time;
        }
     }
     return fleets;
    }
}
