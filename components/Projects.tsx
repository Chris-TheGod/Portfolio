import { projectsData } from '@/lib/data';
import SectionHeading from './SectionHeading';
import React from 'react';

export default function Projects() {
  return (
    <section>
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

type ProjectProps = (typeof projectsData)[0];

function Project({ title, description, tags, imageUrl }: ProjectProps) {
  return <div>{title}</div>;
}
