import styled from "styled-components";
import { green, lightGray, black, yellow, bgPage } from "../ui/colors";
import { Button, Grid, Paper, Typography } from "@material-ui/core";

//Home

export const Social = styled(Grid)`
  && {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-top: 60px;
    padding-bottom: 60px;
    background: linear-gradient(0deg, #f0f0f0d9, rgb(220, 220, 220), #f0f0f0d9);
  }
`;

export const SocialMedia = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    transition: transform 0.2s;
    cursor: pointer;
    :hover {
      transform: scale(1.01);
    }
  }
`;

export const GridIg = styled(Paper)`
  && {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    background: linear-gradient(
      120deg,
      #405de6,
      #5851db,
      #833ab4,
      #c13584,
      #e1306c,
      #fd1d1d
    );
  }
`;

export const GridFb = styled(Paper)`
  && {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    background: #4267b2;
  }
`;

export const TextDiv = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
`;

export const Text = styled(Typography)`
  && {
    font-size: 20px;
    justify-content: center;
    padding: 15px;
  }
`;

export const IgImage = styled.img`
  width: 518px;
`;
export const FbImage = styled.img`
  width: 500px;
`;
//Divs

export const Container = styled.div`
  background-color: ${lightGray};
  padding: 10px 10px 10px 10px;
`;

export const ProductsPaper = styled(Paper)`
  && {
    background-color: ${bgPage};
    text-align: center;
  }
`;

export const ListGrid = styled(Grid)`
  && {
    padding: 50px;
    display: flex;
    justify-content: center;
  }
`;

export const FilterPaper = styled(Grid)`
  && {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: ${bgPage};
  }
`;

export const InputDiv = styled(Paper)`
  && {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
  }
`;

// const CssTextField = styled(TextField)`
// &&{
//   '& label.Mui-focused': {
//     color: '#A0AAB4',
//   },
//   '& .MuiInput-underline:after': {
//     borderBottomColor: '#B2BAC2',
//   },
//   '& .MuiOutlinedInput-root': {
//     '& fieldset': {
//       borderColor: '#E0E3E7',
//     },
//     '&:hover fieldset': {
//       borderColor: '#B2BAC2',
//     },
//     '&.Mui-focused fieldset': {
//       borderColor: '#6F7E8C',
//     },
//   },
// }`;

export const BtnsDiv = styled(Grid)`
  && {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 10px;
    padding: 10px;
    flex-direction: row;
  }
`;

export const StyledBtn2 = styled(Button)`
  && {
    background-color: ${yellow};
    color: ${green};
    font-weight: 600;
    margin: 10px;
    :hover {
      background-color: ${green};
      color: ${yellow};
    }
  }
`;

//Text

export const Title = styled.h1`
  color: ${green};
  font-size: 50px;
  font-weight: bold;
`;

export const Subtitle = styled.h2`
  color: ${black};
  font-weight: bold;
`;

export const Parrafo = styled.p`
  font-weight: bold;
  font-size: 20px;
`;

//Image

export const Image = styled.img`
  width: 200px;
  height: 200px;
`;

//Button

export const ButtonNav = styled.button`
  padding: 10px;
  border-radius: 5px;
  background-color: ${green};
  cursor: pointer;
`;
