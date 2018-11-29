// write String.prototype.mySlice. It should take a start index and an
// (optional) end index.

// write Array.prototype.myReduce (analogous to Ruby's Array#inject).

// write Array.prototype.quickSort(comparator). Here's a quick refresher if
// you've forgotten how quickSort works:
//   - choose a pivot element from the array (usually the first)
//   - for each remaining element of the array:
//     - if the element is less than the pivot, put it in the left half of the
//     array.
//     - otherwise, put it in the right half of the array.
//   - recursively call quickSort on the left and right halves, and return the
//   full sorted array.

// write myFind(array, callback). It should return the first element for which
// callback returns true, or undefined if none is found.

// write sumNPrimes(n)

// write Function.prototype.myBind.
Function.prototype.myBind = function(ctx,...bindArgs){
  let fn = this;
    return function(...callArgs) {
      return fn.apply(ctx, bindArgs.concat(callArgs));
    };
  };

// write Function.prototype.inherits.

Function.prototype.myCurry = function(numArgs){
  let args = [];
  let fnc = this;
  
  const _myCurried = function(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return fnc(...args);
    } else {
      return _myCurried;
    }
  };
  return _myCurried;
};

Function.prototype.myCall = function(ctx, ...args) {
  return this.apply(ctx, args);
};

Array.prototype.bSearch = function(target) {
  if (this.length === 0) return null;
  
  let mid = Math.floor(this.length/2);
  
  if (this[mid] === target) {
    return mid;
  } else if (this[mid] > target) {
    return this.slice(0, mid).bSearch(target);
  } else {
    let result = this.slice(mid + 1).bSearch(target);
    return result === null ? result : result + mid + 1;
  }
};

Array.prototype.mergerSort = function(func){
  if(this.length <= 1) return this;
  
  if(!func){
    func = (x, y) => {
      if(x === y) return 0;
      if( x < y) return -1;
      return 1;
    };
  }
  
  let mid = Math.floor(this.length/2);
  let left =  this.slice(0, mid).mergerSort(func);
  let right = this.slice(mid).mergerSort(func);
  
  return left.merge(right, func);
};

Array.prototype.merge = function(arr, func){
  let result = [];
  
  while(this.length && arr.length){
    switch(func(this[0], arr[0])){
      case -1: 
        result.push(this.shift());
        break;
      case 0:
        result.push(this.shift());
        break;
      case 1:
      result.push(arr.shift());
      break;
    }
  }
  
  return result.concat(this).concat(arr);
};

String.prototype.jumbleSort = function(alphabet) {
  alphabet = alphabet || 'abcdefghijklmnopqrstuvwxyz'.split('');
  let str = this.split('');
  let swapped = true;
  
  while (swapped) {
    swapped = false;
    
    for (let i = 0; i < str.length; i++) {
      if (str[i + 1]) {
        if (alphabet.indexOf(str[i]) > alphabet.indexOf(str[i + 1])) {
          [str[i], str[i + 1]] = [str[i + 1], str[i]];
          swapped = true;
        }
      } 
    }
  }
  return str.join('');
  
};

function pigLatinify(sentence) {
  let words = sentence.split(' ');
  const latinified = function(word) {
    let vowels = 'aeiou';
    if (vowels.indexOf(word[0]) != -1) {
      return `${word}ay`;
    } else {
      while (vowels.indexOf(word[0]) === -1) {
        for (let i = 0; i < word.length; i++) {
          if (word[0] === 'q' && word[1] === 'u') {
            word = word.slice(2, word.length) + word.slice(0, 2);
          } else {
            word = word.slice(1) + word[0];
          }
        }
      }
      return `${word}ay`;
    }
  };
  
  return words.map((word) => latinified(word));
}
