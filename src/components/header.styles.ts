import styled from 'styled-components'
import Link from 'next/link'

interface CustomNavLinkProps {
  href: string
  $noMargin?: boolean
  $primaryColor?: boolean
};

export const NavContainer = styled.header`
    min-height: 80px;
    border-bottom: 1px solid #d9d9d9;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 65px;
    font-size: 14px;
`
export const NavLink = styled(Link)<CustomNavLinkProps>`
    margin-right: ${(props) => (props.$noMargin ? '' : '15px')};
    text-decoration: none;
    color: #000000;
    flex-direction: row;
    font-weight: 600;
    color: ${(props) => (props.$primaryColor ? '#57C2E2' : '')};

  `
export const LeftSectionInNav = styled.div`
    display: flex;
    align-items: center;
`
export const RightSectionInNav = styled.div`
    display: flex;
    align-items: flex-end;
    flex-direction: column;
`
export const NavMenuContainer = styled.nav`
    @media (max-width: 1024px) {
        display: none;
    }
`
