# TenoxUI Project

Landing page design using React + TS + Vite + TenoxUI

## What is TenoxUI???

TenoxUI is a Utility First CSS Framework with **no css file**, all the styles and classes handled by javascript.

## Installation

Add tenoxui into your project :

```sh
npm i tenoxui@latest --save-dev
```

on your `App.jsx` or `App.tsx` :

```jsx
import { useLayoutEffect } from "react";
import tenoxui from "tenoxui";

const App = () => {
  // applying styles using useLayoutEffect function
  useLayoutEffect(() => {
    tenoxui();
  }, []);

  return <h1 className="tc-red">Red Color!</h1>;
};

export default App;
```

Tenoxui is working using DOM, so instead of using `useEffect`, it will loaded much and more faster using `useLayoutEffect`. (  Honestly, i dont even know this function at first, and use `useEffect` :/ But now, try it out on your react project :D )

## Functions

TenoxUI has several functions you can use to make your work easier.

### Adding types and properties

Let's see how you can add your own `type` and `property` using `defineProps` function.

1. Import the function

Adding `defineProps` function.

```js
import tenoxui, { defineProps } from "tenoxui";
```

2. Add new type

`defineProps` using an object as parameter, and we call `type` for the key's name and `property` as its value.

```js
// previous code

useLayoutEffect(() => {
  defineProps({
    // type: property
    hehehe: "color",
    d: "display",
    size: ["width", "height"] // 
  });

  tenoxui()
}, []);

// curent code
```

You can use array for property values, and it will set the value for all propties inside of the array. Code above, we defined type `size`, it will set value for both `width` and `height` at the same time, like `size-300px` it will make a square box with 300px size.

After that, you can use new defined type and property directly on your element.

```jsx
<div className="size-200px bg-#f00">
  <h1 className="hehehe-blue">Blue Text</h1>
</div>
```

Also, you can use our defined `types` and `properties` on [Docs](https://tenoxui.web.app/docs/extras/all-class) or [GitHub](https://github.com/tenoxui/css/blob/main/src/js/lib/property.js)

### Make Styles

Let's talking about `makeStyles` function. This function will apply styles by its selector. Letss code!

1. Add makeStyles function

```js
import tenoxui, { makeStyles } from "tenoxui";
```

2. Defining styles

`makeStyles` uses 2 parameters. First is `selector`, which element you want to give style. And `styles`, its value, that means this is what style you will add to the selector.

Let's give some styles for body, card, and title class:

```js
useLayoutEffect(() => {
  makeStyles({
    // selector: styles
    body: "bg-black tc-red", // black background and white text color
    ".card": "w-300px br-1rem bg-hotpink p-2rem",
    ".title": "fs-1.3rem tc-lightblue"
  });

  tenoxui();
}, []);
```

Now, add new component :

```jsx
<div className="card">
  <h1 className="title">Its title!</h1>
</div>
```

## Resource

TenoxUI : [Docs](https://tenoxui.web.app/) | [GitHub](https://github.com/tenoxui/css)
