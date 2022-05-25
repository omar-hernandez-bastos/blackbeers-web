import React from "react"

const Contact = () => {
  return (
    <>
      <div className="container my-24 px-6 mx-auto">
        <section className="mb-32 text-gray-800">
          <div className="flex flex-wrap">
            <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-7/12 px-3 lg:px-6">
              <h2 className="text-3xl font-bold mb-6">
                ¿Cómo es el proceso de limpieza de canillas y sistema?
              </h2>

              <p className="text-gray-500 mb-6">
                Blackbeers utiliza un excelente método para el mantenimiento de
                las líneas y canillas de cerveza que es el de Circulado y
                Remojo.
              </p>

              <p className="text-gray-500 mb-6">
                El método consiste en hacer circular producto cáustico de
                altísima calidad, con la concentración adecuada por las líneas
                del sistema expendio de cerveza y dejarlo actuar. En paralelo
                hacemos el desarme completo de las canillas y las limpiamos con
                el mismo producto cáustico.
              </p>
              <p className="text-gray-500 mb-6">
                Una vez que el producto haya actuado, enjuagamos, armamos,
                volvemos a enjuagar, probamos y Gualá, tus líneas y canillas
                están listas para servir la mejor cerveza posible y tus clientes
                muy felices de disfrutar un gran producto.
              </p>

              <p className="text-gray-500 mb-6">
                Nuestro servicio también incluye un chequeo completo de posibles
                pérdidas de CO2 o problemas de espuma que puedas tener. Una vez
                que terminamos el mantenimiento, le damos un diagnóstico sobre
                el estado de su sistema de expendio a nuestros clientes, y en
                caso de necesitar una reforma o cambio se lo sugerimos y también
                podemos cotizarlo
              </p>
              <p className="text-gray-500 mb-6">
                El producto que utilizamos para la sanitización es adecuado para
                la industria cervecera y contiene una combinación de
                ingredientes proporciona una excelente eliminación de grasa y de
                manchas y una gran acción desinfectante contra todo tipo de
                microorganismos incluyendo bacterias, levaduras, hongos, esporas
                y virus.
              </p>
            </div>
            <div className="grow-0 shrink-0 basis-auto w-full md:w-5/12 px-3 lg:px-6">
              <p className="font-bold text-2xl mb-6">Habla con Nosotr@s</p>
              <form>
                <div className="form-group mb-6">
                  <input
                    type="text"
                    className="form-control block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-yellow-600 focus:outline-none"
                    id="name"
                    placeholder="Nombre"
                  />
                </div>
                <div className="form-group mb-6">
                  <input
                    type="email"
                    className="form-control block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-yellow-600 focus:outline-none"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group mb-6">
                  <input
                    type="text"
                    className="form-control block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-yellow-600 focus:outline-none"
                    id="phone"
                    placeholder="Telefono"
                  />
                </div>
                <div className="form-group mb-6">
                  <input
                    type="text"
                    className="form-control block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="location"
                    placeholder="Localidad"
                  />
                </div>
                <button
                  type="submit"
                  className="
    w-full
    px-6
    py-2.5
    bg-yellow-500
    text-white
    font-medium
    text-xl
    leading-tight
    uppercase
    rounded
    shadow-md
    hover:bg-yellow-500 hover:shadow-lg
    focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0
    active:bg-yellow-600 active:shadow-lg
    transition
    duration-150
    ease-in-out"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
      <footer class="text-center lg:text-left bg-yellow-600 text-gray-100">
        <div class="flex justify-center items-center lg:justify-between p-6 ">
          <div class="mr-12 hidden lg:block">
            <span>Conectá con nuestras redes sociales</span>
          </div>
          <div class="flex justify-center">
            <a
              href="https://www.instagram.com/blackbeers.ar/"
              target="_blank"
              class="mr-6 text-gray-100"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="instagram"
                class="w-8"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                ></path>
              </svg>
            </a>

            <a
              href="https://walink.co/06e40c"
              target="_blank"
              class="mr-6 text-gray-100"
            >
              <svg
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="32px"
                height="32px"
              >
                <path d="M 12 2 C 6.5 2 2 6.5 2 12 C 2 13.8 2.5007813 15.5 3.3007812 17 L 2 22 L 7.1992188 20.800781 C 8.6992188 21.600781 10.3 22 12 22 C 17.5 22 22 17.5 22 12 C 22 9.3 20.999609 6.8003906 19.099609 4.9003906 C 17.199609 3.0003906 14.7 2 12 2 z M 12 4 C 14.1 4 16.099219 4.8007813 17.699219 6.3007812 C 19.199219 7.9007813 20 9.9 20 12 C 20 16.4 16.4 20 12 20 C 10.7 20 9.2992188 19.7 8.1992188 19 L 7.5 18.599609 L 6.8007812 18.800781 L 4.8007812 19.300781 L 5.3007812 17.5 L 5.5 16.699219 L 5.0996094 16 C 4.3996094 14.8 4 13.4 4 12 C 4 7.6 7.6 4 12 4 z M 8.5 7.4003906 C 8.3 7.4003906 8.0007812 7.3992188 7.8007812 7.6992188 C 7.5007813 7.9992188 6.9003906 8.6007813 6.9003906 9.8007812 C 6.9003906 11.000781 7.8003906 12.200391 7.9003906 12.400391 C 8.1003906 12.600391 9.6992188 15.199219 12.199219 16.199219 C 14.299219 16.999219 14.699219 16.800781 15.199219 16.800781 C 15.699219 16.700781 16.700391 16.199609 16.900391 15.599609 C 17.100391 14.999609 17.099219 14.499219 17.199219 14.199219 C 17.099219 14.099219 16.999219 14.000391 16.699219 13.900391 C 16.499219 13.800391 15.3 13.199609 15 13.099609 C 14.7 12.999609 14.600391 12.899219 14.400391 13.199219 C 14.200391 13.499219 13.699609 13.999219 13.599609 14.199219 C 13.499609 14.399219 13.399609 14.400781 13.099609 14.300781 C 12.899609 14.200781 12.099609 13.999609 11.099609 13.099609 C 10.299609 12.499609 9.7992187 11.700391 9.6992188 11.400391 C 9.4992187 11.200391 9.7007813 11.000391 9.8007812 10.900391 L 10.199219 10.5 C 10.299219 10.4 10.300391 10.199609 10.400391 10.099609 C 10.500391 9.9996094 10.500391 9.8992188 10.400391 9.6992188 C 10.300391 9.4992187 9.7996094 8.3007812 9.5996094 7.8007812 C 9.3996094 7.4007812 9.2 7.4003906 9 7.4003906 L 8.5 7.4003906 z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Contact
