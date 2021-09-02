let pics = [
  "./images/book.jpg",
  "./images/food.jpg",
  "./images/movie.jpg",
  "./images/place.jpg",
  "./images/place2.jpg",
];
let captions = [
  '"When you were born, you cried while the world rejoiced. Live your life such a way that when you die the world cries and you rejoice". This is the crux of the book written by the author of the bestseller ‘The Monk who sold his Ferrari’ who tells one how to lead a prosperous life in a simple, direct and easy-to-read way.',
  "Rasgulla or Rosogolla or Rasagola is a South Asian syrupy dessert popular in the Indian subcontinent and regions with South Asian diaspora. It is made from ball-shaped dumplings of chhena (an Indian cottage cheese) and semolina dough, cooked in light syrup made of sugar. This is done until the syrup permeates the dumplings.",
  "Tamasha is a 2015 Indian romantic comedy-drama film written and directed by Imtiaz Ali and produced by Sajid Nadiadwala from his studio, Nadiadwala Grandson Entertainment. It features Ranbir Kapoor and Deepika Padukone in lead roles.",
  "New York, often called New York City to distinguish it from New York State, or NYC for short, is the most populous city in the United States. With a 2020 population of 8,804,190 distributed over 302.6 square miles (784 km2).",
  "Santorini, officially Thira and classic Greek Thera, is an island in the southern Aegean Sea, about 200 km (120 mi) southeast from the Greek mainland. It is the largest island of a small, circular archipelago, which bears the same name and is the remnant of a volcanic caldera. ",
];
let curr_ind = 0;

function loadpic() {
  const pic_ele = document.getElementById("img_ele");
  const cap_ele = document.getElementById("cap_ele");
  pic_ele.src = pics[curr_ind];
  cap_ele.innerHTML = captions[curr_ind];
}

function prev_img() {
  if (curr_ind === 0) curr_ind = pics.length - 1;
  else curr_ind--;
  loadpic();
}

function next_img() {
  if (curr_ind === pics.length - 1) curr_ind = 0;
  else curr_ind++;
  loadpic();
}

window.onload = loadpic();
