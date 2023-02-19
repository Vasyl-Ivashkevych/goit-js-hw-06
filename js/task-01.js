const elementCategory = document.querySelectorAll(".item");
console.log("Number of categories:", elementCategory.length);

elementCategory.forEach(element => {
  console.log("Category:", element.querySelector("h2").textContent);
  console.log("Elements:", element.querySelectorAll("li").length);
});
