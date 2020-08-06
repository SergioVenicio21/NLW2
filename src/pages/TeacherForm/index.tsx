import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import api from "../../services/api";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Select from "../../components/Select";
import TextArea from "../../components/TextArea";
import warningIcon from "../../assets/images/icons/warning.svg";

import daysOfWeek from "../../utils/daysOfWeek";
import validClasses from "../../utils/validClasses";

import "./style.css";

const defaultItem = {
  week_day: "",
  from: "",
  to: "",
};

const TeacherForm = () => {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [bio, setBio] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const [subject, setSubject] = useState("");
  const [cost, setCost] = useState(0);

  const [scheduleItems, setScheduleItems] = useState([defaultItem]);

  const history = useHistory();

  const addScheduleItem = () => {
    setScheduleItems([...scheduleItems, defaultItem]);
  };

  const setScheduleItemsValue = (
    position: number,
    field: string,
    value: string
  ) => {
    setScheduleItems(
      scheduleItems.map((scheduleItem, index) => {
        return index === position
          ? { ...scheduleItem, [field]: String(value) }
          : scheduleItem;
      })
    );
  };

  const handleSubmit = () => {
    api
      .post("/classes", {
        name,
        avatar,
        bio,
        whatsapp,
        subject,
        cost,
        schedule: scheduleItems,
      })
      .then(() => {
        alert("Cadastro realizado com sucesso!");
        history.push("/");
      })
      .catch((e) => {
        console.error(e);
        alert("Erro ao realizar cadastro!");
      });
  };

  return (
    <div id="page-teacher-form">
      <PageHeader
        title="Que incrivel que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>
        <form>
          <fieldset>
            <legend>Seus dados</legend>

            <Input
              name="name"
              label="Nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />
            <Input
              name="whatsapp"
              label="WhatsApp"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
            />
            <TextArea
              name="bio"
              label="Biografia"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

            <Select
              name="subject"
              label="Matéria"
              options={validClasses}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <Input
              name="cost"
              label="Custo da sua hora por aula"
              value={cost}
              onChange={(e) => {
                const newCost = Number(e.target.value);
                setCost((oldCost) => (newCost ? newCost : oldCost));
              }}
            />
          </fieldset>

          <fieldset>
            <legend>
              <p>Horários disponiveis</p>
              <button type="button" onClick={addScheduleItem}>
                + Novo horário
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, idx) => (
              <div key={scheduleItem.week_day} className="schedule-item">
                <Select
                  name="week-day"
                  label="Dia da semana"
                  options={daysOfWeek}
                  value={scheduleItem.week_day}
                  onChange={(e) =>
                    setScheduleItemsValue(idx, "week_day", e.target.value)
                  }
                />
                <Input
                  type="time"
                  label="De"
                  name="from"
                  value={scheduleItem.from}
                  onChange={(e) =>
                    setScheduleItemsValue(idx, "from", e.target.value)
                  }
                />
                <Input
                  type="time"
                  label="Até"
                  name="to"
                  value={scheduleItem.to}
                  onChange={(e) =>
                    setScheduleItemsValue(idx, "to", e.target.value)
                  }
                />
              </div>
            ))}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Impotante! <br />
              Preencha todos os dados
            </p>
            <button type="button" onClick={handleSubmit}>
              Salvar cadastro
            </button>
          </footer>
        </form>
      </main>
    </div>
  );
};

export default TeacherForm;
