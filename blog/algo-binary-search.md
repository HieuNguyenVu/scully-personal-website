---
title: 'Algo-ex:<br>Binary Search and some Attention Points '
description: "These are some attention points I got when practicing on leetcode. These can help you succeed in the first submit, and the Interviewer will like that."
date_start: "2022/01/01"
date_end: '2022/01/01'
published: true
image: 'https://i.imgur.com/K1BOwur.jpg'
header_image: 'https://i.imgur.com/BEuDltz.jpg'
tags: ['Algo','Binary Search']
priority: 1
link: '/blog/algo-binary-search'
slug: algo-binary-search
location: 'Hanoi, Vietnam'
---

_**This series is the note of me when I exercise Binary Search in LeetCode. Actually, I'm not a good person who best knows about the algorithm, my knowledge just learned from my friend and from the internet. But I hope this may help you for the next interview.  
I assume that you already have knowledge about Binary Search. If you don't, please read it [here][1].**_

## I. Which challenges we should think to solve by the Binary Search ?

1. **The searching array is already sorted in order.**
2. **The searching array is like binaries continuously. Example: [false,false,false,false,false,true,true,true] or [0,0,0,0,0,0,1,1,1,1]**
3. **The searching value is in a range, have min and max, and we have to find a good fit value to meet the requirement**
4. **We can compare each element by value.**

## II. Some attention points

### 1. Binary search have some variation*, you should learn only one

_Variation(n): biến thể_

There are some variations of binary search, you can run in one direction, both directions ... Of course, I don't mean that you should focus on only one. But I believe that you can't solve almost challenge by use only one, and they are not too much different in BigO complexity. So just learn and use one, it will make you safe for make a perfect submit (successfully submit for the first time).

**My favorite variation is:**

```java
public int search(int[] nums, int target) {
    int left = 0, right = nums.length - 1;
    while(left <= right){
        int mid = (int)Math.floor((left + right)/2);
        if(nums[mid] == target) return mid;
        else if(nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    // **CHECK_POINT
    return -1;
}
```

### 2. Some attention points in above code

* `left` always greater or equal `>=` `target` at `CHECK_POINT`.
* `right` always is index smaller than `target` at `CHECK_POINT`.

* Don't forget check value valid of `left`. It can be out of range.  
For example: **nums** is `[-1,0,3,5,9,12]` and **target** is `13`.  
`left` will equal `6` at `CHECK_POINT`, and it can make `ArrayIndexOutOfBounds` exception.

* What is the difference?
```java
    int mid = (left + right)/2;
    // if (left + right)/2 = -5.5 then mid = -5;
    int mid = (int)Math.floor((left + right)/2);
    // if (left + right)/2 = -5.5 then mid = -6;
```
You should use casting as `int mid = (left + right)/2;` if your range have constraint >= 0, and use `Math.floor()` if your range have value < 0.
**I prefer the `Math.floor()` causes it is safer and not too much difference in speed**.

* What if the range meet the `Integer.MAX_INT`?
Both the code above will got the timeout. Cause computer will take alot of time to calculate the `left + right` then divide it to `2`. **Instead of that, you should use** `left + (right - left)/2`.

```java
    int mid = (int)Math.floor(left + (right - left)/2);
    // Exp: left = 5, right = 10;
    // mid = 5 + (10 - 5)/2 = (10 + 5)/2;
```

## III. Some kind of Binary Search Challenges and Sample challenges

### 1. Search value in an array return the index

We can use normal binary search and it will work, not thing special. Effortless!!

```java
public int search(int[] nums, int target) {
    int left = 0, right = nums.length - 1;
    while(left <= right){
        int mid = (int)Math.floor((left + right)/2);
        if(nums[mid] == target) return mid;
        else if(nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    // **CHECK_POINT
    return -1;
}
```

### 2. Find the index in an increase array which can push new value to

For example, Giving array `[1,3,4,5,8,9]`, find place to place `6`.
Same with the code above, but notice about the `CHECK_POINT`

* `left` always greater or equal `>=` `target` at `CHECK_POINT`.
* `right` always is index smaller than `target` at `CHECK_POINT`.

So with this note, we can found that, `left` will point to number `8`, and right will point to number `5`

### 3. Find position in a binary array [0,0,0,0,0,1,1,1,1] or [false,false,false,true,true,true]

If The value you need to get is first `1`, you can try this code

```java
while(left < right) {
    int mid = (int)Math.floor((left + right)/2);
    if(nums[mid] == target) return mid;
    else if(nums[mid] < target) {
        left = mid + 1;
    } else {
        right = mid;
    }
}
```

Why  `right = mid` in this stituation better than `right = mid - 1;`?
Because we know that, the first occurrence of `1` will be on this position or `left` of it.
Same with `right`, if you want to get the last of `0`, you should use `left = mid` and `right = mid - 1`.

#### Ascending Order and Rotated array

Rotated array is a Ascending Order array and was move some element to right.
For example  
`nums = [0,1,2,4,5,6,7]`
`[4,5,6,7,0,1,2] if it was rotated 4 times.`
`[0,1,2,4,5,6,7] if it was rotated 7 times.`

* To create a rotated array from asc array, for example `[0,1,2,4,5,6,7]` and `times = 4`.
We split it to `[0,1,2]` and `[4,5,6,7]`, reverse them to `[2,1,0]` and `[7,6,5,4]`. Now it will be `[2,1,0,7,6,5,4]`, reverse one time more, and it will be `[4,5,6,7,0,1,2]`.

* To find and item in a rotated array.  
You can see that, with condition `nums[i] < nums[0]` this condition can be convert to `[0,0,0,0,1,1,1]`
we can find the pivot to split array to `[0,0,0,0,0]` and `[1,1,1,1]`, and find value in two sub array.

* To find minimum from this kind of array, instead of compare with the `nums[0]` you should comare with `nums[right]`, like this:  
Cause the array can be `[1,2,3,4,5,6,7]` and left will be reach the `nums.length;`

```java
public int findMin(int[] nums) {
    int left = 0, right = nums.length - 1;
    while(left < right) {
        int mid = (int)Math.floor((right + left) / 2);
        if(nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return nums[left];
}
```


### 4. Sample challenges

[**704 - Binary Search**][3.1]  
[**278. First Bad Version**][3.2]  
[**35. Search Insert Position**][3.3]  

[1]: https://www.geeksforgeeks.org/binary-search/
[3.1]: https://leetcode.com/problems/binary-search/
[3.2]: https://leetcode.com/problems/first-bad-version/
[3.3]: https://leetcode.com/problems/search-insert-position/