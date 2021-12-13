import Logo from "../assets/img/webpack-logo.png";

const saludar = (nombre) => {
  console.log("creando etiqueta h1");

  const h1 = document.createElement("h1");
  h1.innerText = `Hola ${nombre}`;

  document.body.append(h1);

  const img = document.createElement("img");
  img.src = Logo;
  img.alt = "Logo";
  img.classList.add("img-fluid");
  document.body.append(img);
};

export { saludar };
