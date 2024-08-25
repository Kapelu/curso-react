import "@/app/css/utility.css";

export function ComponentProps({ title, name }) {
  return (
    <div className="componente">
      <br />
      <h3 className="text-center">
        {name} {title}
      </h3>
    </div>
  );
}
