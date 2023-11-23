import {ProjectCard1, ProjectCard2, ProjectCard3, ProjectCard4, ProjectCard5} from './projectCards/index.js'


export default function Projects() {
 
  return (
    <section id="display-projects">
      <div className='column'>

       <ProjectCard1 />
       <ProjectCard2 />
       <ProjectCard3 />
      </div>
      <div className='column'>

       <ProjectCard4 />
       <ProjectCard5 />
      </div>
    </section>
  );
}