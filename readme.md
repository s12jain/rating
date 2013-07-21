# Rating.js 1.0

Rating.js is a jQuery plugin that enable you to add dynamic star rating in your application


### Usage

**HTML Examples**

```html
/* Rating 1 out of 5 */
<div class="rating" data-rating="1-5"></div>

/* Rating 2.5 out of 5 */
<div class="rating" data-rating="2.5-5"></div>

/* Rating 9 out of 10 */
<div class="rating" data-rating="9-10"></div>

/* Rating 7.5 out of 10 */
<div class="rating" data-rating="7.5-10"></div>
```


**CSS Examples**

```css
.rating ul {
  display: inline-block;
  list-style: none;
}

.rating ul li {
  display: inline-block;
  margin-right: 10px;
  height: 48px;
  width: 48px;
}

.rating ul li.emptyStar {
  background: url(./images/empty_star.png) no-repeat left top;
}

.rating ul li.halfStar {
  background: url(./images/half_star.png) no-repeat left top;
}

.rating ul li.completeStar {
  background: url(./images/full_star.png) no-repeat left top;
}
```


**javaScript Examples**

```javascript
$(document).ready(function(){
  $('.rating').rating();
});
```


### Where can I get help?

For any queries and problems, please mail at tarunsharma20@gmail.com