/*
 * Rating.js v1.0 - (c) Tarun Sharma
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>
 *
 * 
 * Rating.js is a JavaScript plugin that enable you to display
 * dynamic start rating in your application
 * 
 */

 var rating = (function() {

  var rates, defaultClass, addRating, addStar, init, rating;

  defaultClass = {
    'completeStar' : 'completeStar',
    'halfStar'     : 'halfStar',
    'emptyStar'    : 'emptyStar'
  };

  addRating = function(maxRating) {
    var content = '<ul>';

    for(i=0; i<maxRating; i++) {
      content += addStar();
    }

    return content += '</ul>';
  };

  addStar = function() {

    if(rates >= 0.66) {
      rates --;
      return '<li class="' + defaultClass.completeStar + '"></li>';
    }

    else if(rates > 0.33) {
      rates --;
      return '<li class="' + defaultClass.halfStar + '"></li>';
    }

    else {
      return '<li class="' + defaultClass.emptyStar + '"></li>';
    }
  };

  init = function(starRating) {
    stars = starRating.split('-');
    rates = stars[0];
    return addRating(stars[1]);
  }

  rating = function() {
    this.init = init;
  }

  return rating;

})();

(function($) {
  $.fn.rating = function(){
    var target, starRating;

    target = $(this);
    starRating = new rating();

    target.each(function() {
      var self, rates;

      self = $(this);
      rates = self.data('rating');

      self.html(starRating.init(rates));
      self.removeAttr('data-rating');
    });
  };
})(jQuery);