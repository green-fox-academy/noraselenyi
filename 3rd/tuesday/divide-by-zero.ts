// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0


const n = 0;

function divider(n){
    let result = n / 10;
    return result;
}

try {
    console.log(divider(n));
  
    if(n === 0) {
      throw new Error('fail');
    }
  } catch (e) {
    console.log(e.message);
  }
