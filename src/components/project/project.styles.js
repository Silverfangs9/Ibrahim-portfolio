import styled from "styled-components";

export const Mainconsty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  width: 100%;
  border: 2px solid red;
  color: red;
  background-image: linear-gradient(lightblue, lightgreen);
`;
export const MainTopMid = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  & .input {
    outline: none;
    font-size:20px;
    color: rgb(35, 25, 25);
    padding: 12px 20px;
    border-radius:4px;
    cursor: pointer;
    width: 100%;
    margin-right:auto;
  }
  & .submit {
    padding: 10px;
    cursor: pointer;
    font-size: 20px;
  }
`;

export const Topconsty = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  align-items: center;
  justify-content: center;
  flex-basis: 80%;
  height: 100%;
  width: 100vw;
  /* border: 2px solid green; */
  margin: 10px;
  color: rgb(35, 25, 25);
`;

export const Bottomconsty = styled.div`
  flex-basis: 20%;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 10px;
  border: 2px solid blue;
`;

export const Containerdiv = styled.div`
  flex-basis: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* border: 2px solid blue; */
  height: 100%;
  width: 100%;
`;

export const Topleft = styled.div`
  display: flex;
  align-self: left;
  flex-direction: column;
  /* border: 2px solid red ; */
  padding: 20px;
  font-size: 20px;

  & .city {
    font-size: 60px;
    font-weight: 700;
    text-transform: uppercase;
  }
  & .wind {
    font-size: 19.5px;
  }
`;

export const Topmid = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 2px solid green ; */
  padding-top: 50px;

  & .weather {
    display: flex;
    flex-direction: column;
    text-align: center;
    position: relative;
    bottom: 20px;
  }
`;

export const Topright = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  /* border: 2px solid yellow ; */

  & .deg {
    font-size: 40px;
    padding-top: 30px;
  }
`;
