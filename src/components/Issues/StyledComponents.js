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

const card_div = styled.div`
    border: 1px solid black;

    & .issue-card__content:hover {
        cursor: pointer;
    }

    & .issue-card__content {
        & > article {
            font-size: 1.5rem;

            & .issue-card__issue > img {
                // * STANDARD HEIGHT X WIDTH ON BACKEND                
                max-height: 300px;
                max-width: 300px;
            }
            & .issue-card__issue {
                // * STANDARD HEIGHT X WIDTH ON BACKEND                
                max-height: 300px;
                max-width: 300px;
            }
        }
    }

    & .issue-comments__container {

        & > h3 {
            padding-top: 5rem;
            border-bottom: 1px solid black;
        }

        & .comment__container {
            display: flex;

            margin-top: 1rem;
            border: 1px solid black;

            & > article {
                display: flex;
                flex-flow: column nowrap;
                align-items: center;
            }
            & > article > img {
                height: 5rem;
                max-width: 90%;
            }

            & > article {
                border: 1px solid red;
                width: 20%;
                padding: 0.5rem 0;
            }

            & > aside {
                display: flex;
                flex-flow: column nowrap;
                align-items: center;

                border: 1px solid red;
                width: 95%;
            }

            & > aside > dt {
                display: block;

                border-bottom: 1px solid black;
                width: 100%;
                text-align: center;
                font-weight: 600;
            }

            & > aside > dd {
                margin-top: 1rem;
                width: 95%;
                text-align: left;
            }
        }
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