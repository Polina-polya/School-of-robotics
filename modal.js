var blackout = document.querySelector(".blackout"); //Затемнение с модальными окнами
var modals = document.querySelectorAll(".modal__trainers"); //Массив модальных окон
var itemTrainers = document.querySelectorAll(".trainers-item"); //Массив карточек преподавателей

itemTrainers.forEach((el) => {
  el.addEventListener("click", (e) => {
    var path = e.currentTarget.getAttribute("data-path"); //currentTarget - аналог this для стрелочной функции
    console.log("path " + path);
    blackout.style.display = "block";
    document.querySelector(`[data-target="${path}"]`).style.display = "block";
    document.body.style.overflow = "hidden";
  });
});

var modalsClose = document.querySelectorAll(".modal__close");
modalsClose.forEach((el) => {
  el.addEventListener("click", (e) => {
    var path = e.currentTarget.getAttribute("data-path"); //currentTarget - аналог this для стрелочной функции
    console.log("path " + path);
    blackout.style.display = "none";
    console.log(e);
    // document.querySelector(`[data-target="${path}"]`).style.display = "none";
  });
});
