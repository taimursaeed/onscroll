# OnScroll

  

Animate elements in the website on scroll.

![onScroll Demo](images/demo.gif)

## Demo

https://taimursaeed.github.io/onscroll/

  

## Prerequisite

[jQuery](https://jquery.com/)

  

## Setup

Get the CSS and JS files from the `/dist` folder

  

Include CSS and JS files in the page

  

```html
<link rel="stylesheet" href="/path/onscroll-animation.css">
...
<script src="/path/onscroll-animation.js"></script>
```

  



  

## Usage

Add attribute `data-animation` to the element you wish to animate.

  

E.g
```html
 <div data-animation="fade">
 ```

  

## Animation Options

  

Change animation behavior with `data-animation-*` attributes.

```html

<div
  data-animation="fade"
  data-animation-delay="1000"
  data-animation-speed="3000"
  data-animation-offset="300"
>

</div>

```

#### `data-animation-delay`

Controls the delay, value in milliseconds

#### `data-animation-speed`

Controls the speed, value in milliseconds. Default `1000ms`

#### `data-animation-offset`

Controls the trigger point of the animation, value in `px`.

  

### Predefined values

`data-animation`

- fade

- fade-up

- fade-down

- fade-left

- fade-right

  

## Customization

Use `onscroll-animation.css` to extend animation or change current ones. Like default distance for animation is `30px`.

You can change it to `100px` like this:

```css

[data-animation="fade-up"] {
  transform: translate(0, 100px);
}

```

  
  

## Contribute

  

Please feel free to contribute pull requests or create issues for bugs and feature requests.
