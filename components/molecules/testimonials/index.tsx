import React from "react";
import Figure from "../../atoms/figure";

interface IProps {}

const Testimonials: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ Testimonials");
  // renders
  return (
    <section className="testimonials">
      <h1>Testimonials</h1>
      <ul>
        <li>
          <Figure
            src="https://template68211.motopreview.com/mt-demo/68200/68211/mt-content/uploads/2018/08/mt-1582-home-testimonials1.jpg"
            size={100}
          />
          <h2>David Williams</h2>
          <p>
            "This is my first time to rent a car at Auto Leasing. I am
            completely satisfied with the service. Special thanks to Tory
            Linares. His professionalism is primo.
          </p>
        </li>
        <li>
          <Figure
            src="https://template68211.motopreview.com/mt-demo/68200/68211/mt-content/uploads/2018/08/mt-1582-home-testimonials2.jpg"
            size={100}
          />
          <h2>Andy Carlos</h2>
          <p>
            "Sometimes it is a little difficult to reach someone about adjusting
            a reservation, but once contact is established, the representatives
            are quite friendly and helpful. Thanks
          </p>
        </li>
        <li>
          <Figure
            src="https://template68211.motopreview.com/mt-demo/68200/68211/mt-content/uploads/2018/08/mt-1582-home-testimonials3.jpg"
            size={100}
          />
          <h2>Lara Pardo</h2>
          <p>
            "Very helpful, extremely fast and efficient. This is the second time
            in 3 months I have used Auto Leasing, and will definitely use them
            again and recommend them to others.
          </p>
        </li>
      </ul>
      <button>MORE REVIEWS</button>
    </section>
  );
};

export default React.memo(Testimonials);
