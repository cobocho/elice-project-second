import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export interface AccodionItemType {
  name: string;
  path: string;
}

interface Props {
  accodion: AccodionItemType;
}

const Conatiner = styled.div`
  a {
    display: flex;
    align-items: center;

    svg {
      fill: #fff;
    }
  }
`;

const AccodionItem = ({ accodion }: Props) => {
  return (
    <Conatiner>
      <NavLink to={accodion.path}>
        <svg height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z" />
        </svg>
        {accodion.name}
      </NavLink>
    </Conatiner>
  );
};

export default AccodionItem;