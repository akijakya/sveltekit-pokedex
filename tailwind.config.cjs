module.exports = {
  mode: 'jit', // we want to use the just in time compiler
  purge: ['./src/**/*.svelte'] // if we don't find a given tailwind class in one of these files, we won't include it in our final product - so purging out the css we don't use
}
