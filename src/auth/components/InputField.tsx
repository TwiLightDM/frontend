import React, {ChangeEvent} from "react";
import styled from "styled-components";

type Props = {
    label: string,
    name: string,
    type?: string,
    value: string,
    placeholder?: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void

}

export const InputField: React.FC<Props> = ({label, name, type = "text", value, placeholder = "", onChange}) => {
    return (
        <InputGroup>
            <Label>
                {label}
            </Label>
            <Input
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </InputGroup>
    )
}

const InputGroup = styled.div`
    margin-bottom: 1rem;
`

const Label = styled.label`
    display: block;
    margin-bottom: 0.25rem;
    font-weight: 500;
    font-size: 0.9rem;
`

const Input = styled.input`
    width: 94%;
    padding: 0.5rem 0.75rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 1rem;
`