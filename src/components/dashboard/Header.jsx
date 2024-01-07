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
            Chloé Zermatten
          </h1>
          {/* I'll change the img later, that one's just for trying things out */}
        <section className="rectangular-container contact">
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
        <p className="white-font">chloezermatten@gmail.com</p>
        <p className="white-font">0044 7492 617 864</p>
        </section>
      </section>
    </>
  );
}
