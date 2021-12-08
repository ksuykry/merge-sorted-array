var merge = function(nums1, m, nums2, n) {
    let zeroCount = 0;
    for(let i = 0; i < nums2.length; i++){
        let currNum = nums2[i];
        nums1.push(currNum);
    }
    for(let i = nums1.length - nums2.length-1; i >= 0; i--){
        let currNum = nums1[i];
        if(currNum === 0 && zeroCount < n){
            nums1.splice(i, 1);
            zeroCount ++;
        }
        else{
            break;
        }
    }
    nums1 = nums1.sort(function(a,b){
        return a-b;
    })
    
    return nums1;
    
};
