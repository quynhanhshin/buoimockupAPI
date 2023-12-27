import React, { useEffect, useState } from "react";

export default function Login() {
        const [account, setAccount] = useState({ id: 1, username: "Tân", password: "12345678" });
        const [text, setText] = useState("");
        const [pass, setPass] = useState("");
        useEffect(() => {
                if (localStorage.getItem("account")) {
                        let x = JSON.parse(localStorage.getItem("account")); // getItem là lấy ra, parse là biến về object
                        setAccount(x);
                }
        }, []);
        function handle_save() {
                setAccount({ ...account, username: text, password: pass });
                localStorage.setItem("account", JSON.stringify({ ...account, username: text, password: pass })); //setItem là lưu vào, stringify là chuyển về chuổi
        }
        return (
                <div>
                        <h1>Người đăng nhập: {account.username} </h1>
                        <input type="text" placeholder="Nhập username" value={text} onChange={(e) => setText(e.target.value)} /> <br />
                        <input type="password" placeholder="Nhập password" value={pass} onChange={(e) => setPass(e.target.value)} /> <br />
                        <input type="submit" value="Login" onClick={handle_save} /> <br />
                </div>
        );
}
