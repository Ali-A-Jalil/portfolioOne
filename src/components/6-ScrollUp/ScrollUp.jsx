import "../6-ScrollUp/scrollup.css"


const ScrollUp = () => {



  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.querySelector(".scrollUp").style.display = "block";
    } else {
      document.querySelector(".scrollUp").style.display = "none";
    }
  }

    const scrollToUp = () => {
        // 👇️ scroll to top
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }




    

  return (
    <div>
        <button onClick={scrollToUp} className="icon-keyboard_arrow_up scrollUp" />
    </div>
  )


}

export default ScrollUp