import React from "react";
import Figure from "../../atoms/figure";

interface IProps {}

const Testimonials: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ Testimonials");
  // renders
  return (
    <section className="flex-col-center h-screen bg-white">
      <div className="container space-y-10 text-center">
        <h1 className="h2">Testimonials</h1>
        <ul className="gap-10 flex justify-center">
          {[
            {
              avatar: "/uploads/testimonial-1.png",
              name: "David Williams",
              message: `"This is my first time to rent a car at Auto Leasing. I am
                completely satisfied with the service. Special thanks to Tory
                Linares. His professionalism is primo."`,
            },
            {
              avatar: "/uploads/testimonial-2.png",
              name: "Andy Carlos",
              message: `"Sometimes it is a little difficult to reach someone about
              adjusting a reservation, but once contact is established, the
              representatives are quite friendly and helpful. Thanks."`,
            },
            {
              avatar: "/uploads/testimonial-3.png",
              name: "Lara Pardo",
              message: ` "Very helpful, extremely fast and efficient. This is the second
              time in 3 months I have used Auto Leasing, and will definitely use
              them again and recommend them to others."`,
            },
          ].map((item, i) => (
            <li className="space-y-4 w-[30%]" key={i}>
              <figure className="flex-centered">
                <Figure src={item.avatar} size={100} rounded />
              </figure>
              <h2 className="h4">{item.name}</h2>
              <p className="p">{item.message}</p>
            </li>
          ))}
        </ul>
        <button className="button">MORE REVIEWS</button>
      </div>
    </section>
  );
};

export default React.memo(Testimonials);
