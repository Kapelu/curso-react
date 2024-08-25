import { HandleButton } from "./component/HandleButton.jsx";
import { Component } from "./component/Component.jsx";
import { ComponentCard } from "./component/ComponentCard.jsx";
import { ComponentProps } from "./component/ComponentProps.jsx";
import "@/app/css/utility.css";
import { HandleInput } from "./component/HandleInput.jsx";
import { HandleForm } from "./component/HandleForm.jsx";

export default function Home() {
  return (
    <main className="container">
      <br />
      <h1 className="text-center">Curso de React</h1>
      <br />
      <h2 className=" text-center section-title">Componentes</h2>

      <section id="componente" className="section">
        <h3 className="text-center section-subtitle">Creación de componente</h3>
        <p className="section text-center">
          Básicamente todo lo mostrado en la caja es un componente.{" "}
        </p>
        <Component />
        <br />
        <h3 className="text-center section-subtitle">Componente con (props)</h3>
        <p className="section text-center">
          Aplicando la propiedad de (props) a un componente se va a comportar de
          manera diferente, de esta forma va a estar renderizando el mismo
          componente con propiedades diferentes.
        </p>
        <ComponentProps name="Componente" title='"Hola Mundo!"' />
        <ComponentProps name="Componente" title='"Hola ReactJs"' />
        <ComponentProps name="Componente" title='"Hola NextJs"' />
        <br />
        <h3 className="text-center section-subtitle">
          Componente con multiples (props) y tipos soportados
        </h3>
        <p className="section text-center">
          Aplicaremos multiples (props) a un componente con los diferentes tipos
          de dato que permite, ir creando asi un componente con varias
          propiedades.
        </p>
        <div className="component-card">
          <ComponentCard
            name="Roberto Torres"
            office={false}
            phone={2614569873}
            address={{ street: "123 Guampa", city: "Rivadavia" }}
          />
          <ComponentCard
            name="Carlos Carabajal"
            office={true}
            phone={2614963573}
            address={{ street: "123 Tate quieto de ella", city: "Rivadavia" }}
          />
          <ComponentCard
            name="Franco Garro"
            office={false}
            phone={2614569433}
            address={{ street: "123 Masca Huasca", city: "Rivadavia" }}
          />
        </div>
      </section>
      <br />
      <h2 className=" text-center section-title">Manejador de Eventos</h2>
      <br />
      <section id="eventhandler" className="section center">
        <HandleButton text="Click me" />
        <br />
        <br />
        <HandleInput />
        <br />
        <br />
        <HandleForm />
      </section>
    </main>
  );
}
