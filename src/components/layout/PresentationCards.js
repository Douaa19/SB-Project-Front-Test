import React from "react";
import Icon from "../../assets/icons/box-svgrepo-com.svg";
import Embroidery from "../../assets/icons/craft-embroidery-crafts-svgrepo-com.svg";

import PresentationCard from "../organismes/PresentationCard";

function PresentationCards() {
  const items = [
    {
      icon: Icon,
      title: "Production process",
      desc: "Our embroidered products undergo meticulous craftsmanship from start to finish. Our skilled artisans select high-quality fabrics and threads, employing traditional and modern techniques to create exquisite pieces. From initial design to final stitching, attention to detail is paramount. Explore the artistry behind our creations and the passion we infuse into every stitch",
    },
    {
      icon: Icon,
      title: "Ico Friendly",
      desc: "Sustainability is central to our values. We prioritize eco-friendly practices, from using organic fabrics to minimizing waste in our production process. By choosing our embroidered products, you're not only supporting local artisans but also contributing to a greener future.",
    },
    {
      icon: Embroidery,
      title: "Care instructions",
      desc: "Hand wash gently in cold water with mild detergent, avoiding harsh rubbing. Air dry flat on a clean towel, away from direct sunlight. Iron on low heat on the reverse side, if necessary. Store in a cool, dry place to prevent fading or damage.",
    },
  ];
  return (
    <div className="w-full ssm:py-6 sm:py-14 px-10 flex justify-center items-center">
      <div className="w-full max-h-max h-max flex flex-wrap justify-center items-center gap-6 transition-all duration-300 ease">
        {items.map((item, index) => (
          <PresentationCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default PresentationCards;
