import styled from "styled-components";

export const Bodysty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 88vh;
  /* font-size: 20px; */
  /* margin: 9rem 3rem; */
  font-size: 27px;
  /* padding: 40px 30px; */
  /* border: 2px solid red; */
`;

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  padding: 0 32px;
  /* border: 2px solid blue; */

  @media screen and (max-width: 860px) {
    flex-direction: column;
  }
`;

export const ContainLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
  width: 100%;

  /* border: 2px solid red; */
  @media screen and (max-width: 700px) {
  }

  & .H1name {
    @media screen and (max-width: 542px) {
      font-size: 35px;
    }
  }
`;
export const ContainRight = styled.div`
  /* flex-basis: 50%; */
  display: flex;
  justify-content: center;
  align-self: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  /* border: 2px solid red; */

  @media screen and (max-width: 800px) {
    /* position: relative;
    z-index: 10;
    bottom: 270px;
    padding-left: 40px;
    justify-content: flex-start; */
  }

  @media screen and (max-width: 488px) {
    /* position: relative;
    bottom: 320px;
    justify-content: center; */
  }
`;
export const Gap = styled.div`
  & .spread {
    margin: 60px 0;
    color: red;
    font-weight: 700;
    /* border: 2px solid green; */
  }
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const Iconsty = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 14px;
  margin-bottom: 30px;
  /* border: 2px solid red; */

  @media screen and (max-width: 460px) {
     width: 300px;
    }
`;
export const Ptag = styled.div`
  & .P-class {
    /* display: flex; */
    color: #3d2c2c;
    margin: 3rem 0 0 0;
    padding: 10px 0;
    text-align: left;
    /* border: 2px solid green; */
    word-spacing: 3px;
  }

  & .A-class {
    /* margin: auto; */
    color: red;
    padding-left: 10px;
    
  }
  @media screen and (max-width: 800px) {
    font-size: 26px;
  }
`;

// export const Arrowsty = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: flex-end;
//   justify-content: end;
//   /* border: 2px solid red; */
// `;

export const IconStack = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  justify-content: space-between;
  /* width: 100%; */
  width: 350px;
  height: 50%;
  padding-bottom: 1rem;
  margin: 1.5rem 2rem 1rem 1.5rem;
  /* border: 2px solid red;  */
  @media screen and (max-width: 460px) {
     width: 240px;
    }
`;
export const H1sty = styled.span`
  display: flex;
  text-align: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 700;
  padding: 20px;
`;
