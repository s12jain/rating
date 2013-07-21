/*
 * Rating.js v1.0 - (c) Tarun Sharma
 *
 * GNU General Public License
 * http://www.gnu.org/licenses/
 * 
 */

var rating=function(){var e,t,n,r,s,o;t={completeStar:"completeStar",halfStar:"halfStar",emptyStar:"emptyStar"};n=function(e){var t="<ul>";for(i=0;i<e;i++){t+=r()}return t+="</ul>"};r=function(){if(e>=.66){e--;return'<li class="'+t.completeStar+'"></li>'}else if(e>.33){e--;return'<li class="'+t.halfStar+'"></li>'}else{return'<li class="'+t.emptyStar+'"></li>'}};s=function(t){stars=t.split("-");e=stars[0];return n(stars[1])};o=function(){this.init=s};return o}();(function(e){e.fn.rating=function(){var t,n;t=e(this);n=new rating;t.each(function(){var t,r;t=e(this);r=t.data("rating");t.html(n.init(r));t.removeAttr("data-rating")})}})(jQuery)