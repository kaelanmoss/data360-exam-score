const EXAM = {
  name: "Data 360 Consultant",
  questionCount: 60,
  passingScore: 70,
  sections: {
    "Solution Positioning": 14,
    "Data 360 Setup and Administration": 13,
    "Data Source Connection and Ingestion": 18,
    "Harmonization and Unification": 17,
    "Data Enhancements, Sharing, and Analysis": 18,
    "Data Activations and Utilization": 20,
  },
};

const STUDY_RESOURCES = {
  "Solution Positioning": [
    {
      label: "Data 360 Overview",
      url: "https://help.salesforce.com/s/articleView?id=data.c360_a_data_cloud.htm&type=5",
      source: "Help",
    },
    {
      label: "Product Considerations",
      url: "https://help.salesforce.com/s/articleView?id=data.c360_a_product_considerations.htm&type=5",
      source: "Help",
    },
    {
      label: "Architecture Strategy",
      url: "https://help.salesforce.com/s/articleView?id=data.c360_a_data_cloud_architecture_strategy.htm&type=5",
      source: "Help",
    },
    {
      label: "Customer 360 Data Model",
      url: "https://help.salesforce.com/s/articleView?id=data.c360_a_customer360_lm.htm&type=5",
      source: "Help",
    },
    {
      label: "Prepare for the Data 360 Consultant Exam",
      url: "https://trailhead.salesforce.com/content/learn/trails/prepare-for-your-salesforce-data-360-consultant-exam",
      source: "Trailhead",
    },
  ],
  "Data 360 Setup and Administration": [
    {
      label: "Set Up and Provision Data 360",
      url: "https://help.salesforce.com/s/articleView?id=data.c360_a_setup_provision.htm&type=5",
      source: "Help",
    },
    {
      label: "User Permissions",
      url: "https://help.salesforce.com/s/articleView?id=data.c360_a_userpermissions.htm&type=5",
      source: "Help",
    },
    {
      label: "Sandbox Considerations",
      url: "https://help.salesforce.com/s/articleView?id=data.c360_a_data_cloud_sandbox_consideration.htm&type=5",
      source: "Help",
    },
    {
      label: "Limits and Guidelines",
      url: "https://help.salesforce.com/s/articleView?id=sf.c360_a_limits_and_guidelines.htm&type=5",
      source: "Help",
    },
    {
      label: "Deploy and Validate Data 360 Configurations",
      url: "https://trailhead.salesforce.com/content/learn/modules/data-360-sandboxes/deploy-and-validate-your-data-360-configurations",
      source: "Trailhead",
    },
  ],
  "Data Source Connection and Ingestion": [
    {
      label: "Data Streams",
      url: "https://help.salesforce.com/s/articleView?id=data.c360_a_data_streams.htm&type=5",
      source: "Help",
    },
    {
      label: "Connection Tasks",
      url: "https://help.salesforce.com/s/articleView?id=sf.c360_a_connection_tasks.htm&type=5",
      source: "Help",
    },
    {
      label: "Data 360 Glossary",
      url: "https://help.salesforce.com/s/articleView?id=data.c360_a_glossary_guide.htm&type=5",
      source: "Help",
    },
    {
      label: "Connect and Ingest Data",
      url: "https://trailhead.salesforce.com/content/learn/modules/data-cloud-connect-and-unify",
      source: "Trailhead",
    },
    {
      label: "Explore Setup to Activation Trail",
      url: "https://trailhead.salesforce.com/content/learn/trails/data-cloud-explore-setup-to-activation",
      source: "Trailhead",
    },
  ],
  "Harmonization and Unification": [
    {
      label: "Identity Resolution",
      url: "https://help.salesforce.com/s/articleView?id=data.c360_a_identity_resolution.htm&type=5",
      source: "Help",
    },
    {
      label: "Unified and Link Objects",
      url: "https://help.salesforce.com/s/articleView?id=data.c360_a_identity_resolution_data_modeling_unified_and_link_objects.htm&type=5",
      source: "Help",
    },
    {
      label: "Customer 360 Data Model Objects",
      url: "https://help.salesforce.com/s/articleView?id=data.c360_a_c360datamodel.htm&type=5",
      source: "Help",
    },
    {
      label: "Map and Unify Data",
      url: "https://trailhead.salesforce.com/content/learn/modules/data-cloud-connect-and-unify/map-and-unify-data",
      source: "Trailhead",
    },
    {
      label: "Configure Identity Resolution Rules",
      url: "https://trailhead.salesforce.com/content/learn/modules/data-and-identity-in-salesforce-cdp/configure-identity-resolution-rules",
      source: "Trailhead",
    },
  ],
  "Data Enhancements, Sharing, and Analysis": [
    {
      label: "Data Governance Capabilities",
      url: "https://help.salesforce.com/s/articleView?id=data.c360_a_data_gov_capabilities.htm&type=5",
      source: "Help",
    },
    {
      label: "Data Shares",
      url: "https://help.salesforce.com/s/articleView?id=data.c360_a_data_shares.htm&type=5",
      source: "Help",
    },
    {
      label: "Calculated Insights in Segments",
      url: "https://help.salesforce.com/s/articleView?id=data.c360_a_calculated_insights_in_segments.htm&type=5",
      source: "Help",
    },
    {
      label: "Business Intelligence and Analytics",
      url: "https://help.salesforce.com/s/articleView?id=data.c360_a_business_intelligence_analytics.htm&type=5",
      source: "Help",
    },
    {
      label: "Create a Calculated Insight",
      url: "https://trailhead.salesforce.com/content/learn/projects/explore-data-cloud-core-functionality/create-an-insight",
      source: "Trailhead",
    },
  ],
  "Data Activations and Utilization": [
    {
      label: "Segments",
      url: "https://help.salesforce.com/s/articleView?id=data.c360_a_segments.htm&type=5",
      source: "Help",
    },
    {
      label: "Segmentation Interface",
      url: "https://help.salesforce.com/s/articleView?id=data.c360_a_segmentation_interface.htm&type=5",
      source: "Help",
    },
    {
      label: "Activation for a Segment",
      url: "https://help.salesforce.com/s/articleView?id=data.c360_a_activation_for_a_segment.htm&type=5",
      source: "Help",
    },
    {
      label: "Data Actions",
      url: "https://help.salesforce.com/s/articleView?id=data.c360_a_data_actions_cdp.htm&type=5",
      source: "Help",
    },
    {
      label: "Customer 360 Audiences Segmentation",
      url: "https://trailhead.salesforce.com/content/learn/modules/customer-360-audiences-segmentation",
      source: "Trailhead",
    },
  ],
};

const SAMPLE_SCORES = {
  "Solution Positioning": 78,
  "Data 360 Setup and Administration": 65,
  "Data Source Connection and Ingestion": 82,
  "Harmonization and Unification": 58,
  "Data Enhancements, Sharing, and Analysis": 71,
  "Data Activations and Utilization": 74,
};

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

function buildSectionResults(scores) {
  const questionMap = distributeQuestions(EXAM.questionCount, EXAM.sections);

  return Object.entries(EXAM.sections).map(([name, weight]) => {
    const sectionQuestions = questionMap[name];
    const sectionScore = scores[name] ?? 0;
    const correct = estimateCorrect(sectionScore, sectionQuestions);

    return {
      name,
      weight,
      sectionQuestions,
      sectionScore,
      correct,
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

const sectionInputs = document.getElementById("section-inputs");
const scoreForm = document.getElementById("score-form");
const resultsCard = document.getElementById("results-card");
const overallScoreEl = document.getElementById("overall-score");
const totalCorrectEl = document.getElementById("total-correct");
const pointsFromPassEl = document.getElementById("points-from-pass");
const passBadgeEl = document.getElementById("pass-badge");
const resultMessageEl = document.getElementById("result-message");
const sectionResultsEl = document.getElementById("section-results");
const scoreRingFill = document.getElementById("score-ring-fill");

function renderInputs(values = {}) {
  sectionInputs.innerHTML = Object.entries(EXAM.sections)
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
  const scores = {};
  for (const name of Object.keys(EXAM.sections)) {
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

function renderStudyLinks(sectionName, sectionScore) {
  const resources = STUDY_RESOURCES[sectionName] ?? [];
  const needsStudy = sectionScore < EXAM.passingScore;

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
  const overall = computeWeightedScore(scores, EXAM.sections);
  const sections = buildSectionResults(scores);
  const totalCorrect = sections.reduce((sum, section) => sum + section.correct, 0);
  const passed = overall >= EXAM.passingScore;
  const pointsFromPass = overall - EXAM.passingScore;

  overallScoreEl.textContent = `${overall}%`;
  totalCorrectEl.textContent = `${totalCorrect} / ${EXAM.questionCount}`;
  pointsFromPassEl.textContent =
    pointsFromPass >= 0 ? `+${pointsFromPass}` : `${pointsFromPass}`;
  passBadgeEl.textContent = passed ? "Pass" : "Not Yet Passing";
  passBadgeEl.className = `pass-badge ${passed ? "pass" : "fail"}`;
  resultMessageEl.textContent = messageForScore(overall, EXAM.passingScore);
  updateScoreRing(overall);

  sectionResultsEl.innerHTML = sections
    .sort((a, b) => b.roomToImprove - a.roomToImprove)
    .map(
      (section) => `
        <article class="section-result">
          <div class="section-result-header">
            <div>
              <h4>${section.name}</h4>
              <p>${section.weight}% weight · ${section.sectionQuestions} questions</p>
            </div>
            <div class="section-result-score">
              <span>${section.sectionScore}%</span>
              <small>${section.correct}/${section.sectionQuestions} correct</small>
            </div>
          </div>
          <div class="progress-bar" aria-hidden="true">
            <div class="progress-fill" style="width: ${section.sectionScore}%"></div>
          </div>
          <div class="section-result-footer">
            <span>${section.weightedPoints} weighted points earned</span>
            <span>${section.roomToImprove.toFixed(1)} pts still available</span>
          </div>
          ${renderStudyLinks(section.name, section.sectionScore)}
        </article>
      `,
    )
    .join("");

  resultsCard.classList.remove("hidden");
  resultsCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

scoreForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const scores = readScores();
  if (!validateScores(scores)) return;
  renderResults(scores);
});

document.getElementById("sample-btn").addEventListener("click", () => {
  renderInputs(SAMPLE_SCORES);
  renderResults(SAMPLE_SCORES);
});

document.getElementById("clear-btn").addEventListener("click", () => {
  renderInputs();
  resultsCard.classList.add("hidden");
});

renderInputs();