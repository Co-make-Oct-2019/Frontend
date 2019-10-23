import styled from 'styled-components';

const section = styled.section`
    border: 1px solid black;

    & .issues__headers {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;

        background-color: mediumseagreen;
    }

    & .issues__options {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        align-items: center;

        width: 50%;
    }
`

const card_div = styled.section`
    border: 1px solid black;

    & .issue-card__content:hover {
        cursor: pointer;
    }
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

const formSearch = styled.form`
    display: inline-block;
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
    formSearch,
    section    
}