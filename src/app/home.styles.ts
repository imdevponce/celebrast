import styled from 'styled-components'
export const HomeContainer = styled.div`
    min-height: 100vh;
    overflow: hidden;
`
export const MainHomeContainer = styled.div`
     position: relative;
     width: 100vw;
     height: 350px;
     border-bottom: 0.5px solid #d9d9d9;
`
export const SearchContainer = styled.div`
    padding: 20px 65px;
    position: absolute;
    top: 25%;
    h1 {
        font-size: 24px;
    }
    width: 500px;
    /* background-color: red; */
    @media screen and (max-width: 1024px) {
        width: 100%;
        top: 40%;
    }
`
export const SearchFormContainer = styled.form`
    display: flex;
    margin-top: 20px;
`
export const AboutCelebrastContainer = styled.div`
`
export const AboutCelebrastTitle = styled.h2`
    background-color: #FFFFFF;
    box-shadow: 0px 25px 20px -37px rgba(0,0,0,0.45);
    padding-bottom: 30px;
    width: 100vw;
    padding: 30px 65px 30px 65px;

`
