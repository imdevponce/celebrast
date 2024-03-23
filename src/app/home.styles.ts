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
     @media (max-width: 1335px) {
        height: 400px;
    }
    @media (max-width: 768px) {
        height: 600px;
    }
`
export const SearchContainer = styled.div`
    padding: 20px 65px;
    position: absolute;
    top: 25%;
    display: flex;
    flex-direction: column;
    h1 {
        font-size: 24px;
        font-weight: 600;
        width: 500px;
        @media (max-width: 768px) {
            font-size: 18px;
            width: 350px;
            margin: 0 auto;

        }
        @media (max-width: 425px) {
                width: 250px;
        }
    }
    @media (max-width: 1335px) {
        top: 70%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }
    form {
        @media (max-width: 768px) {
            flex-direction: column;
        }
        input, button {
            @media (max-width: 768px) {
                width: 400px;
                margin: 5px auto;
            }
            @media (max-width: 425px) {
                width: 300px;
            }
            @media (max-width: 320px) {
                width: 250px;
            }
        }
    }
    
  
`
export const SearchFormContainer = styled.form`
    display: flex;
    margin-top: 20px;
`
export const AboutCelebrastContainer = styled.div`
    padding: 0px 0px 30px 0px;
`
export const AboutCelebrastTitle = styled.h2`
    background-color: #FFFFFF;
    box-shadow: 0px 25px 20px -37px rgba(0,0,0,0.45);
    padding-bottom: 30px;
    width: 100vw;
    padding: 30px 65px 30px 65px;
    font-weight: 500;
    strong {
        color: #57C2E2
    }
`

export const ClientSectionContainer = styled.section`
    padding: 0 65px 0 65px;
    text-align: center;
    h2 {
        font-weight: 500;
        strong {
            color: #57C2E2
        }
    }
`

export const CelebrastDescription = styled.p`
        width: 70%;
        margin: 0 auto;
        margin-top: 20px;
        min-width: 200px;
`
export const ClientSteps = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`
export const StepContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    width: 250px;
    height: 250px;
    h3 {
        margin-top: 10px;
    }
    b {
        margin-bottom: 10px;
    }
`
