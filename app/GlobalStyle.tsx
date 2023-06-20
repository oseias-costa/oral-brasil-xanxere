"use client";
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  border: none;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

:root {
  --color-white: #fefefe;
  --color-blue-strong: #091D3F;
  --color-blue-light: #007AD2;
  --color-gray-text: #575757;
  --color-gray-block: #EEEEEE;
  --color-gradient-white: linear-gradient(180deg, #FFFFFF 0%, #D9D9D9 100%);
  --color-gradient: linear-gradient(180deg, rgba(13, 35, 129, 0.85) 6.64%, #0D2381 100%);
}

h1, h2, h3, h4, p, a {
  font-family: var(--font-montserrat);
  font-weight: 400;
}


h1 {
  font-size: 62px;
  color: var(--color-blue-strong);
}

h2 {
  font-size: 50px;
  color: var(--color-blue-strong);
}

h3 {
  color: var(--color-white);
}

h4 {
  color: var(--color-blue-light);
}

p {
  color: var(--color-gray-text);
}
`