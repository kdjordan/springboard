### React Refactor to Class based components

## Objective  

The point of this exercise was to take code that was written using functional components and refactor them to use class based components.  This was a little tricky as there seems to be many different ways to write class based components, depending upon what version of React you are using. I went with a more modern (i think) approach of using a constructor class and nested state. As I was reading through some StackOverflow comments, it appears that using a nested state object is frowned upon, and the descriptions I read of why, makes sense. It seems that this causes the rerendering upon state update to be a little wonky, and this seems to be related to a shallow vs deep copy of an object issue. I got it working however and with that I'll think I'll move on, as this design pattern is not being used anymore with more recent versions of React. In the end, the only reason I was using nested state was to provide a limit to the number of jokes I was returning. I could have passed this limit down as a prop from the App.js file, but it was a good learning scenario. It was good to learn a little deeper about what is happening under the hood in React by exploring this historic paradigm.

```
npm install && npm start
```
