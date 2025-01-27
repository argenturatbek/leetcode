/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function(nums) {
    
    let n        = nums.length
    let max_diff = Math.abs(nums[n-1] - nums[0])
    console.log(max_diff)

    for(let i = 0; i<n-1; i++){
        let cur_diff = Math.abs(nums[i+1] - nums[i])
        max_diff = Math.max(cur_diff, max_diff)
    }

    return max_diff


};