# web-development
This is assignment 5 where we need to use SCSS files instead of CSS.\

- Use SCSS to style the HTML page
- We can use previous assignments and edit them
- Use functions, variables etc to make the SCSS file


# Features Implemented:

## Variables
```
$color_1: black;
$color_2: white;
$font-family_1: Arial, Helvetica, sans-serif;
$font-family_2: 'Times New Roman', Times, serif;
$background-color_1: white;
$background-color_2: rgb(145, 144, 144);
$background-color_3: rgb(68, 64, 64);
$background-color_4: black;
```
## Custom properties
```
:root {
    --main-color: $color_1;
  }
  
p {
   color: var(--main-color);
}

```

## Interpolation
```
@mixin headerStyle($size, $align, $font) {
    header {
		background-color: $background-color_5;
        box-shadow: 6px 4px 4px grey;
	    padding-top: 10%;
	    padding-bottom: 10%;
	    text-decoration: underline;
	    #{$size}: large;
	    #{$align}: center;
	    #{$font}: $font-family_1;
	    font-style: bold;
	    background-size: cover;
	    background-repeat: no-repeat;
    }
}
@include headerStyle(font-size, text-align, font-family);

```

## Nesting
```
color: $color_1;
	span {
		display: none;
		position: absolute;
		bottom: 0;
		width: 70%;
		padding: 10px;
	}
	&:hover {
		span {
			display: block;
		}
	}
```

## Placeholder
```
%link {
	color: $color_1;
	span {
		display: none;
		position: absolute;
		bottom: 0;
		width: 70%;
		padding: 10px;
	}
	&:hover {
		span {
			display: block;
		}
	}
}

a {
	@extend %link;
}
```

## Mixin
```
$breakpoint: 480px;

@mixin mobile-up {
  @media screen and (min-width: $breakpoint) {
    @content;
  }
}

@include mobile-up {
    #nav-bar {
      width: 100%;
    }
    .Main-container {
      width: 70%;
    }
    section {
      width: auto;
    }
	video{
		width: 50%;
		height: 50%;
	}
  }  
```
## Function
```
$main_background_color: white;
$background-color_5: changeColor($main_background_color);

@function changeColor($color){
    @if(lightness($color) > 70){
        @return rgb(241, 221, 179);
    }
    @else{
        @return white;
    }
}
```

## Additional features
1. Added ability to scale the font size based on screen size using mixin
```
//additional componenets i.e. scalable text size using mixin
@mixin responsive-font($min-size, $max-size, $min-width, $max-width) {
	@media screen and (min-width: #{$min-width}) and (max-width: #{$max-width}) {
	  font-size: calc(#{$min-size} + 2 * (#{$max-size} - #{$min-size}) * ((100vw - #{$min-width}) / (#{$max-width} - #{$min-width})));
	}
  }
```

2. Typography variables
```
$font-size-small: 14px;
$font-size-medium: 16px;
$font-size-large: 18px;
$line-height: 1.5;
$font-weight-bold: bold;
```

3. Used basic math operations in your code to calculate values, which is a useful feature of SASS.
