import {InputField} from "./InputField.tsx";
import React, {useState} from "react";
import {SubmitButton} from "./SubmitButton.tsx";
import styled from "styled-components";

type Props = {
    submitText: string,
    onSwitchPage?: () => void,
    switchText?: string,
    isSignUp?: boolean,
}

export const AuthForm: React.FC<Props> = ({submitText, switchText, onSwitchPage, isSignUp}) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState<string | null>(null)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Пожалуйста, заполните все поля.')
            return
        }

        if (isSignUp) {

            if (password !== confirmPassword) {
                setError('Пароли не совпадают.')
                return
            }
        }

        console.log("Submitted");
    }

    return (
        <FormContainer onSubmit={handleSubmit}>
            <InputField label="Почта"
                        name="email"
                        type="email"
                        value={email}
                        placeholder="example@gmail.com"
                        onChange={e => setEmail(e.target.value)}
            />
            <InputField label="Пароль"
                        name="password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
            />

            {isSignUp && (
                <InputField
                    label="Повторите пароль"
                    name="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                />
            )}

            {error && <ErrorMessage>{error}</ErrorMessage>}

            <SubmitButton text={submitText}/>

            {onSwitchPage && switchText && (
                <SwitchLink className="mt-4 text-center text-sm">
                    <button type="button" onClick={onSwitchPage} className="text-blue-600 underline">
                        {switchText}
                    </button>
                </SwitchLink>
            )}

        </FormContainer>
    )
}

const FormContainer = styled.form`
    max-width: 400px;
    margin: 2rem auto;
    padding: 1.5rem;
    background: #ffffff;
    border: 1px solid #e2e2e2;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`

const SwitchLink = styled.p`
    margin-top: 1rem;
    text-align: center;
    font-size: 0.9rem;

    button {
        background: none;
        border: none;
        color: #2563eb;
        cursor: pointer;
        text-decoration: underline;
        font-size: inherit;
    }
`

const ErrorMessage = styled.p`
    color: #dc2626;
    font-size: 0.9rem;
    margin-bottom: 0.1rem;
    text-align: center;
`