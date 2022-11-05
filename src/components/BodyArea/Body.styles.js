import styled from "styled-components";

export const Bodysty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: ffeded;
  margin: 9rem 3rem;
  font-size: 27px;
  padding: 40px 30px;
  /* border: 2px solid red; */
`;

export const ContainerWrapper = styled.div`
  display: flex;
  /* border: 2px solid blue; */
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1100px;

@media screen and (max-width:800px) {
  flex-direction: column;
}
`

export const ContainLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
  width: 100%;

  /* border: 2px solid red; */
`;
export const ContainRight = styled.div`
  /* flex-basis: 50%; */
  display: flex;
  justify-content: center;
  align-self: flex-start;
  height: 100%;
  width: 100%;
  /* border: 2px solid red; */


  @media screen and (max-width:800px){

    position: relative;
    z-index: 10;
    bottom: 270px;
    padding-left: 40px;
    justify-content: flex-start;
  }

  @media screen and (max-width:488px){
    position: relative;
    bottom: 320px;
    justify-content: center;
  }
`;
export const Gap = styled.div`
  & .spread {
    margin: 60px 0;
    color: red;
    /* border: 2px solid green; */
  }
`;

export const Iconsty = styled.div`
  width: 100%;
 
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 14px;
  margin-bottom: 40px;
  /* border: 2px solid red; */

  @media screen and (max-width:800px) {
    position: relative;
    top: 150px; 
  }
`;
export const Ptag = styled.div`
  & .P-class {
    display: flex;
    color: #3D2C2C;
    margin: 6rem 0 0 0;
    padding: 30px 0;
    text-align: left;
    /* border: 2px solid green; */
  }

  & .A-class {
    margin: auto;
    color: red;
    padding-left: 10px;
  }
  @media screen and (max-width:800px) {
    position: relative;
    top: 100px; 
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
  width: 100%;
  height: 50%;
  padding-bottom: 2rem;
  margin: 1.5rem 2rem 1rem 0;
   /* border: 2px solid red;  */

   
`;
export const H1sty = styled.span`
  font-size: 30px;
  font-weight: 700;
  padding: 50px;
`;
