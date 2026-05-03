import { createContext, type ReactNode } from "react";
import { useState, useEffect } from "react";
import { api } from "../services/api";

type AuthContext = {
  isLoading: boolean;
  session: null | UserApiResponse;
  save: (data: UserApiResponse) => void;
  remove: () => void;
};

const LOCAL_STORAGE_KEY = "@refund";

export const AuthContext = createContext({} as AuthContext);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<null | UserApiResponse>(null);

  const [isLoading, setIsLoading] = useState(true);

  function save(data: UserApiResponse) {
    localStorage.setItem(
      `${LOCAL_STORAGE_KEY}:user`,
      JSON.stringify(data.user),
    );

    localStorage.setItem(`${LOCAL_STORAGE_KEY}:token`, data.token);

    api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;

    setSession(data);
  }

  function remove() {
    setSession(null);
    localStorage.removeItem(`${LOCAL_STORAGE_KEY}:user`);
    localStorage.removeItem(`${LOCAL_STORAGE_KEY}:token`);

    window.location.assign("/");
  }

  useEffect(() => {
    loadUser();
  }, []);

  function loadUser() {
    const user = localStorage.getItem(`${LOCAL_STORAGE_KEY}:user`);
    const token = localStorage.getItem(`${LOCAL_STORAGE_KEY}:token`);

    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setSession({
        token,
        user: JSON.parse(user),
      });
    }

    setIsLoading(false);
  }

  return (
    <AuthContext.Provider value={{ session, save, isLoading, remove }}>
      {children}
    </AuthContext.Provider>
  );
}
