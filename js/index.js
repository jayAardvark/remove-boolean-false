/*
  removes false boolean from array.  needs modification and then can be useable.
*/

function bouncer(arr) {

  for (var i = 0; i < arr.length; i++){
    var check = Boolean(arr[i]);
    console.log(check);
    if (check == false){
      arr.splice(i,1);
      i -= i;
    }
  }console.log(arr);
  return arr;
}

bouncer([false, null, 0, NaN, undefined, "",3]);
