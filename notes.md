## The arrow functions address the scope issue that comes with the anonymous functions using the 'this' keyword.
### resources are here:
https://medium.com/tfogo/advantages-and-pitfalls-of-arrow-functions-a16f0835799e
https://stackoverflow.com/questions/49082148/what-scope-related-problems-javascript-arrow-functions-solve

## JSX elements can have only one parent
## An alternative to JSX is using React.Createlement. But this is very cumbersome to create elements in this way.
## if we want to inject some dynamic content into react JSX, we need to use single curly braces
## we can access children elements of the JSX element using the special property called 'childern' ex: props.children'
## state property can be only used inside a component that extends from react Component. But in the latest versions of react 16.8 or so, we can even use this property in normal components also
## Till 16.8, the only way to modify the state is in class component using "setState" method. But in 16.8 on wards, the state can also be changed from the functional components using the react hooks called "useState"

