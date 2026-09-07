async function renderPeople() {
  const container = document.getElementById("people-list");
  try {
    let data;
    try {
      const res = await fetch("data/people.json");
      data = await res.json();
    } catch (fetchErr) {
      if (window.__PEOPLE_DATA__) {
        data = window.__PEOPLE_DATA__;
      } else {
        throw fetchErr;
      }
    }
    container.innerHTML = "";
    data.people.forEach((person) => {
      const card = document.createElement("div");
      card.className = "person-card";

      const photoHtml = person.photo
        ? `<img class="photo" src="${person.photo}" alt="${person.name}">`
        : `<div class="placeholder-photo">🐾</div>`;

      card.innerHTML = `
        ${photoHtml}
        <div class="info">
          <h3>${person.name}</h3>
          <div class="role">${person.role}</div>
          <p>${person.bio}</p>
        </div>
      `;
      container.appendChild(card);
    });
  } catch (err) {
    container.innerHTML = '<p class="loading-note">Could not load the team list right now.</p>';
    console.error(err);
  }
}
renderPeople();
