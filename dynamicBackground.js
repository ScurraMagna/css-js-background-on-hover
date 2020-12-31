let columns = document.querySelectorAll(".column");

for (let i=0; i<columns.length; i++) {
  columns[i].addEventListener("mouseover", function (event) {
    for (let j=0; j<columns.length; j++) {
      if (columns[j].classList.contains("active")) {
        columns[j].classList.remove("active");
      }
      if (j == i) {
        columns[j].classList.add("active");
      }
    }
  });
}
