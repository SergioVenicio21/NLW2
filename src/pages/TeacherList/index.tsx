import React, { useState, useEffect } from "react";

import api from "../../services/api";

import PageHeader from "../../components/PageHeader";

import TeacherItem from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";
import daysOfWeek from "../../utils/daysOfWeek";
import validClasses from "../../utils/validClasses";

import { TeacherI } from "../../components/TeacherItem";

import "./style.css";

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);
  const [subject, setSubject] = useState("");
  const [week_day, setWeekDay] = useState("");
  const [time, setTime] = useState("");

  const searchTeachers = (e: any) => {
    if (e.key === "Enter" && subject && week_day && time) {
      console.log({
        subject,
        week_day,
        time,
      });
      api
        .get("/classes", {
          params: {
            subject,
            time,
            week_day,
          },
        })
        .then(({ data }) => {
          console.log(data);
          setTeachers(data);
        });
    }
  };

  return (
    <div id="page-teacher-list">
      <PageHeader title="Esses são os proffys disponíveis.">
        <form id="search-teachers">
          <Select
            name="subject"
            label="Matéria"
            options={validClasses}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            onKeyDown={(e) => searchTeachers(e)}
          />
          <Select
            name="week-day"
            label="Dia da semana"
            options={daysOfWeek}
            value={week_day}
            onChange={(e) => setWeekDay(e.target.value)}
            onKeyDown={(e) => searchTeachers(e)}
          />
          <Input
            type="time"
            name="time"
            label="Horário"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            onKeyDown={(e) => searchTeachers(e)}
          />
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: TeacherI) => {
          return <TeacherItem key={teacher.id} {...teacher} />;
        })}
      </main>
    </div>
  );
};

export default TeacherList;
