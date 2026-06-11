const DEFAULT_EXAM_ID = "data-360-consultant";

let currentExamId = DEFAULT_EXAM_ID;

function getExam() {
  return EXAMS[currentExamId];
}

function distributeQuestions(totalQuestions, weights) {
  const entries = Object.entries(weights);
  const buckets = entries.map(([name, weight]) => {
    const exact = (weight / 100) * totalQuestions;
    return { name, weight, exact, count: Math.floor(exact) };
  });

  let assigned = buckets.reduce((sum, bucket) => sum + bucket.count, 0);
  const remaining = totalQuestions - assigned;

  buckets
    .slice()
    .sort((a, b) => b.exact - b.count - (a.exact - a.count))
    .slice(0, remaining)
    .forEach((bucket) => {
      buckets.find((item) => item.name === bucket.name).count += 1;
    });

  return Object.fromEntries(buckets.map((bucket) => [bucket.name, bucket.count]));
}

function computeWeightedScore(scores, weights) {
  let total = 0;
  for (const [name, weight] of Object.entries(weights)) {
    const value = scores[name];
    if (value === undefined || Number.isNaN(value)) continue;
    total += value * weight * 0.01;
  }
  return Math.round(total);
}

function estimateCorrect(scorePercent, questionCount) {
  return Math.round((scorePercent / 100) * questionCount);
}

function sectionPerformanceTier(score) {
  if (score <= 59) return "weak";
  if (score <= 84) return "mid";
  return "strong";
}

function sectionPerformanceLabel(tier) {
  if (tier === "weak") return "Needs focus";
  if (tier === "mid") return "Getting there";
  return "Strong section";
}

function buildSectionResults(exam, scores) {
  const questionMap = distributeQuestions(exam.questionCount, exam.sections);

  return Object.entries(exam.sections).map(([name, weight]) => {
    const sectionQuestions = questionMap[name];
    const sectionScore = scores[name] ?? 0;
    const correct = estimateCorrect(sectionScore, sectionQuestions);
    const tier = sectionPerformanceTier(sectionScore);

    return {
      name,
      weight,
      sectionQuestions,
      sectionScore,
      correct,
      tier,
      tierLabel: sectionPerformanceLabel(tier),
      weightedPoints: Math.round(sectionScore * weight * 0.01),
      roomToImprove: (weight * (100 - sectionScore)) / 100,
    };
  });
}

function messageForScore(finalScore, passingScore) {
  if (finalScore >= passingScore) {
    return "You are in passing territory based on this estimate. Nice work!";
  }

  const gap = passingScore - finalScore;
  if (gap <= 4) {
    return "You are very close. A focused review of your weakest sections could push you over the line.";
  }
  if (gap <= 9) {
    return "You are making progress. Prioritize the highest-weight sections where your score is lowest.";
  }
  return "Use the section breakdown below to target your study plan around the topics with the most room to improve.";
}

const examSelect = document.getElementById("exam-select");
const sectionInputs = document.getElementById("section-inputs");
const scoreForm = document.getElementById("score-form");
const resultsCard = document.getElementById("results-card");
const overallScoreEl = document.getElementById("overall-score");
const totalCorrectEl = document.getElementById("total-correct");
const pointsFromPassEl = document.getElementById("points-from-pass");
const passBadgeEl = document.getElementById("pass-badge");
const passingScoreEl = document.getElementById("passing-score");
const resultMessageEl = document.getElementById("result-message");
const sectionResultsEl = document.getElementById("section-results");
const scoreRingFill = document.getElementById("score-ring-fill");
const heroTitle = document.getElementById("hero-title");
const examMeta = document.getElementById("exam-meta");
const examGuideLink = document.getElementById("exam-guide-link");

function renderExamSelector() {
  examSelect.innerHTML = Object.values(EXAMS)
    .map(
      (exam) => `
        <option value="${exam.id}" ${exam.id === currentExamId ? "selected" : ""}>
          ${exam.name}
        </option>
      `,
    )
    .join("");
}

function updateExamChrome() {
  const exam = getExam();
  document.title = `${exam.shortName} Exam Score`;
  heroTitle.textContent = `${exam.name} Exam Score`;
  examMeta.innerHTML = `
    <span>${exam.questionCount} questions</span>
    <span>${exam.durationMinutes} minutes</span>
    <span>${exam.passingScore}% to pass</span>
  `;
  passingScoreEl.textContent = `${exam.passingScore}%`;
  examGuideLink.href = exam.examGuideUrl;
  examGuideLink.textContent = `${exam.name} exam guide`;
}

function renderInputs(values = {}) {
  const exam = getExam();

  sectionInputs.innerHTML = Object.entries(exam.sections)
    .map(
      ([name, weight]) => `
        <label class="section-input" for="${slugify(name)}">
          <div class="section-input-copy">
            <span class="section-input-name">${name}</span>
            <span class="section-input-weight">${weight}% of exam</span>
          </div>
          <div class="section-input-field">
            <input
              id="${slugify(name)}"
              name="${name}"
              type="number"
              min="0"
              max="100"
              step="1"
              inputmode="numeric"
              placeholder="0"
              value="${values[name] ?? ""}"
              required
            />
            <span class="input-suffix">%</span>
          </div>
          <span class="field-error" data-error-for="${slugify(name)}"></span>
        </label>
      `,
    )
    .join("");
}

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function readScores() {
  const exam = getExam();
  const scores = {};
  for (const name of Object.keys(exam.sections)) {
    const input = scoreForm.elements[name];
    scores[name] = input.value === "" ? NaN : Number(input.value);
  }
  return scores;
}

function validateScores(scores) {
  let valid = true;

  for (const [name, value] of Object.entries(scores)) {
    const errorEl = document.querySelector(`[data-error-for="${slugify(name)}"]`);
    if (Number.isNaN(value)) {
      errorEl.textContent = "Enter a percentage.";
      valid = false;
      continue;
    }
    if (value < 0 || value > 100) {
      errorEl.textContent = "Use a value between 0 and 100.";
      valid = false;
      continue;
    }
    errorEl.textContent = "";
  }

  return valid;
}

function updateScoreRing(score) {
  const circumference = 2 * Math.PI * 52;
  const progress = Math.max(0, Math.min(score, 100)) / 100;
  scoreRingFill.style.strokeDasharray = `${circumference}`;
  scoreRingFill.style.strokeDashoffset = `${circumference * (1 - progress)}`;
}

function renderStudyLinks(exam, sectionName, sectionScore, tier) {
  const resources = exam.studyResources[sectionName] ?? [];
  const needsStudy = tier === "weak";

  return `
    <div class="study-resources ${needsStudy ? "study-resources-priority" : ""}">
      <div class="study-resources-header">
        <span class="study-resources-title">Official Study Resources</span>
        ${
          needsStudy
            ? '<span class="study-resources-badge">Focus here</span>'
            : ""
        }
      </div>
      <ul class="study-link-list">
        ${resources
          .map(
            (resource) => `
              <li>
                <a
                  href="${resource.url}"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="study-link"
                >
                  <span class="study-link-label">${resource.label}</span>
                  <span class="study-link-source">${resource.source}</span>
                </a>
              </li>
            `,
          )
          .join("")}
      </ul>
    </div>
  `;
}

function renderResults(scores) {
  const exam = getExam();
  const overall = computeWeightedScore(scores, exam.sections);
  const sections = buildSectionResults(exam, scores);
  const totalCorrect = sections.reduce((sum, section) => sum + section.correct, 0);
  const passed = overall >= exam.passingScore;
  const pointsFromPass = overall - exam.passingScore;

  overallScoreEl.textContent = `${overall}%`;
  totalCorrectEl.textContent = `${totalCorrect} / ${exam.questionCount}`;
  pointsFromPassEl.textContent =
    pointsFromPass >= 0 ? `+${pointsFromPass}` : `${pointsFromPass}`;
  passBadgeEl.textContent = passed ? "Pass" : "Not Yet Passing";
  passBadgeEl.className = `pass-badge ${passed ? "pass" : "fail"}`;
  resultMessageEl.textContent = messageForScore(overall, exam.passingScore);
  updateScoreRing(overall);

  sectionResultsEl.innerHTML = sections
    .sort((a, b) => b.roomToImprove - a.roomToImprove)
    .map(
      (section) => `
        <article class="section-result section-tier-${section.tier}">
          <div class="section-result-header">
            <div>
              <h4>${section.name}</h4>
              <p>${section.weight}% weight · ${section.sectionQuestions} questions</p>
            </div>
            <div class="section-result-score">
              <span>${section.sectionScore}%</span>
              <small>${section.correct}/${section.sectionQuestions} correct</small>
              <span class="section-tier-badge">${section.tierLabel}</span>
            </div>
          </div>
          <div class="progress-bar" aria-hidden="true">
            <div class="progress-fill progress-fill-${section.tier}" style="width: ${section.sectionScore}%"></div>
          </div>
          <div class="section-result-footer">
            <span>${section.weightedPoints} weighted points earned</span>
            <span>${section.roomToImprove.toFixed(1)} pts still available</span>
          </div>
          ${renderStudyLinks(exam, section.name, section.sectionScore, section.tier)}
        </article>
      `,
    )
    .join("");

  resultsCard.classList.remove("hidden");
  resultsCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function switchExam(examId) {
  currentExamId = examId;
  updateExamChrome();
  renderInputs();
  resultsCard.classList.add("hidden");
}

examSelect.addEventListener("change", (event) => {
  switchExam(event.target.value);
});

scoreForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const scores = readScores();
  if (!validateScores(scores)) return;
  renderResults(scores);
});

document.getElementById("sample-btn").addEventListener("click", () => {
  const exam = getExam();
  renderInputs(exam.sampleScores);
  renderResults(exam.sampleScores);
});

document.getElementById("clear-btn").addEventListener("click", () => {
  renderInputs();
  resultsCard.classList.add("hidden");
});

renderExamSelector();
updateExamChrome();
renderInputs();