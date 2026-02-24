// 1. All Jobs Data
const jobsData = [
  {
    id: 1,
    companyName: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
    status: "all" 
  },
  {
    id: 2,
    companyName: "WebFlow Agency",
    position: "Web Designer & Developer",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$80,000 - $120,000",
    description: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
    status: "all"
  },
  {
    id: 3,
    companyName: "DataViz Solutions",
    position: "Data Visualization Specialist",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$125,000 - $165,000",
    description: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
    status: "all"
  },
  {
    id: 4,
    companyName: "CloudNet Systems",
    position: "DevOps Engineer",
    location: "Seattle, WA",
    type: "Contract",
    salary: "$110,000 - $150,000",
    description: "Manage and scale cloud infrastructure. Experience with AWS, Docker, and Kubernetes is strictly required.",
    status: "all"
  },
  {
    id: 5,
    companyName: "AI Innovations",
    position: "Machine Learning Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "$140,000 - $190,000",
    description: "Develop and deploy advanced machine learning models. Python, TensorFlow, and PyTorch expertise essential.",
    status: "all"
  },
  {
    id: 6,
    companyName: "CyberGuard Tech",
    position: "Cybersecurity Analyst",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$105,000 - $145,000",
    description: "Monitor network traffic for security events and analyze potential threats to protect our enterprise infrastructure.",
    status: "all"
  },
  {
    id: 7,
    companyName: "FinTech Frontiers",
    position: "Backend Developer (Node.js)",
    location: "New York, NY",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    description: "Design and build scalable APIs for our next-generation payment processing platform using Node.js and Express.",
    status: "all"
  },
  {
    id: 8,
    companyName: "GamePlay Studios",
    position: "Unity 3D Developer",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$115,000 - $155,000",
    description: "Join our core team to develop engaging 3D mobile games. Strong C# skills and a passion for gaming required.",
    status: "all"
  }
];

// 2. DOM Elements
const jobsContainer = document.getElementById("all-jobs-container");

// 3. Render Functions
function renderJobs(jobsArray) {
  jobsContainer.innerHTML = ""; 

  jobsArray.forEach(function(job) {
    const jobCard = document.createElement("div");
    jobCard.className = "bg-white border border-slate-200 rounded-xl p-8 relative shadow-sm hover:shadow-md transition-shadow";

    jobCard.innerHTML = `
        <button class="absolute top-6 right-6 text-slate-400 hover:text-red-500 transition-colors">
          <i class="fa-regular fa-trash-can text-xl"></i>
        </button>

        <h3 class="text-xl font-bold text-slate-800">${job.companyName}</h3>
        <p class="text-slate-600 font-medium mt-1 text-base">${job.position}</p>
        
        <div class="flex flex-wrap items-center gap-2 text-sm text-slate-500 my-4 font-medium">
          <span>${job.location}</span>
          <span>•</span>
          <span>${job.type}</span>
          <span>•</span>
          <span>${job.salary}</span>
        </div>

        <p class="text-base text-slate-600 mb-6 leading-relaxed max-w-4xl">
          ${job.description}
        </p>

        <div class="flex gap-4">
          <button class="px-6 py-2.5 text-xs font-bold text-green-600 border border-green-500 rounded hover:bg-green-50 transition-colors tracking-wide">INTERVIEW</button>
          <button class="px-6 py-2.5 text-xs font-bold text-red-500 border border-red-500 rounded hover:bg-red-50 transition-colors tracking-wide">REJECTED</button>
        </div>
    `;

    jobsContainer.appendChild(jobCard);
  });
}

// 4. Initialize
renderJobs(jobsData);