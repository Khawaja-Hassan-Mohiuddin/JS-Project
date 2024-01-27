const people = [
  {
    Name: "Emily",
    Title: "Software Engineer",
    About:
      "Meet Emily, a talented software engineer with a passion for turning lines of code into functional, user-friendly applications. As the sun rises, she embarks on another exciting day in the world of technology. Join us as we explore the thrilling journey of a software engineer!",
    Image: "imgs/girl1.jpg",
  },
  {
    Name: "Sophia ",
    Title: "Data Analyst",
    About:
      "Sophia is a data enthusiast with a knack for turning numbers into actionable insights. Her attention to detail and analytical skills make her an invaluable asset to any data-driven project.",
    Image: "imgs/girl2.jpg",
  },
  {
    Name: "Olivia ",
    Title: "Marketing Manager",
    About:
      "Olivia is a strategic marketing whiz, driving brand success with her innovative campaigns and keen market analysis. Her leadership and creativity make her an indispensable part of any marketing team.",
    image: "imgs/girl3.jpg",
  },
  {
    Name: "Ethan ",
    Title: "Graphic Designer",
    About:
      "Ethan is a creative visionary who brings ideas to life through stunning visuals. His passion for design and innovative thinking make him the go-to person for eye-catching graphics.",
    Image: "imgs/boy1.jpg",
  },
  {
    Name: "Jackson ",
    Title: "Software Developer",
    About:
      "Jackson is a coding guru with a flair for problem-solving. He thrives on turning complex concepts into user-friendly software, making him a top choice for software development projects.",
    Image: "imgs/boy2.jpg",
  },
  {
    Name: "Benjamin",
    Title: "Project Manager",
    About:
      "Benjamin is a master of organization and team coordination. His skills in project management ensure that every task is completed on time and on budget, making him an ideal choice for leading projects to success.",
    Image: "imgs/boy3.jpg",
  },
];

let right = document.getElementById("right");
let left = document.getElementById("left");
let btn = document.getElementById("btn");
let img = document.getElementsByClassName("img")[0];
let name = document.getElementsByClassName("name")[0];
let profession = document.getElementsByClassName("profession")[0];
let about = document.getElementsByClassName("about")[0];
let ind = 0;
let leng = people.length - 1;
let f_leng = leng + 1;

let values = (index) => {
  img.style.backgroundImage = `url(${people[index].Image})`;
  name.textContent = people[index].Name;
  profession.textContent = people[index].Title;
  about.innerText = people[index].About;
};

right.addEventListener("click", () => {
  ind += 1;

  if (ind == f_leng) {
    ind = 0;
    values(ind);
  } else {
    values(ind);
  }
});

left.addEventListener("click", () => {
  ind -= 1;
  if (ind < 0) {
    ind = leng;
    values(ind);
  }
  values(ind);
});

btn.addEventListener("click", () => {
  let RandomIndex = Math.floor(Math.random() * people.length);
  values(RandomIndex);
});
