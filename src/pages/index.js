import React from "react";
import styled from "styled-components";

import { Redirect } from "@docusaurus/router";
import useBaseUrl from "@docusaurus/useBaseUrl";

const Header = styled.header`
  background: black;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Subtitle = styled.p`
  margin: 0;
  padding: 0 20px;
  font-size: 1.5em;
  color: #e7dacb;
`;

const LinkToDoc = styled.a`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
`;

function Home() {
  return (
    <Header>
      <Subtitle>
        Black lives matter.
        <a
          href="https://support.eji.org/give/153413/#!/donation/checkout"
          target="_blank"
        >
          Support the Equal Justice Initiative.
        </a>
      </Subtitle>
      <LinkToDoc href={useBaseUrl('/introduction')}>Go to the documentation</LinkToDoc>
    </Header>
  );
  // return <Redirect to={useBaseUrl('/introduction')} />;
}

export default Home;
