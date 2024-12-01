import React, { ReactElement } from "react";
import Head from "next/head";
//
import HomeLayout from "@/components/layouts/home-layout";
import { APP } from "@/constants/APP";
import Figure from "@/components/figure";
import Link from "next/link";

const Home = () => {
  console.log("🚀 ~ Home");
  // renders
  return (
    // <div className="flex items-center justify-center h-screen text-slate-800 flex-col">
    //   <a href={APP.mailto} target="_top">Contact Us</a>
    //   <a href={APP.tel} target="_top">Call Us</a>
    // </div>
    <>
      <section className="banner">
        <p>BOOK ONLINE NOW. CALL (123) 456-7 8910</p>
      </section>
      <header>
        <Figure
          src="https://template68211.motopreview.com/mt-demo/68200/68211/mt-content/uploads/2018/08/mt-1582-home-logo1.png"
          size={100}
        />
        <nav>
          <ul>
            {[
              { label: "HOME", path: "/" },
              { label: "ABOUT", path: "/" },
              { label: "CAR RENTALS", path: "/" },
              { label: "LUXURY CARS", path: "/" },
              { label: "VAN & SUV RENTALS", path: "/" },
              { label: "LOCATION", path: "/" },
              { label: "DEALS", path: "/" },
              { label: "RESERVATION", path: "/" },
              { label: "TESTIMONIALS", path: "/" },
              { label: "CONTACT", path: "/" },
            ].map(({ label, path }, i) => (
              <Link key={i} href={path}>
                {label}
              </Link>
            ))}
          </ul>
        </nav>
      </header>
      <section className="hero">
        <h2>WE ARE OPEN 24/7 INCLUDING MAJOR HOLIDAYS</h2>
        <h1>Plan Your Trip</h1>
        <h1>With Auto Leasing</h1>
        <p>
          Rent a Car Online Today & Enjoy the Best Deals, Rates & Accessories.
        </p>
        <button>BROWSE THE FLEET</button>
      </section>
      <section className="section-i">
        <h1>Rental Vehicles</h1>
        <ul>
          <li>
            <figure>
              <Figure
                src="https://template68211.motopreview.com/mt-demo/68200/68211/mt-content/uploads/2018/08/mt-1582-home-rental1-1.jpg"
                size={160}
              />
              <figcaption>Cars & Crossovers</figcaption>
            </figure>
          </li>
          <li>
            {" "}
            <figure>
              <Figure
                src="https://template68211.motopreview.com/mt-demo/68200/68211/mt-content/uploads/2018/08/mt-1582-home-rental1-1.jpg"
                size={160}
              />
              <figcaption>Luxury Cars</figcaption>
            </figure>
          </li>
          <li>
            {" "}
            <figure>
              <Figure
                src="https://template68211.motopreview.com/mt-demo/68200/68211/mt-content/uploads/2018/08/mt-1582-home-rental3-1.jpg"
                size={160}
              />
              <figcaption>Vans & SUV</figcaption>
            </figure>
          </li>
        </ul>
      </section>
      <section className="section-ii">
        <h1>10% Off on Any Rental!</h1>
        <p>First Time Renters Only!</p>
        <button>BOOK ONLINE</button>
        <button>VIEW ALL DEALS</button>
      </section>
      <section className="gallery">
        <h1>Car Categories</h1>
        <ul>
          {[...Array(16)].map((_, i) => (
            <li key={i}>
              <figure>
                <Figure
                  src="/images/image-placeholder.png"
                  size={160}
                />
                <figcaption>{i + 1}. Hatchbacks</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>
      <section className="section-iii">
        <h1>Why rent your car with</h1>
        <h1>Auto Leasing in Florida?</h1>
        <article>
          Are you looking to navigate one of the most popular cities in the
          world, or set off on a road trip into the country? Auto Leasing is
          here to help. A car rental in Florida affords you an unmatched sense
          of freedom and flexibility, inviting you to delve deep into the
          cultural and historical wealth of this beautiful city. Rent a car that
          best suits your trip using our straightforward booking panel. Hiring a
          car has never been easier, and you get to enjoy a variety of benefits.
        </article>
        <button>LEARN MORE</button>
      </section>
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
              "Sometimes it is a little difficult to reach someone about
              adjusting a reservation, but once contact is established, the
              representatives are quite friendly and helpful. Thanks
            </p>
          </li>
          <li>
            <Figure
              src="https://template68211.motopreview.com/mt-demo/68200/68211/mt-content/uploads/2018/08/mt-1582-home-testimonials3.jpg"
              size={100}
            />
            <h2>Lara Pardo</h2>
            <p>
              "Very helpful, extremely fast and efficient. This is the second
              time in 3 months I have used Auto Leasing, and will definitely use
              them again and recommend them to others.
            </p>
          </li>
        </ul>
        <button>MORE REVIEWS</button>
      </section>
      <section className="section-iv">
        <h1>
          Make a reservation today without any surprises on extra charges at the
          pick up location
        </h1>
        <button>REQUEST A CALLBACK</button>
      </section>
      <footer>
        <ul>
          <li>
            <Figure
              src="https://template68211.motopreview.com/mt-demo/68200/68211/mt-content/uploads/2018/08/mt-1582-home-logo1.png"
              size={100}
            />
            <article>
              Plan Your Trip With Auto Leasing. Rent a Car Online Today & Enjoy
              the Best Deals, Rates & Accessories.
            </article>
          </li>
          <li>
            <h1>Rental Vehicles</h1>
            <ol>
              <li>Cars & Crossovers</li>
              <li>Luxury Cars</li>
              <li>Vans & SUV</li>
            </ol>
          </li>
          <li>
            <h1>About Us</h1>
            <ol>
              <li>Location</li>
              <li>Deals</li>
              <li>Reservation</li>
            </ol>
          </li>
          <li>
            <h1>Contact Us</h1>
            <ol>
              <li>11559 Ventura Boulevard, Studio City, CA 91604</li>
              <li>(123) 456-7890</li>
              <li>Info@demolink.org</li>
            </ol>
          </li>
        </ul>
        <address>&copy; 2020 Auto Leasing, All rights reserved.</address>
      </footer>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>Welcome</title>
      </Head>
      <HomeLayout>{page}</HomeLayout>
    </>
  );
};

export default Home;
