const form = document.querySelector("#addSkillForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const skillName = form.skillName.value;

  const data = {
    skill: skillName,
  };

  fetch("https://melon-potent-period.glitch.me/skills", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        alert("Skill added successfully");
        form.reset();
      } else {
        throw new Error("Error");
      }
    })
    .catch((error) => alert(error));
});
