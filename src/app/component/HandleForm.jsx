"use client";
export function HandleForm({ text }) {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Formulario enviado");
        }}
      >
        <button className="btn box-shadow-1">Enviar</button>
      </form>
    </>
  );
}
