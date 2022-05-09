import React from "react"
import BannerBlackBeer from "../images/banner-black-beer.jpg"

export const Faq = () => {
  return (
    <div className="container my-24 px-6 mx-auto">
      {/* Section: Design Block */}
      <section className="mb-32">
        <div className="flex flex-wrap">
          <div className="grow-0 shrink-0 px-4 lg:px-0 basis-auto w-full lg:-mr-8 lg:w-5/12 mb-12 lg:mb-0">
            <div className="flex lg:py-12">
              <img
                src={BannerBlackBeer}
                className="w-full rounded-lg shadow-lg"
                id="cta-img-nml-50"
                style={{ zIndex: 10 }}
                alt
              />
            </div>
          </div>
          <div className="grow-0 -mt-20 z-10 lg:mt-0 shrink-0 basis-auto w-full lg:w-7/12">
            <div className="bg-yellow-500 h-full rounded-lg p-6 lg:pl-12 text-white flex items-center text-center lg:text-left">
              <div className="lg:pl-12">
                <h2 className="text-3xl font-bold mb-6">
                  ¿Por qué es importante hacerle mantenimiento a tus canillas?
                </h2>
                <p>
                  Hay una falsa creencia que la elaboración de la cerveza
                  artesanal termina cuando se embarrila o se embotella la
                  bebida, pero no… el proceso finaliza con el dispensado.
                </p>
                <p className="my-6 py-2 lg:py-0">
                  Si no hacemos una correcta limpieza en las líneas de servicio
                  por las que se dispensan nuestras cervezas, se acumularán
                  dentro del sistema bacterias, moho, suciedad, sedimentos de
                  levadura, entre otros; que pueden no sólo alterar el sabor, el
                  color, el aroma y la calidad de la cerveza, sino que te
                  traerán clientes insatisfechos y menos felices.
                </p>
                <p>
                  En Blackbeers recomendamos que el mantenimiento a tus líneas y
                  canillas las hagas en promedio por lo menos una vez al mes y
                  cada tres meses una limpieza profunda con lubricación de
                  conectores y válvulas fog, pero esto depende de muchos
                  factores, así que no dudes en escribirnos para una asesoría
                  más personalizada y de acuerdo a tus necesidades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section: Design Block */}
    </div>
  )
}
export default Faq
