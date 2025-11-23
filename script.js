let btn = document.querySelector("button");

let inner = document.querySelector("#inner");

let h1 = document.querySelector("h1");

let success = document.querySelector("#success");

let i = 0;
inner.style.width = 0 + "%";

btn.addEventListener("click", () => {
  let time = setInterval(() => {
    // console.log(i++);
    i++;
    console.log(i);
    btn.style.pointerEvents = "none";
    h1.innerHTML = i + "%";

    if (i === 100) {
      btn.innerText = "Downloded";
      btn.style.opacity = 0.3;
      btn.style.backgroundColor = "green";
      btn.style.pointerEvents = "none";
      success.style.display = "block";
    }

    inner.style.width = i + "%";
  }, 100);

  if ((inner.style.width = 100 + "%")) {
    setTimeout(() => {
      clearInterval(time);
    }, 10000);
    i = 0;
  }
});
