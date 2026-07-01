"use client"

import { useState } from "react"
import { createClient } from "@supabase/supabase-js"
import { KeyRound, CheckCircle2 } from "lucide-react"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
const supabase = createClient(supabaseUrl, supabaseAnonKey)

const styles = {
  page: "bg-background text-foreground min-h-screen font-sans flex items-center justify-center px-6 selection:bg-primary selection:text-primary-foreground",
  card: "w-full max-w-md bg-card/60 border border-border/80 rounded-2xl p-8 shadow-xl",
  cardCenter: "w-full max-w-md bg-card/60 border border-border/80 rounded-2xl p-8 shadow-xl text-center",
  iconWrapper: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6",
  title: "text-2xl font-bold text-foreground tracking-tight mb-1",
  subtitle: "text-sm text-muted-foreground mb-6",
  label: "text-xs font-medium text-muted-foreground mb-1.5 block",
  input: "w-full bg-input/60 border border-input/60 text-foreground placeholder-muted-foreground rounded-xl px-4 py-3 text-sm outline-none focus:border-primary/60 focus:ring-1 focus:ring-ring/30 transition-colors",
  button: "w-full bg-primary/90 hover:bg-primary active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed text-primary-foreground font-semibold py-3 rounded-xl transition-all transform hover:-translate-y-0.5 shadow-lg shadow-primary/20 hover:shadow-primary/30",
  successIconRow: "flex justify-center mb-4",
  successIconCircle: "w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center",
  successIcon: "w-7 h-7 text-emerald-400",
  successTitle: "text-xl font-bold text-foreground mt-4 mb-2",
  successText: "text-muted-foreground text-sm leading-relaxed",
}

export default function ResetPasswordPage() {
  const [newPassword, setNewPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState("")

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      })

      if (error) throw error

      setStatus("success")
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Erro desconhecido"
      alert(`Erro: ${message}`)
    } finally {
      setLoading(false)
    }
  }

  if (status === "success") {
    return (
      <div className={styles.page}>
        <div className={styles.cardCenter}>
          <div className={styles.successIconRow}>
            <div className={styles.successIconCircle}>
              <CheckCircle2 className={styles.successIcon} />
            </div>
          </div>
          <h2 className={styles.successTitle}>Senha alterada com sucesso!</h2>
          <p className={styles.successText}>
            Você já pode fechar esta aba e fazer login na extensão.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.iconWrapper}>
          <KeyRound className="w-6 h-6" />
        </div>
        <h2 className={styles.title}>Criar nova senha</h2>
        <p className={styles.subtitle}>Digite a senha que deseja usar na extensão.</p>

        <form onSubmit={handleUpdatePassword} className="flex flex-col gap-4">
          <div>
            <label htmlFor="password" className={styles.label}>Nova senha</label>
            <input
              id="password"
              type="password"
              placeholder="Digite sua nova senha"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className={styles.input}
              required
            />
          </div>
          <button type="submit" disabled={loading} className={styles.button}>
            {loading ? "Salvando..." : "Atualizar senha"}
          </button>
        </form>
      </div>
    </div>
  )
}