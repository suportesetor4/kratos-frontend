import LoginForm from "@/components/login/login-form";
import LoginSection from "@/components/login/login-section";


export default function Login(){
    return(
        <div className={` w-screen h-screen flex items-center justify-center`}>
            <LoginSection />
            <LoginForm />
        </div>
    )
}