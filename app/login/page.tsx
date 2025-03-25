import LoginForm from "@/components/login/login-form";
import LoginSection from "@/components/login/login-section";


export default function Login(){
    return(
        <div className={` w-screen h-screen flex items-center justify-center`}>
            <LoginSection />
            <LoginForm />
            {/*<button className="bg-red-900 w-1/2 p-3 rounded-sm cursor-pointer hover:opacity-85">Registrar-se</button>*/}
        </div>
    )
}