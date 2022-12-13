import styled from "styled-components";
import {useState} from "react";

function Progress({initialBudget, currentBudget}) {
  const percentage = currentBudget / initialBudget;
  return (
    <>
      <p>{initialBudget} €</p>
      <p>{currentBudget} €</p>
      <p>{Number.parseInt(percentage * 100)} %</p>
      <StyledProgress>
        <div
          style={{
            backgroundColor: "blue",
            width: "100%",
            height: `${Number.parseInt(percentage * 500)}px`,
          }}
        ></div>
      </StyledProgress>
    </>
  );
}

export default function Home({testProp}) {
  const [initialBudget, setInitialBudget] = useState(1000);
  const [transactions, setTransactions] = useState([]);
  return (
    <StyledContainer>
      <h1>{testProp}</h1>
      <button
        onClick={() => {
          setTransactions([...transactions, {date: Date.now(), value: 50}]);
        }}
      >
        +50
      </button>
      <button
        onClick={() => {
          setTransactions([...transactions, {date: Date.now(), value: -50}]);
        }}
      >
        -50
      </button>

      <Progress
        initialBudget={initialBudget}
        currentBudget={transactions.reduce((acc, cur) => {
          return acc + cur.value;
        }, initialBudget)}
      />
      <ul>
        {transactions.map((transaction, index) => {
          return (
            <li key={index}>
              {transaction.date} {transaction.value}
            </li>
          );
        })}
      </ul>
    </StyledContainer>
  );
}

const StyledContainer = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledProgress = styled.div`
  border: 1px solid black;
  width: 100px;
  height: 500px;
  display: flex;
  flex-direction: column;
`;
