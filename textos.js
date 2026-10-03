// Traduz para português as mensagens de erro que chegam em inglês
// (login, cadastro, permissões, conexão). Mensagens que já estão em português passam direto.
export function traduzirErro(erro) {
  const msg = String(erro?.message ?? erro ?? "");
  const regras = [
    [/invalid login credentials/i, "E-mail ou senha incorretos."],
    [/email not confirmed/i, "Confirme o seu e-mail pelo link que enviamos antes de entrar."],
    [/user already registered|already been registered|email address.*already/i,
      "Este e-mail já está cadastrado. Use o botão \"Entrar\"."],
    [/password should be at least (\d+)/i, m => `A senha deve ter pelo menos ${m[1]} caracteres.`],
    [/weak|easy to guess|pwned/i, "Senha fraca. Escolha uma senha mais difícil de adivinhar."],
    [/unable to validate email|invalid format|email address.*invalid|invalid email/i,
      "E-mail inválido. Confira se digitou corretamente."],
    [/signup requires a valid password|password is required|missing password/i, "Digite uma senha."],
    [/to signup, please provide your email|missing email|email is required/i, "Digite o seu e-mail."],
    [/email rate limit|rate limit|too many requests|over_email_send_rate_limit|for security purposes/i,
      "Muitas tentativas seguidas. Aguarde um minuto e tente de novo."],
    [/signups? (are )?disabled|email signups are disabled/i, "O cadastro de novas contas está desativado no momento."],
    [/new password should be different/i, "A nova senha precisa ser diferente da atual."],
    [/auth session missing|not authenticated/i, "Você precisa entrar na sua conta."],
    [/jwt expired|invalid jwt|invalid claim/i, "Sua sessão expirou. Entre novamente."],
    [/failed to fetch|networkerror|load failed|network request failed/i,
      "Sem conexão com o servidor. Verifique a sua internet e tente de novo."],
    [/row-level security|permission denied|not allowed|insufficient privilege/i,
      "Você não tem permissão para fazer isso."],
    [/cupons_usos/i, "Você já usou este cupom."],
    [/duplicate key|already exists/i, "Esse registro já existe."],
    [/foreign key/i, "Não foi possível concluir: este item está ligado a outros dados."],
    [/violates check constraint/i, "Algum valor informado não é permitido. Confira os campos."],
    [/invalid input syntax/i, "Algum valor informado está em formato inválido."],
    [/payload too large|file size|too large/i, "O arquivo é grande demais."],
    [/mime type|not supported|invalid image/i, "Esse tipo de arquivo não é aceito. Use JPG ou PNG."],
    [/bucket not found/i, "A pasta de imagens não foi encontrada. Avise o administrador."],
    [/timeout|timed out/i, "O servidor demorou para responder. Tente de novo."],
  ];
  for (const [regra, texto] of regras) {
    const m = msg.match(regra);
    if (m) return typeof texto === "function" ? texto(m) : texto;
  }
  return msg || "Ocorreu um erro. Tente novamente.";
}
