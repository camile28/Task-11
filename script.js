const skillsList = document.getElementById("skillsList");

function displaySkills(skills) {
  skillsList.innerHTML = "";

  skills.forEach((skill) => {
    const skillItem = document.createElement("li");
    skillItem.textContent = skill.skill;
    skillsList.appendChild(skillItem);
  });
}

function fetchSkills() {
  fetch("https://melon-potent-period.glitch.me/skills")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error");
      }
    })
    .then((skills) => {
      displaySkills(skills);
    })
    .catch((error) => alert(error));
}

fetchSkills();
setInterval(fetchSkills, 5000);

//     const deleteButton = document.createElement("button");
//     deleteButton.textContent = "Delete";
//     deleteButton.addEventListener("click", () => {
//       deleteSkill(skill.id);
//     });

//     skillItem.appendChild(deleteButton);
//     skillsList.appendChild(skillItem);
//   });
// }
