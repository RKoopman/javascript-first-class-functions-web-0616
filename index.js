function receivesAFunction(callback){
  callback()
}

function returnsANamedFunction(){
  return fn = function thingy() {}
}

function returnsAnAnonymousFunction(){
  return function() {}
}
//
// function receivesAFunction(callback) {
//   callback()
// }
//
// function returnsANamedFunction(){
//   return nF = function name() {}
// }
//
// function returnsAnAnonymousFunction() {
//   return function() {}
// }
