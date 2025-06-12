import "./style.scss";
const Faqs = () => {
  const handleClick = (event: any) => {
    const item = event.target.parentElement;
    const answer = event.target.nextElementSibling as HTMLElement;

    // Toggle active class
    event.target.classList.toggle("active");
    answer.classList.toggle("active");

    // Close other FAQs
    document.querySelectorAll(".faq-section__item").forEach((otherItem) => {
      if (otherItem !== item) {
        const otherQuestion = otherItem.querySelector(".faq-section__question");
        const otherAnswer = otherItem.querySelector(".faq-section__answer");
        otherQuestion?.classList.remove("active");
        otherAnswer?.classList.remove("active");
      }
    });
  };
  return (
    <div className="faq-section">
      {(window.innerWidth >= 767 ? Array(6) : Array(3))
        .fill(null)
        .map((item) => {
          return (
            <div className="faq-section__item">
              <div className="faq-section__question" onClick={handleClick}>
                What is the sizing like for this t-shirt?
              </div>
              <div className="faq-section__answer">
                <div className="faq-section__answer-content">
                  Our t-shirts are true to size. For a more relaxed fit, we
                  recommend sizing up. Please refer to our size guide for
                  detailed measurements.
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Faqs;
