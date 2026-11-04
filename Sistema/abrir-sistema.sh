#!/bin/bash
# Liga o servidor local (se ainda não estiver rodando) e abre o Sistema de Estudos PRF
# no navegador via http://localhost — necessário pro leitor de PDF (anotações/busca)
# e pro modo offline funcionarem (o navegador bloqueia isso quando se abre o arquivo direto).

PORT=8723
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
URL="http://localhost:$PORT/Sistema/index.html"
LOG="/tmp/prf-estudo-servidor.log"

if ! curl -s -o /dev/null --max-time 1 "$URL"; then
    cd "$DIR" || exit 1
    nohup python3 -m http.server "$PORT" >"$LOG" 2>&1 &
    disown
    for i in $(seq 1 20); do
        curl -s -o /dev/null --max-time 1 "$URL" && break
        sleep 0.2
    done
fi

xdg-open "$URL"
