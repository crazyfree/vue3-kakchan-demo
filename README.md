## vue3-demo
[![Netlify Status](https://api.netlify.com/api/v1/badges/23ead64f-d48d-4df9-9952-e287181a17ec/deploy-status)](https://app.netlify.com/sites/vue3demo/deploys)

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

### Final test results 
The test results should be updated automatically to another place in a real project 

 % Coverage report from v8
File                    | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s       
------------------------|---------|----------|---------|---------|-------------------------
All files               |    46.4 |    47.05 |   17.64 |    46.4 |                         
 src                    |       0 |        0 |       0 |       0 |                         
  App.vue               |       0 |        0 |       0 |       0 | 1-17                    
  main.ts               |       0 |        0 |       0 |       0 | 1-14                    
 src/components         |   94.05 |      100 |   66.66 |   94.05 |                         
  SearchInput.vue       |     100 |      100 |     100 |     100 |                         
  UserPosts.vue         |   91.11 |      100 |     100 |   91.11 | 22-25                   
  UserTable.vue         |   95.23 |      100 |      50 |   95.23 | 9-10                    
 src/components/icons   |       0 |        0 |       0 |       0 |                         
  IconCommunity.vue     |       0 |        0 |       0 |       0 | 1-7                     
  IconDocumentation.vue |       0 |        0 |       0 |       0 | 1-7                     
  IconEcosystem.vue     |       0 |        0 |       0 |       0 | 1-7                     
  IconSupport.vue       |       0 |        0 |       0 |       0 | 1-7                     
  IconTooling.vue       |       0 |        0 |       0 |       0 | 1-19                    
 src/router             |       0 |        0 |       0 |       0 |                         
  index.ts              |       0 |        0 |       0 |       0 | 1-15                    
 src/stores             |      68 |      100 |      20 |      68 |                         
  user.ts               |      68 |      100 |      20 |      68 | 30-33,35-38,40-41,43-48 
 src/views              |       0 |        0 |       0 |       0 |                         
  UserTableView.vue     |       0 |        0 |       0 |       0 | 1-34                    

