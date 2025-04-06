import {AuthForm} from "../components/AuthForm.tsx";
import {useNavigate} from "react-router-dom";

export const SignUpPage = () => {
    const navigate = useNavigate();
    return(
        <div>
            <AuthForm submitText="Зарегестрироваться"
                      switchText="Уже есть аккаунт? Войти"
                      onSwitchPage={() => navigate('/signin')}
                      isSignUp={true}
            />
        </div>
    )
}