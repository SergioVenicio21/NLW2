import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./style.css";
import api from "../../services/api";

export interface TeacherI {
  id: number;
  name: string;
  avatar: string;
  bio: string;
  cost: number;
  whatsapp: string;
  subject: string;
}

const TeacherItem: React.FC<TeacherI> = ({
  id,
  name,
  avatar,
  bio,
  cost,
  whatsapp,
  subject,
}) => {
  const createNewConnection = () => {
    api.post("/connections", {
      user_id: id,
    });
  };

  return (
    <article className="teacher-item">
      <header>
        <img src={avatar} alt={name} />
        <div>
          <strong>{name}</strong>
          <span>{subject}</span>
        </div>
      </header>

      <p>{bio}</p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ {cost}</strong>
        </p>
        <a
          target="_blank"
          href={`https://wa.me/${whatsapp}`}
          onClick={(e) => createNewConnection()}
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
