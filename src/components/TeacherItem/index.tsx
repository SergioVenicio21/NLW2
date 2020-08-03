import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./style.css";

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/11683987?s=460&u=38efd245165d0442f2184cb2c7ef768abd5932d1&v=4"
          alt="Opa"
        />
        <div>
          <strong>Opa</strong>
          <span>Eppa</span>
        </div>
      </header>

      <p>Opa Epa Ipa LASDJLKASJDHLJKSADH lckahlsdhlahlaskh asjhaks casjh</p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
