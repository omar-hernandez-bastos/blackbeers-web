import React, { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import Services from "../components/services"
import Faq from "../components/faq"
import Contact from "../components/contact"
import Wave from "react-wavify"
import { StaticImage } from "gatsby-plugin-image"
const navigation = [
  { name: "Nuestra Historia", href: "#story" },
  { name: "Servicios", href: "#services" },
  { name: "Tienda", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Contacto", href: "#" },
]

const IndexPage = () => (
  <div className="p-4">
    <div className="relative max-w-6xl mx-auto bg-white overflow-hidden">
      <div className="w-full mx-auto">
        <div className="relative z-2 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <Popover>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global"
              >
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="#">
                      <StaticImage
                        src="../images/blackbeerslogo.png"
                        width={65}
                        height="auto"
                        alt="BlackBeers Logo"
                        placeholder="none"
                      />
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                  {navigation.map(item => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="font-medium text-gray-500 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-amber-600.svg"
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500">
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map(item => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">BlackBeers</span>
                <br />
                <span className="block text-yellow-500 xl:inline">
                  Limpieza y Mantenimiento de Canillas
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"></p>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <StaticImage
          src="../images/heroimage.png"
          className="h-56 w-full object-cover clip-beer-30 sm:h-72 md:h-96 lg:w-full lg:h-full md:clip-beer"
        />
      </div>
    </div>

    <section id="story" className="max-w-6xl p-4 mx-auto">
      <p className="text-lg text-gray-900">
        <i>
          <strong>Blackbeers</strong>
        </i>{" "}
        es una empresa familiar en crecimiento, en la que amamos la cerveza y
        disfrutamos mucho todo su proceso. Nuestro principal objetivo es HABLA
        CON NOSOTR@S{" "}
        <i>
          <strong>Blackbeers</strong>
        </i>{" "}
        es una empresa familiar en crecimiento, en la que amamos la cerveza y
        disfrutamos mucho todo su proceso. Nuestro principal objetivo es que
        cada vez que uno de nuestros clientes tire la manija de sus canillas, el
        líquido fluya libremente y caiga cerveza fiel al aroma, a la apariencia
        y a la experiencia del sabor con la que fue elaborada. Es por esto que
        en Blackbeers queremos que tus canillas estén limpias, lejos de los
        enemigos de las cervezas, brindando la mejor calidad posible, con la que
        nuestros clientes estén felices y los clientes de nuestros clientes
        también. Un win-win para tod@s.
      </p>
    </section>
    <div className="w-full">
      <Wave
        fill="#efb810"
        paused={false}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.15,
          points: 3,
        }}
      />
    </div>
    <Services />
    <Faq />
    <Contact />
  </div>
)

export default IndexPage
