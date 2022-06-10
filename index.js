const firstPlayer = document.querySelector(".first_player");
const secondPlayer = document.querySelector(".second_player");
const firstPlayerButton = document.querySelector(".first_player_button");
const secondPlayerButton = document.querySelector(".second_player_button");
const firstPlayerSubmit = document.querySelector(".first_player_submit");
const secondPlayerSubmit = document.querySelector(".second_player_submit");
const firstPlayerValue = document.querySelector(".first_player_value");
const secondPlayerValue = document.querySelector(".second_player_value");
const firstPlayersPoints = document.querySelector(".first_player_points");
const secondPlayersPoints = document.querySelector(".second_player_points");
const firstPlayerList = document.querySelector(".first_player_list_points");
const secondPlayerList = document.querySelector(".second_player_list_points");

let allPointsFirstPlayer = 0;
let allPointsSecondPlayer = 0;

const losePoints = 125;

const firstPlayerFormSubmit = (e) => {
  e.preventDefault();

  const points = Number(firstPlayerValue.form[0].value);

  const listItem = document.createElement("li");
  listItem.classList.add("first_player_list_item");
  listItem.textContent = points;

  allPointsFirstPlayer += points;

  firstPlayersPoints.textContent = allPointsFirstPlayer;

  if (allPointsFirstPlayer > losePoints) {
    alert("Vlad Проиграл!");
  }

  firstPlayerList.append(listItem);

  // обнуление значение input
  firstPlayerValue.form[0].value = 0;
  return;
};

const secondPlayerFormSubmit = (e) => {
  e.preventDefault();

  const points = Number(secondPlayerValue.form[0].value);

  const listItem = document.createElement("li");
  listItem.classList.add("second_player_list_item");
  listItem.textContent = points;

  allPointsSecondPlayer += points;

  secondPlayersPoints.textContent = allPointsSecondPlayer;
  if (allPointsFirstPlayer > losePoints) {
    alert("Anna Проиграла!");
  }

  secondPlayerList.append(listItem);

  // обнуление значение input
  secondPlayerValue.form[0].value = 0;

  return;
};

firstPlayerSubmit.addEventListener("click", firstPlayerFormSubmit);
secondPlayerSubmit.addEventListener("click", secondPlayerFormSubmit);
firstPlayerButton.addEventListener("click", () => {
  const listItem = document.querySelector(".first_player_list_item");
  allPointsFirstPlayer = 0;
  firstPlayersPoints.textContent = 0;
  listItem.remove();
});
secondPlayerButton.addEventListener("click", () => {
  const listItem = document.querySelector(".second_player_list_item");
  allPointsSecondPlayer = 0;
  secondPlayersPoints.textContent = 0;
  listItem.remove();
});
