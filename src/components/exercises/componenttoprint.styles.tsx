import styled from "styled-components";

export const ExercisesContainer = styled.div`
  width: 100%;
  max-width: 60rem;
  margin: 0 auto;
  padding: 2rem;
  height: auto;
  margin: 1rem auto;
  overflow-y: auto;

  @media print {
    @page {
      size: A4 landscape;
      margin: 20mm;
    }
  }

  h1 {
    text-transform: uppercase;
    text-align: center;
    color: #3eb2fd;
  }

  li {
    padding: 0.5rem;
    list-style: none;

    &:first-child {
      text-transform: uppercase;
      color: #3eb2fd;
      font-weight: bold;
    }
  }
  li:not(:first-child) {
    padding-top: 2rem;
  }

  button {
    align-items: center;
    appearance: none;
    background-color: #3eb2fd;
    background-image: linear-gradient(1deg, #93bdd9, #149bf3 99%);
    background-size: calc(100% + 20px) calc(100% + 20px);
    border-radius: 100px;
    border-width: 0;
    box-shadow: none;
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;
    display: inline-flex;
    font-family: CircularStd, sans-serif;
    font-size: 1rem;
    height: auto;
    justify-content: center;
    line-height: 1.5;
    padding: 6px 20px;
    position: relative;
    text-align: center;
    text-decoration: none;
    transition: background-color 0.2s, background-position 0.2s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: top;
    white-space: nowrap;
  }

  button:active,
  button:focus {
    outline: none;
  }

  button:hover {
    background-position: -20px -20px;
  }
  button:focus:not(:active) {
    box-shadow: rgba(40, 170, 255, 0.25) 0 0 0 0.125em;
  }

  form {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;

    h3 {
      text-transform: uppercase;
      text-align: center;
      color: #3eb2fd;
    }

    input {
      width: 100%;
      border-radius: 4px;
      border: 1px solid rgb(40, 170, 255);
      font-size: 1rem;
      padding: 0.5rem;
      margin: 1rem auto;
    }
  }
`;

export const ExercisesReady = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
