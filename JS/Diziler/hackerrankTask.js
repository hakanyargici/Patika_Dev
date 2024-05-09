function getSecondLargest(nums) {
    var largestNumber = nums[0];
    for (var i = 1; i < nums.length; i++){
        if (nums[i] > largestNumber){
            largestNumber = nums[i];
        }
    }

    var secondNumber = 0; // Başlangıç değeri olarak en küçük olmayan bir sayı seçilir.
    for (var i = 0; i < nums.length; i++){
        if (nums[i] !== largestNumber && nums[i] > secondNumber){
            secondNumber = nums[i];
        }
    }

    console.log(largestNumber)
    console.log(secondNumber)
    return secondNumber
}

let nums = [10, 9, 9, 8, 8, 11, 8, 0, 9, 1]
getSecondLargest(nums)
