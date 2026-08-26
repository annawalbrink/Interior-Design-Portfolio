const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("is-open");
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
  });
});

const projects = {
  "Integrated Social Space": {
    title: "Integrated Social Space",
    roomType: "Living Room, Kitchen & Entrance Hall",
    year: "2023-2024",
    area: "75 m²",
    concept: "Open flow, warm woods, a home that breathes as one space.",
    description:
      "A fully integrated social area combining living room, dining, kitchen and entrance hall into a single continuous flow. Dark wood flooring and a striped blue rug anchor the lounge, while a floating media wall and layered artwork add depth. The open kitchen features a large white island with bar seating, contrasting warm walnut cabinetry with crisp white countertops. Designed and visualized in Room Planner.",
    images: [
      "Images/70h.jpg",
      "Images/71.jpg",
      "Images/72.jpg",
      "Images/73.jpg",
      "Images/74.jpg",
      "Images/75.jpg",
      "Images/76.jpg",
      "Images/77.jpg",
    ],
  },

  "Open-Plan Living": {
    title: "Open-Plan Living",
    roomType: "Living Room, Kitchen & Entrance Hall",
    year: "2025-2026",
    area: "58 m²",
    concept: "A textured welcome opening into deep navy, natural texture; a continuous social space.",
    description:
      "A whitewashed brick entry corridor leads into an integrated living, dining and kitchen area wrapped in deep navy walls. Light wood flooring, a jute rug and a white L-shaped island with walnut cabinetry bring warmth to the saturated palette. Designed and visualized in Room Planner.",
    images: [
      "Images/78.jpg",
      "Images/79.jpg",
      "Images/80.jpg",
      "Images/81.jpg",
      "Images/82.jpg",
      "Images/83.png",
    ],
  },

  "Master Suite Bathroom": {
    title: "Master Suite Bathroom",
    roomType: "Bathroom",
    year: "2023-2024",
    area: "4.36 m²",
    concept: "Dark marble, gold veining, quiet luxury.",
    description:
      "An en-suite bathroom for the Master Suite, clad in dramatic black marble with gold veining, paired with a round mirror and double vanity for a refined, high-contrast finish. Designed and visualized in Room Planner.",
    images: [
      "Images/84.jpg",
      "Images/85.jpg",
      "Images/86.jpg",
    ],
  },

   "Guest Bathroom": {
    title: "Guest Bathroom",
    roomType: "Bathroom",
    year: "2025-2026",
    area: "2.78 m²",
    concept: "Earthy tones, a warm compact retreat.",
    description:
      "A small, efficient bathroom in warm brown and taupe tones, with a textured stone-effect shower wall and a wood-toned vanity, bringing warmth to a tight footprint. Designed and visualized in Room Planner.",
    images: [
      "Images/87.png",
      "Images/88.png",
    ],
  },

  "Study Bedroom": {
    title: "Study Bedroom",
    roomType: "Bedroom",
    year: "2023-2024",
    area: "18.9 m²",
    concept: "Focused and fresh, a room for rest and work in equal measure.",
    description:
      "A youthful bedroom balancing sleep and study, with a fresh green accent wall, built-in desk, and direct access to a private balcony. Warm wood flooring and a green area rug tie the palette together. Designed and visualized in Room Planner.",
    images: [
      "Images/89.jpg",
      "Images/90.jpg",
    ],
  },

   "Suite with Office": {
    title: "Suite with Office",
    roomType: "Bedroom",
    year: "2023-2024",
    area: "29.3 m²",
    concept: "Deep blues, city lights, a suite for living and working.",
    description:
      "A generous master suite in deep teal tones, combining a sleeping area with a dedicated desk nook and floor-to-ceiling city views. The layered rug and warm wood floor soften the saturated wall color, creating a moody yet functional retreat. Designed and visualized in Room Planner.",
    images: [
      "Images/91.jpg",
      "Images/92.jpg",
      "Images/93.jpg",
    ],
  },

  "Suite Walk-in closet": {
    title: "Suite Walk-in closet",
    roomType: "Closet",
    year: "2023-2024",
    area: "4.2 m²",
    concept: "Organized wardrobe, teal-lined storage.",
    description:
      "A compact walk-in closet paired with Bedroom, featuring open shelving, hanging rails and shoe storage against a teal backdrop, keeping everyday items visible and accessible. Designed and visualized in Room Planner.",
    images: [
      "Images/94.jpg",
    ],
  },

  "Suite Bathroom": {
    title: "Suite Bathroom",
    roomType: "Bathroom",
    year: "2023-2024",
    area: "3.81 m²",
    concept: "Stone textures, a soft blue escape.",
    description:
      "An en-suite bathroom finished with a blue stone-effect accent wall in the shower area, paired with a light wood vanity and neutral tile flooring for a calm, spa-like feel. Designed and visualized in Room Planner.",
    images: [
      "Images/95.jpg",
      "Images/96.jpg",
    ],
  },

 "Master Walk-in Closet": {
    title: "Master Walk-in Closet",
    roomType: "Closet",
    year: "2023-2024",
    area: "3.98 m²",
    concept: "Tailored storage for a curated wardrobe.",
    description:
      "A walk-in closet for the Master Suite, in warm walnut tones, organized with open shelving, hanging rails and dedicated shoe display, designed to complement the suite's dark, elevated palette. Designed and visualized in Room Planner.",
    images: [
      "Images/97.jpg",
    ],
  },

   "Master Suite": {
    title: "Master Suite",
    roomType: "Bedroom",
    year: "2023-2024",
    area: "36.8 m²",
    concept: "Bold and dramatic, a night-toned retreat with skyline views.",
    description:
      "The largest suite project, wrapped in dark walls that let a floor-to-ceiling city skyline take center stage. A dedicated desk area and lounge nook with poufs extend the room's use beyond sleeping, creating a private retreat with a striking, moody atmosphere. Designed and visualized in Room Planner.",
    images: [
      "Images/98.jpg",
      "Images/99.jpg",
    ],
  },

  "Social Bathroom": {
    title: "Social Bathroom",
    roomType: "Bathroom",
    year: "2023-2024",
    area: "4.1 m²",
    concept: "Compact spa, marble calm.",
    description:
      "A narrow full bathroom finished in soft grey marble-effect tile, with a glass-panel shower enclosure and matching runner rug. The layout maximizes a tight footprint without sacrificing a sense of openness. Designed and visualized in Room Planner.",
    images: [
      "Images/100.jpg",
      "Images/101.jpg",
    ],
  },

  "Garage": {
    title: "Garage",
    roomType: "Garage",
    year: "2025-2026",
    area: "27.2 m²",
    concept: "Clean and functional, a showcase space for the car collection.",
    description:
      "A deep two-zone garage with slate-blue walls and a light tiled floor, finished with an overhead door, tool storage and a dedicated wash/detail bay; designed as much for display as for parking. Designed and visualized in Room Planner.",
    images: [
      "Images/102.png",
      "Images/103.png",
    ],
  },

  "The Nook": {
    title: "The Nook",
    roomType: "Bedroom",
    year: "2025-2026",
    area: "13 m²",
    concept: "Compact and calm, efficient everyday storage.",
    description:
      "A modest bedroom fitted with a sliding-door wardrobe and slim footprint, designed to maximize function in a smaller area while keeping a warm, uncluttered feel. Designed and visualized in Room Planner.",
    images: [
      "Images/104.png",
      "Images/105.png",
      "Images/106.png",
    ],
  },

  "Navy Room": {
    title: "Navy Room",
    roomType: "Bedroom",
    year: "2025-2026",
    area: "15.5 m²",
    concept: "Navy walls, natural wood, a grounded place to rest and work.",
    description:
      "A larger bedroom pairing deep navy walls with warm wood-toned furniture, including a sliding wardrobe and a wall-mounted TV opposite the bed; a room built for both rest and downtime. Designed and visualized in Room Planner.",
    images: [
      "Images/107.png",
      "Images/108.png",
      "Images/109.png",
    ],
  },
};

const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");
const modalTitle = document.getElementById("modalTitle");
const modalMeta = document.getElementById("modalMeta");
const modalArea = document.getElementById("modalArea");
const modalConcept = document.getElementById("modalConcept");
const modalDescription = document.getElementById("modalDescription");
const modalImage = document.getElementById("modalImage");
const galleryDots = document.getElementById("galleryDots");
const galleryPrev = document.getElementById("galleryPrev");
const galleryNext = document.getElementById("galleryNext");

let currentImages = [];
let currentImageIndex = 0;

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
  card.addEventListener("click", () => {
    const projectId = card.getAttribute("data-project");
    const project = projects[projectId];

    if (!project) return;

    openModal(project);
  });
});

function openModal(project) {
  modalTitle.textContent = project.title;
  modalMeta.textContent = `${project.roomType} · ${project.year}`;
  modalArea.textContent = project.area;
  modalConcept.textContent = project.concept;
  modalDescription.textContent = project.description;

  currentImages = project.images;
  currentImageIndex = 0;
  updateGalleryImage();
  buildGalleryDots();

  modalOverlay.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modalOverlay.classList.remove("is-open");
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", (event) => {
  if (event.target === modalOverlay) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

function updateGalleryImage() {
  modalImage.src = currentImages[currentImageIndex];
  modalImage.alt = `Imagem ${currentImageIndex + 1} do projeto`;

  const dots = galleryDots.querySelectorAll(".gallery-dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("is-active", index === currentImageIndex);
  });
}

function buildGalleryDots() {
  galleryDots.innerHTML = "";

  currentImages.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("gallery-dot");
    if (index === currentImageIndex) dot.classList.add("is-active");

    dot.addEventListener("click", () => {
      currentImageIndex = index;
      updateGalleryImage();
    });

    galleryDots.appendChild(dot);
  });
}

galleryPrev.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
  updateGalleryImage();
});

galleryNext.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex + 1) % currentImages.length;
  updateGalleryImage();
});
