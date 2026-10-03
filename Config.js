import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

export const supabase = createClient(
  "https://polftgososbmrsettdge.supabase.co",
  "sb_publishable_7eOm1NyiU_kcGfhq6LRA1A_uzNm6rSs"
);

export const brl = v =>
  Number(v).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

// Escapa texto digitado por clientes antes de mostrar na tela (evita injeção de código)
export const esc = s =>
  String(s ?? "").replace(/[&<>"']/g, c =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

export const ROTULO = {
  novo: "Recebido",
  preparando: "Em preparo",
  saiu_entrega: "Saiu para entrega",
  entregue: "Entregue",
  cancelado: "Cancelado",
};