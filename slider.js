class slider {
  constructor(slider) {
    this.sliderImg = document.querySelector("#sliderImg");
    this.buttonRight = document.querySelector("#buttonRight");
    this.buttonLeft = document.querySelector("#buttonLeft");
    this.span = document.querySelectorAll(".main__slider__paginations__span");
    this.contador = 0;
    this.interval = null;
    this.imgArray = [
      "./img/paris.webp",
      "./img/new york.webp",
      "./img/hong-kong.webp",
      "./img/san francisco.webp",
      "./img/shanghai.webp",
    ];
  }

  windowListener() {
    this.sliderImg.src = this.imgArray[0];
    this.interval = setInterval(() => this.nextPage(), 12000);
    this.buttonRight.addEventListener("click", () => this.nextPage());
    this.buttonLeft.addEventListener("click", () => this.previousPage());

    // Agregar listeners para los paginadores
    this.span.forEach((paginator, index) => {
      paginator.addEventListener("click", () => this.goToPage(index));
    });
  }

  nextPage() {
    this.contador++;
    if (this.contador > this.imgArray.length - 1) {
      this.contador = 0;
    }
    this.sliderImg.src = this.imgArray[this.contador];
    this.updatePaginationClasses();
    this.restartInterval();
  }

  previousPage() {
    this.contador--;
    if (this.contador < 0) {
      this.contador = this.imgArray.length - 1;
    }
    this.sliderImg.src = this.imgArray[this.contador];
    this.updatePaginationClasses();
    this.restartInterval();
  }

  paginationsNext() {
    if (this.contador === 0) {
      this.span[this.imgArray.length - 1].classList.remove(
        "paginations--active"
      );
    } else {
      this.span[this.contador - 1].classList.remove("paginations--active");
    }
  }

  paginationsPrevious() {
    if (this.contador === this.imgArray.length - 1) {
      this.span[0].classList.remove("paginations--active");
    } else {
      this.span[this.contador + 1].classList.remove("paginations--active");
    }
  }

  goToPage(index) {
    this.contador = index;
    this.sliderImg.src = this.imgArray[this.contador];
    this.updatePaginationClasses();
    this.restartInterval();
  }

  updatePaginationClasses() {
    this.span.forEach((paginator, index) => {
      if (index === this.contador) {
        paginator.classList.add("paginations--active");
      } else {
        paginator.classList.remove("paginations--active");
      }
    });
  }

  restartInterval() {
    clearInterval(this.interval);
    this.interval = setInterval(() => this.nextPage(), 12000);
  }

  start() {
    this.windowListener();
  }
}

const mySlider = new slider();
mySlider.start();
