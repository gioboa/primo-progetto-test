/**
 * Init function
 */
function init() {
  document.querySelector('h1').style.color = 'purple';

  // ....
  // ....

  // NEW
  setTimeout(function () {
    document.querySelector('h1').style.color = 'red';
  }, 2000);
}
