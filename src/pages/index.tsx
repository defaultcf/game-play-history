import React from 'react';
import { graphql } from 'gatsby';

import Title from '@/components/Title';

type Props = {
  data: {
    allHistoryJson: {
      nodes: Array<{
        name: string;
        playtime_forever: number;
      }>
    }
  }
};

const Home: React.FC<Props> = ({ data }) => (
  <main>
    <Title />
    <ul>
      {data.allHistoryJson.nodes.map((node, key) => (
        <li key={key}>
          {node.name}, {(node.playtime_forever / 60).toFixed(1)}時間
        </li>
      ))}
    </ul>
  </main>
);

export const query = graphql`
  query {
    allHistoryJson(sort: {fields: playtime_forever, order: DESC}) {
      nodes {
        name
        playtime_forever
      }
    }
  }
`;

export default Home;
