import { useNavigate } from "react-router-dom";


export default function About() {

  const navigate = useNavigate()
  return (
    <>
      <section className="section-container" id="display-about-me" onClick={() => navigate('/about')}>
          <div className="round-container about" id="about-dance"><h3>trained dancer</h3></div>
          <div className="round-container about" id="about-teach"><h3>experienced EFL teacher</h3></div>
          <div className="round-container about" id="about-code"><h3>newbie developer</h3></div>
          <div className="round-container about" id="about-study"><h3>BsC Psychology holder</h3></div>
          {/* will replace this with an svg, and add styling so it only appears on hover */}
          <a className="icon-container about-page-link" alt="link to about page"><img/>{"->"}</a>
      </section>
 
    </>
  );
}
