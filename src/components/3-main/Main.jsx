
import "./main.css";

const Main = () => {

  // const products = [
  //   {
  //     title: "My Portfolio",
  //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam accusantium, quae, voluptates, eum cumque autem quidem exercitationem iste numquam quia doloremque.",
  //     imgUrl: imgOne,
  //   },
  //   {
  //     title: "My Portfolio",
  //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam accusantium, quae, voluptates, eum cumque autem quidem exercitationem iste numquam quia doloremque.",
  //     imgUrl: imgTwo,
  //   },
  //   {
  //     title: "My Portfolio",
  //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam accusantium, quae, voluptates, eum cumque autem quidem exercitationem iste numquam quia doloremque.",
  //     imgUrl: imgThree,
  //   },
  //   {
  //     title: "My Portfolio",
  //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam accusantium, quae, voluptates, eum cumque autem quidem exercitationem iste numquam quia doloremque.",
  //     imgUrl: imgFour,
  //   },
  //   {
  //     title: "My Portfolio",
  //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam accusantium, quae, voluptates, eum cumque autem quidem exercitationem iste numquam quia doloremque.",
  //     imgUrl: imgFive,
  //   },
  //   {
  //     title: "My Portfolio",
  //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam accusantium, quae, voluptates, eum cumque autem quidem exercitationem iste numquam quia doloremque.",
  //     imgUrl: imgSix,
  //   },
  //   {
  //     title: "My Portfolio",
  //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam accusantium, quae, voluptates, eum cumque autem quidem exercitationem iste numquam quia doloremque.",
  //     imgUrl: imgSeven,
  //   },
  //   {
  //     title: "My Portfolio",
  //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam accusantium, quae, voluptates, eum cumque autem quidem exercitationem iste numquam quia doloremque.",
  //     imgUrl: imgEight,
  //   },
  //   {
  //     title: "My Portfolio",
  //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam accusantium, quae, voluptates, eum cumque autem quidem exercitationem iste numquam quia doloremque.",
  //     imgUrl: imgNine,
  //   }
  // ];


  return (
    <section className="main">
      <div className="left-section">
        <button className="btn-card active">All Projects</button>
        <button className="btn-card">HTML & CSS</button>
        <button className="btn-card">JavaScript</button>
        <button className="btn-card">React-JS </button>
        <button className="btn-card">Python</button>
      </div>
      <div className="right-section">

        {/* {
          products.map((product) => (
            <article key={product.title} className="card">
              <img className="image-card" src={product.imgUrl} alt="" />
              <div className="box">
                <h1 className="title-card">{product.title}</h1>
                <p className="description-card">{product.description}</p>
                <div className="icon-card ">
                  <div className="icons-box">
                    <a className="icons icon-link"  href=""/>
                    <a className="icons icon-github"  href=""/>
                  </div>
                  <a className="more-card" href="" >
                    more 
                    < i className="icon-arrow-right arrow"/>
                  </a>
                </div>
              </div>
            </article>
          ))
        } */}

        {[...Array(9)].map((_, index) => (
                  <article key={index} className="card">
                  <img className="image-card" src="" alt="" />
                  <div className="box">
                    <h1 className="title-card">Title</h1>
                    <p className="description-card">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                      accusantium, quae, voluptates, eum cumque autem quidem
                      exercitationem iste numquam quia doloremque.
                    </p>
                    <div className="icon-card ">
                      <div className="icons-box">
                        <a className="icons icon-link" />
                        <a className="icons icon-github" />
                      </div>
                      <a className="more-card" href="" >
                        more 
                        < i className="icon-arrow-right arrow"/>
                      </a>
                    </div>
                  </div>
                </article>
              ))}

      </div>
    </section>
  );
};

export default Main;
