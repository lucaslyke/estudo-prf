# Estudo PRF — Agente Administrativo

Sistema pessoal de estudos para o concurso de Agente Administrativo da PRF: cronograma gamificado,
banco de questões, caderno digital com suporte a mesa digitalizadora, leitor de PDF com anotações e
busca de texto, cronômetro por matéria, caderno de erros e sincronização via Supabase.

## Uso

Abra `Sistema/abrir-sistema.sh` (ou o atalho "Estudo PRF" na área de trabalho) — ele sobe um
servidor local e abre o sistema no navegador. Abrir `Sistema/index.html` direto como arquivo
também funciona, mas sem o leitor de PDF com anotações e sem o modo offline (restrição de
segurança do navegador para o protocolo `file://`).

## Estrutura

- `Sistema/` — todo o código (HTML/CSS/JS, sem dependências de build)
- `*.pdf` — materiais de estudo referenciados pelo cronograma
