import "./Technologies.css";

const skillCards = [
  {
    number: "01",
    title: "Frontend Development",
    text: [
      { value: "React", strong: true },
      { value: "Next.js", strong: true },
      { value: "TypeScript" },
      { value: "JavaScript" },
      { value: "HTML" },
      { value: "CSS" },
      { value: "Tailwind CSS" },
      { value: "Sass" },
      { value: "BEM" },
      { value: "Responsive Web Design" },
    ],
  },
  {
    number: "02",
    title: "Backend & Databases",
    text: [
      { value: "Node.js", strong: true },
      { value: "Express.js" },
      { value: "SQL" },
      { value: "SQLite" },
      { value: "API Integration" },
    ],
  },
  {
    number: "03",
    title: "Programming Concepts",
    text: [
      { value: "Object-Oriented Programming (OOP)", strong: true },
      { value: "Data Structures & Algorithms" },
    ],
  },
  {
    number: "04",
    title: "Version Control",
    text: [{ value: "Git" }, { value: "GitHub" }, { value: "GitLab" }],
  },
  {
    number: "05",
    title: "Deployment",
    text: [{ value: "Vercel" }, { value: "Netlify" }],
  },
  {
    number: "06",
    title: "Design & CMS Tools",
    text: [
      { value: "UX/UI Design Principles" },
      { value: "Photoshop" },
      { value: "Illustrator" },
      { value: "Adobe XD" },
      { value: "WordPress" },
      { value: "WooCommerce" },
    ],
  },
  {
    number: "07",
    title: "Professional Tools",
    text: [
      { value: "Basic SEO Principles" },
      { value: "Agile Methodologies" },
      { value: "Microsoft Office" },
      { value: "PowerPoint" },
      { value: "Excel" },
    ],
  },
  {
    number: "08",
    title: "Soft Skills",
    text: [
      { value: "Communication" },
      { value: "Teamwork" },
      { value: "Attention to Detail" },
      { value: "Problem Solving" },
      { value: "Fast Learning" },
    ],
  },
];

const Technologies = () => {
  return (
    <div>
      <section className="my__technologies section__margin" id="technologies">
        <div className="my__technologies-heading">
          <p>Software development stack</p>
          <h1>Technologies & Skills</h1>
          <span>
            My current stack for building responsive, modern and maintainable
            web applications with a focus on frontend, backend and OOP
            fundamentals.
          </span>
        </div>

        <div className="my__technologies-grid">
          {skillCards.map((card) => (
            <article className="my__skill-card" key={card.number}>
              <div className="my__skill-card-topline"></div>
              <div className="my__skill-card-header">
                <h2>{card.title}</h2>
                <span>{card.number}</span>
              </div>
              <p>
                {card.text.map((item, index) => (
                  <span key={item.value}>
                    {item.strong ? <strong>{item.value}</strong> : item.value}
                    {index < card.text.length - 1 ? " · " : ""}
                  </span>
                ))}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Technologies;
