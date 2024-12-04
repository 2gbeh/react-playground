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
        <ul className="flex justify-center gap-10">
          {[
            {
              avatar: "/uploads/testimonial-1.png",
              name: "David Williams",
              message: `"This is my first time renting a luxury car. I am
              completely satisfied with the service. Special thanks to the Sales Team, 
              their professionalism is primo."`,
            },
            {
              avatar: "/uploads/testimonial-3.png",
              name: "Lara Pardo",
              message: ` "Very helpful, extremely fast and efficient. This is the second
              time in 3 months, and will definitely use them again and recommend them to others."`,
            },
            {
              avatar: "/uploads/testimonial-2.png",
              name: "Andy Carlos",
              message: `"Sometimes it is a little magical renting a luxury car, and when
              contact is established, the representatives are quite friendly and helpful. Thanks."`,
            },
          ].map((item, i) => (
            <li className="w-[30%] space-y-4" key={i}>
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
