import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import api from "../services/api";

function LoginPage() {

    const [form, setForm] = useState({
        email: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange =
        (field: "email" | "password") =>
            (event: ChangeEvent<HTMLInputElement>) => {
                setForm((prev) => ({
                    ...prev,
                    [field]: event.target.value,
                }));
            };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setError("");

        // Basic client-side validation
        if (!form.email.trim() || !form.password.trim()) {
            setError("Please enter both email and password.");
            setLoading(false);
            return;
        }

        try {
            const payload = { email: form.email, password: form.password };
            const res = await api.post<{ token: string }>("/auth/login", payload);
            const token = res.data?.token;

            if (!token) {
                setError("Login failed: no token returned.");
                return;
            }

            localStorage.setItem("authToken", token);
            navigate("/courses");
        } catch (err: any) {
            console.error("Login error", err);
            const msg =
                err?.response?.data?.message ||
                err?.response?.data?.error ||
                err?.response?.data?.detail ||
                err?.message ||
                "Login failed. Please check your credentials.";
            setError(msg);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mx-auto max-w-md p-6">
            <h1 className="text-3xl font-bold mb-6">
                Login Page
            </h1>
            <form onSubmit={handleSubmit} className="rounded-lg border p-6 shadow-sm">
                <InputField
                    label="Email"
                    type="email"
                    value={form.email}
                    onChange={handleChange("email")}
                />
                <InputField
                    label="Password"
                    type="password"
                    value={form.password}
                    onChange={handleChange("password")}
                />

                {error && <p className="mb-4 text-sm text-red-600">{error}</p>}

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded bg-blue-600 px-4 py-2 font-semibold text-white disabled:opacity-50"
                >
                    {loading ? "Logging in..." : "Login"}
                </button>
            </form>
        </div>
    );
}

export default LoginPage;