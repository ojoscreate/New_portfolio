


const projects = [
    {
        featured: true,
        id: 1,
        type: "Web App",
        name: "TINDOG Platform",
        desc: "Conceptual pet adoption platform built with Bootstrap. Performance improved 15% through code optimisation.",
        tags: ["HTML", "CSS", "Bootstrap"],
        demo: "https://ojoscreate.github.io/tindog/",
        code: "https://github.com/Ojoscreate/tindog",
        emoji: "🐶",
        color: "#fce7f3",
        image: "Tindog.png"
    },
    {
        id: 2,
        type: "Automation",
        name: "Automated Workflow System",
        desc: "Form-triggered automation connecting Google Sheets, Gmail, and Slack with conditional logic for efficient data management.",
        tags: ["n8n", "Google Sheets", "Slack API", "Gmail API"],
        code: "https://github.com/Ojoscreate",
        demo: "",
        emoji: "⚙️",
        color: "#dcfce7",
        image: "",

    },
    {
        id: 3,
        type: "Web App",
        name: "Omnifood Website",
        desc: "Fully responsive food ordering platform optimised for speed and cross-device compatibility. Clean UI with fast load times.",
        tags: ["HTML", "CSS", "JavaScript"],
        demo: "https://cute-tapioca-3568f0.netlify.app/",
        code: "https://github.com/Ojoscreate",
        emoji: "🍽️",
        color: "#fef9c3",
        image: "omnifood shot.png"
    },
    {
        id: 4,
        type: "AI Integration",
        name: "AI Agent Workflow",
        desc: "Context-aware chat system integrating Google Gemini's API with memory storage and RSS feed tools for intelligent, real-time responses.",
        tags: ["Google Gemini API", "JavaScript", "n8n", "RSS Feeds"],
        demo: "",
        code: "https://github.com/Ojoscreate",
        emoji: "🤖",
        color: "#dbeafe",
        image: "",



    },
    {
        id: 5,
        type: "UI Clone",
        name: "FUNAAB Login Clone",
        desc: "Pixel-accurate clone of the Federal University of Agriculture Abeokuta login page — precision UI replication.",
        tags: ["HTML", "CSS"],
        demo: "https://ojoscreate.github.io/Funaab/",
        emoji: "🔐",
        color: "#f3e8ff",
        image: "Funaab.jpeg",

    },
    {
        id: 6,
        type: "Web Design",
        name: "Personal Blog",
        desc: "A clean personal blog built for easy communication and engagement, with a minimal reader-first design.",
        tags: ["HTML", "CSS", "JavaScript"],
        demo: "https://mellow-tartufo-4d20d2.netlify.app/",
        emoji: "📝",
        color: "#ffedd5",
        image: "personal-blog.png",
    },
];

// importing images
// const images = import.meta.glob('./assets/project-images/*.{png,jpg,jpeg,svg}',{
//     eager:true,
//     // as:'url',
//     import: 'default',
// });

// project card

function ProjectCard({ p }) {
    // const imagesList = Object.values(images);
    // console.log(p.name, imagesList);
    // const 

    
    return (
        <div className={`pf-project-card${p.featured ? " featured" : ""}`}>
        {p.image == ""? <div className="pf-project-thumb" style={{ background: p.color }}>
            {p.emoji}
            
        </div> :
        <div className="pf-project-img">
             {/* <img src="./assets/project-images/tindog.png" alt="" /> */}
            {/* {projects.map((card, index) =>(
                <img key={index} src= {imagesList[card.id]} alt={card.name} />
                
            ))} */}
            
            <img key={p.id} src= {`/src/assets/project-images/${p.image}`} alt={p.name} />;
        </div>}
        <div className="pf-project-body">
            <div className="pf-project-type">{p.type}</div>
            <div className="pf-project-name">{p.name}</div>
            <div className="pf-project-desc">{p.desc}</div>
            <div className="pf-project-tags">
            {p.tags.map(t => <span className="pf-project-tag" key={t}>{t}</span>)}
            </div>
            <div className="pf-project-links">
            {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="pf-proj-link">Live Demo →</a>}
            {p.code && <a href={p.code} target="_blank" rel="noreferrer" className="pf-proj-link">GitHub →</a>}
            </div>
        </div>
        </div>
    );
}

// project Section

function Projects() {
    return (
        <section className="pf-section" id="projects">
        <div className="pf-eyebrow">// projects</div>
        <div className="pf-section-title">Things I've built</div>
        <p className="pf-section-sub">A selection of real, live projects — click to view.</p>
        <div className="pf-projects-grid">
            {projects.map(p => <ProjectCard key={p.name} p={p} />)}
        </div>
        </section>
        );
}

export default function Project() {
    return (
        <>
            <Projects />
            <hr className="pf-divider" />
         </>
    );
};