import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';
import useScrolled from '../../CustomHooks/useScrolled';

const StyledNavLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const StyledNavLinkItem = styled.li`
  margin: 1rem;

  @media (min-width: 768px) {
    margin: 0 0.5rem;
  }
`;

const StyledNavLink = styled(RouterNavLink)`
  border: 1px solid transparent;
  color: var(--white0);
  text-decoration: none;
  padding: 0.5rem;

  &:hover,
  &:active,
  &.active {
    background: var(--orange0);
    border-bottom: none;
    color: var(--white0);
  }

  @media (min-width: 768px) {
    font-size: 20px;
    color:var(--white0);
    text-decoration: none;

    &:hover
     {
    background: none;
    color:var(--gold0);
    }

    &.active{
      background: none;
      color:var(--gold0);
      border-bottom: 1px solid var(--gold0);
    }
  }
`;

const NavLinks = () => {

  return (
    <StyledNavLinks>
      <StyledNavLinkItem>
        <StyledNavLink  to="/" activeClassName="active">HOME</StyledNavLink>
      </StyledNavLinkItem>
    </StyledNavLinks>
  );
}

export default NavLinks;