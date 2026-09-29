// Single source of truth for resume content — pulled into index.astro and resume.astro.

export interface ExperienceEntry {
	role: string;
	organization: string;
	location: string;
	start: string;
	end: string;
	bullets: string[];
}

export interface EducationEntry {
	school: string;
	degree: string;
	location: string;
	start: string;
	end: string;
	details?: string[];
}

export interface SkillGroup {
	label: string;
	items: string[];
}

export const profile = {
	name: "Azlan Naeem",
	title: "Software Engineer · Machine Learning",
	summary:
		"CS student at the University of Toronto (Schulich Leader Scholar), previously a Software Engineer Co-op at Flywheel Digital building distributed backend systems. My strongest interest is applied machine learning — computer vision and model development — from training CNNs for medical imaging research to building end-to-end ML pipelines. Based in Toronto, open to software engineering and applied ML roles.",
	location: "Toronto, ON",
	email: "azlanmnaeem@gmail.com",
	links: {
		github: "https://github.com/azlannaeem",
		linkedin: "https://linkedin.com/in/azlan-naeem",
		resumePdf: "/resume.pdf",
	},
};

export const skills: SkillGroup[] = [
	{
		label: "ML & Data",
		items: ["PyTorch", "TensorFlow", "scikit-learn", "Keras", "NumPy", "pandas", "Matplotlib"],
	},
	{
		label: "Languages",
		items: ["Python", "Java", "C", "SQL", "TypeScript", "JavaScript", "R"],
	},
	{
		label: "Frameworks & Databases",
		items: ["Django", "Flask", "Spring", "React", "React Native", "PostgreSQL", "SQLite", "MongoDB", "Redshift"],
	},
	{
		label: "Cloud & DevOps",
		items: ["AWS", "Docker", "Git", "Datadog", "Airflow", "GitHub Actions"],
	},
];

export const experience: ExperienceEntry[] = [
	{
		role: "Fullstack Software Engineer Co-op",
		organization: "Flywheel Digital",
		location: "Toronto, ON",
		start: "May 2025",
		end: "Jun 2026",
		bullets: [
			"Architected a distributed workflow orchestration service to replace a legacy third-party platform, using two-level fanout and CAS-based locking to coordinate execution across 1,000+ advertiser accounts.",
			"Built and integrated a cross-service pipeline surfacing ML-model-derived incrementality metrics across Python/Django, Java/Spring, and Redshift, including schema migrations and production reporting across two UIs.",
			"Owned an end-to-end data integration feature bringing two new Amazon data sources into the Audience Builder, authoring the system design and geo- and audience-type-aware dataset selection logic across 16 SQL query variants and 8 audience types.",
			"Built a unified Datadog dashboard tracking 20+ metrics across API endpoints, Airflow pipelines, and Cloud Tasks queues, adopted by 3+ teams for real-time debugging and incident response.",
		],
	},
	{
		role: "Machine Learning Student Researcher",
		organization: "University of Toronto",
		location: "Toronto, ON",
		start: "May 2024",
		end: "Aug 2024",
		bullets: [
			"Built and trained CNN models in PyTorch to classify pediatric knee ultrasound images into age categories, developing an end-to-end preprocessing, training, and evaluation pipeline.",
			"Applied image preprocessing and augmentation techniques to address class imbalance and improve model generalization.",
			"Evaluated model performance using confusion matrices, ROC curves, and Grad-CAM to analyze prediction errors and interpret model decision regions.",
		],
	},
];

export const education: EducationEntry[] = [
	{
		school: "University of Toronto",
		degree: "Bachelor of Science in Computer Science",
		location: "Toronto, ON",
		start: "Sep 2022",
		end: "Apr 2027",
		details: [
			"Enrolled in Co-op program (ASIP/PEY)",
			"Schulich Leader Scholarship: awarded $80,000 out of 300,000 candidates",
		],
	},
];
