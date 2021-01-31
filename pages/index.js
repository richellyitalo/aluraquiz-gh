import React from 'react';
import { useRouter } from 'next/router';

import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import isEmpty from '../src/util/isEmpty';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

const QuizInput = styled.input`
  width: 100%;
  background-color: transparent;
  border: 1px solid #777;
  border-radius: 2px;
  padding: 10px 0;
  text-indent: 10px;
  outline: none;
  color: #ddd;
`;

const QuizButton = styled.button`
  margin-top: 15px;
  color: #fff;
  background-color: #ff9800;
  display: block;
  width: 100%;
  text-transform: uppercase;
  border: none;
  border-radius: 2px;
  height: 30px;
`;

export default function Home() {
  const [name, setName] = React.useState('');
  const router = useRouter();

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    router.push(`quiz/?name=${name}`);
  };

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <form onSubmit={handleSubmit}>
              <QuizInput
                type="text"
                onChange={handleInputChange}
                placeholder="Informe seu nome"
              />
              <QuizButton
                type="submit"
                disabled={isEmpty(name)}
              >
                Iniciar jogo
              </QuizButton>
            </form>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/richellyitalo/aluraquiz-gh" />
    </QuizBackground>
  );
}
