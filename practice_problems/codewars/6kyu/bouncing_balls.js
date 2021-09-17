"use strict";

// Bouncing Balls
// --------------

/*
A child is playing with a ball on the nth floor of a tall building. The 
height of this floor, h, is known.

He drops the ball out of the window. The ball bounces (for example), to 
two-thirds of its height (a bounce of 0.66).

His mother looks out of a window 1.5 meters from the ground.

How many times will the mother see the ball pass in front of her window 
(including when it's falling and bouncing?

Three conditions must be met for a valid experiment:
- Float parameter "h" in meters must be greater than 0
- Float parameter "bounce" must be greater than 0 and less than 1
- Float parameter "window" must be less than h.

If all three conditions above are fulfilled, return a positive integer, 
otherwise return -1.

Note:
- The ball can only be seen if the height of the rebounding ball is strictly 
greater than the window parameter.

Examples:
- h = 3, bounce = 0.66, window = 1.5, result is 3

- h = 3, bounce = 1, window = 1.5, result is -1 

(Condition 2) not fulfilled).


PEDAC
-----

inputs: 3 Numbers (Floats)
- first param: h = height of where the ball is dropped
- second param: bounce = 2/3 of h
- third param: window = height in meters where mother is
outputs: Number
- number of times the mother will see the ball
  - on its way down from the first drop
  and
  - on each bounce that is greater than the height of the window
- return -1 if the three conditions above are not met

Rules:
- Float parameter "h" in meters must be greater than 0
- Float parameter "bounce" must be greater than 0 and less than 1
- Float parameter "window" must be less than h.
  - return -1 if any of these conditions are not met
- return a positive integer representing the number of times the mother
will see the ball pass by her window

if h <= 0 || (bounce <= 0 || bounce >= 1) || window >= h return -1


Examples:
bouncingBall(h, bounce, window)

bouncingBall(3.0, 0.66, 1.5) -> 3
Drops ball from 3 meters
  - ball passes by window -> count 1
Ball hits the ground and bounces 0.66 * 3 = 1.98 meters back into the air
  - ball passes above window -> count 2
  - ball hits peak and starts to descend passing window again -> count 3
Ball hits ground and bounces 0.66 * 1.98 = 1.30 which is less than 1.5
so mother does not see the ball again.
-> result is 3

bouncingBall(3, 1, 1.5) -> -1
- condition 2 (bounce is not less than 1) fails

bouncingBall(30.0, 0.66, 1.5) -> 15
Drops ball from 30 meters
  - ball passes by window on descent -> count 1
Ball bounces 30.0 * 0.66 = 19.8
  - passes by window on ascent -> count 2
  - passes by window on descent -> count 3
Ball bounces 19.8 * 0.66 = 13.06
  - passes by window on ascent -> count 4
  - passes by window on desecent -> count 5
Ball bounces 13.068 * 0.66 = 8.623488
  - passses by window on ascent -> count 6
  - passes by window on descent -> count 7
Ball bounces 8.62488 * 0.66 = 5.6924208
  - passes by window up -> count 8
  - passes by window down -> count 9
Ball bounces 5.6924208 * 0.66 = 3.756997728
  - passes by window up -> count 10
  - passes by window down -> count 11
Ball bounces 3.756997728 * 0.66 = 2.479618500480001
  - passes by window up -> count 12
  - passes by window down -> count 13
Ball bounces 2.479618500480001 * 0.66 = 1.6365482103168008
  - passes by window up -> count 14
  - passes by window down -> count 15
Ball bounces 1.6365482103168008 * 0.66 = 1.0801218188090886 < window height
-> result = count 15

Mental Model:
create a count variable that will keep track of the number of passes by 
the window and set it to 1. This will ensure that we account for the first
drop of the ball. Create a while loop that will keep looping until h * bounce
is less than window height. On each loop, increment count by 2, 1 for the
ascent of the ball past the window and one for the descent of the ball past
the window back towards the ground. Return the count after the loop breaks.

Algorithm:
- if h is less than 0 or if window is greater than h or if bounce is not
greater than 0 but less than 1, return -1
  - if (h < 0 || window > h || bounce <= 0 || bounce >= 1) return -1
- create count variable and set to 1
- create a while loop
  - while (h * bounce > window)
    - h = h * bounce
    - count += 2
- return count
*/

function bouncingBall(h,  bounce,  windowHeight) {
  if (!h || !bounce || !windowHeight) return -1;
  if (h <= 0 || windowHeight >= h || (bounce <= 0 || bounce >= 1)) {
    return -1;
  }

  let count = 1;
  
  while (h * bounce > windowHeight) {
    h = h * bounce;
    count += 2;
  }
  
  return count;
}

// Recursion Solution from kdumo44 and leclerc

// function bouncingBall(h,  bounce,  window) {
//   if(h <= 0 || bounce <= 0 || bounce >= 1 || window >= h){
//     return -1;
//   }

//   var newHeight = h * bounce;
//   return bouncingBall(newHeight, bounce, window) + 2;
// }

console.log(bouncingBall(3.0, 0.66, 1.5))// 3
console.log(bouncingBall(30.0, 0.66, 1.5))// 15

// h < 0
console.log(bouncingBall(-1, 0.66, 3))// -1

// bounce is not between 0 and 1 
console.log(bouncingBall(10, 1, 1.5))// -1

// window is not less than h
console.log(bouncingBall(10, 0.66, 10))// -1

// missing param
console.log(bouncingBall(10, 0.66))