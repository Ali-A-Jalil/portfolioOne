
import { useState } from "react";
import "./main.css";

const Main = () => {



  const [type, setType] = useState("all");
  

  const products = [
    {
      id: 1,
      title: "My Portfolio",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam accusantium, quae, voluptates, eum cumque autem quidem exercitationem iste numquam quia doloremque.",
      // imgUrl: imgOne,
      category: "React-JS",

    },
    {
      id: 2,
      title: "Car Store",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam accusantium, quae, voluptates, eum cumque autem quidem exercitationem iste numquam quia doloremque.",
      // imgUrl: imgTwo,
      category: "React-JS",
    },
    {
      id: 3,
      title: "E-commerce Website", 
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam accusantium, quae, voluptates, eum cumque autem quidem exercitationem iste numquam quia doloremque.",
      // imgUrl: imgThree,
      category: "JavaScript",
    },
    {
      id: 4,
      title: "Todo App",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam accusantium, quae, voluptates, eum cumque autem quidem exercitationem iste numquam quia doloremque.",
      // imgUrl: imgFour,
      category: "Python",
    },
    {
      id: 5,
      title: "Gym App",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam accusantium, quae, voluptates, eum cumque autem quidem exercitationem iste numquam quia doloremque.",
      // imgUrl: imgFive,
      category: "JavaScript",
    },
    {
      id: 6,
      title: "School App",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam accusantium, quae, voluptates, eum cumque autem quidem exercitationem iste numquam quia doloremque.",
      // imgUrl: imgSix,
      category: "Python",
    },
    {
      id: 7,
      title: "Our Mission",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam accusantium, quae, voluptates, eum cumque autem quidem exercitationem iste numquam quia doloremque.",
      // imgUrl: imgSeven,
      category: "Python",
    },
    {
      id: 8,
      title: "Furniture Store",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam accusantium, quae, voluptates, eum cumque autem quidem exercitationem iste numquam quia doloremque.",
      // imgUrl: imgEight,
      category: "HTML & CSS",
    },
    {
      id: 9,
      title: "Cloud Hosting",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam accusantium, quae, voluptates, eum cumque autem quidem exercitationem iste numquam quia doloremque.",
      // imgUrl: imgNine,
      category: "HTML & CSS",
    }
  ];


  const filteredProducts = type==="all" ? products : products.filter((product) => product.category === type);







  return (
    <section className="main">
      <div className="left-section">


        <button className={`btn-card ${type === "all" ? "active" : ""}`} onClick={() => setType("all")} >All Projects</button>

        <button className={`btn-card ${type === "HTML & CSS" ? "active" : ""}`} onClick={() => setType("HTML & CSS")} >HTML & CSS</button>


        <button className={`btn-card ${type === "JavaScript" ? "active" : ""}`} onClick={() => setType("JavaScript")} >JavaScript</button>

        <button className={`btn-card ${type === "React-JS" ? "active" : ""}`} onClick={() => setType("React-JS")} >React-JS </button>


        <button   className={`btn-card ${type === "Python" ? "active" : ""}`} onClick={() => setType("Python")} >Python</button>
      </div>

      <div className="right-section">

        {
          filteredProducts.map((product, index) => (
            <article key={index} className="card">
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
        }


      </div>
    </section>
  );
};

export default Main;
