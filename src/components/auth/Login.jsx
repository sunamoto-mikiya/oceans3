const signIn = () => {
    // ログイン処理前にCSRFトークンを初期化
    axios.get("/sanctum/csrf-cookie").then((response) => {
        axios
            .post("/api/login", {
                email,
                password,
            })
    }
}
