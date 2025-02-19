import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contacto.css";

const Contacto = () => {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nombre || !form.email || !form.mensaje) {
      setError("Todos los campos son obligatorios");
      return;
    }

    emailjs
      .send(
        "service_zvs7e2r", 
        "template_wl9g52p", 
        {
          from_name: form.nombre,
          from_email: form.email,
          message: form.mensaje,
        },
        "J5j6YC747yH0nO9r0" 
      )
      .then(
        () => {
          setEnviado(true);
          setError("");
          setForm({ nombre: "", email: "", mensaje: "" });
        },
        (error) => {
          console.error("Error al enviar el mensaje:", error);
          setError("Hubo un error al enviar el mensaje, intenta nuevamente.");
        }
      );
  };

  return (
    <div className="contacto-container">
      <h2>Contacto</h2>
      <p>¿Tienes alguna consulta? Completa el formulario y te responderemos.</p>
      <form  className="contacto-form" onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input type="text" name="nombre" value={form.nombre} onChange={handleChange} placeholder="Tu nombre" />

        <label>Email:</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Tu correo electrónico" />

        <label>Mensaje:</label>
        <textarea name="mensaje" value={form.mensaje} onChange={handleChange} placeholder="Escribe tu mensaje aquí..."/>

        <button type="submit">Enviar</button>
      </form>

      {enviado && <p className="exito">¡Mensaje enviado con éxito!</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Contacto;
