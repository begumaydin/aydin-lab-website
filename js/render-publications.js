function pubItemHtml(pub) {
  const noteHtml = pub.note ? `<div class="pub-note">${pub.note}</div>` : "";
  const linkHtml = pub.link ? ` <a class="read-link" href="${pub.link}" target="_blank" rel="noopener">Read →</a>` : "";
  return `<li><div>${pub.citation}${linkHtml}</div>${noteHtml}</li>`;
}

async function renderPublications() {
  const allContainer = document.getElementById("pub-list");
  try {
    let data;
    try {
      const res = await fetch("data/publications.json");
      data = await res.json();
    } catch (fetchErr) {
      if (window.__PUBLICATIONS_DATA__) {
        data = window.__PUBLICATIONS_DATA__;
      } else {
        throw fetchErr;
      }
    }

    if (allContainer) {
      allContainer.innerHTML = data.publications.map(pubItemHtml).join("");
    }
  } catch (err) {
    if (allContainer) allContainer.innerHTML = '<li class="loading-note">Could not load publications right now.</li>';
    console.error(err);
  }
}
renderPublications();
