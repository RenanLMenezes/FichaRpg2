import React from "react";
import ReactDom from "react-dom";
import NavBar from "../components/NavBar";
import "../styles/create.css";
import Fields from "../components/Fields";

export default function Create() {
  return (
    <>
      <NavBar />
      <div className="content-1">
        <div className="content-info">
          <div className="content-info-name">
            <Fields
              _class="content-info-field"
              inputType="text"
              inputName="charName"
              inputId="charName"
            >
              Nome do Personagem
            </Fields>
          </div>
          <div className="content-info-others">
            <Fields
              _class="content-info-field-others"
              inputType="text"
              inputName="class"
              inputId="class"
            >
              Classe &amp; Nível
            </Fields>
            <Fields
              _class="content-info-field-others"
              inputType="text"
              inputName="antecedentes"
              inputId="antecedentes"
            >
              Antecedentes
            </Fields>
            <Fields
              _class="content-info-field-others"
              inputType="text"
              inputName="player"
              inputId="player"
            >
              Nome do Jogador
            </Fields>
            <Fields
              _class="content-info-field-others"
              inputType="text"
              inputName="raca"
              inputId="raca"
            >
              Raça
            </Fields>
            <Fields
              _class="content-info-field-others"
              inputType="text"
              inputName="tendencia"
              inputId="tendencia"
            >
              Tendência
            </Fields>
            <Fields
              _class="content-info-field-others"
              inputType="text"
              inputName="xp"
              inputId="xp"
            >
              Experiência
            </Fields>
          </div>
        </div>
      </div>
    </>
  );
}
