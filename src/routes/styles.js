import styled from "styled-components";
import { green, lightGray, black, white } from "../ui/colors";

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${green};
  align-items: center;
  justify-content: space-around;
`;

export const SubHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;
