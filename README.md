## vue3-demo
You can find the preview link [HERE]()

### Limitations
Since it's for demo purpose only I ignored the build process, so just lint and test are perform in CI CD

I also added in the husky that helps linting and unit testing locally on every commit before it gets pushed to repo. The unit test can be ignored corresponding to growing of project source code. 

The code coverage also be enabled but don't count on that, since we don't need test for everything but components. 

There is a preview link created automatically on each PR, that's help us to final test the changes on UI before finally rolling out.

### Known potential problems
There is a know issue, everytime I installed new package and then run `yarn lint` got error: 
```console 
There was a problem loading formatter: /Users/leo/workspace/sites/viziondary/vue3-demo/vue3-demo/node_modules/eslint/lib/cli-engine/formatters/stylish
Error: require() of ES Module /Users/leo/workspace/sites/viziondary/vue3-demo/vue3-demo/node_modules/strip-ansi/index.js from /Users/leo/workspace/sites/viziondary/vue3-demo/vue3-demo/node_modules/eslint/lib/cli-engine/formatters/stylish.js not supported.
Instead change the require of index.js in /Users/leo/workspace/sites/viziondary/vue3-demo/vue3-demo/node_modules/eslint/lib/cli-engine/formatters/stylish.js to a dynamic import() which is available in all CommonJS modules.
```

To fix: 
```
rm -rf node_modules yarn.lock && yarn
```
