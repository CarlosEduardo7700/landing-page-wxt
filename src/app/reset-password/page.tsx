"use client"

import { useState } from "react"
import { createClient } from "@supabase/supabase-js"
import { KeyRound, CheckCircle2 } from "lucide-react"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
const supabase = createClient(supabaseUrl, supabaseAnonKey)

const PAGE_STYLES =
  "bg-background text-foreground min-h-screen font-sans flex items-center justify-center px-6 " +
  "selection:bg-primary selection:text-primary-foreground"

const CARD_STYLES =
  "w-full max-w-md bg-card/60 border border-border/80 rounded-2xl p-8 shadow-xl"

const ICON_WRAPPER_STYLES =
  "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6"

const TITLE_STYLES = "text-2xl font-bold text-foreground tracking-tight mb-1"

const SUBTITLE_STYLES = "text-sm text-muted-foreground mb-6"

const LABEL_STYLES = "text-xs font-medium text-muted-foreground mb-1.5 block"

const INPUT_STYLES =
  "w-full bg-input/60 border border-input/60 text-foreground placeholder-muted-foreground " +
  "rounded-xl px-4 py-3 text-sm outline-none focus:border-primary/60 focus:ring-1 " +
  "focus:ring-ring/30 transition-colors"

const BUTTON_STYLES =
  "w-full bg-primary/90 hover:bg-primary active:translate-y-0 disabled:opacity-50 " +
  "disabled:cursor-not-allowed text-primary-foreground font-semibold py-3 rounded-xl transition-all " +
  "transform hover:-translate-y-0.5 shadow-lg shadow-primary/20 hover:shadow-primary/30"

const SUCCESS_TITLE_STYLES = "text-xl font-bold text-foreground mt-4 mb-2"

const SUCCESS_TEXT_STYLES = "text-muted-foreground text-sm leading-relaxed"

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
      <div className={PAGE_STYLES}>
        <div className={`${CARD_STYLES} text-center`}>
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7 text-emerald-400" />
            </div>
          </div>
          <h2 className={SUCCESS_TITLE_STYLES}>Senha alterada com sucesso!</h2>
          <p className={SUCCESS_TEXT_STYLES}>
            Você já pode fechar esta aba e fazer login na extensão.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={PAGE_STYLES}>
      <div className={CARD_STYLES}>
        <div className={ICON_WRAPPER_STYLES}>
          <KeyRound className="w-6 h-6" />
        </div>
        <h2 className={TITLE_STYLES}>Criar nova senha</h2>
        <p className={SUBTITLE_STYLES}>Digite a senha que deseja usar na extensão.</p>

        <form onSubmit={handleUpdatePassword} className="flex flex-col gap-4">
          <div>
            <label htmlFor="password" className={LABEL_STYLES}>Nova senha</label>
            <input
              id="password"
              type="password"
              placeholder="Digite sua nova senha"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className={INPUT_STYLES}
              required
            />
          </div>
          <button type="submit" disabled={loading} className={BUTTON_STYLES}>
            {loading ? "Salvando..." : "Atualizar senha"}
          </button>
        </form>
      </div>
    </div>
  )
}