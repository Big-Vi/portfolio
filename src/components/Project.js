import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import { Link } from "react-router-dom";

export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'project']{
                title,
                date,
                place,
                slug,
                description,
                projectType,
                link,
                tags
            }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <main>
      <section>
        <h1>Projects</h1>
        <div>
          {projectData && projectData.map((project, index) => (
            <article>
              <Link to={"/project/" + project.slug} key={project.slug}>
                <span>
                  <span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <p>finished on {new Date(project.date).toLocaleDateString()}</p>
                    <span role='img' aria-label='right pointer'>👉</span>
                  </span>
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
