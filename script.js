let btn = document.querySelector("#btn");
btn.addEventListener("click", async () => {
  const URL = "http://universities.hipolabs.com/search?country=United+Kingdom";
  await fetch(URL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.forEach((university) => {
        const markup = `<li>${university.name}</li>`;
        document.querySelector("ul").insertAdjacentHTML("beforeend", markup);
        console.log(markup);
      });
      console.log(data); // Log the entire data object if needed
    })
    .catch((error) => {
      console.log(error);
    });
});
