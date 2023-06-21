import styled from "styled-components";
import { schedule } from "../global/_data";
import Button from "../global/Button";

export default function Schedule() {
  return (
    <Container>
      <h3 className="Schedule__Title">{schedule.title}</h3>
      <p className="Schedule__Content">{schedule.content}</p>
      <Button color="white" text={schedule.buttonText} />
    </Container>
  );
}

const Container = styled.section`
  background: var(--color-gradient);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 63px;
  padding-bottom: 63px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;

  .Schedule__Title {
    font-size: 48px;
  }

  .Schedule__Content {
    color: var(--color-white);
    max-width: 700px;
    margin: 0 auto;
    padding-bottom: 20px;
    padding-top: 30px;
    font-size: 18px;
  }
`;
