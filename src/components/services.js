import * as React from "react"
import asesoria from "../images/services/asesoria.jpg"
import mantenimiento from "../images/services/mantenimiento.jpg"
import otrasbebidas from "../images/services/otrasbebidas.jpg"
import serviciotecnico from "../images/services/serviciotecnico.jpg"
import limpieza from "../images/services/instalacion.jpg"
import tiendaonline from "../images/services/tiendaonline.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import Carousel from "react-elastic-carousel"

const blackBeersServices = [
  {
    img: mantenimiento,
    title: "Limpieza y mantenimiento",
    description:
      "A todos tus sistemas y circuitos de cerveza. Un buen mantenimiento garantiza que puedas servir una muy rica cerveza. ",
  },
  {
    img: limpieza,
    title: "Instalaciones y reformas",
    description:
      "Todo lo que necesitas para el expendio de cerveza en canillas.      ",
  },
  {
    img: serviciotecnico,
    title: "Servicio técnico",
    description:
      "Con personal calificado  y con buena predisposición, contamos con servicio de urgencia 24 hs.",
  },
  {
    img: asesoria,
    title: "Asesoramiento y cotizaciones",
    description:
      "Para que puedas crear y poner en marcha tus productos para el tirado de cerveza.",
  },
  {
    img: otrasbebidas,
    title: "Otras bebidas",
    description:
      "Ahora las sidras, los gin´s, el vino y todo lo que te puedas imaginar se suman a la experiencia de las canillas.",
  },
  {
    img: tiendaonline,
    title: "Venta de componentes",
    description:
      "Somos proveedores de todo el equipamiento que necesitas para el expendio de cerveza.",
  },
]

const Services = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 390, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ]
  return (
    <section id="services" className="">
      <Carousel breakPoints={breakPoints}>
        {blackBeersServices.map(s => {
          return (
            <div key={s.title} aria-label={s.title}>
              <div className="p-5 max-w-lg my-4 mx-auto">
                <img src={s.img} alt={s.title} className="w-full" />
                <h5 className="h-16 flex items-center justify-center mb-2 text-center my-2 text-2xl font-bold tracking-tight text-gray-900 no-wrap">
                  {s.title}
                </h5>
                <p className="mb-3 font-normal text-gray-700 text-center">
                  {s.description}
                </p>
              </div>
            </div>
          )
        })}
      </Carousel>
    </section>
  )
}

export default Services
