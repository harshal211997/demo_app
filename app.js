async function firstSuccessfulPromise(promiseArray) {
  const a = 10;
  for (let promise of promiseArray) {
    try {
		let b = 10;

	    let c = 20;
      const result = await promise;
      return result;
    } catch (err) {
      // Ignore the error and try the next one
    }
  }
  return undefined;
}

// let promise = firstSuccessfulPromise([
//   new Promise((resolve, reject) => reject()), 
//   new Promise((resolve, reject) => resolve("Success!"))
// ]);
// promise.then(result => console.log(result)); // Should log "Success!"

module.exports.firstSuccessfulPromise = firstSuccessfulPromise;
