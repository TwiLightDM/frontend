import {AuthForm} from "../components/AuthForm.tsx";
import {useNavigate} from "react-router-dom";

export const SignInPage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <AuthForm submitText="Войти"
                      switchText="Нет аккаунта? Зарегестрироваться"
                      onSwitchPage={() => navigate('/signup')}
            />
        </div>
    )
}