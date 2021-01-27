

## CSS Selector 3n+3
- ref : https://css-tricks.com/how-nth-child-works/

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
      <div class="wrapper">
      <div class="foo">1</div>
      <div class="foo">2</div>
      <div class="foo">3</div>
      <div class="foo">4</div>
      <div class="foo">5</div>
      <div class="foo">6</div>
      <div class="foo">7</div>
      <div class="foo">8</div>
      <div class="foo">9</div>
      <div class="foo">10</div>
     </div>
</body>
</html>
```

```css
.wrapper {
  display: flex;
  flex-wrap: wrap;
}

.foo {
  background:yellow;
}

.foo {
  flex : 1 1 auto;
  flex-wrap:nowrap;
  width:48%;
  margin-bottom:30px;
  margin-right:4%;
}

.foo:nth-child(2n+2) {
  background: blue;
}

.foo:nth-child(2n+2) {  
  margin-right:0;
}



```