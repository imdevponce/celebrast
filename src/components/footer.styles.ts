import styled from 'styled-components'

export const FooterContainer = styled.div`
    min-height: 80px;
    height: auto;
    border-top: 1px solid #d9d9d9;
    display: grid;
    grid-template-columns: 50% 50%;
    background-color: #E5E5E5;
    padding: 20px 65px;
    strong {
        font-size: 14px;
        font-weight: 600;
    }
    p {
        font-size: 12px;
    }
`
export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const FollowUsContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const SocialMediaContainer = styled.div`
    margin-top: 10px;
    a {
        margin-right: 10px;
    }
`
export const InfoSectionsContainer = styled.div`
    margin-top: 10px;
`
