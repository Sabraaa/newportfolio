import "./Technologies.css";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Redux",
      "TypeScript",
      "Tailwind",
      "Sass",
      "BEM",
      "Responsive Web Design",
      "API Integration",
      "UX/UI Design Principles",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js"],
  },
  {
    title: "Version Control",
    skills: ["Git", "GitHub", "GitLab"],
  },
  {
    title: "Programming Concepts",
    skills: ["Object-Oriented Programming (OOP)", "Data Structures & Algorithms"],
  },
  {
    title: "Database",
    skills: ["SQL", "SQLite"],
  },
  {
    title: "Deployment",
    skills: ["Netlify", "Vercel"],
  },
  {
    title: "Additional Skills",
    skills: [
      "Microsoft Office Suite",
      "Word",
      "Excel",
      "PowerPoint",
      "Adobe Creative Suite",
      "Photoshop",
      "Illustrator",
      "Premiere",
      "Adobe XD",
      "WordPress",
      "WooCommerce",
      "Basic SEO Principles",
      "Agile Methodologies",
    ],
  },
];

const Technologies = () => {
  return (
    <div>
      <div className="my__technologies section__margin" id="technologies">
        <h1>Software Development Skills</h1>
        <div className="my__skills-grid">
          {skillGroups.map((group) => (
            <section className="my__skills-card" key={group.title}>
              <h2>{group.title}</h2>
              <div className="my__skills-tags">
                {group.skills.map((skill) => (
                  <span className="my__skills-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
