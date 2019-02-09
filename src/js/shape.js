import $ from 'jquery';

let lFollowX = 0;
let lFollowY = 0;
let x = 0;
let y = 0;
let friction = 6 / 30;
let rotated = false;
let ranRot = 0;
let ranRot2 = 0;

if (!rotated) {
   ranRot = Math.random(0, 360) * 100;
   ranRot2 = Math.random(0, 360) * 100;
   rotated = false;
}
function loadPage() {
   $("main-1-fadein").animate({
      width: "0px"
   }, 100);
}
function moveShape() {
     x+= (lFollowX - x) * friction;
     y+= (lFollowY - y) * friction;
     let translate = 'translate(' + x + 'px, ' + y + 'px) rotate(' + ranRot + 'deg)';

     $('.shape').css({
        '-webkit-transform': translate,
        '-moz-transform': translate,
        'transform': translate
     });
     window.requestAnimationFrame(moveShape);
}
function moveShapeOpposite() {
     x-= (lFollowX + x) * friction;
     y-= (lFollowY + y) * friction;
     //var ranRot = Math.random(-180, 180) * 100;

     let translate = 'translate(' + x + 'px, ' + y + 'px) rotate(' + ranRot2 + 'deg)';

     $('.shape-opposite').css({
        '-webkit-transform': translate,
        '-moz-transform': translate,
        'transform': translate
     });
     window.requestAnimationFrame(moveShapeOpposite);
}
function rotateRan() {
      var ran = Math.random(-180,180) * 100;
      return ran;
}
$(window).on('mousemove click', function(e)  {
      var testX = Math.max(-1000, Math.min(1000, $(window).height() / 2 - e.clientX));
      var testY = Math.max(-1000, Math.min(1000, $(window).width() / 2 - e.clientY));

     lFollowX = (15 * testX) / 100; // 100 : 12 = lMouxeX : lFollow
     lFollowY = (30 * testY) / 100;
});
loadPage();
moveShape();
moveShapeOpposite();
