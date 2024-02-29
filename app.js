const dice = document.querySelector(".dice");
const adviceId = document.getElementById("advice-id");
const adviceText = document.querySelector(".advice-text");

const fetchAdvice = async () => {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();

  adviceId.innerHTML = `Advice #${data.slip.id}`;
  adviceText.innerHTML = `"${data.slip.advice}"`;

  //we use .slip and .id and .advice because the data comes
  //back to us as an object with those 2 properties:
  //when we do colsole.log(data) we get this:
  //{slip: advice: "Don't assume anything is possible or impossible until you've asked the people who will be doing the work.";
  //id: 119};
};

dice.addEventListener("click", fetchAdvice);
