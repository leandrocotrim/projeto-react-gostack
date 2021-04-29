import styled, { css } from 'styled-components';
import { shade } from 'polished';

const textColor = '#3a3a3a';
const buttonColor = '#04d361';
const errorColor = '#c53030';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: ${textColor};
  max-width: 440px;
  padding-bottom: 40px;
  margin-top: 100px;
`;

export const Form = styled.form<FormProps>`
  display: flex;
  width: 714px;

  input {
    flex: 1;
    height: 70px;
    padding-top: 0px;
    padding-left: 24px;
    border-radius: 5px 0 0 5px;

    border: 2px #fff solid;
    border-right: 0px;

    ${props =>
      props.hasError &&
      css`
        border-color: ${errorColor};
      `};

    color: ${textColor};

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    color: #fff;
    border: 0;
    border-radius: 0 5px 5px 0;
    background-color: ${buttonColor};
    transition: background-color 0.2s;

    &:hover {
      background-color: ${shade(0.2, buttonColor)};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: ${errorColor};
`;

export const Repositories = styled.div`
  width: 714px;
  padding-top: 120px;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    background: #fff;
    height: 112px;
    padding: 14px;
    border-radius: 5px;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    img {
      border: 0;
      width: 84px;
      height: 84px;
      border-radius: 50%;
      margin-right: 21px;
    }

    div {
      strong {
        font-size: 24px;
        color: #3d3d4d;
      }
      p {
        font-size: 18px;
        color: #a8a8b3;
      }
    }
    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
