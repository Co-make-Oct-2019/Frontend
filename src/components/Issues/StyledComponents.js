import styled from 'styled-components';

const section = styled.section`
    border: 1px solid black;
`

const card_div = styled.section`
    border: 1px solid black;
`

const form = styled.form`
    border: 1px solid blue;

    & > button:hover {
        cursor: pointer;
    }

    & > input {
        background-color: lightgray;
        margin: 0 1rem;
    }
`

export default {
    card_div,
    form,
    section    
}