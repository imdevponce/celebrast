import styled from 'styled-components'
import Link from 'next/link'

export const NavContainer = styled.header`
    min-height: 80px;
    border-bottom: 1px solid #d9d9d9;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 65px;
    font-size: 14px;
`

export const NavLink = styled(Link)`
    color: #000000;
    text-decoration: none;
    margin-right: 15px;
    font-weight: 600;
`
export const LeftSectionInNav = styled.div`
    display: flex;
    align-items: center;
`
