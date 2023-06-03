import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Promos = React.forwardRef((props, ref) => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("/api/news")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        const transformed = result.map((item) => {
          return {
            title: item.title,
            description: item.description,
            source: item.url,
            publishedAt: item.date,
          };
        });
        setNews(transformed);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Wrapper ref={ref}>
      {news.map((item, index) => (
        <OfferCard key={index}>
          <Title>{item.title}</Title>
          <Description>{item.description}</Description>
          <Placeholder />
          <Additional>
            <span>
              <a href={item.source}>View Full News</a>
            </span>
            <span>{item.publishedAt}</span>
          </Additional>
        </OfferCard>
      ))}
    </Wrapper>
  );
});

export default Promos;

const Wrapper = styled.div`
  position: static;
  display: flex;
  padding: 1rem;
  overflow-y: scroll;
  flex: 1;
  flex-direction: column;
  ::-webkit-scrollbar {
    display: none;
  }

`;

const OfferCard = styled.div`
  border: 1px solid #282b2f;
  margin-bottom: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  wrap-text: true;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 0.1rem;
`;

const Description = styled.div`
  font-size: 0.7rem;
`;

const Placeholder = styled.div`
  flex: 1;
`;

const Additional = styled.div`
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > span {
    color: #8a919e !important;
    font-size: 1rem;
  }
`;
