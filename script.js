const cursor = document.getElementById('cursor');
const follwer = document.getElementById('follwer');
const mouse = { x: 0, y: 0 };

document.addEventListener('mousemove', function (event) {
  mouse.x = event.pageX;
  mouse.y = event.pageY;
});
window.addEventListener('scroll', function (e) {
  mouse.y = window.scrollY;
  // !ISSUE 스크롤할 때는 마우스를 움직이는 일이 거의 드물기 때문에 커스텀 커서가 가만히 반응하지 않는다!
});

function setStalkerPos() {
  let trs = `translate(calc(${mouse.x}px - 50%), calc(${mouse.y}px - 50%))`;
  cursor.style.transform = trs;
  follower.style.transform = trs;
}

(function animate() {
  setStalkerPos();

  requestAnimationFrame(animate);
})();

//
const stalkerActiveElems = document.querySelectorAll('.stalker-active');

stalkerActiveElems.forEach((el) => {
  el.addEventListener('mouseenter', function (e) {
    cursor.classList.add(':stalker-active');
    follower.classList.add(':stalker-active');
  });

  el.addEventListener('mouseleave', function (e) {
    cursor.classList.remove(':stalker-active');
    follower.classList.remove(':stalker-active');
  });
});
