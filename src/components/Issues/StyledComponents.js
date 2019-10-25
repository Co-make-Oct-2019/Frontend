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
                display: flex;
                flex-flow: row nowrap;

                & .issue-card__info {
                    display: flex;
                    flex-flow: column nowrap;

                    max-width: 100%;
                    padding-left: 1rem;
                }
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
    margin: 0 auto;
    margin-top: 5rem;
    height: 5rem;
    max-width: 50%;
    background-color: #54565A;
    border-radius: 0.3rem;
    border-bottom: 1.5px solid mediumseagreen;
    border-left: 1.3px solid mediumseagreen;

    display: flex;
    flex-flow: row wrap;
    align-items: center;

    & > input {
        background-color: lightgray;
        margin: 0 1rem;
        height: 1.5rem;
        border-radius: 0.3rem;
    }

    & > input::placeholder {
        color: black;
        padding-left: 1rem;
    }

    & .issue-form__btn {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;

        width: 25%;

        & > button:hover {
            cursor: pointer;
        }

        & > button {
            height: 1.5rem;
            width: 75%;
            margin: 0 0.5rem;
            background-color: mediumseagreen;
            border-radius: 0.3rem;
            border-bottom: 0.6px solid #D3D3D3;
            border-left: 0.5px solid #D3D3D3;
        }
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