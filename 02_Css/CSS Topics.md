# Css Topics

## Table of Contents
- [Box sizing](#box-sizing)
- [Float](#float)
- [Floats vs Inlineblock](#floats-vs-inlineblock)

## Box-sizing

The CSS box-sizing property is used to alter the default CSS box model used to calculate width and height of the elements.

In CSS, by default, the width and height you assign to an element is applied only to the element's content box. If the element has any border or padding, this is then added to the width and height to arrive at the size of the box that's rendered on the screen.

The ```box-sizing``` property can be used to adjust this behavior:

- ```content-box``` is the default, and gives you the default CSS box-sizing behavior. If you set an element's width to 100 pixels, then the element's content box will be 100 pixels wide, and the width of any border or padding will be added to the final rendered width.

- ```border-box``` tells the browser to account for any border and padding in the value you specify for width and height. If you set an element's width to 100 pixels, that 100 pixels will include any border or padding you added, and the content box will shrink to absorb that extra width. This typically makes it much easier to size elements.
Some experts recommend that web developers should consider routinely applying box-sizing: border-box to all elements.

**Syntax**

content-box | border-box

```content-box```
- This is the initial and default value as specified by the CSS standard. The width and height properties are measured including only the content, but not the padding, border or margin. For example, if you set .box {width: 350px;}, then apply {border: 10px solid black;} , then the rendered result is a box of width: 370px.

```border-box```
- The width and height properties include the content, the padding and border, but not the margin. Note that padding and border will be inside of the box e.g. .box {width: 350px; border: 10px solid black;} leads to a box rendered in the browser of width: 350px. The content box can't be negative and is floored to 0, making it impossible to use border-box to make the element disappear.


### Examples
```html
<div class="content-box">Content box</div>
<br>
<div class="border-box">Border box</div>
```

```css
div {
  width: 160px;
  height: 80px;
  padding: 20px;
  border: 8px solid red;
  background: yellow;
}

.content-box {
  box-sizing: content-box;
}

.border-box {
  box-sizing: border-box;
}
```

# Float

Float is essentially the idea of pushing

The float CSS property specifies that an element should be placed along the left or right side of its container, allowing text and inline elements to wrap around it. The element is removed from the normal flow of the web page, though still remaining a part of the flow elements side by side with each other

As mentioned above, when an element is floated, it is taken out of the normal flow of the document (though still remaining part of it). It is shifted to the left, or right, until it touches the edge of its containing box, or another floated element.

### Floating image inside a paragraph

There are four valid values for the float property. 
**Left and Right** float elements those directions respectively. 
**None** (the default) ensures the element will not float

- Let's float a image inside a p tag, See how text wraps around the image

```html
<section>
  <p>this itag Welcome to your first major CSS projes a p tag Welcome to your first major CSS project. This is design	There will be many times in your life as a developer that you will get stuck, you don't know where to start and you never start 
	  <img style="float:left; margin-right:10px; margin-top:10px; width:250px;border:solid 1px blue;"  src="https://cdn.pixabay.com/photo/2017/10/26/17/53/wine-2891894__340.jpg">
	  because it's hard to find the right place to start Welcome to your first major CSS project. This is designed to be difficult and to give you hands on experience with a real world project.p tag Welcome to your first major CSS projes a p tag Welcome to your first major CSS project. This is design s some Welcome to your first major CSS project. This is designed to be difficult and to give you hands on experience with a real wo hard to find the right place to start Welcome to your first major CSS project. This is designed to be difficult and to give you hands on experience with a re.
 </p>
</section>
```

**Problem**

Let's see the scenario
- We float one img to left and one to right and we need a line of text above it. but it doesn't work?

```html
<section>
      <p >We need some text, so lets put it, shall</p>
      <img style="float:left; margin-right:10px; margin-top:10px; width:750px; border:solid 1px red;"  src="https://cdn.pixabay.com/photo/2017/10/26/17/53/wine-2891894__340.jpg">
       <img style="float:right; margin-right:10px; margin-top:10px; width:750px; border:solid 1px red;"  src="https://cdn.pixabay.com/photo/2017/10/26/17/53/wine-2891894__340.jpg">
</section>
```

### Clearing the Float

Clear has four valid values as well. Both is most commonly used, which clears floats coming from either direction. Left and Right can be used to only clear the float from one direction respectively. None is the default.

In our problem, set clear to both, on the p tag, so it clears room for paragraph to sit.

```html
<section>
  <p style="clear:both;">We need some text, so lets put it, shall</p>
  <img style="float:left; margin-right:10px; margin-top:10px; width:750px; border:solid 1px red;"  src="https://cdn.pixabay.com/photo/2017/10/26/17/53/wine-2891894__340.jpg">
   <img style="float:right; margin-right:10px; margin-top:10px; width:750px; border:solid 1px red;"  src="https://cdn.pixabay.com/photo/2017/10/26/17/53/wine-2891894__340.jpg">
</section>
```

The Border Collapse

If parent element contained nothing but floated elements, the height of it would literally collapse to nothing. If an element is taller than the element containing it, and it is floated, it will overflow outside of its container.

let's see a example here.
- Inside of a div, we have p tag, inside p tag, we have image floated to left.
- Let's give a border to the div, it doesn't work, like said floated element height get collapsed

```html
<section>
  <div style="border:solid 1px red">
  <p style="clear:left";><img style="float:left; width:750px; border:solid 1px red;"  src="https://cdn.pixabay.com/photo/2017/10/26/17/53/wine-2891894__340.jpg">This s some text xperience with a real world project.p tag Welcome to your first major CSS projes a p tag Welcome to your first major CSS project. This is design s some Welcome to your first major CSS project. This is designed to be difficult and to give you hands on experience with a record.</p>
  </div>
</section>
```

## Techniques for Clearing Floats

If you are in a situation where you always know what the succeeding element is going to be, you can apply the clear: both; value to that element and go about your business. This is ideal as it requires no fancy hacks and no additional elements making it perfectly semantic. Of course things don't typically work out that way and we need to have more float-clearing tools in our toolbox.

### Overflow 

The Overflow Method relies on setting the overflow CSS property on a parent element. If this property is set to auto or hidden on the parent element, the parent will expand to contain the floats, effectively clearing it for succeeding elements. This method can be beautifully semantic as it may not require an additional elements. However if you find yourself adding a new div just to apply this, it is equally as non-semantic as the empty div method and less adaptable. Also bear in mind that the overflow property isn't specifically for clearing floats. Be careful not to hide content or trigger unwanted scrollbars.

```
// set overflow to auto, on the parent element which has floating elements
<section>
  <div style="border:solid 1px red; overflow:auto;">
  <p style="clear:left";><img style="float:left; width:750px; border:solid 1px red;"  src="https://cdn.pixabay.com/photo/2017/10/26/17/53/wine-2891894__340.jpg">This s some text xperience with a real world project.p tag Welcome to your first major CSS projes a p tag Welcome to your first major CSS project. This is design s some Welcome to your first major CSS project. This is designed to be difficult and to give you hands on experience with a record.</p>
  </div>
</section>
}
```

### empty div 

The Empty Div Method is, quite literally, an empty div. <div style="clear: both;"></div>. Sometimes you'll see a <br> element or some other random element used, but div is the most common because it has no browser default styling, doesn't have any special function, and is unlikely to be generically styled with CSS. This method is scorned by semantic purists since its presence has no contextual meaning at all to the page and is there purely for presentation. Of course in the strictest sense they are right, but it gets the job done right and doesn't hurt anybody.


//after the floating elements, create a empty div and set clear to both. 
```html
<section>
  <div style="border:solid 1px red" class="">
    <p style="clear:left";><img style="float:left; width:750px; border:solid 1px red;"  src="https://cdn.pixabay.com/photo/2017/10/26/17/53/wine-2891894__340.jpg">This s some text xperience with a real world project.p tag Welcome to your first major CSS projes a p tag Welcome to your first major CSS project. This is design s some Welcome to your first major CSS project. This is designed to be difficult and to give you hands on experience with a record.</p>
    <div style="clear:both;"></div>
  </div>
</section>
```

### clearfix pseudo after

The Easy Clearing Method uses a clever CSS pseudo selector (:after) to clear floats. Rather than setting the overflow on the parent, you apply an additional class like "clearfix" to it. Then apply this CSS:

// use pseudo::after to fix
```css
.clearfix::after {
    content: "";
    clear: both;
    display: table;
}
```

## Floats vs Inlineblock

[CSS vs inlineblock](https://www.ternstyle.us/blog/float-vs-inline-block)

[IE fix](https://css-tricks.com/how-to-create-an-ie-only-stylesheet/)


