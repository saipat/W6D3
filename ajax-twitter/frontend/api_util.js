const APIUtil = {
  followUser: (id) => (
    $.ajax({
      method: 'POST',
      url: `/users/${id}/follow`,
      dataType: 'JSON'
    })
  ),

  unfollowUser: (id) => (
    $.ajax({
      method: 'DELETE',
      url: `/users/${id}/follow`,
      dataType: 'JSON'
    })
  ),
  
  searchUsers: (queryVal, success) => (
    $.ajax({
      url: '/users/search',
      data: {
        username: `${queryVal}`
      },
      dataType: 'JSON'
    })
  )
};

module.exports = APIUtil;

function digitalRoot(num){
  if (num < 10) return num;
  let root = num % 10;
  num = Math.floor(num/10);
  num += root;
  return digitalRoot(num);
}


function subsets(array){
  if (array.length === 0) return [[]];
  
  let last = array[array.length-1];
  let subs = subsets(array.slice(0, array.length-1);
  
  return subs.concat(subs.map(el => {
    let newArr = el.slice();
    newArr.push(last);
    return newArr;
  }))

  Function.prototype.myBind = function(ctx,...bindArgs){
    return function(...callArgs) {
      return this.apply(ctx, bindargs.concat(callArgs));
    };
  };
