var buttonNext = document.querySelector(".fa-circle-chevron-right"); //Кнопка вперед
var buttonPrev = document.querySelector(".fa-circle-chevron-left"); //Кнопка назад
var items = document.querySelectorAll(".trainers-item"); //Массив карточек
var countItems = items.length; //Количество карточек
var parent = items[0].parentNode; //Родитель карточек
var leftLineParent = parent.getBoundingClientRect().left; //Левая граница родителя
var leftLineItem = items[1].getBoundingClientRect().left; //Левая граница второго изображения
var width = leftLineItem - leftLineParent; //Ширина карточки с маргином
var offset = 0; //Величина смещения
var firstVisible = 0;
var lastVisible = 2;

//Сдвиг карточек вперед
buttonNext.addEventListener("click", function (next) {
  if (lastVisible != countItems - 1) {
    offset = offset + width;
    console.log("Вперед offset" + offset);
    for (var i = 0; i < countItems; i++) {
      items[i].style.transform = `translateX(-${offset}px)`;
      items[i].style.transition = "0.3s";
    }
    firstVisible++;
    lastVisible++;
  }
  console.log("lastVisible" + lastVisible);
  console.log("countItems" + countItems);
  if (lastVisible === countItems - 1) {
    buttonNext.classList.add("arrow-locked");
    buttonNext.classList.remove("arrow-unlocked");
    buttonNext.removeEventListener("click", next);
  }
  if (firstVisible === 1) {
    buttonPrev.classList.add("arrow-unlocked");
    buttonPrev.classList.remove("arrow-locked");
    buttonPrev.style.cursor = "pointer";
  }
});

// Сдвиг карточек назад
buttonPrev.addEventListener("click", function (prev) {
  if (firstVisible != 0) {
    offset = offset - width;
    console.log("Назад offset" + offset);
    for (var i = 0; i < countItems; i++) {
      items[i].style.transform = `translateX(-${offset}px)`;
      items[i].style.transition = "0.3s";
    }
    firstVisible--;
    lastVisible--;
  }
  console.log("lastVisible" + lastVisible);
  console.log("countItems" + countItems);
  if (firstVisible === 0) {
    buttonPrev.classList.remove("arrow-unlocked");
    buttonPrev.classList.add("arrow-locked");
    buttonPrev.removeEventListener("click", prev);
  }
  if (lastVisible === countItems - 2) {
    buttonNext.classList.remove("arrow-locked");
    buttonNext.classList.add("arrow-unlocked");
  }
});

// Выделение карточек в стоимости
var itemsPrice = document.querySelectorAll(".package-item"); //Массив карточек
var chosenItem = document.querySelector(".chosen"); //Выбранная карточка по умолчанию
for (var i = 0; i < itemsPrice.length; i++) {
  itemsPrice[i].addEventListener("click", function () {
    document.querySelector(".package-group .chosen").classList.remove("chosen");
    //   this - элемент, на котором был клик
    this.classList.add("chosen");
  });
}
console.log(chosenItem.classList[2]);
