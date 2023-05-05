const Register = ({ nameRef, emailRef, passwordRef, passwordConfirmRef, register }) => {
    return (
        <div className="container mx-auto h-screen flex justify-center items-center flex-col">
            <div className="bg-[#eff6f6] px-12 py-8">
                <h1 className="text-center pb-8 text-2xl font-bold">Register to AnyMed</h1>
                <div className="py-2 flex justify-between">
                    <label htmlFor="name" className="pr-5 text-xl">Name</label>
                    <input className="rounded-lg focus:outline-none py-2 px-4" ref={nameRef} type="name" />
                </div>
                <div className="py-2 flex justify-between">
                    <label htmlFor="email" className="pr-5 text-xl">Email</label>
                    <input className="rounded-lg focus:outline-none py-2 px-4" ref={emailRef} type="email" />
                </div>
                <div className="py-2 flex justify-between">
                    <label htmlFor="password" className="pr-5 text-xl">Password</label>
                    <input className="rounded-lg focus:outline-none py-2 px-4" ref={passwordRef} type="password" />
                </div>
                <div className="py-2 flex justify-between">
                    <label htmlFor="password-confirm" className="pr-5 text-xl">Confirm</label>
                    <input className="rounded-lg focus:outline-none py-2 px-4" ref={passwordConfirmRef} type="password" />
                </div>
                <div className="flex justify-center py-2">
                    <button onClick={() => register(nameRef.current.value, emailRef.current.value, passwordRef.current.value, passwordConfirmRef.current.value)} className="bg-[#139c95] rounded py-2 px-4 text-white hover:bg-[#00a59f]">Register</button>
                </div>
            </div>
        </div>
      )
}

export default Register