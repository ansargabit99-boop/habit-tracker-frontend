interface log {
    setLogged:React.Dispatch<React.SetStateAction<boolean>>
}
const Login = ({setLogged}:log)=>{
    return <div>
        <div>
        <label >Login</label>
        <input type="text" placeholder="enter your gmail or number" />
        </div>
        <div>
            <label>password</label>
            <input type="text" placeholder="enter your passoword" />
        </div>
        <button>Submit</button>
        <div>
            <p>Dont have an account?</p>
            <p>Register</p>
        </div>
    </div>
}
export default Login