'use client'
export function HandleButton({ text }) {
  return (
    <button
      className="btn box-shadow-1"
      onClick={() =>
        console.log("veces presionado el boton Click me")}
    >
      {text}
    </button>
  );
}
