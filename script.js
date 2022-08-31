const time = document.querySelector(".clock");
const date = document.querySelector(".date");

function setDate() {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();
  const d = now.toLocaleDateString("en-US", {
    month: "long",
  });

  time.textContent = `${h} : ${zero(m)} : ${zero(s)}`;
  const today = `${now.getDate()} ${d} ${now.getFullYear()}`;

  date.innerHTML = today;

  function zero(i) {
    if (i < 10) {
      i = "0" + i;
      return i;
    } else {
      return i;
    }
  }
}

setInterval(setDate, 1000);
