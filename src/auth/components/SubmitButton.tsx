import React from "react";
import styled from "styled-components";

type Props = {
    text: string
}

export const SubmitButton: React.FC<Props> = ({text}) => {
    return (
        <Button type={"submit"} onClick={() => {
        }}>
            {text}
        </Button>
    )
}

const Button = styled.button`
    width: 100%;
    background-color: #2563eb;
    color: white;
    padding: 0.6rem 1rem;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 1rem;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: #1e40af;
    }
`