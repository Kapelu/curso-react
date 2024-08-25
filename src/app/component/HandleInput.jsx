"use client";

const handleChange = (e) => {
  console.log(e.target.value);
};

export function HandleInput({ text }) {
  return (
    <>
      <input
        autoComplete="off"
        id="First"
        className="input"
        onClick={(e) => {
          console.log(e.target.id + "Input");
        }}
        onChange={handleChange}
      />
      <br />
      <input
        id="Second"
        autoComplete="off"
        className="input"
        onClick={(e) => {
          console.log(e.target.id + "Input");
        }}
        onChange={handleChange}
      />
    </>
  );
}
