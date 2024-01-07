export default function Header() {
  return (
    <>
      <section className="main-grid hero">
        <img
          className="fill round-container absolute-top-right"
          src="src\assets\img\IMG_20231122_180703.jpg"
          alt="portrait-pic"
        />
        <section className="rectangular-container title-container">
          <h1>
            Hi there! I'm Chloé, <br></br> Lorem ipsum dolor sit amet
            consectetur.
          </h1>
          {/* I'll change the img later, that one's just for trying things out */}
        </section>
        <section className="rectangular-container contact">
          <h2>CONTACT</h2>
          <a className="icon-container" alt="email">
            <img />
            svg
          </a>
          <a className="icon-container" alt="Github">
            <img />
            svg
          </a>
          <a className="icon-container" alt="LinkedIn">
            <img />
            svg
          </a>
        </section>
      </section>
    </>
  );
}
