/* ==========================================================================
   Wimborne Wayfarers Hockey Club — Authentic Application Logic (app.js)
   All data, photos, captains, leagues, fixtures & fees sourced directly
   from https://wimbornewayfarershc.co.uk/
   ========================================================================== */

// 1. Authentic Squads Data from wimbornewayfarershc.co.uk/the-club/*
const SQUADS_DATA = [
  {
    id: "mens-1",
    category: "mens",
    badge: "Seniors • Men's",
    name: "Mens 1st XI",
    photo: "assets/mens-1st-xi.jpg",
    league: "South Central Men's Division 3 South (Promoted to Div 2)",
    captain: "JJ Lovering",
    pots: "Sam Pope",
    training: "Tuesdays: 8:00pm – 9:30pm",
    tableUrl: "https://southcentral.englandhockey.co.uk/competitions/2022-2023-4263305-adult-south-central-mens-group-4263805-south-central-mens-division-3-south",
    description: "We are always looking for new players to join what is a social and competitive squad. If you’re interested in joining us please contact the Men’s 1st XI Captain for a chat."
  },
  {
    id: "mens-2",
    category: "mens",
    badge: "Seniors • Men's",
    name: "Mens 2nd XI",
    photo: "assets/mens-2nd-xi.jpg",
    league: "South Central Men's Division 1 Forest",
    captain: "Mike Kynaston (Club Mens Captain: JJ Lovering)",
    pots: "TBC",
    training: "Tuesdays: 8:00pm – 9:30pm",
    tableUrl: "https://southcentral.englandhockey.co.uk/competitions/2022-2023-4263305-adult-south-central-mens-group-4264304-south-central-mens-division-1-forest",
    description: "We are always looking for new players to join. If you’re interested in joining us please contact the Men’s 1st XI Captain for a chat."
  },
  {
    id: "ladies-1",
    category: "ladies",
    badge: "Seniors • Ladies",
    name: "Ladies 1st XI",
    photo: "assets/ladies-1st-xi.jpg",
    league: "South Central Area - South Division 1 (Promoted to South Prem Div 2)",
    captain: "Daisy Lowe (Club Ladies Captain: Tamsin Hartin)",
    pots: "Rebecca Dowling",
    training: "Wednesdays: 7:00pm – 9:00pm",
    tableUrl: "https://southcentral.englandhockey.co.uk/",
    description: "We are always looking for new players to join what is a social and competitive squad. League games are played on Saturdays."
  },
  {
    id: "ladies-2",
    category: "ladies",
    badge: "Seniors • Ladies",
    name: "Ladies 2nd XI",
    photo: "assets/ladies-2nd-xi.jpg",
    league: "South Central Area - Forest Division 1",
    captain: "TBC (Contact Ladies Captain: Tamsin Hartin)",
    pots: "Sheona Craig (GK)",
    training: "Wednesdays: 7:00pm – 9:00pm",
    tableUrl: "https://southcentral.englandhockey.co.uk/",
    description: "We are always looking for new players to join. If you’re interested in joining us please contact the Ladies Captain for a chat."
  },
  {
    id: "ladies-3",
    category: "ladies",
    badge: "Seniors • Ladies",
    name: "Ladies 3rd XI",
    photo: "assets/ladies-3rd-xi.jpg",
    league: "South Central Area - Forest Division 3",
    captain: "Ellie Hunwick",
    pots: "Edie Brown (Development Team)",
    training: "Wednesdays: 7:00pm – 9:00pm",
    tableUrl: "https://southcentral.englandhockey.co.uk/",
    description: "We are always looking for new players to join our squad. If you’re interested in joining us please contact us for a chat."
  },
  {
    id: "mixed",
    category: "mixed",
    badge: "Mixed Hockey",
    name: "Mixed XI",
    photo: "assets/mixed.png",
    league: "England Hockey Mixed Championships",
    captain: "Rhian Lowe (Mixed Contact) / JJ Lovering",
    pots: "Club Squad",
    training: "Tuesdays & Wednesdays Club Sessions",
    tableUrl: "https://www.englandhockey.co.uk/",
    description: "Competing in the England Hockey Mixed Championships alongside club mixed 7-a-side games and friendly fixtures."
  },
  {
    id: "juniors",
    category: "juniors",
    badge: "Juniors & Minis",
    name: "Juniors (7–9 yrs, U10, U12 & U14/15)",
    photo: "assets/club-day.jpg",
    league: "Dorset & West Junior Festivals & Friendlies",
    captain: "Vicki Home (Junior Contact) & Sue Close (Junior Organiser)",
    pots: "Welfare Officer: Dan Hunwick",
    training: "Tuesdays: 6:00pm–7:00pm (7–9 yrs) & 7:00pm–8:00pm (10–13 yrs)",
    tableUrl: "#juniors",
    description: "Under 10s & Under 12s play a number of Festivals across the season, while Under 14/15 (mixed boys/girls) play a series of Friendlies."
  }
];

// 2. Authentic Recorded Fixtures & Results from wimbornewayfarershc.co.uk team pages
const FIXTURES_DATA = [
  // Men's 1st XI
  { team: "mens-1", teamLabel: "Mens 1st XI", venue: "H", date: "11 Sep", time: "1:30 pm", opponent: "Bournemouth 4", comp: "Friendly", score: "4 - 3", mapUrl: "https://www.google.com/maps/search/Queen+Elizabeth+Leisure+Centre,+Blandford+Road,+Wimborne,+UK" },
  { team: "mens-1", teamLabel: "Mens 1st XI", venue: "H", date: "25 Sep", time: "1:30 pm", opponent: "Alton 2", comp: "League", score: "5 - 1", mapUrl: "https://www.google.com/maps/search/Queen+Elizabeth+Leisure+Centre,+Blandford+Road,+Wimborne,+UK" },
  { team: "mens-1", teamLabel: "Mens 1st XI", venue: "H", date: "09 Oct", time: "1:30 pm", opponent: "Trojans 4", comp: "League", score: "2 - 3", mapUrl: "https://www.google.com/maps/search/Queen+Elizabeth+Leisure+Centre,+Blandford+Road,+Wimborne,+UK" },
  { team: "mens-1", teamLabel: "Mens 1st XI", venue: "A", date: "16 Oct", time: "3:00 pm", opponent: "Winchester 4", comp: "League", score: "8 - 1", mapUrl: "https://www.google.com/maps/search/Kings+School,+Winchester,+UK" },
  { team: "mens-1", teamLabel: "Mens 1st XI", venue: "H", date: "30 Oct", time: "1:30 pm", opponent: "Romsey 2", comp: "League", score: null, mapUrl: "https://www.google.com/maps/search/Queen+Elizabeth+Leisure+Centre,+Blandford+Road,+Wimborne,+UK" },
  { team: "mens-1", teamLabel: "Mens 1st XI", venue: "A", date: "06 Nov", time: "3:00 pm", opponent: "Fareham 5", comp: "League", score: null, mapUrl: "https://www.google.com/maps/search/Fareham+PO15+6PH,+UK" },
  { team: "mens-1", teamLabel: "Mens 1st XI", venue: "H", date: "13 Nov", time: "1:30 pm", opponent: "Bournemouth 4", comp: "League", score: null, mapUrl: "https://www.google.com/maps/search/Queen+Elizabeth+Leisure+Centre,+Blandford+Road,+Wimborne,+UK" },
  { team: "mens-1", teamLabel: "Mens 1st XI", venue: "H", date: "27 Nov", time: "1:30 pm", opponent: "New Forest", comp: "League", score: null, mapUrl: "https://www.google.com/maps/search/Queen+Elizabeth+Leisure+Centre,+Blandford+Road,+Wimborne,+UK" },

  // Men's 2nd XI
  { team: "mens-2", teamLabel: "Mens 2nd XI", venue: "A", date: "18 Sep", time: "12:00 pm", opponent: "Gillingham 3", comp: "Friendly", score: "3 - 5", mapUrl: "https://www.google.com/maps/search/Gillingham+School" },
  { team: "mens-2", teamLabel: "Mens 2nd XI", venue: "A", date: "25 Sep", time: "12:45 pm", opponent: "Andover 4", comp: "League", score: "4 - 2", mapUrl: "https://www.google.com/maps/search/John+Hanson+School,+Andover,+UK" },
  { team: "mens-2", teamLabel: "Mens 2nd XI", venue: "A", date: "09 Oct", time: "1:15 pm", opponent: "Swanage & Wareham 2", comp: "League", score: "6 - 2", mapUrl: "https://www.google.com/maps/search/Purbeck+Sports+Centre,+Worgret+Road,+Wareham,+UK" },
  { team: "mens-2", teamLabel: "Mens 2nd XI", venue: "H", date: "16 Oct", time: "1:30 pm", opponent: "Bournemouth 5", comp: "League", score: "2 - 1", mapUrl: "https://www.google.com/maps/search/Queen+Elizabeth+Leisure+Centre,+Blandford+Road,+Wimborne,+UK" },
  { team: "mens-2", teamLabel: "Mens 2nd XI", venue: "H", date: "06 Nov", time: "1:30 pm", opponent: "Romsey 4", comp: "League", score: null, mapUrl: "https://www.google.com/maps/search/Queen+Elizabeth+Leisure+Centre,+Blandford+Road,+Wimborne,+UK" },
  { team: "mens-2", teamLabel: "Mens 2nd XI", venue: "H", date: "20 Nov", time: "3:00 pm", opponent: "New Forest 2", comp: "League", score: null, mapUrl: "https://www.google.com/maps/search/Queen+Elizabeth+Leisure+Centre,+Blandford+Road,+Wimborne,+UK" },

  // Ladies 1st XI
  { team: "ladies-1", teamLabel: "Ladies 1st XI", venue: "A", date: "25 Sep", time: "11:15 am", opponent: "Andover", comp: "League", score: "1 - 1", mapUrl: "https://www.google.com/maps/search/John+Hanson+School,+Andover,+UK" },
  { team: "ladies-1", teamLabel: "Ladies 1st XI", venue: "A", date: "09 Oct", time: "3:00 pm", opponent: "Chichester", comp: "League", score: "2 - 1", mapUrl: "https://www.google.com/maps/search/Chichester+College,+Avenue+De+Chartres,+Chichester,+UK" },
  { team: "ladies-1", teamLabel: "Ladies 1st XI", venue: "H", date: "16 Oct", time: "12:00 pm", opponent: "Havant 2", comp: "League", score: "3 - 1", mapUrl: "https://www.google.com/maps/search/Queen+Elizabeth+Leisure+Centre,+Blandford+Road,+Wimborne,+UK" },
  { team: "ladies-1", teamLabel: "Ladies 1st XI", venue: "H", date: "06 Nov", time: "12:00 pm", opponent: "Winchester 2", comp: "League", score: null, mapUrl: "https://www.google.com/maps/search/Queen+Elizabeth+Leisure+Centre,+Blandford+Road,+Wimborne,+UK" },
  { team: "ladies-1", teamLabel: "Ladies 1st XI", venue: "A", date: "13 Nov", time: "11:30 am", opponent: "Bournemouth 2", comp: "League", score: null, mapUrl: "https://www.google.com/maps/search/Bournemouth+Rugby+Club,+Chapel+Gate,+Christchurch,+UK" },
  { team: "ladies-1", teamLabel: "Ladies 1st XI", venue: "H", date: "20 Nov", time: "12:00 pm", opponent: "Fareham 2", comp: "League", score: null, mapUrl: "https://www.google.com/maps/search/Queen+Elizabeth+Leisure+Centre,+Blandford+Road,+Wimborne,+UK" },

  // Ladies 2nd XI
  { team: "ladies-2", teamLabel: "Ladies 2nd XI", venue: "H", date: "25 Sep", time: "12:00 pm", opponent: "Bournemouth 4", comp: "League", score: "3 - 2", mapUrl: "https://www.google.com/maps/search/Queen+Elizabeth+Leisure+Centre,+Blandford+Road,+Wimborne,+UK" },
  { team: "ladies-2", teamLabel: "Ladies 2nd XI", venue: "A", date: "02 Oct", time: "10:00 am", opponent: "Salisbury 3", comp: "League", score: "1 - 2", mapUrl: "https://www.google.com/maps/search/Salisbury+and+South+Wilts+Sports+Club,+Wilton+Road,+Salisbury,+UK" },
  { team: "ladies-2", teamLabel: "Ladies 2nd XI", venue: "H", date: "09 Oct", time: "12:00 pm", opponent: "Southampton 3", comp: "League", score: "2 - 4", mapUrl: "https://www.google.com/maps/search/Queen+Elizabeth+Leisure+Centre,+Blandford+Road,+Wimborne,+UK" },
  { team: "ladies-2", teamLabel: "Ladies 2nd XI", venue: "A", date: "16 Oct", time: "10:15 am", opponent: "Waterside", comp: "League", score: "3 - 5", mapUrl: "https://www.google.com/maps/search/Southampton+SO16+7AY,+UK" },
  { team: "ladies-2", teamLabel: "Ladies 2nd XI", venue: "H", date: "13 Nov", time: "12:00 pm", opponent: "Poole", comp: "League", score: null, mapUrl: "https://www.google.com/maps/search/Queen+Elizabeth+Leisure+Centre,+Blandford+Road,+Wimborne,+UK" },

  // Ladies 3rd XI
  { team: "ladies-3", teamLabel: "Ladies 3rd XI", venue: "A", date: "25 Sep", time: "3:00 pm", opponent: "Swanage & Wareham 2", comp: "League", score: "2 - 2", mapUrl: "https://www.google.com/maps/search/Purbeck+Sports+Centre,+Worgret+Road,+Wareham,+UK" },
  { team: "ladies-3", teamLabel: "Ladies 3rd XI", venue: "A", date: "09 Oct", time: "10:15 am", opponent: "Southampton 5", comp: "League", score: "1 - 2", mapUrl: "https://www.google.com/maps/search/Southampton+SO16+7AY,+UK" },
  { team: "ladies-3", teamLabel: "Ladies 3rd XI", venue: "H", date: "06 Nov", time: "3:00 pm", opponent: "Poole 2", comp: "League", score: null, mapUrl: "https://www.google.com/maps/search/Queen+Elizabeth+Leisure+Centre,+Blandford+Road,+Wimborne,+UK" },

  // Juniors Festivals & Friendlies
  { team: "juniors", teamLabel: "Juniors", venue: "H", date: "03 Oct", time: "11:00 am", opponent: "Gillingham", comp: "Friendly", score: null, mapUrl: "https://www.google.com/maps/search/Queen+Elizabeth+Leisure+Centre,+Blandford+Road,+Wimborne,+UK" },
  { team: "juniors", teamLabel: "Juniors", venue: "A", date: "17 Oct", time: "9:30 am", opponent: "Poole", comp: "Festival", score: null, mapUrl: "https://www.google.com/maps/search/Ashdown+Leisure+Centre,+Adastral+Road,+Poole,+UK" },
  { team: "juniors", teamLabel: "Juniors", venue: "H", date: "07 Nov", time: "9:30 am", opponent: "Home Festival", comp: "Festival", score: null, mapUrl: "https://www.google.com/maps/search/Queen+Elizabeth+Leisure+Centre,+Blandford+Road,+Wimborne,+UK" },
  { team: "juniors", teamLabel: "Juniors", venue: "A", date: "21 Nov", time: "TBC", opponent: "Weymouth", comp: "Friendly", score: null, mapUrl: "https://www.google.com/maps/search/Redlands+Community+Sports+Hub,+Dorchester+Road,+Weymouth,+UK" },
  { team: "juniors", teamLabel: "Juniors", venue: "A", date: "28 Nov", time: "9:30 am", opponent: "Swanage & Wareham", comp: "Festival", score: null, mapUrl: "https://www.google.com/maps/search/Purbeck+Sports+Centre,+Worgret+Road,+Wareham,+UK" }
];

// 3. Authentic Weekly Training Schedule from wimbornewayfarershc.co.uk/training/
const TRAINING_SESSIONS = [
  {
    id: "tue-7-9",
    dayTime: "Tuesdays • 6:00pm til 7:00pm",
    title: "Juniors (7–9 yrs)",
    sub: "Under 10s coaching, fun drills & matches at Q.E. Leisure Centre",
    lead: "Vicki Home (Junior Hockey), Sue Close (Junior Organiser) & Mike (Attendance Registration)",
    activeZones: ["zone-west", "zone-east"],
    pitchAllocation: "Q.E. Leisure Centre Astro Pitch — Please register your child's attendance in and out with Mike on arrival and collection.",
    gearNote: "Mouth guards and shin pads are strongly advised. We always have plenty of spare hockey sticks for children to borrow!"
  },
  {
    id: "tue-10-13",
    dayTime: "Tuesdays • 7:00pm til 8:00pm",
    title: "Juniors (10–13 yrs)",
    sub: "Under 12s & Under 14/15s Festival & Friendly preparation",
    lead: "Vicki Home (Junior Hockey) & Sue Close (Junior Organiser)",
    activeZones: ["zone-west", "zone-east", "zone-gk"],
    pitchAllocation: "Q.E. Leisure Centre Astro Pitch — Developing skills for U12 Festivals and U14/15 Mixed Friendlies.",
    gearNote: "Wear layers for colder evenings, plus mouth guards and shin pads. No compulsory training kit required."
  },
  {
    id: "tue-mens",
    dayTime: "Tuesdays • 8:00pm til 9:30pm",
    title: "Mens Winter League Training",
    sub: "Mens 1st XI & Mens 2nd XI Squad Training",
    lead: "JJ Lovering (Mens 1st XI Captain) & Mike Kynaston (Mens 2nd XI Captain)",
    activeZones: ["zone-west", "zone-east", "zone-gk"],
    pitchAllocation: "Full Floodlit Astro Pitch at Q.E. Leisure Centre, Wimborne BH21 4DT.",
    gearNote: "New and experienced players always welcome — dust off that kit, grab a stick and join us!"
  },
  {
    id: "wed-ladies",
    dayTime: "Wednesdays • 7:00pm til 9:00pm",
    title: "Ladies Winter League Training",
    sub: "Ladies 1st XI, Ladies 2nd XI & Ladies 3rd XI Squads",
    lead: "Tamsin Hartin (Ladies XI Captain), Daisy Lowe (1st XI) & Ellie Hunwick (3rd XI)",
    activeZones: ["zone-west", "zone-east", "zone-gk"],
    pitchAllocation: "Full Floodlit Astro Pitch at Q.E. Leisure Centre, Wimborne BH21 4DT.",
    gearNote: "Combining competitive hockey with a friendly, sociable atmosphere for all abilities."
  }
];

// State
let currentSquadFilter = "all";
let currentMatchView = "all"; // all | results | fixtures
let currentTeamFilter = "all";
let currentTrainingId = "tue-7-9";

// Membership Calculator State (Exact rules from /membership/)
let calcCategory = "adult"; // adult | student | junior-adult | mini-adult | mini-only | training | social
let calcMatches = 12;
let calcExtraOption = "none"; // none | parent-member | second-mini | third-mini

document.addEventListener("DOMContentLoaded", () => {
  initHeaderAndMode();
  renderSquads();
  initSquadFilters();
  renderMatchCentre();
  initMatchControls();
  initTrainingExplorer();
  initMembershipCalculator();
  initModalsAndForms();
});

// ==========================================================================
// Header & Daylight/Dark Pitch Toggle
// ==========================================================================
function initHeaderAndMode() {
  const header = document.getElementById("siteHeader");
  const mobileBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener("click", () => {
      navLinks.classList.toggle("mobile-open");
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("mobile-open");
      });
    });
  }

  const modeToggle = document.getElementById("colorModeToggle");
  if (modeToggle) {
    modeToggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-color-mode");
      const next = current === "light" ? "dark" : "light";
      if (next === "light") {
        document.documentElement.setAttribute("data-color-mode", "light");
        modeToggle.innerHTML = `<span>🌙</span> Dark Pitch Mode`;
      } else {
        document.documentElement.removeAttribute("data-color-mode");
        modeToggle.innerHTML = `<span>☀️</span> Daylight Mode`;
      }
    });
  }
}

// ==========================================================================
// Squad Explorer ("The Club") — With Real Club Photography
// ==========================================================================
function renderSquads() {
  const grid = document.getElementById("squadsGrid");
  if (!grid) return;

  const filtered = currentSquadFilter === "all"
    ? SQUADS_DATA
    : SQUADS_DATA.filter(s => s.category === currentSquadFilter);

  grid.innerHTML = filtered.map(squad => `
    <article class="squad-card">
      <div>
        <div class="squad-photo-header">
          <img src="${squad.photo}" alt="Wimborne Wayfarers ${squad.name}" loading="lazy" />
          <span class="squad-photo-badge">${squad.badge}</span>
        </div>
        <div class="squad-card-body">
          <div>
            <h3 class="squad-title">${squad.name}</h3>
            <div class="squad-league">${squad.league}</div>
            <p class="squad-desc" style="margin-top: 0.6rem;">${squad.description}</p>
          </div>

          <div class="squad-meta-list">
            <div class="squad-meta-item">
              <span class="meta-label">Captain / Contact</span>
              <span class="meta-val">${squad.captain}</span>
            </div>
            <div class="squad-meta-item">
              <span class="meta-label">Player of the Season</span>
              <span class="meta-val">${squad.pots}</span>
            </div>
            <div class="squad-meta-item" style="grid-column: span 2;">
              <span class="meta-label">Training Schedule (Q.E. Leisure Centre)</span>
              <span class="meta-val">${squad.training}</span>
            </div>
          </div>

          <div style="display:flex; justify-content:space-between; align-items:center; gap:0.6rem; margin-top:auto; padding-top:0.4rem;">
            <a href="${squad.tableUrl}" target="${squad.tableUrl.startsWith('http') ? '_blank' : '_self'}" rel="noopener noreferrer" class="btn btn-outline btn-sm">
              View League Table ↗
            </a>
            <a href="#contact" class="btn btn-primary btn-sm" onclick="prefillSquadEnquiry('${squad.name}')">
              Contact Captain →
            </a>
          </div>
        </div>
      </div>
    </article>
  `).join("");
}

function initSquadFilters() {
  const buttons = document.querySelectorAll("#squadFilterTabs .filter-tab");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentSquadFilter = btn.getAttribute("data-filter");
      renderSquads();
    });
  });
}

window.prefillSquadEnquiry = function(squadName) {
  const select = document.getElementById("interestSquad");
  if (select) {
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].text.includes(squadName) || squadName.includes(select.options[i].value)) {
        select.selectedIndex = i;
        break;
      }
    }
  }
  const msg = document.getElementById("contactMessage");
  if (msg) {
    msg.value = `Hi Wimborne Wayfarers! I'd love to get in touch regarding ${squadName}.`;
  }
};

// ==========================================================================
// Fixtures & Results Explorer (Authentic Recorded Fixtures from Website)
// ==========================================================================
function renderMatchCentre() {
  const container = document.getElementById("matchCentreContent");
  if (!container) return;

  const list = FIXTURES_DATA.filter(item => {
    const matchesTeam = currentTeamFilter === "all" || item.team === currentTeamFilter;
    const matchesView =
      currentMatchView === "all" ||
      (currentMatchView === "results" && item.score !== null) ||
      (currentMatchView === "fixtures" && item.score === null);
    return matchesTeam && matchesView;
  });

  if (list.length === 0) {
    container.innerHTML = `<p style="padding:1.25rem; color:var(--text-muted);">No matches found for this filter.</p>`;
    return;
  }

  container.innerHTML = `
    <div class="fixtures-list">
      ${list.map(item => `
        <div class="fixture-row">
          <div>
            <span class="fixture-date">${item.date} • ${item.time}</span>
            <span class="fixture-comp">${item.comp}</span>
          </div>
          <div class="fixture-teams">
            <span class="venue-badge ${item.venue.toLowerCase()}" title="${item.venue === 'H' ? 'Home (QE Leisure Centre)' : 'Away'}">${item.venue}</span>
            <span class="fixture-team-name wayfarers">Wimborne ${item.teamLabel}</span>
            ${item.score
              ? `<span class="score-pill">${item.score}</span>`
              : `<span style="color:var(--text-muted); font-size:0.82rem; font-weight:700;">vs</span>`
            }
            <span class="fixture-team-name">${item.opponent}</span>
          </div>
          <div>
            <a href="${item.mapUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
              📍 Pitch Map ↗
            </a>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

function initMatchControls() {
  const segBtns = document.querySelectorAll("#matchViewControl .seg-btn");
  const teamSelect = document.getElementById("matchTeamSelect");

  segBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      segBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentMatchView = btn.getAttribute("data-view");
      renderMatchCentre();
    });
  });

  if (teamSelect) {
    teamSelect.addEventListener("change", (e) => {
      currentTeamFilter = e.target.value;
      renderMatchCentre();
    });
  }
}

// ==========================================================================
// Interactive Training Schedule & QE Leisure Centre Pitch Map
// ==========================================================================
function initTrainingExplorer() {
  const stack = document.getElementById("trainingCardsStack");
  if (!stack) return;

  function renderTrainingCards() {
    stack.innerHTML = TRAINING_SESSIONS.map(s => `
      <div class="session-card ${s.id === currentTrainingId ? 'active' : ''}" data-session-id="${s.id}">
        <div>
          <span class="session-time-badge">${s.dayTime}</span>
          <div class="session-title">${s.title}</div>
          <div class="session-sub">${s.sub}</div>
        </div>
        <div style="font-size:1.2rem; color:var(--brand-primary-hover);">→</div>
      </div>
    `).join("");

    stack.querySelectorAll(".session-card").forEach(card => {
      card.addEventListener("click", () => {
        currentTrainingId = card.getAttribute("data-session-id");
        renderTrainingCards();
        updatePitchDiagram();
      });
    });
  }

  function updatePitchDiagram() {
    const session = TRAINING_SESSIONS.find(s => s.id === currentTrainingId);
    if (!session) return;

    document.getElementById("pitchActiveTitle").textContent = `${session.title} (${session.dayTime})`;
    document.getElementById("pitchAllocationDesc").textContent = session.pitchAllocation;
    document.getElementById("pitchCoachLead").textContent = session.lead;
    document.getElementById("pitchGearNote").textContent = session.gearNote;

    ["zone-west", "zone-east", "zone-gk"].forEach(zId => {
      const el = document.getElementById(zId);
      if (el) {
        const isActive = session.activeZones.includes(zId);
        el.setAttribute("fill", isActive ? "rgba(16, 185, 129, 0.45)" : "rgba(7, 18, 13, 0.35)");
      }
    });
  }

  renderTrainingCards();
  updatePitchDiagram();
}

// ==========================================================================
// Interactive Membership Fee Calculator (Exact Pricing & Rules from Site)
// ==========================================================================
function initMembershipCalculator() {
  const catChips = document.querySelectorAll("#calcCategoryGroup .calc-chip");
  const matchSlider = document.getElementById("calcMatchesRange");
  const matchCountLabel = document.getElementById("calcMatchesVal");
  const extraChips = document.querySelectorAll("#calcExtraGroup .calc-chip");

  function updateCalculation() {
    if (matchCountLabel && matchSlider) {
      calcMatches = parseInt(matchSlider.value, 10);
      matchCountLabel.textContent = `${calcMatches} league games`;
    }

    let recTitle = "Full Adult Membership";
    let baseCost = 300;
    let subText = "Per season (includes match fees & shirt)";
    let note = "For adults expecting to play more than 6 league games over the season. Can be paid in one go or in smaller payments throughout the year.";

    if (calcCategory === "adult") {
      if (calcMatches === 0) {
        recTitle = "Training Only Membership";
        baseCost = 50;
        subText = "Per season";
        note = "Ideal if you only attend weekly training sessions and aren't playing Saturday league fixtures.";
      } else if (calcMatches <= 6) {
        recTitle = "Pay-and-Play (£15 / match)";
        baseCost = calcMatches * 15;
        subText = `Total for ${calcMatches} matches (£15 per match)`;
        note = "Available for up to 6 league games over the season, after which you can apply for the discounted Full Adult membership.";
      } else {
        recTitle = "Full Adult Membership";
        baseCost = 300;
        subText = "Per season (includes match fees & shirt)";
        note = "Includes all league match fees and your club shirt! (Note: playing 17+ games without Full membership incurs the full fee + £25 admin fee.)";
      }
    } else if (calcCategory === "student") {
      recTitle = "Student / Apprentice / Unemployed";
      baseCost = 235;
      subText = "Per season (includes match fees)";
      note = "Aged 18 or over and in full-time education, an apprenticeship, or unemployed.";
    } else if (calcCategory === "junior-adult") {
      if (calcExtraOption === "parent-member") {
        recTitle = "Junior Add-On (Parent Has Adult Membership)";
        baseCost = 25;
        subText = "Per season (Parent already holds Adult Membership)";
        note = "Exact club rule: 'Already have an adult membership? Juniors are only £25 and minis are £10!'";
      } else {
        recTitle = "Junior (Playing Adult Hockey)";
        baseCost = 180;
        subText = "Per season (includes match fees)";
        note = "For players aged under 18 playing adult Saturday league hockey.";
      }
    } else if (calcCategory === "mini-adult") {
      if (calcExtraOption === "parent-member") {
        recTitle = "Mini Add-On (Parent Has Adult Membership)";
        baseCost = 10;
        subText = "Per season (Parent already holds Adult Membership)";
        note = "Exact club rule: 'Already have an adult membership? Juniors are only £25 and minis are £10!'";
      } else {
        recTitle = "Mini Playing Adult Hockey (<14)";
        baseCost = 120;
        subText = "Per season (includes match fees)";
        note = "For players aged under 14 playing adult league hockey.";
      }
    } else if (calcCategory === "mini-only") {
      if (calcExtraOption === "parent-member") {
        recTitle = "Mini Add-On (Parent Has Adult Membership)";
        baseCost = 10;
        subText = "Per season (Parent already holds Adult Membership)";
        note = "Exact club rule: 'Already have an adult membership? Juniors are only £25 and minis are £10!'";
      } else if (calcExtraOption === "second-mini") {
        recTitle = "2 Minis (Multi-Child Discount)";
        baseCost = 75 + 65; // £140
        subText = "£75 for first mini + £65 for second mini";
        note = "Includes the official multi-mini discount (£65 for second mini).";
      } else if (calcExtraOption === "third-mini") {
        recTitle = "3 Minis (Multi-Child Discount)";
        baseCost = 75 + 65 + 55; // £195
        subText = "£75 first + £65 second + £55 third mini";
        note = "Includes the official multi-mini discount (£65 for second, £55 for third and any additional).";
      } else {
        recTitle = "Mini (Not Playing Adult Hockey, <14)";
        baseCost = 75;
        subText = "Per season (includes match fees)";
        note = "For players aged under 14 in Junior training and Festivals.";
      }
    } else if (calcCategory === "social") {
      recTitle = "Social Membership";
      baseCost = 30;
      subText = "Per season";
      note = "Support the club and join all Wimborne Wayfarers social events!";
    }

    document.getElementById("calcRecTitle").textContent = recTitle;
    document.getElementById("calcRecPrice").textContent = `£${baseCost}`;
    document.getElementById("calcRecSub").textContent = subText;
    document.getElementById("calcRecNote").textContent = note;
  }

  catChips.forEach(chip => {
    chip.addEventListener("click", () => {
      catChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      calcCategory = chip.getAttribute("data-cat");
      updateCalculation();
    });
  });

  if (matchSlider) {
    matchSlider.addEventListener("input", updateCalculation);
  }

  extraChips.forEach(chip => {
    chip.addEventListener("click", () => {
      extraChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      calcExtraOption = chip.getAttribute("data-extra");
      updateCalculation();
    });
  });

  updateCalculation();
}

// ==========================================================================
// Modals & Contact Form
// ==========================================================================
function initModalsAndForms() {
  const modal = document.getElementById("genericModal");
  const closeBtn = document.getElementById("genericModalClose");

  if (closeBtn && modal) {
    closeBtn.addEventListener("click", closeGenericModal);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeGenericModal();
    });
  }

  const contactForm = document.getElementById("clubContactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("contactName").value.trim();
      const squad = document.getElementById("interestSquad").value;
      showToast(`Thank you ${name}! Your enquiry for ${squad} is ready.`);
      contactForm.reset();
    });
  }
}

window.closeGenericModal = function() {
  const modal = document.getElementById("genericModal");
  if (modal) modal.classList.remove("open");
};

function showToast(message) {
  const toast = document.getElementById("toastNotification");
  const text = document.getElementById("toastText");
  if (!toast || !text) return;

  text.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 4200);
}
