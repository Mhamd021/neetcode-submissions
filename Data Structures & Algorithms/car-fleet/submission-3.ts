class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number 
    {
let pair = position.map((p, i) => [p, speed[i]]);
pair.sort((a, b) => b[0] - a[0]);
let fleets = 0;
let fleetTime = 0;

for (let [p, s] of pair) {
    const time = (target - p) / s;

    if (time > fleetTime) {
        fleets++;
        fleetTime = time;
    }
    }
return fleets;
    }
}
