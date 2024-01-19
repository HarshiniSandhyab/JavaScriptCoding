function checkAnagrams(s1, s2) {
    return new Promise((resolve, reject) => {
      if (typeof s1 !== 'string' || typeof s2 !== 'string') {
        reject('Both inputs should be strings');
      } else {
        let a = s1.toLowerCase().split('').sort().join('');
        let b = s2.toLowerCase().split('').sort().join('');
  
        if (a === b) {
          resolve('anagrams');
        } else {
          resolve('not anagrams');
        }
      }
    });
  }
  
  // Usage example:
  const string1 = "Silent";
  const string2 = "Listen";
  
  checkAnagrams(string1, string2)
    .then(result => {
      console.log(result); // This will print either 'anagrams' or 'not anagrams'
    })
    .catch(error => {
      console.error(error); // Handle any errors that occurred during the check
    });
  