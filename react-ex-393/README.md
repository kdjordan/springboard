### Requirements
For this assignment you should create three JavaScript files:

src/helpers.js
This file should export two array helper functions:

choice(items): returns a randomly selected item from array of items
remove(items, item): removes the first matching item from items, if item exists, and returns it. Otherwise returns undefined.
src/foods.js
This file should export this array of fruits:

[
  "π", "π", "π", "π", "π", "π", "π", "π",
  "π", "π", "π", "π", "π₯", "π", "π₯",
];
src/index.js
This file should import the fruits and both array helpers. It should then:

Randomly draw a fruit from the array
Log the message βIβd like one RANDOMFRUIT, please.β
Log the message βHere you go: RANDOMFRUITβ
Log the message βDelicious! May I have another?β
Remove the fruit from the array of fruits
Log the message βIβm sorry, weβre all out. We have FRUITSLEFT left.β
Testing This
Run this with npm start and you should see something like this in your browser console:
```
I'd like one π, please

Here you go: π

Delicious! May I have another?

I'm sorry, we're all out. We have 14 left.
```

### TO RUN THIS PORJECT 
```
$ git clone https://github.com/kdjordan/springboard/tree/main/react-ex-393
$ cd react-ex-393
$ npm i
$ npm start
$ open broswer : http://localhost:3000/
$ open dev tools and check 'console'
```