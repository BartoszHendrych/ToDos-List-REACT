import React from "react";
import Form from "./Form";
import TaskList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Download from "./Download";
import { Wrapper } from "../styled";
import Search from "../Search";

function TasksPage() {
  return (
    < Wrapper>
        <Header title="Lista zadań" />
        <Section 
            title="Dodaj nowe zadanie" 
            body={<Form />}
            extraHeaderButton={<Download />}
        />
        <Section 
            title="Wyszukiwarka" 
            body={<Search />}
        />
        <Section
            title="Lista zadań"
            body={
                <TaskList />
            }
            extraHeaderContent={
               <Buttons />
            }
        />    
      </ Wrapper>
  );
};

export default TasksPage;
