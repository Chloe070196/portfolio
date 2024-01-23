import { useNavigate } from "react-router-dom";


export default function About() {

  const navigate = useNavigate()
  return (
    <>
      <section className="section-container" id="display-about-me" onClick={() => navigate('/about')}>
          <div className="round-container about" id="about-dance"><p className="white-font" >2016-2019</p><h3>Trainee dancer</h3></div>
          <div className="round-container about" id="about-teach"><p className="white-font" >2019-2022</p><h3>EFL teacher</h3></div>
          <div className="round-container about" id="about-senior-teach"><p className="white-font" >2022-2023</p><h3>Senior EFL teacher <br></br>teacher trainer</h3></div>
          <div className="round-container about" id="about-code"><p className="white-font" >2023 - now</p><h3>newbie developer</h3></div>
          <div className="round-container about" id="about-study"><p className="white-font" >2017-2021</p><h3>BsC Psychology</h3></div>
          {/* will replace this with an svg, and add styling so it only appears on hover */}
          <a className="icon-container about-page-link" alt="link to about page"><img/>{"->"}</a>
      </section>
 
    </>
  );
}
