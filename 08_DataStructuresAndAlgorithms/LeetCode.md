# LeetCode

- [LeetCode](#leetcode)
  - [Two Sum](#two-sum)


## Two Sum
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

```javascript
// E1
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// E2
Input: nums = [3,2,4], target = 6
Output: [1,2]

// E3
Input: nums = [3,3], target = 6
Output: [0,1]

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
```

Solution 
```javascript
var twoSum = function(nums, target) {
     // Approach1 : O(n2), Nested Loop
     // for(let i = 0; i < nums.length; i++) {
     //    for(let j = i+1; j < nums.length; j++) {       
     //      if(nums[i] + nums[j] === target)  {
     //        return [i, j];
     //      }
     //    }
     //  }
     //  return [];
    
    // HashMap
    let hashMap = {};
    for(let i = 0; i < nums.length; i++) {
        let find = target - nums[i];
        if(hashMap[find] !== undefined) {
        return [hashMap[find], i];
        } else {
        hashMap[nums[i]] = i;    
        }    
    }
    return [];
}
```