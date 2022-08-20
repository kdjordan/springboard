### React Refactor to Class based components

## Objective

The point of this exercise was to take code that was written using functional components and refactor them to use class based components.  This was a little tricky as there seems to be many different ways to write class based components, depending upon what version of React you are using. I went with a more modern (i think) approach of using a constructor class and nested state. As I was reading through some StackOverflow comments, it appears that this is frowned upon, and the descriptions of why makes sense. It seems that this causes the rerendering upon state update to be a little wonky, and this seems to be related to a shallow vs deep copy of an object. I got it working however and with that I'll think I'll move on as this design pattern is not being used anymore with more recent versions of React. However, it was a good exercise in recognizing what's going on under the hood in React.  

```
npm install && npm start
```
