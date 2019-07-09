var axios  = require('axios');

// Where are we getting data?
// If this is defined in an environment variable in Netlify, we'll use that
// Otherwise, we'll just show you verythorough's
var url = process.env.GITHUB_REPO_LIST ||'https://api.github.com/users/verythorough/repos';

// Expose these results as data to Eleventy.
module.exports = () => {
    return new Promise((resolve, reject) => {
      // go get it
      axios.get(url).then((response) => {
          // Data passed to resolve() is available to Eleventy as `repos`
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
};