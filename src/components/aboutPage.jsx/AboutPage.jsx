import { useNavigate } from "react-router-dom";

export default function AboutPage() {

    const navigate = useNavigate()
    //refactor needed
    // content to be added + format improved upon
    // css styling: focusable text - what the user is currently reading will be more contrasted and bolder than the rest, paragraph per paragraph
  return (
    <>
      <header className="rectangular-container">
       <h1>from performances to web development</h1> 
       <button className="home-button" onClick={() => navigate("/")}>HOME</button>
      </header>
      <section className="grid-4-cols">
        <article>
          <h3>Software developer</h3>
          <br></br>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus atque
            distinctio ipsam recusandae sapiente! Quisquam quod, itaque, ad
            dolores laboriosam aliquid a nulla porro odio numquam cupiditate
            iusto delectus nobis!
          </p>
        </article>
        <article>
          <h3>Former EFL Teacher</h3>
          <br></br>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            dignissimos magni vero voluptatem placeat officia. Non inventore
            veniam provident atque, ipsa at debitis reprehenderit omnis
            perferendis? Natus cumque doloremque aliquam. Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Fuga aliquid explicabo et illum?
            Cumque, ullam! Suscipit voluptates assumenda, quae impedit
            repellendus id, voluptas dolores, at blanditiis sit rem dolorum
            inventore?
          </p>
        </article>

        <article>
          <h3>BsC Psychology</h3>
          <br></br>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, dolore unde minima nam velit recusandae aut,
            repellat expedita suscipit pariatur dolorum, dolores similique quasi
            vero officia. Animi sequi excepturi neque.
          </p>
        </article>

        <article>
          <h3>Former dancer</h3>
          <br></br>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, autem
            ipsam repellat dolor molestiae explicabo, id voluptatibus aspernatur
            quidem maiores minima fugiat ea sequi culpa illum quam neque libero
            voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ex laborum provident, eum corrupti molestias, in facere nulla sed
            autem est laboriosam, ad nisi natus. Praesentium consectetur eos
            autem debitis doloribus!
          </p>
        </article>
      </section>
    </>
  );
}
