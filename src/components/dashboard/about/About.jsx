import { useNavigate } from "react-router-dom";


export default function About() {

  const navigate = useNavigate()
  return (
    <>
      <section className="section-container" id="display-about-me" onClick={() => navigate('/about')}>
          <div className="round-container about" id="about-dance">15 year dancing</div>
          <div className="round-container about" id="about-teach">4 years teaching</div>
          <div className="round-container about" id="about-code">3 months coding</div>
          <div className="round-container about" id="about-study">5 years studying</div>
      </section>
 
    </>
  );
}
