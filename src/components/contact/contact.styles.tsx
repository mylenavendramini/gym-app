import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 100%;
  max-width: 60rem;
  padding: 2rem;
  height: auto;
  margin: 1rem auto;
  overflow-y: auto;

  /* @media only screen and (max-width: 600px) {
    height: 160vh;
  } */

  h1 {
    text-transform: uppercase;
    text-align: center;
    color: #3eb2fd;
  }

  p {
    text-align: center;
  }

  button,
  a {
    margin: auto;
    align-items: center;
    appearance: none;
    background-color: #3eb2fd;
    background-image: linear-gradient(1deg, #93bdd9, #149bf3 99%);
    background-size: calc(100% + 20px) calc(100% + 20px);
    border-radius: 100px;
    border-width: 0;
    box-shadow: none;
    box-sizing: border-box;
    color: #1d1b26;
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
  a:active,
  button:focus,
  a:focus {
    outline: none;
  }

  button:hover,
  a:hover {
    background-position: -20px -20px;
  }
  button:focus:not(:active),
  a:focus:not(:active) {
    box-shadow: rgba(40, 170, 255, 0.25) 0 0 0 0.125em;
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      width: 100%;
      border-radius: 4px;
      border: 1px solid rgb(40, 170, 255);
      background-color: #1d1b26;
      color: #ffffff;
      font-size: 1rem;
      padding: 0.5rem;
      margin: 1rem auto;

      &::placeholder {
        color: #ffffff;
      }
    }
  }
`;
