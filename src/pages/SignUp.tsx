import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { api } from "../services/api";
import { useState } from "react";
import { z, ZodError } from "zod";
import { useNavigate } from "react-router";
import { AxiosError } from "axios";

const signUpSchema = z
  .object({
    name: z.string().min(1, { message: "Informe o nome" }),
    email: z.string().email({ message: "E-mail inválido" }),
    password: z
      .string()
      .min(6, { message: "A senha deve ter pelo menos 6 caracteres" }),
    passwordConfirm: z.string({ message: "Confirme a senha" }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "As senhas não são iguais",
    path: ["passwordConfirm"],
  });

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setIsLoading(true);

      const data = signUpSchema.parse({
        name,
        email,
        password,
        passwordConfirm,
      });

      await api.post("/users", data);

      if (confirm("Cadastrado com sucesso. Ir para tela de entrar?")) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);

      if (error instanceof ZodError) {
        return alert(error.issues[0].message);
      }

      if (error instanceof AxiosError) {
        return alert(error.response?.data.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
      <Input
        legend="Nome"
        required
        placeholder="Digite seu nome..."
        onChange={(e) => setName(e.target.value)}
      />

      <Input
        legend="E-mail"
        type="email"
        required
        placeholder="seu@email.com"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        legend="Senha"
        required
        type="password"
        placeholder="123456"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        legend="Confirme a senha"
        required
        placeholder="123456"
        type="password"
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />

      <Button type="submit">Cadastrar</Button>

      <a
        href="/"
        className="mt-6 md:mt-8 text-sm flex justify-center text-green-100 hover:text-green-800 font-semibold transition ease-linear"
      >
        Já tenho uma conta
      </a>
    </form>
  );
}
