/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function(nums) {
    
    let sum_total = 0
    for(let n of nums){
        sum_total+=n
    }

    let sum_prefix = 0
    let cnt = 0
    for(let i = 0; i<nums.length-1; i++){
        //gets partial prefix sum of the array
        sum_prefix+=nums[i]
        
        //find the diff
        if(((sum_total - sum_prefix) - sum_prefix) % 2 == 0) cnt++
    }

    return cnt


};