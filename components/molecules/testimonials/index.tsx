import React from "react";
import Figure from "../../atoms/figure";

interface IProps {}

const Testimonials: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ Testimonials");
  // renders
  return (
    <section className="bg-white h-screen">
      <div className="container space-y-10">
        <h1 className="h3">Testimonials</h1>
        <ul className="flex-centered gap-5">
          <li>
            <Figure src="/uploads/testimonial-1.png" size={100} />
            <h2 className="h4">David Williams</h2>
            <p className="p">
              "This is my first time to rent a car at Auto Leasing. I am
              completely satisfied with the service. Special thanks to Tory
              Linares. His professionalism is primo.
            </p>
          </li>
          <li>
            <Figure src="/uploads/testimonial-2.png" size={100} />
            <h2 className="h4">Andy Carlos</h2>
            <p className="p">
              "Sometimes it is a little difficult to reach someone about
              adjusting a reservation, but once contact is established, the
              representatives are quite friendly and helpful. Thanks
            </p>
          </li>
          <li>
            <Figure src="/uploads/testimonial-3.png" size={100} />
            <h2 className="h4">Lara Pardo</h2>
            <p className="p">
              "Very helpful, extremely fast and efficient. This is the second
              time in 3 months I have used Auto Leasing, and will definitely use
              them again and recommend them to others.
            </p>
          </li>
        </ul>
        <button className="button">MORE REVIEWS</button>
      </div>
    </section>
  );
};

export default React.memo(Testimonials);
