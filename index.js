require('datejs');

function combineUsers(...args) {
  // Step 2: Initialize the return object
  const combinedObject = {
    users: []
  };
  
  // Step 3: Loop through args to isolate each array
  for (const userArray of args) {
    // Step 4: Merge arrays using spread operator
    combinedObject.users = [...combinedObject.users, ...userArray];
  }
  
  // Step 5: Get today's date
  const today = new Date();
  combinedObject.merge_date = today.toString('M/d/yyyy');
  
  // Step 7: Return object
  return combinedObject;
}

// Example usage:
const users1 = ['alice', 'bob', 'charlie'];
const users2 = ['david', 'eve'];
const users3 = ['frank', 'grace', 'heidi'];

const result = combineUsers(users1, users2, users3);
console.log(result);


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};