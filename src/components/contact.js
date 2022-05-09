import React from "react"

const Contact = () => {
  return (
    <div className="container my-24 px-6 mx-auto">
      <section className="mb-32 text-gray-800">
        <div className="flex flex-wrap">
          <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-7/12 px-3 lg:px-6">
            <h2 className="text-3xl font-bold mb-6">
              ¿Cómo es el proceso de limpieza de canillas y sistema?
            </h2>

            <p className="text-gray-500 mb-6">
              Blackbeers utiliza un excelente método para el mantenimiento de
              las líneas y canillas de cerveza que es el de Circulado y Remojo.
            </p>

            <p className="text-gray-500 mb-6">
              El método consiste en hacer circular producto cáustico de altísima
              calidad, con la concentración adecuada por las líneas del sistema
              expendio de cerveza y dejarlo actuar. En paralelo hacemos el
              desarme completo de las canillas y las limpiamos con el mismo
              producto cáustico.
            </p>
            <p className="text-gray-500 mb-6">
              Una vez que el producto haya actuado, enjuagamos, armamos,
              volvemos a enjuagar, probamos y Gualá, tus líneas y canillas están
              listas para servir la mejor cerveza posible y tus clientes muy
              felices de disfrutar un gran producto.
            </p>

            <p className="text-gray-500 mb-6">
              Nuestro servicio también incluye un chequeo completo de posibles
              pérdidas de CO2 o problemas de espuma que puedas tener. Una vez
              que terminamos el mantenimiento, le damos un diagnóstico sobre el
              estado de su sistema de expendio a nuestros clientes, y en caso de
              necesitar una reforma o cambio se lo sugerimos y también podemos
              cotizarlo
            </p>
            <p className="text-gray-500 mb-6">
              El producto que utilizamos para la sanitización es adecuado para
              la industria cervecera y contiene una combinación de ingredientes
              proporciona una excelente eliminación de grasa y de manchas y una
              gran acción desinfectante contra todo tipo de microorganismos
              incluyendo bacterias, levaduras, hongos, esporas y virus.
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
  )
}

export default Contact
