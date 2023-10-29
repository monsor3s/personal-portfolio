import styled from "styled-components";

export const ContentContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    h3 {
      font-size: 55px;
      line-height: 66px;
      font-weight: 900;

      @media (max-width: 1024px) {
          font-size: 40px;
      }

      @media (max-width: 768px) {
        text-align: center;
      }

      @media (max-width: 480px) {
        /* margin-top: 120px; */
      }
    }

    h3 span {
      color: transparent;
      -webkit-text-stroke: 1px #000;
    }

    p { 
      font-size: 17px;
      font-weight: 500;
      color: #767676;
      line-height: 30px;
      letter-spacing: .5px;

      @media (max-width: 768px) {
        text-align: center;
      }
    }

`