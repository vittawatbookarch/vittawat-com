import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import Header from '../components/header';
import Klang from "../components/card";
import data from "../data/data.json"
import DropMenu from "../components/dropdown"
import "../styles/styles.scss"

const Page = styled.div`
  width: 100%;
  max-width: 1260px;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IndexPage = () => (
  <Layout>
    <Page>
      <Header />
      {data.something.map(something => (
        <Klang
          text={something.text}
          text2={something.text2}
        />

      ))}
      <DropMenu />
    </Page>
  </Layout>
);



export default IndexPage;