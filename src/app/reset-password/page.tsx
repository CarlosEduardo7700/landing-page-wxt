"use client"

import { useState } from "react"
import { createClient } from "@supabase/supabase-js"
import { KeyRound, CheckCircle2 } from "lucide-react"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
const supabase = createClient(supabaseUrl, supabaseAnonKey)

const PAGE_STYLES =
  "bg-slate-950 text-slate-50 min-h-screen font-sans flex items-center justify-center px-6 " +
  "selection:bg-indigo-500 selection:text-white"

const CARD_STYLES =
  "w-full max-w-md bg-slate-900/60 border border-slate-800/80 rounded-2xl p-8 shadow-xl"

const ICON_WRAPPER_STYLES =
  "w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6"

const TITLE_STYLES = "text-2xl font-bold text-white tracking-tight mb-1"

const SUBTITLE_STYLES = "text-sm text-slate-400 mb-6"

const LABEL_STYLES = "text-xs font-medium text-slate-400 mb-1.5 block"

const INPUT_STYLES =
  "w-full bg-slate-800/60 border border-slate-700/60 text-slate-50 placeholder-slate-500 " +
  "rounded-xl px-4 py-3 text-sm outline-none focus:border-indigo-500/60 focus:ring-1 " +
  "focus:ring-indigo-500/30 transition-colors"

const BUTTON_STYLES =
  "w-full bg-indigo-600 hover:bg-indigo-500 active:translate-y-0 disabled:opacity-50 " +
  "disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition-all " +
  "transform hover:-translate-y-0.5 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-500/30"

const SUCCESS_TITLE_STYLES = "text-xl font-bold text-white mt-4 mb-2"

const SUCCESS_TEXT_STYLES = "text-slate-400 text-sm leading-relaxed"

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