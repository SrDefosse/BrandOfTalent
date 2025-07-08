import React from 'react';

/**
 * Componente Card: no usa tipos de TS ni Next/Image,
 * solo un <img> normal y props desestructuradas.
 */
const Card = ({ title, description, color, textColor, i, src }) => (
  <div className="h-screen flex items-center justify-center sticky top-0 md:p-0 px-4">
    <div
      className="relative flex flex-col h-[300px] w-[700px] py-12 px-10 md:px-12
        rotate-0 md:h-[400px] md:w-[600px] items-center justify-center mx-auto 
        shadow-md pr-3 pl-3 pt-3 pb-4 rounded-xl overflow-hidden"
      style={{ backgroundColor: color }}
    >
      <span className="font-bold relative text-5xl md:text-6xl mt-5">
        <span
          className="relative z-10 font-tiemposHeadline font-black tracking-tight"
          style={{ color: textColor }}
        >
          {title}
        </span>
      </span>
      <div
        className="text-lg md:text-2xl font-medium text-center mb-0 z-50 mt-2 lowercase tracking-wide"
        style={{ lineHeight: 1.4, color: textColor }}
      >
        {description}
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src={src}
          alt="Background"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </div>
  </div>
);

/**
 * CardsParallax: mapea un array de items y renderiza Cards.
 */
const CardsParallax = ({ items }) => (
  <div className="min-h-screen">
    {items.map((item, idx) => (
      <Card key={idx} {...item} i={idx} />
    ))}
  </div>
);

/**
 * Datos de ejemplo (sustituye con tus “benefits” reales)
 */
const cardItems = [
  {
    title: "Acceso a +2,000 talentos",
    description: "",
    tag: "trekking",
    src: "https://images.pexels.com/photos/209948/pexels-photo-209948.jpeg",
    link: "#",
    color: "white",
    textColor: "white",
  },
  {
    title: "Celebridades y talentos escénicos",
    description: "",
    tag: "hiking",
    src: "https://images.pexels.com/photos/4545333/pexels-photo-4545333.jpeg",
    link: "#",
    color: "green",
    textColor: "white",
  },
  {
    title: "Cobertura México, Centro y Sudamérica, y Europa",
    description: "",
    tag: "adventure",
    src: "https://images.pexels.com/photos/5725589/pexels-photo-5725589.jpeg",
    link: "#",
    color: "white",
    textColor: "white",
  },
  {
    title: "Publicidad con sentido y conexión emocional",
    description: "",
    tag: "mountains",
    src: "https://images.pexels.com/photos/3943951/pexels-photo-3943951.jpeg",
    link: "#",
    color: "white",
    textColor: "white",
  },
];

/**
 * Componente principal de la página de beneficios
 */
const Benefits = () => (
  <CardsParallax items={cardItems} />
);

export default Benefits;
