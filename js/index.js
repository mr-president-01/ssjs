const n = parseFloat(prompt('Enter a serial number of fibonacci'));

// cycle

function fiboLoop(n){
    let first = 1;
    let second =1;
    for (let i = 3; i <= n; i++){
        let next = first + second;
        first = second;
        second = next;
    }
    return second;
};
alert(fiboLoop(n));

// recursion 

function fiboRec(n){
    if (n <= 1){
        return n;
    } else {
        return fiboRec(n-1)+fiboRec(n-2);
    }
}
alert(fiboRec(n));

// array

function fiboArr(n){
    arr = [1,1];
    for (let i = 3; i <= n; i++){
        arr.push(arr[i-2]+arr[i-3]);
    }
    return arr.pop();
}

alert(fiboArr(n));
