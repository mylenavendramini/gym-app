import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 60rem;
  margin: 0 auto;
  padding: 2rem;
  height: auto;
  overflow-y: auto;

  h1 {
    text-transform: uppercase;
    text-align: center;
    color: #3eb2fd;
    margin-bottom: 5rem;
  }

  p {
    text-align: justify;
  }

  li {
    list-style: none;
  }

  a {
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

  a:active,
  a:focus {
    outline: none;
  }

  a:hover {
    background-position: -20px -20px;
  }
  a:focus:not(:active) {
    box-shadow: rgba(40, 170, 255, 0.25) 0 0 0 0.125em;
  }
`;
