# Image overlay

- Use z-index and position relative
- after::psuedo element

**Source**
```html
<!DOCTYPE html>
<html>
<head>
	<title>Overlay</title>
	<style type="text/css">
		.body {
			padding:0;
			margin:0;
		}
		.full-overlay {
			background-image: url(hero.jpg);
			background-position: center;
			background-attachment: fixed;
			background-size: cover;
			width: 100%;
			height: 350px;
			position: relative;
			z-index: 1;
		}

		.full-overlay::after {
			background-color: rgba(0,0,0,0.8);
			content:'';
			position: absolute;
			top:0;
			left:0;
			right: 0;
			bottom: 0;
			z-index: -1;
		}
		h2 {
			margin: 0;
			padding:0;
			color:#fff;
		}
	</style>
</head>
<body>
<div class="full-overlay">
  <div class="content">
    <h2>Full black overlay with opacity</h2>
  </div>
</div>
</body>
</html>
```
