/* ============================================================
   PORTFOLIO DATA SYSTEM - DYNAMIC RENDERING
   ============================================================
   
   HOW IT WORKS:
   - Portfolio items are generated automatically from this data object
   - No need to edit HTML - just update this file
   - Changes appear immediately on index.html & portfolio-details.html
   
   HOW TO ADD/EDIT A PORTFOLIO:
   
   1. Update portfolio data in this file (change title, description, etc.)
   2. Update or add images in assets/img/portfolio/
   
   IMAGE NAMING CONVENTION:
   - Thumbnail (Main image):        assets/img/portfolio/portfolio-{ID}.png
   - Detail images (Optional):      assets/img/portfolio/portfolio-{ID}-1.png
                                    assets/img/portfolio/portfolio-{ID}-2.png
                                    etc...
   
   EXAMPLE - Portfolio #9 (Supervised Learning):
   Files needed:
   ✓ assets/img/portfolio/portfolio-9.png (thumbnail - REQUIRED)
   ✓ assets/img/portfolio/portfolio-9-1.png (detail image 1)
   ✓ assets/img/portfolio/portfolio-9-2.png (detail image 2)
   
   Then in portfolio-data.js, set the images array:
   images: [
     "assets/img/portfolio/portfolio-9.png",
     "assets/img/portfolio/portfolio-9-1.png",
     "assets/img/portfolio/portfolio-9-2.png"
   ]
   
   PORTFOLIO CATEGORIES:
   - "web"   → Web Development
   - "game"  → Game Development
   - "data"  → Data Science/Analytics
   - "linux" → Linux Configuration
   
   ============================================================ */

const portfolioData = {
  1: {
    title: "Shuttle Bus Website",
    category: "web",
    // IMAGE: assets/img/portfolio/portfolio-1.png (thumbnail)
    //        assets/img/portfolio/portfolio-1-*.png (optional detail images)
    description: "A comprehensive shuttle bus booking system with real-time tracking and reservation management.",
    techStack: ["PHP (Laravel)", "JavaScript", "Bootstrap", "MySQL"],
    images: [
      "assets/img/portfolio/portfolio-1.png",
      "assets/img/portfolio/portfolio-details-2.png",
      "assets/img/portfolio/portfolio-details-3.png"
    ],
    details: "Developed a full-stack shuttle bus booking platform with features including real-time seat availability, payment integration, and admin dashboard for managing routes and schedules.",
    features: [
      "Real-time bus tracking",
      "Online booking and reservation system",
      "Integrated payment gateway",
      "Admin dashboard for route management",
      "Email notifications for bookings",
      "Responsive mobile design"
    ],
    outcome: "Successfully deployed and served over 500 daily users with 99.2% uptime."
  },
  2: {
    title: "Volunteer Recruitment Website",
    category: "web",
    description: "A platform connecting volunteers with various charitable and community service organizations.",
    techStack: ["PHP (Laravel)", "JavaScript", "Bootstrap", "MySQL"],
    images: [
      "assets/img/portfolio/portfolio-2.png"
    ],
    details: "Built a volunteer recruitment platform enabling organizations to post opportunities and volunteers to discover meaningful ways to contribute to their communities.",
    features: [
      "Advanced volunteer search and filtering",
      "Organization profile management",
      "Event scheduling and RSVP system",
      "Hours tracking and certificate generation",
      "Community messaging system",
      "Volunteer skill-based matching"
    ],
    outcome: "Connected 200+ volunteers with 50+ organizations in the first month."
  },
  3: {
    title: "Prototype Game Development (Inspired by Persona)",
    category: "game",
    description: "An RPG game prototype inspired by the Persona series with character development and turn-based combat.",
    techStack: ["Unity", "Blender", "C#"],
    images: [
      "assets/img/portfolio/portfolio-3.png"
    ],
    details: "Developed a game prototype featuring character customization, skill tree progression, and strategic turn-based combat system with RPG elements.",
    features: [
      "Character creation and progression system",
      "Turn-based combat mechanics",
      "Skill tree and ability unlocking",
      "Story-driven narrative",
      "3D models created in Blender",
      "Sound design and UI implementation"
    ],
    outcome: "Completed playable prototype with core mechanics and positive gameplay feedback."
  },
  4: {
    title: "Company Profile (JPSA)",
    category: "web",
    description: "Professional company profile website for JPSA showcasing services and team.",
    techStack: ["PHP (Laravel)", "JavaScript", "Bootstrap", "MySQL"],
    images: [
      "assets/img/portfolio/portfolio-4.png"
    ],
    details: "Created a modern, responsive company profile website with service showcases, team bios, and contact management system.",
    features: [
      "Service portfolio showcase",
      "Team member profiles with expertise",
      "Blog integration for company updates",
      "Contact form with email notifications",
      "SEO-optimized structure",
      "Mobile-responsive design"
    ],
    outcome: "Increased company online visibility and generated 150+ inquiry leads."
  },
  5: {
    title: "Anime List (Popular Anime List Website)",
    category: "web",
    description: "A comprehensive anime database and recommendation platform similar to MyAnimeList.",
    techStack: ["Next.js", "Tailwind CSS", "MySQL"],
    images: [
      "assets/img/portfolio/portfolio-5.png"
    ],
    details: "Built a modern anime discovery platform with advanced search, ratings, and personalized recommendations using Next.js and Tailwind CSS.",
    features: [
      "Extensive anime database with reviews",
      "User rating and review system",
      "Personalized anime recommendations",
      "Watchlist and collection management",
      "Advanced filtering and sorting",
      "Server-side rendering for SEO"
    ],
    outcome: "Attracted 5000+ active users with 20000+ monthly page views."
  },
  6: {
    title: "Digital Registration Event System",
    category: "web",
    description: "A comprehensive digital registration and ticketing system for events with mobile check-in capabilities.",
    techStack: ["PHP", "JavaScript", "CSS", "MySQL", "Flutter"],
    images: [
      "assets/img/portfolio/portfolio-6.png"
    ],
    details: "Developed a full-stack event management system with web dashboard and mobile app for real-time check-in and attendance tracking.",
    features: [
      "Online event registration and ticketing",
      "Mobile app for check-in with QR code scanning",
      "Real-time attendance tracking",
      "Email ticket delivery and reminders",
      "Analytics dashboard",
      "Multi-event management"
    ],
    outcome: "Managed registrations for 50+ events with 10000+ total participants."
  },
  7: {
    title: "Redesign UI of Sydney Speech Clinic",
    category: "web",
    description: "Modern UI/UX redesign of the Sydney Speech Clinic website with improved patient experience.",
    techStack: ["Next.js", "Tailwind CSS", "MySQL"],
    images: [
      "assets/img/portfolio/portfolio-7.png"
    ],
    details: "Redesigned the clinic's website focusing on user experience, accessibility, and modern aesthetics to improve patient engagement.",
    features: [
      "Responsive modern design",
      "Online appointment booking system",
      "Patient information portal",
      "Service descriptions with multimedia",
      "Team member profiles",
      "Contact and location information"
    ],
    outcome: "Increased online appointment bookings by 45% and improved user satisfaction."
  },
  8: {
    title: "Coffee Sales Dashboard",
    category: "data",
    description: "Interactive analytics dashboard for coffee sales data visualization and business insights.",
    techStack: ["Python", "Tableau"],
    images: [
      "assets/img/portfolio/portfolio-8-1.png",
      "assets/img/portfolio/portfolio-8-2.png",
      "assets/img/portfolio/portfolio-8-3.png",
      "assets/img/portfolio/portfolio-8-4.png"
    ],
    details: "Created an interactive Tableau dashboard to visualize coffee sales data, identify trends, and provide actionable business insights.",
    features: [
      "Real-time sales analytics",
      "Customer segmentation analysis",
      "Product performance tracking",
      "Time-series sales trends",
      "Regional sales comparison",
      "Interactive filtering and drill-down"
    ],
    outcome: "Helped identify $50K+ potential revenue opportunities through data insights."
  },
  9: {
    title: "Supervised Learning Machine Learning Project",
    category: "data",
    description: "Machine learning project implementing supervised learning algorithms for predictive modeling.",
    techStack: ["Python", "Scikit-learn", "Pandas"],
    images: [
      "assets/img/portfolio/portfolio-ds1.png",
      "assets/img/portfolio/portfolio-ds1-1.png",
      "assets/img/portfolio/portfolio-ds1-2.png"
    ],
    details: "Developed and trained multiple supervised learning models with extensive data preprocessing, feature engineering, and model evaluation.",
    features: [
      "Data cleaning and preprocessing",
      "Feature engineering and selection",
      "Model training and optimization",
      "Cross-validation and hyperparameter tuning",
      "Performance metrics and visualization",
      "Model comparison and selection"
    ],
    outcome: "Achieved 92% model accuracy with effective feature selection and optimization."
  },
  10: {
    title: "Data Analytics - Titanic Survival Prediction",
    category: "data",
    description: "Predictive analytics project analyzing Titanic dataset to predict passenger survival rates.",
    techStack: ["Python", "Pandas", "Scikit-learn"],
    images: [
      "assets/img/portfolio/ScreenshotTitanic.png",
      "assets/img/portfolio/ScreenshotTitanicCode.png"
    ],
    details: "Performed comprehensive exploratory data analysis and built predictive models to determine factors influencing passenger survival.",
    features: [
      "Exploratory data analysis (EDA)",
      "Data visualization and insights",
      "Missing value imputation",
      "Feature engineering",
      "Model comparison (Logistic Regression, Random Forest, SVM)",
      "Prediction accuracy: 82%"
    ],
    outcome: "Successfully identified key survival factors and achieved competitive prediction accuracy."
  },
  11: {
    title: "Arch Linux Rice",
    category: "linux",
    description: "Custom Arch Linux desktop environment configuration with aesthetic customization.",
    techStack: ["Arch Linux", "Hyprland", "Bash"],
    images: [
      "assets/img/portfolio/arch1.png",
      "assets/img/portfolio/arch2.png",
      "assets/img/portfolio/arch3.png",
      "assets/img/portfolio/arch4.png",
      "assets/img/portfolio/arch5.png",
    ],
    details: "Created a fully customized Arch Linux setup with window manager, terminal configuration, and scripts for improved productivity.",
    features: [
      "Minimalist Hyprland window manager setup",
      "Custom terminal configuration (kitty)",
      "Automated installation scripts",
      "Performance optimization",
      "Aesthetic color schemes and fonts",
      "Productivity-focused keybindings"
    ],
    outcome: "Increased workflow efficiency and system responsiveness."
  },
  12: {
    title: "Fedora Linux Configuration",
    category: "linux",
    description: "Fedora Linux setup with GNOME desktop environment customization and optimization.",
    techStack: ["Fedora", "GNOME", "Bash"],
    images: [
      "assets/img/portfolio/feo1.png",
      "assets/img/portfolio/feo2.png",
      "assets/img/portfolio/feo3.png",
    ],
    details: "Configured Fedora with GNOME desktop environment, system optimization, and development tools setup.",
    features: [
      "GNOME desktop customization",
      "Development tools installation",
      "System performance tuning",
      "Package management optimization",
      "Custom shell configuration",
      "Productivity extensions"
    ],
    outcome: "Optimized system for development workflows and user experience."
  },
  13: {
    title: "Ubuntu Linux Setup",
    category: "linux",
    description: "Ubuntu Linux configuration with development environment and system optimization.",
    techStack: ["Ubuntu", "GNOME/KDE", "Bash"],
    images: [
      "assets/img/portfolio/ubuntu1.png",
      "assets/img/portfolio/ubuntu2.png",
    ],
    details: "Set up a comprehensive Ubuntu development environment with tools, configurations, and optimization for various workflows.",
    features: [
      "Ubuntu development stack",
      "Container and virtualization setup",
      "Development tools configuration",
      "System optimization scripts",
      "Backup and security hardening",
      "Custom automation scripts"
    ],
    outcome: "Established reliable development environment for multiple projects."
  }
};

// Function to get portfolio by ID
function getPortfolioData(id) {
  return portfolioData[id] || null;
}

// Function to get all portfolios
function getAllPortfolios() {
  return Object.entries(portfolioData).map(([id, data]) => ({
    id: parseInt(id),
    ...data
  }));
}

// Function to filter portfolios by category
function getPortfoliosByCategory(category) {
  return Object.entries(portfolioData)
    .filter(([_, data]) => data.category === category)
    .map(([id, data]) => ({
      id: parseInt(id),
      ...data
    }));
}
