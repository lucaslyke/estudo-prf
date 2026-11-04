// CONFIGURAÇÃO SUPABASE (Suas chaves)
const SUPABASE_URL = 'https://brzaftcjunnxukpkrzmd.supabase.co';
const SUPABASE_KEY = 'sb_publishable_wAMdXsV41tDbMnDWqwJFfA_5UMjLWkK';
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// ID do usuário (Gera um ID local único para manter a sessão no mesmo navegador)
let userId = localStorage.getItem('prf_student_id');
if (!userId) {
    userId = 'prf_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('prf_student_id', userId);
}

// Sempre que a estrutura do cronograma mudar de verdade (como essa reorganização
// pros novos pares de matérias), suba esse número: qualquer estado salvo (local
// ou na nuvem) com versão menor tem o cronograma recriado do zero automaticamente.
const SCHEMA_VERSION = 3;

// DADOS DO PLANO DE ESTUDOS
// Montado a partir do conteúdo real dos PDFs de estudo (Língua Portuguesa,
// Informática, Direito Administrativo, Direito Constitucional, Raciocínio
// Lógico, Noções de Administração, Arquivologia, Ética e Legislação da PRF).
// Cada tarefa tem um "id" fixo (dia-posição original) para não perder o
// progresso marcado mesmo se o texto for editado depois pela interface.
function buildDefaultSchedule() {
    const raw = [
        { day: 'Segunda', subject: 'Língua Portuguesa + Ética', blocks: [{ name: 'Língua Portuguesa', minutes: 60 }, { name: 'Ética e Conduta Pública', minutes: 60 }], goal: 'Interpretar textos, dominar gramática normativa e os princípios éticos do serviço público (1h + 1h).', icon: 'fa-book-open', tasks: [
            'Compreensão e Interpretação de Textos',
            'Tipologia, Gêneros e Coesão/Coerência Textual',
            'Classes de Palavras, Semântica e Pontuação',
            'Concordância e Regência + Redação Oficial',
            'Questões de Língua Portuguesa',
            'Código de Ética do Servidor (Decreto 1.171/1994)',
            'Deveres, Vedações e Comissões de Ética',
            'Questões de Ética e Conduta Pública'
        ], files: ['LINGUA PORTUGUESA.pdf', 'QUESTÕES LÍNGUA PORTUGUESA.pdf', '[Bônus] 500 QUESTÕES DE PORTUGUES - Cebraspe.pdf', 'ÉTICA NO SERVIÇO PÚBLICO.pdf', 'QUESTÕES ÉTICA NO SERVIÇO PÚBLICO.pdf'] },
        { day: 'Terça', subject: 'Raciocínio Lógico + Informática', blocks: [{ name: 'Raciocínio Lógico', minutes: 60 }, { name: 'Informática', minutes: 60 }], goal: 'Desenvolver raciocínio lógico-quantitativo e dominar ferramentas de informática (1h + 1h).', icon: 'fa-brain', tasks: [
            'Proposições Lógicas, Negação e Equivalências',
            'Tautologia, Contradição, Conjuntos e Argumentos',
            'Problemas de Ordenação, Dedução e Raciocínio Quantitativo',
            'Questões de Raciocínio Lógico',
            'Hardware, Software, Internet e Redes',
            'Windows 10/11 e Linux',
            'Questões de Informática'
        ], files: ['RACIOCÍNIO LÓGICO.pdf', 'QUESTÕES RACIOCÍNIO LÓGICO.pdf', 'INFORMATICA BÁSICA (2).pdf', 'QUESTÕES DE INFORMÁTICA BÁSICA  (2).pdf'] },
        { day: 'Quarta', subject: 'Direito Constitucional + Administrativo', blocks: [{ name: 'Noções de Direito Constitucional', minutes: 60 }, { name: 'Noções de Direito Administrativo', minutes: 60 }], goal: 'Compreender a Constituição e como a Administração Pública se organiza e atua (1h + 1h).', icon: 'fa-scale-balanced', tasks: [
            'Constituição, Princípios e Direitos Fundamentais',
            'Organização Político-Administrativa e Poderes da União',
            'Administração Pública na CF e Servidores Públicos',
            'Questões de Direito Constitucional',
            'Estado, Governo, Administração Pública e Princípios',
            'Organização Administrativa e Lei 8.112/1990',
            'Poderes Administrativos e Atos Administrativos',
            'Questões de Direito Administrativo'
        ], files: ['DIREITO CONSTITUCIONAL.pdf', 'QUESTÕES DIREITO CONSTITUCIONAL .pdf', 'DIREITO ADMINISTRATIVO.pdf', 'QUESTÕES DIREITO ADMINISTRATIVO.pdf'] },
        { day: 'Quinta', subject: 'Arquivologia + Informática', blocks: [{ name: 'Arquivologia', minutes: 60 }, { name: 'Informática', minutes: 60 }], goal: 'Dominar gestão documental/arquivística e aprofundar segurança da informação (1h + 1h).', icon: 'fa-folder-open', tasks: [
            'Fundamentos de Arquivística e Gestão Documental',
            'Organização, Temporalidade e Gerenciamento de Acervos',
            'Questões de Arquivologia',
            'E-mail e Segurança da Informação',
            'Antivírus, Backup e Boas Práticas de Segurança',
            'Questões de Informática (Revisão)'
        ], files: ['NOÇÕES DE ARQUIVOLOGIA.pdf', 'QUESTÕES ARQUIVOLOGIA.pdf', 'INFORMATICA BÁSICA (2).pdf', 'QUESTÕES DE INFORMÁTICA BÁSICA  (2).pdf'] },
        { day: 'Sexta', subject: 'Noções de Administração + Legislação PRF', blocks: [{ name: 'Noções de Administração', minutes: 60 }, { name: 'Legislação Relativa à PRF', minutes: 60 }], goal: 'Entender gestão pública e dominar a legislação específica da PRF (1h + 1h).', icon: 'fa-gavel', tasks: [
            'Evolução da Administração Pública e Nova Gestão Pública',
            'Comportamento, Cultura e Estruturas Organizacionais',
            'Gestão de Pessoas: Recrutamento, Seleção e Cargos',
            'Questões de Noções de Administração',
            'Segurança Pública na CF (Art. 144) e a PRF na Constituição',
            'CTB (Art. 20) e Decretos da PRF (1.655/1995 e 6.061/2007)',
            'Questões de Legislação da PRF'
        ], files: ['NOÇÕES DE ADMINISTRAÇÃO (2).pdf', 'QUESTÕES NOÇÕES DE ADMINISTRAÇÃO (2).pdf', 'LEGISLAÇÃO RELATIVA.pdf', 'QUESTÕES DE LEGISLAÇÃO RELATIVA À PRF .pdf'] },
        { day: 'Sábado', subject: 'Revisão da Semana + Questões', blocks: [{ name: 'Revisão da semana', minutes: 60 }, { name: 'Questões + Caderno de erros', minutes: 60 }], goal: 'Revisar a semana inteira e praticar questões, focando nos erros (1h + 1h).', icon: 'fa-list-check', tasks: [
            'Revisão Integrada de Todas as Matérias da Semana',
            'Simulado Geral (Banco de Questões)',
            'Caderno de Erros: Refazer as Questões que Errou',
            'Análise de Erros e Pontos Fracos'
        ], files: ['2000questoes (1).pdf', '[Bônus] Caderno 600 questões PRF Adm - Ensino Médio.pdf'] },
        { day: 'Domingo', subject: 'Descanso Leve', blocks: [], goal: 'Fixar o conteúdo e recuperar energia.', icon: 'fa-bed', tasks: [
            'Leitura de Lei Seca (Legislação da PRF)',
            'Planejamento da Semana',
            'Descanso Mental'
        ], files: ['LEGISLAÇÃO RELATIVA.pdf'] }
    ];
    return raw.map(dayInfo => ({
        ...dayInfo,
        tasks: dayInfo.tasks.map((text, index) => ({ id: `${dayInfo.day}-${index}`, text })),
        files: (dayInfo.files || []).map(name => ({ name, notes: '', page: '' })),
        notebookPages: buildDefaultNotebook()
    }));
}

// Caderno digital: cada página guarda uma lista de traços (vetor de pontos),
// o que mantém o arquivo salvo pequeno e permite desfazer/redesenhar sem perda.
function buildDefaultNotebook() {
    return [{ id: 'page-1', strokes: [] }];
}

// Estado da Aplicação
let appState = {
    xp: 0,
    streak: 0,
    lastStudyDate: null,
    completedTasks: {}, // ex: { 'Segunda-0': true }
    weeksCompleted: 0,
    weekHistory: [], // ex: { week: 1, date: '2026-...', tasksCompleted: 12, xp: 180 }
    quizStats: {}, // ex: { 'Segunda': { correct: 7, total: 10 } }
    wrongAnswers: {}, // ex: { 'Segunda': { 'port-0': true } } - caderno de erros
    studyTime: {}, // ex: { 'Segunda': 3600 } segundos acumulados de estudo
    pdfAnnotations: {}, // ex: { 'arquivo.pdf': { '3': [traços...] } } - anotações por PDF/página
    pdfLastPage: {}, // ex: { 'arquivo.pdf': 12 } - retoma de onde parou a leitura
    reminderTime: '19:00',
    reminderEnabled: false,
    schemaVersion: SCHEMA_VERSION,
    schedule: buildDefaultSchedule(),
    notebookPages: buildDefaultNotebook()
};

let editMode = false;
let currentView = 'calendar'; // 'calendar' | 'notebook' | 'day'

const LOCAL_STORAGE_KEY = 'prf_app_state';

// Preenche/normaliza campos em cronogramas salvos antes dessas funcionalidades
// existirem (files como lista simples de nomes, ou notebookPages ausente).
function patchSchedule(schedule) {
    const defaults = buildDefaultSchedule();
    schedule.forEach(day => {
        if (!day.files) {
            const match = defaults.find(d => d.day === day.day);
            day.files = match ? match.files : [];
        } else {
            day.files = day.files.map(f => (typeof f === 'string' ? { name: f, notes: '', page: '' } : f));
        }
        if (!day.notebookPages || !day.notebookPages.length) day.notebookPages = buildDefaultNotebook();
        if (!day.blocks) {
            const match = defaults.find(d => d.day === day.day);
            day.blocks = match ? match.blocks : [];
        }
    });
    return schedule;
}

// Preenche campos novos em estados salvos antes deles existirem
function patchAppState(state) {
    let wasReset = false;
    if (!state.schemaVersion || state.schemaVersion < SCHEMA_VERSION) {
        // Cronograma antigo (matérias/dias/blocos de antes dessa reorganização): recria do zero.
        state.schedule = buildDefaultSchedule();
        state.studyTime = {};
        state.schemaVersion = SCHEMA_VERSION;
        wasReset = true;
    }
    state.schedule = state.schedule ? patchSchedule(state.schedule) : buildDefaultSchedule();
    if (!state.notebookPages || !state.notebookPages.length) state.notebookPages = buildDefaultNotebook();
    if (!state.weeksCompleted) state.weeksCompleted = 0;
    if (!state.weekHistory) state.weekHistory = [];
    if (!state.quizStats) state.quizStats = {};
    if (!state.wrongAnswers) state.wrongAnswers = {};
    if (!state.studyTime) state.studyTime = {};
    if (!state.pdfAnnotations) state.pdfAnnotations = {};
    if (!state.pdfLastPage) state.pdfLastPage = {};
    if (!state.reminderTime) state.reminderTime = '19:00';
    if (state.reminderEnabled === undefined) state.reminderEnabled = false;
    return wasReset;
}

// Função para Carregar Dados (localStorage primeiro, depois tenta a nuvem)
async function loadData() {
    document.getElementById('sync-status').innerHTML = '<i class="fa-solid fa-spinner fa-spin text-prfblue"></i> Conectando ao banco de dados...';

    const cached = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (cached) appState = JSON.parse(cached);
    let needsResync = patchAppState(appState);

    try {
        const { data, error } = await supabaseClient
            .from('progresso_prf')
            .select('dados')
            .eq('id', userId)
            .single();

        if (error && error.code !== 'PGRST116') throw error;

        if (data && data.dados) {
            appState = data.dados;
            needsResync = patchAppState(appState);
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(appState));
        }
        document.getElementById('sync-status').innerHTML = '<i class="fa-solid fa-cloud-check text-green-600"></i> Atualizado (Nuvem)';
    } catch (error) {
        console.error("Erro ao carregar:", error);
        document.getElementById('sync-status').innerHTML = cached
            ? '<i class="fa-solid fa-triangle-exclamation text-yellow-500"></i> Offline (dados locais)'
            : '<i class="fa-solid fa-triangle-exclamation text-red-500"></i> Erro ao carregar';
    }

    if (appState.reminderEnabled && 'Notification' in window && Notification.permission === 'granted') {
        startReminderWatcher();
    }

    renderApp();

    // Cronograma foi recriado por causa de uma mudança de versão: já sobe
    // a correção pra nuvem, sem esperar o usuário interagir com algo.
    if (needsResync) saveData();
}

// Função para Salvar Dados (localStorage sempre; nuvem quando disponível)
async function saveData() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(appState));
    document.getElementById('sync-status').innerHTML = '<i class="fa-solid fa-spinner fa-spin text-prfblue"></i> Salvando...';

    try {
        const { error } = await supabaseClient
            .from('progresso_prf')
            .upsert({ id: userId, dados: appState });

        if (error) throw error;
        document.getElementById('sync-status').innerHTML = '<i class="fa-solid fa-cloud-check text-green-600"></i> Salvo na Nuvem';
    } catch (error) {
        console.error("Erro ao salvar:", error);
        document.getElementById('sync-status').innerHTML = '<i class="fa-solid fa-triangle-exclamation text-yellow-500"></i> Salvo localmente (offline)';
    }
}

// Gamificação Logica
function updateGamification() {
    // Calcula Nível (cada 150 XP = 1 Nível)
    const xpPerLevel = 150;
    const currentLevel = Math.floor(appState.xp / xpPerLevel) + 1;
    const currentLevelXP = appState.xp % xpPerLevel;
    const progressPercent = (currentLevelXP / xpPerLevel) * 100;

    document.getElementById('level-display').innerText = currentLevel;
    document.getElementById('xp-display').innerText = appState.xp;
    document.getElementById('xp-next-level').innerText = `Faltam ${xpPerLevel - currentLevelXP} XP`;
    document.getElementById('xp-bar').style.width = `${progressPercent}%`;
    document.getElementById('streak-display').innerText = appState.streak;
}

function toggleTask(taskId) {
    const isCompleted = !appState.completedTasks[taskId];

    appState.completedTasks[taskId] = isCompleted;

    // Atribui XP
    if (isCompleted) {
        appState.xp += 15;
        checkStreak();
    } else {
        appState.xp = Math.max(0, appState.xp - 15);
    }

    renderApp();
    saveData();
}

function checkStreak() {
    const today = new Date().toDateString();
    if (appState.lastStudyDate !== today) {
        if (appState.lastStudyDate === new Date(Date.now() - 86400000).toDateString()) {
            appState.streak += 1; // Estudou ontem, aumenta o combo
        } else {
            appState.streak = 1; // Quebrou o combo, recomeça
        }
        appState.lastStudyDate = today;
    }
}

// ===== Cronômetro de estudo (tempo real por matéria, não por dia inteiro) =====
// appState.studyTime[dia][nomeDaMatéria] = segundos acumulados
let timerRunningDay = null;
let timerRunningBlock = null;
let timerStartedAt = null;
let timerIntervalId = null;

function formatDuration(totalSeconds) {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    if (h > 0) return `${h}h ${String(m).padStart(2, '0')}min`;
    if (m > 0) return `${m}min ${String(s).padStart(2, '0')}s`;
    return `${s}s`;
}

function liveElapsedSeconds(day, blockName) {
    const base = (appState.studyTime[day] && appState.studyTime[day][blockName]) || 0;
    if (timerRunningDay === day && timerRunningBlock === blockName) {
        return base + Math.floor((Date.now() - timerStartedAt) / 1000);
    }
    return base;
}

// Soma o tempo de todos os blocos de um dia (usado na miniatura do calendário)
function liveElapsedSecondsDay(day) {
    const dayInfo = findDay(day);
    if (!dayInfo || !dayInfo.blocks) return 0;
    return dayInfo.blocks.reduce((sum, b) => sum + liveElapsedSeconds(day, b.name), 0);
}

// Soma o tempo de cada matéria (nome do bloco) em todos os dias (usado no histórico/relatório)
function computeSubjectTimeTotals() {
    const totals = {};
    Object.values(appState.studyTime || {}).forEach(dayTimes => {
        Object.entries(dayTimes || {}).forEach(([name, seconds]) => {
            totals[name] = (totals[name] || 0) + seconds;
        });
    });
    if (timerRunningDay && timerRunningBlock) {
        totals[timerRunningBlock] = (totals[timerRunningBlock] || 0) + Math.floor((Date.now() - timerStartedAt) / 1000);
    }
    return Object.entries(totals).map(([name, seconds]) => ({ name, seconds })).sort((a, b) => b.seconds - a.seconds);
}

function toggleTimer(day, blockName) {
    if (timerRunningDay === day && timerRunningBlock === blockName) {
        stopTimer();
    } else {
        if (timerRunningDay) stopTimer();
        timerRunningDay = day;
        timerRunningBlock = blockName;
        timerStartedAt = Date.now();
        timerIntervalId = setInterval(updateTimerDisplays, 1000);
    }
    renderApp();
}

function stopTimer() {
    if (!timerRunningDay) return;
    const elapsed = Math.floor((Date.now() - timerStartedAt) / 1000);
    appState.studyTime[timerRunningDay] = appState.studyTime[timerRunningDay] || {};
    appState.studyTime[timerRunningDay][timerRunningBlock] = (appState.studyTime[timerRunningDay][timerRunningBlock] || 0) + elapsed;
    clearInterval(timerIntervalId);
    timerIntervalId = null;
    timerRunningDay = null;
    timerRunningBlock = null;
    timerStartedAt = null;
    saveData();
}

// Atualiza só o texto do cronômetro a cada segundo, sem re-renderizar a tela
// inteira (pra não atrapalhar quem estiver digitando uma anotação, por ex).
function updateTimerDisplays() {
    if (!timerRunningDay) return;
    document.querySelectorAll(`.timer-live[data-day="${timerRunningDay}"][data-block="${timerRunningBlock}"]`).forEach(el => {
        el.textContent = formatDuration(liveElapsedSeconds(timerRunningDay, timerRunningBlock));
    });
    document.querySelectorAll(`.timer-live-day[data-day="${timerRunningDay}"]`).forEach(el => {
        el.textContent = formatDuration(liveElapsedSecondsDay(timerRunningDay));
    });
}

window.addEventListener('beforeunload', () => {
    if (timerRunningDay) {
        const elapsed = Math.floor((Date.now() - timerStartedAt) / 1000);
        appState.studyTime[timerRunningDay] = appState.studyTime[timerRunningDay] || {};
        appState.studyTime[timerRunningDay][timerRunningBlock] = (appState.studyTime[timerRunningDay][timerRunningBlock] || 0) + elapsed;
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(appState));
    }
});

// Desmarca todas as tarefas pra reusar o cronograma na semana seguinte
function startNewWeek() {
    const confirmed = confirm('Começar uma nova semana? Isso desmarca todas as tarefas da semana atual. Anotações, páginas e o caderno continuam salvos.');
    if (!confirmed) return;

    const totalTasks = appState.schedule.reduce((sum, d) => sum + d.tasks.length, 0);
    const tasksCompleted = Object.values(appState.completedTasks).filter(Boolean).length;
    appState.weekHistory.push({
        week: (appState.weeksCompleted || 0) + 1,
        date: new Date().toISOString().slice(0, 10),
        tasksCompleted,
        totalTasks,
        xp: appState.xp
    });

    appState.completedTasks = {};
    appState.weeksCompleted = (appState.weeksCompleted || 0) + 1;
    renderApp();
    saveData();
}

// Baixa todo o progresso (XP, cronograma, anotações, caderno) como um .json
function exportBackup() {
    const blob = new Blob([JSON.stringify(appState, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `backup-prf-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

// ===== Lembrete diário =====
// Funciona só enquanto a aba fica aberta no navegador (sem servidor push,
// não dá pra notificar com o app fechado).
let reminderIntervalId = null;

function toggleReminder(checked) {
    if (!checked) {
        appState.reminderEnabled = false;
        stopReminderWatcher();
        renderApp();
        saveData();
        return;
    }
    if (!('Notification' in window)) {
        alert('Seu navegador não suporta notificações.');
        return;
    }
    Notification.requestPermission().then(permission => {
        appState.reminderEnabled = permission === 'granted';
        if (appState.reminderEnabled) startReminderWatcher();
        else alert('Permissão de notificação negada.');
        renderApp();
        saveData();
    });
}

function updateReminderTime(value) {
    appState.reminderTime = value;
    saveData();
}

function startReminderWatcher() {
    stopReminderWatcher();
    reminderIntervalId = setInterval(checkReminder, 30000);
}

function stopReminderWatcher() {
    if (reminderIntervalId) clearInterval(reminderIntervalId);
    reminderIntervalId = null;
}

function checkReminder() {
    if (!appState.reminderEnabled || !appState.reminderTime) return;
    const now = new Date();
    const hhmm = now.toTimeString().slice(0, 5);
    const todayKey = now.toDateString();
    if (hhmm === appState.reminderTime && localStorage.getItem('prf_reminder_shown') !== todayKey) {
        new Notification('Hora de estudar! 📚', { body: 'Bora revisar o cronograma da PRF.' });
        localStorage.setItem('prf_reminder_shown', todayKey);
    }
}

// Abre o seletor de arquivo pra restaurar um backup
function triggerImportBackup() {
    document.getElementById('import-backup-input').click();
}

// Lê o .json escolhido e substitui todo o progresso atual
function importBackupFile(inputEl) {
    const file = inputEl.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
        let parsed;
        try {
            parsed = JSON.parse(reader.result);
        } catch (e) {
            alert('Esse arquivo não é um backup válido (JSON inválido).');
            inputEl.value = '';
            return;
        }
        if (!parsed || !Array.isArray(parsed.schedule)) {
            alert('Esse arquivo não parece ser um backup deste app.');
            inputEl.value = '';
            return;
        }
        if (!confirm('Restaurar esse backup? Isso substitui TODO o progresso atual (cronograma, XP, anotações, caderno).')) {
            inputEl.value = '';
            return;
        }
        appState = parsed;
        patchAppState(appState);
        renderApp();
        saveData();
        inputEl.value = '';
    };
    reader.readAsText(file);
}

// Edição do Cronograma
function toggleEditMode() {
    editMode = !editMode;
    renderApp();
}

function findDay(day) {
    return appState.schedule.find(d => d.day === day);
}

function updateSubject(day, value) {
    findDay(day).subject = value;
    saveData();
}

function updateGoal(day, value) {
    findDay(day).goal = value;
    saveData();
}

function updateIcon(day, value) {
    findDay(day).icon = value;
    renderApp();
    saveData();
}

function updateTaskText(day, taskId, value) {
    const task = findDay(day).tasks.find(t => t.id === taskId);
    task.text = value;
    saveData();
}

function moveTask(day, taskId, direction) {
    const tasks = findDay(day).tasks;
    const index = tasks.findIndex(t => t.id === taskId);
    const target = index + direction;
    if (target < 0 || target >= tasks.length) return;
    [tasks[index], tasks[target]] = [tasks[target], tasks[index]];
    renderApp();
    saveData();
}

function removeTask(day, taskId) {
    const dayInfo = findDay(day);
    dayInfo.tasks = dayInfo.tasks.filter(t => t.id !== taskId);
    delete appState.completedTasks[taskId];
    renderApp();
    saveData();
}

function addTask(day, inputEl) {
    const text = inputEl.value.trim();
    if (!text) return;
    findDay(day).tasks.push({ id: crypto.randomUUID(), text });
    inputEl.value = '';
    renderApp();
    saveData();
}

function updateFilePage(day, fileIndex, value) {
    findDay(day).files[fileIndex].page = value;
    renderApp();
    saveData();
}

function updateFileNotes(day, fileIndex, value) {
    findDay(day).files[fileIndex].notes = value;
    saveData();
}

// Aba do dia
let openDay = null;
let newsDismissed = false;

function openDayView(day) {
    newsDismissed = true;
    openDay = day;
    currentView = 'day';
    notebookScope = 'day';
    notebookScopeDay = day;
    notebookPageIndex = 0;
    renderApp();
}

// Escapa valores inseridos em atributos HTML (evita quebrar o markup com aspas)
function escapeAttr(value) {
    return String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

// Escapa pra uso dentro de uma string JS de aspas simples num onclick="..." inline
function jsEscape(value) {
    return String(value).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

// ===== Visualizador de PDF embutido (abre o material sem sair do sistema) =====
// Renderiza página a página com PDF.js (como um livro), com camada de texto
// pesquisável/selecionável e uma camada de anotação (reaproveita o motor de
// desenho do caderno: caneta, marcador, apagar-marcador, borracha).
if (typeof pdfjsLib !== 'undefined') {
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
}

const PDF_RENDER_WIDTH = 1000; // largura fixa (não depende da janela) pra anotações salvas sempre caírem no lugar certo

let pdfDoc = null;
let pdfCurrentFile = null;
let pdfCurrentPage = 1;
let pdfPageCount = 1;
let pdfPageTextCache = {};
let pdfSearchQuery = '';
let pdfSearchResults = [];
let pdfSearchIndex = -1;
let pdfTextSelectMode = false;
let pdfPageSaveTimer = null;

function getPdfPageStrokes(fileName, pageNum) {
    appState.pdfAnnotations[fileName] = appState.pdfAnnotations[fileName] || {};
    appState.pdfAnnotations[fileName][pageNum] = appState.pdfAnnotations[fileName][pageNum] || [];
    return appState.pdfAnnotations[fileName][pageNum];
}

function schedulePdfPageSave() {
    clearTimeout(pdfPageSaveTimer);
    pdfPageSaveTimer = setTimeout(() => saveData(), 1000);
}

async function openPdfViewer(fileName) {
    const overlay = document.getElementById('pdf-viewer-overlay');
    overlay.classList.remove('hidden');
    document.getElementById('pdf-viewer-title').textContent = fileName;
    const url = `../${encodeURIComponent(fileName)}`;
    document.getElementById('pdf-viewer-newtab').href = url;
    document.getElementById('pdf-page-indicator').textContent = 'Carregando...';
    document.getElementById('pdf-search-input').value = '';
    document.getElementById('pdf-search-status').textContent = '';
    pdfSearchQuery = '';
    pdfSearchResults = [];
    pdfSearchIndex = -1;
    pdfTextSelectMode = false;

    if (pdfDoc) { try { pdfDoc.destroy(); } catch (e) {} }
    pdfCurrentFile = fileName;
    pdfPageTextCache = {};

    try {
        pdfDoc = await pdfjsLib.getDocument(url).promise;
    } catch (error) {
        console.error('Erro ao abrir PDF:', error);
        document.getElementById('pdf-page-indicator').textContent = 'Não foi possível abrir este PDF.';
        return;
    }
    pdfPageCount = pdfDoc.numPages;
    renderPdfToolbar();
    const startPage = (appState.pdfLastPage && appState.pdfLastPage[fileName]) || 1;
    await renderPdfPage(startPage);
}

function closePdfViewer() {
    document.getElementById('pdf-viewer-overlay').classList.add('hidden');
    if (pdfDoc) { try { pdfDoc.destroy(); } catch (e) {} pdfDoc = null; }
    currentStroke = null;
    erasingHighlight = false;
}

async function getPdfPageText(pageNum) {
    if (pdfPageTextCache[pageNum] !== undefined) return pdfPageTextCache[pageNum];
    const page = await pdfDoc.getPage(pageNum);
    const content = await page.getTextContent();
    const text = content.items.map(i => i.str).join(' ');
    pdfPageTextCache[pageNum] = text;
    return text;
}

function highlightSearchMatches(container, query) {
    const q = query.toLowerCase();
    container.querySelectorAll('span').forEach(span => {
        if (span.textContent.toLowerCase().includes(q)) span.classList.add('pdf-search-hit');
    });
}

async function searchPdf(query) {
    query = (query || '').trim();
    pdfSearchQuery = query;
    const statusEl = document.getElementById('pdf-search-status');
    if (!query) {
        pdfSearchResults = [];
        pdfSearchIndex = -1;
        statusEl.textContent = '';
        renderPdfPage(pdfCurrentPage);
        return;
    }
    statusEl.textContent = 'Buscando...';
    const results = [];
    for (let p = 1; p <= pdfPageCount; p++) {
        const text = await getPdfPageText(p);
        if (text.toLowerCase().includes(query.toLowerCase())) results.push(p);
    }
    pdfSearchResults = results;
    pdfSearchIndex = results.length ? 0 : -1;
    statusEl.textContent = results.length ? `${results.length} página(s) com resultado (${pdfSearchIndex + 1}/${results.length})` : 'Nenhum resultado';
    if (results.length) await renderPdfPage(results[0]);
}

function pdfSearchJump(delta) {
    if (!pdfSearchResults.length) return;
    pdfSearchIndex = (pdfSearchIndex + delta + pdfSearchResults.length) % pdfSearchResults.length;
    document.getElementById('pdf-search-status').textContent = `${pdfSearchResults.length} página(s) com resultado (${pdfSearchIndex + 1}/${pdfSearchResults.length})`;
    renderPdfPage(pdfSearchResults[pdfSearchIndex]);
}

function changePdfPage(delta) {
    renderPdfPage(pdfTargetPage + delta);
}

// page.render()/renderTextLayer() do PDF.js não podem rodar duas vezes ao mesmo tempo no
// mesmo canvas — encadeia as chamadas (fila) em vez de disparar em paralelo, senão um
// clique rápido de "próxima página" quebrava o render no meio.
//
// pdfTargetPage é atualizado NA HORA (síncrono), mesmo com o render ainda na fila — assim
// cliques/setas em sequência rápida somam a partir do alvo pedido, não da última página que
// já terminou de renderizar (que ficaria atrasada e faria o clique seguinte "pular no lugar errado").
let pdfRenderChain = Promise.resolve();
let pdfTargetPage = 1;
function renderPdfPage(num) {
    num = Math.max(1, Math.min(pdfPageCount, num));
    pdfTargetPage = num;
    pdfRenderChain = pdfRenderChain.then(() => renderPdfPageNow(num)).catch(err => console.error('Erro ao renderizar página do PDF:', err));
    return pdfRenderChain;
}

async function renderPdfPageNow(num) {
    if (!pdfDoc) return;
    pdfCurrentPage = num;
    document.getElementById('pdf-page-container').scrollTop = 0; // cada página nova começa do topo (senão ficava com a rolagem da página anterior)

    const page = await pdfDoc.getPage(num);
    const baseViewport = page.getViewport({ scale: 1 });
    const scale = PDF_RENDER_WIDTH / baseViewport.width;
    const viewport = page.getViewport({ scale });

    const canvas = document.getElementById('pdf-render-canvas');
    const annotationCanvas = document.getElementById('pdf-annotation-canvas');
    const textLayerDiv = document.getElementById('pdf-text-layer');
    const stack = document.getElementById('pdf-page-stack');

    canvas.width = annotationCanvas.width = viewport.width;
    canvas.height = annotationCanvas.height = viewport.height;
    stack.style.width = viewport.width + 'px';
    stack.style.height = viewport.height + 'px';
    annotationCanvas.style.pointerEvents = pdfTextSelectMode ? 'none' : 'auto';

    await page.render({ canvasContext: canvas.getContext('2d'), viewport }).promise;

    textLayerDiv.innerHTML = '';
    textLayerDiv.style.width = viewport.width + 'px';
    textLayerDiv.style.height = viewport.height + 'px';
    textLayerDiv.style.setProperty('--scale-factor', scale); // o PDF.js usa isso pra posicionar os spans de texto certinho
    const textContent = await page.getTextContent();
    pdfPageTextCache[num] = textContent.items.map(i => i.str).join(' ');
    await pdfjsLib.renderTextLayer({ textContentSource: textContent, container: textLayerDiv, viewport }).promise;
    if (pdfSearchQuery) highlightSearchMatches(textLayerDiv, pdfSearchQuery);

    const strokes = getPdfPageStrokes(pdfCurrentFile, num);
    redrawCanvas(annotationCanvas, strokes);
    setupDrawingSurface(annotationCanvas, document.getElementById('pdf-annotation-cursor'), () => getPdfPageStrokes(pdfCurrentFile, num));

    document.getElementById('pdf-page-indicator').textContent = `Página ${num} / ${pdfPageCount}`;
    appState.pdfLastPage[pdfCurrentFile] = num;
    schedulePdfPageSave();
}

function undoPdfStroke() {
    const strokes = getPdfPageStrokes(pdfCurrentFile, pdfCurrentPage);
    strokes.pop();
    saveData();
    redrawCanvas(document.getElementById('pdf-annotation-canvas'), strokes);
}

function clearPdfPageAnnotations() {
    const strokes = getPdfPageStrokes(pdfCurrentFile, pdfCurrentPage);
    strokes.length = 0;
    saveData();
    redrawCanvas(document.getElementById('pdf-annotation-canvas'), strokes);
}

function setPdfTextSelectMode(on) {
    pdfTextSelectMode = on;
    const canvas = document.getElementById('pdf-annotation-canvas');
    const cursorEl = document.getElementById('pdf-annotation-cursor');
    if (canvas) canvas.style.pointerEvents = on ? 'none' : 'auto';
    if (cursorEl && on) cursorEl.style.display = 'none';
    renderPdfToolbar();
}

function refreshPdfToolbarIfOpen() {
    const overlay = document.getElementById('pdf-viewer-overlay');
    if (overlay && !overlay.classList.contains('hidden')) renderPdfToolbar();
}

function renderPdfToolbar() {
    const el = document.getElementById('pdf-toolbar-container');
    if (!el) return;
    const toolBtn = (tool, icon, label) => `
        <button onclick="setPdfTextSelectMode(false); setNotebookTool('${tool}')" class="px-2 py-1.5 rounded border text-xs flex items-center gap-1 ${!pdfTextSelectMode && notebookTool === tool ? 'bg-prfyellow text-prfblue border-prfyellow' : 'border-white/30 text-white hover:bg-white/10'}" title="${label}">
            <i class="fa-solid ${icon}"></i>
        </button>
    `;
    el.innerHTML = `
        <div class="flex gap-1 items-center">
            ${(notebookTool === 'highlighter' ? HIGHLIGHTER_COLORS : NOTEBOOK_COLORS).map(c => `<button onclick="setPdfTextSelectMode(false); setNotebookColor('${c}', '${notebookTool === 'highlighter' ? 'highlighter' : 'pen'}')" class="w-6 h-6 rounded-full border-2 ${!pdfTextSelectMode && notebookTool !== 'eraser' && notebookTool !== 'highlight-eraser' && notebookColor === c ? 'border-prfyellow' : 'border-transparent'}" style="background:${c}" title="Cor"></button>`).join('')}
            <input type="color" value="${notebookColor}" onchange="setPdfTextSelectMode(false); setNotebookColor(this.value)" class="w-6 h-6 border-0 rounded cursor-pointer" title="Cor personalizada">
        </div>
        <input type="range" min="1" max="20" value="${notebookSize}" oninput="setNotebookSize(this.value)" class="w-20" title="Espessura">
        <div class="flex gap-1">
            ${toolBtn('pen', 'fa-pen', 'Caneta')}
            ${toolBtn('highlighter', 'fa-highlighter', 'Marcador')}
            ${toolBtn('highlight-eraser', 'fa-eraser', 'Apagar só o marcador')}
            ${toolBtn('eraser', 'fa-eraser', 'Borracha')}
            <button onclick="setPdfTextSelectMode(true)" class="px-2 py-1.5 rounded border text-xs flex items-center gap-1 ${pdfTextSelectMode ? 'bg-prfyellow text-prfblue border-prfyellow' : 'border-white/30 text-white hover:bg-white/10'}" title="Selecionar/copiar texto">
                <i class="fa-solid fa-arrow-pointer"></i>
            </button>
        </div>
        <div class="flex gap-1 ml-auto">
            <button onclick="undoPdfStroke()" class="px-2 py-1.5 rounded border border-white/30 text-white text-xs hover:bg-white/10" title="Desfazer"><i class="fa-solid fa-rotate-left"></i></button>
            <button onclick="clearPdfPageAnnotations()" class="px-2 py-1.5 rounded border border-white/30 text-white text-xs hover:bg-white/10" title="Limpar anotações desta página"><i class="fa-solid fa-trash"></i></button>
        </div>
    `;
}

document.addEventListener('keydown', (e) => {
    const overlay = document.getElementById('pdf-viewer-overlay');
    if (!overlay || overlay.classList.contains('hidden')) return;
    if (e.key === 'Escape') { closePdfViewer(); return; }
    const typing = document.activeElement && ['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName);
    if (typing) return;
    if (e.key === 'ArrowRight') changePdfPage(1);
    if (e.key === 'ArrowLeft') changePdfPage(-1);
});

// Prática de Questões (Certo/Errado e múltipla escolha)
let expandedQuiz = {};
let quizSelections = {};
let quizAnswers = {};
let quizAnsweredIds = {};

function shuffleSample(arr, n) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy.slice(0, n);
}

function toggleQuiz(day) {
    expandedQuiz[day] = !expandedQuiz[day];
    if (expandedQuiz[day] && !quizSelections[day]) {
        const pool = (typeof QUESTION_BANKS !== 'undefined' && QUESTION_BANKS[day]) || [];
        quizSelections[day] = shuffleSample(pool, 10);
        quizAnswers[day] = {};
        quizAnsweredIds[day] = new Set();
    }
    renderApp();
}

function answerQuestion(day, questionId, value) {
    quizAnswers[day] = quizAnswers[day] || {};
    if (quizAnswers[day][questionId] === value) { return; } // mesma resposta de novo, nada a fazer
    quizAnswers[day][questionId] = value;
    quizAnsweredIds[day] = quizAnsweredIds[day] || new Set();

    const question = (quizSelections[day] || (typeof QUESTION_BANKS !== 'undefined' && QUESTION_BANKS[day]) || []).find(q => q.id === questionId);
    const isCorrect = question && value === question.correct;
    appState.wrongAnswers[day] = appState.wrongAnswers[day] || {};

    if (!quizAnsweredIds[day].has(questionId)) {
        // primeira vez respondendo essa questão
        quizAnsweredIds[day].add(questionId);
        appState.quizStats[day] = appState.quizStats[day] || { correct: 0, total: 0 };
        appState.quizStats[day].total += 1;
        if (isCorrect) {
            appState.quizStats[day].correct += 1;
            appState.xp += 5;
        } else {
            appState.wrongAnswers[day][questionId] = true;
        }
    } else if (isCorrect && appState.wrongAnswers[day][questionId]) {
        // corrigiu um erro: sai do caderno de erros
        delete appState.wrongAnswers[day][questionId];
        appState.xp += 3;
    } else if (!isCorrect) {
        appState.wrongAnswers[day][questionId] = true;
    }
    saveData();
    renderApp();
}

function countWrongAnswers() {
    return Object.values(appState.wrongAnswers || {}).reduce((sum, ids) => sum + Object.keys(ids).length, 0);
}

function renderErrorsView() {
    const byDay = {};
    Object.keys(appState.wrongAnswers || {}).forEach(day => {
        const ids = Object.keys(appState.wrongAnswers[day] || {});
        if (!ids.length) return;
        const bank = (typeof QUESTION_BANKS !== 'undefined' && QUESTION_BANKS[day]) || [];
        const questions = ids.map(id => bank.find(q => q.id === id)).filter(Boolean);
        if (questions.length) byDay[day] = questions;
    });

    if (!Object.keys(byDay).length) {
        return `<div class="bg-white rounded-xl shadow p-6 text-center"><i class="fa-solid fa-circle-check text-green-500 text-3xl mb-2"></i><p class="text-sm text-gray-500">Nenhum erro pendente! Pratique questões no cronograma pra alimentar seu caderno de erros.</p></div>`;
    }

    return `
        <div class="space-y-6">
            <div class="flex items-center justify-between flex-wrap gap-2">
                <h2 class="text-sm font-bold text-prfblue uppercase">Caderno de Erros (${countWrongAnswers()})</h2>
                <p class="text-xs text-gray-400">Responda certo pra remover a questão da lista.</p>
            </div>
            ${Object.keys(byDay).map(day => `
                <div class="bg-white rounded-xl shadow p-4">
                    <h3 class="text-xs font-bold text-gray-500 uppercase mb-1">${day}</h3>
                    ${byDay[day].map((q, i) => renderQuizQuestion(day, q, i)).join('')}
                </div>
            `).join('')}
        </div>
    `;
}

function renderQuizQuestion(day, q, index) {
    const answered = quizAnswers[day] && quizAnswers[day][q.id];
    const isCorrect = answered === q.correct;
    let answerControls, feedback = '';

    if (q.type === 'cebraspe') {
        answerControls = `
            <div class="flex gap-2 mt-2">
                <button onclick="answerQuestion('${day}', '${q.id}', 'CERTO')" class="px-3 py-1 rounded border text-sm ${answered === 'CERTO' ? (isCorrect ? 'bg-green-100 border-green-500' : 'bg-red-100 border-red-500') : 'border-gray-300 hover:border-prfblue'}">Certo</button>
                <button onclick="answerQuestion('${day}', '${q.id}', 'ERRADO')" class="px-3 py-1 rounded border text-sm ${answered === 'ERRADO' ? (isCorrect ? 'bg-green-100 border-green-500' : 'bg-red-100 border-red-500') : 'border-gray-300 hover:border-prfblue'}">Errado</button>
            </div>`;
        if (answered) {
            feedback = `<p class="text-sm mt-2 ${isCorrect ? 'text-green-700' : 'text-red-700'}"><strong>${isCorrect ? 'Acertou!' : 'Resposta correta: ' + q.correct + '.'}</strong> ${escapeAttr(q.explanation || '')}</p>`;
        }
    } else {
        answerControls = '<div class="flex flex-col gap-1 mt-2">' + q.options.map(opt => {
            let cls = 'border-gray-300 hover:border-prfblue';
            if (answered) {
                if (opt.letter === q.correct) cls = 'bg-green-100 border-green-500';
                else if (opt.letter === answered) cls = 'bg-red-100 border-red-500';
            }
            return `<button onclick="answerQuestion('${day}', '${q.id}', '${opt.letter}')" class="text-left px-3 py-1 rounded border text-sm ${cls}">${opt.letter}) ${escapeAttr(opt.text)}</button>`;
        }).join('') + '</div>';
        if (answered) {
            feedback = `<p class="text-sm mt-2 ${isCorrect ? 'text-green-700' : 'text-red-700'}">${isCorrect ? 'Acertou!' : 'Resposta correta: ' + q.correct}</p>`;
        }
    }

    return `
        <div class="border-t border-gray-100 pt-3 mt-3">
            <p class="text-sm font-medium text-gray-700">${index + 1}. ${escapeAttr(q.statement)}</p>
            ${answerControls}
            ${feedback}
        </div>
    `;
}

// Miniatura do dia (calendário)
const ICON_CHOICES = ['fa-book-open', 'fa-laptop-code', 'fa-landmark', 'fa-scale-balanced', 'fa-brain', 'fa-list-check', 'fa-bed', 'fa-graduation-cap', 'fa-gavel', 'fa-folder-open', 'fa-file-lines', 'fa-shield-halved'];
const WEEKDAY_NAMES = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
function isToday(dayName) {
    return WEEKDAY_NAMES[new Date().getDay()] === dayName;
}

function renderDayTile(dayInfo) {
    const total = dayInfo.tasks.length;
    const done = dayInfo.tasks.filter(t => appState.completedTasks[t.id]).length;
    const pages = (dayInfo.files || []).filter(f => f.page).map(f => f.page);
    const today = isToday(dayInfo.day);
    const timeSpent = liveElapsedSecondsDay(dayInfo.day);
    const isTiming = timerRunningDay === dayInfo.day;

    return `
        <button onclick="openDayView('${dayInfo.day}')" class="bg-white rounded-xl shadow border-t-4 border-prfblue p-3 card-hover transition-all duration-300 text-left w-full flex flex-col gap-1 relative ${today ? 'ring-2 ring-prfyellow' : ''}">
            ${today ? '<span class="absolute -top-2 -right-2 bg-prfyellow text-prfblue text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow">HOJE</span>' : ''}
            <div class="flex items-center gap-2">
                <div class="bg-prfyellow text-prfblue w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-inner shrink-0">
                    <i class="fa-solid ${dayInfo.icon}"></i>
                </div>
                <h2 class="text-xs font-extrabold text-prfblue uppercase tracking-wide">${dayInfo.day}</h2>
            </div>
            <p class="text-xs font-semibold text-gray-700 truncate" title="${escapeAttr(dayInfo.subject)}">${dayInfo.subject}</p>
            <p class="text-xs text-gray-400">${done}/${total} tarefas</p>
            ${pages.length ? `<p class="text-xs text-gray-400 truncate" title="Última página estudada">📄 ${pages.map(p => escapeAttr(p)).join(', ')}</p>` : ''}
            ${timeSpent > 0 ? `<p class="text-xs text-gray-400">⏱ ${isTiming ? '<span class="text-green-600 font-bold">●</span> ' : ''}<span class="timer-live-day" data-day="${dayInfo.day}">${formatDuration(timeSpent)}</span></p>` : ''}
        </button>
    `;
}

// Conteúdo completo do dia (aba cheia)
function renderDayView(dayInfo) {
    let tasksHTML = dayInfo.tasks.map((task, idx) => {
        const isChecked = appState.completedTasks[task.id] ? 'checked' : '';
        const lineThrough = isChecked ? 'line-through text-gray-400' : 'text-gray-700';

        if (editMode) {
            return `
                <div class="flex items-center gap-2 mt-2">
                    <div class="flex flex-col">
                        <button onclick="moveTask('${dayInfo.day}', '${task.id}', -1)" class="text-gray-400 hover:text-prfblue px-1 leading-none ${idx === 0 ? 'opacity-30 pointer-events-none' : ''}" title="Mover pra cima"><i class="fa-solid fa-caret-up"></i></button>
                        <button onclick="moveTask('${dayInfo.day}', '${task.id}', 1)" class="text-gray-400 hover:text-prfblue px-1 leading-none ${idx === dayInfo.tasks.length - 1 ? 'opacity-30 pointer-events-none' : ''}" title="Mover pra baixo"><i class="fa-solid fa-caret-down"></i></button>
                    </div>
                    <input type="text" value="${escapeAttr(task.text)}" onchange="updateTaskText('${dayInfo.day}', '${task.id}', this.value)" class="flex-1 border border-gray-300 rounded px-2 py-1 text-sm">
                    <button onclick="removeTask('${dayInfo.day}', '${task.id}')" class="text-red-500 hover:text-red-700 px-2" title="Remover tarefa"><i class="fa-solid fa-trash"></i></button>
                </div>
            `;
        }

        return `
            <label class="flex items-center gap-3 cursor-pointer group mt-3 p-2 hover:bg-gray-50 rounded">
                <input type="checkbox" ${isChecked} onchange="toggleTask('${task.id}')" class="w-5 h-5 text-prfblue border-gray-300 rounded focus:ring-prfyellow transition duration-200">
                <span class="${lineThrough} font-medium group-hover:text-prfblue transition-colors duration-200">${task.text}</span>
                ${isChecked ? '<span class="ml-auto text-xs text-green-500 font-bold">+15 XP</span>' : ''}
            </label>
        `;
    }).join('');

    const addTaskHTML = editMode ? `
        <div class="flex items-center gap-2 mt-3">
            <input type="text" placeholder="Nova tarefa..." class="flex-1 border border-gray-300 rounded px-2 py-1 text-sm" onkeydown="if(event.key==='Enter'){addTask('${dayInfo.day}', this)}">
            <button onclick="addTask('${dayInfo.day}', this.previousElementSibling)" class="text-prfblue hover:text-prfyellow px-2" title="Adicionar tarefa"><i class="fa-solid fa-plus"></i></button>
        </div>
    ` : '';

    const subjectHTML = editMode
        ? `<input type="text" value="${escapeAttr(dayInfo.subject)}" onchange="updateSubject('${dayInfo.day}', this.value)" class="font-bold text-gray-800 text-lg mb-1 border border-gray-300 rounded px-2 py-1 w-full">`
        : `<h3 class="font-bold text-gray-800 text-lg mb-1">${dayInfo.subject}</h3>`;

    const goalHTML = editMode
        ? `<input type="text" value="${escapeAttr(dayInfo.goal)}" onchange="updateGoal('${dayInfo.day}', this.value)" class="text-sm text-gray-500 mb-4 pb-4 border border-gray-300 rounded px-2 py-1 w-full">`
        : `<p class="text-sm text-gray-500 mb-4 pb-4 border-b border-gray-100 italic">"Objetivo: ${dayInfo.goal}"</p>`;

    const filesHTML = (dayInfo.files && dayInfo.files.length) ? `
        <div class="mb-4">
            <p class="text-xs font-bold text-gray-500 uppercase mb-2">Materiais</p>
            ${dayInfo.files.map((f, idx) => `
                <div class="border border-gray-200 rounded-lg p-3 mb-2">
                    <button onclick="openPdfViewer('${jsEscape(f.name)}')" class="text-sm font-medium text-prfblue hover:text-prfyellow flex items-center gap-2 text-left w-full" title="Abrir material sem sair do sistema">
                        <i class="fa-solid fa-file-pdf text-red-500"></i>${escapeAttr(f.name)}
                    </button>
                    <div class="flex items-center gap-2 mt-2">
                        <label class="text-xs text-gray-500 shrink-0">Página estudada:</label>
                        <input type="text" value="${escapeAttr(f.page || '')}" placeholder="ex: 32" onchange="updateFilePage('${dayInfo.day}', ${idx}, this.value)" class="border border-gray-300 rounded px-2 py-1 text-xs w-24">
                    </div>
                    <textarea placeholder="Anotações sobre este material..." onchange="updateFileNotes('${dayInfo.day}', ${idx}, this.value)" class="w-full border border-gray-300 rounded px-2 py-1 text-xs mt-2" rows="2">${escapeAttr(f.notes || '')}</textarea>
                </div>
            `).join('')}
        </div>
    ` : '';

    const quizPool = (typeof QUESTION_BANKS !== 'undefined' && QUESTION_BANKS[dayInfo.day]) || [];
    const stats = appState.quizStats[dayInfo.day];
    const statsHTML = (stats && stats.total > 0)
        ? `<span class="text-xs text-gray-400 font-normal">(${stats.correct}/${stats.total} · ${Math.round(100 * stats.correct / stats.total)}% de acerto no total)</span>`
        : '';
    const quizHTML = (!editMode && quizPool.length > 0) ? `
        <div class="mt-4 pt-4 border-t border-gray-100">
            <button onclick="toggleQuiz('${dayInfo.day}')" class="text-sm font-semibold text-prfblue hover:text-prfyellow flex items-center gap-2 flex-wrap">
                <i class="fa-solid fa-circle-question"></i> ${expandedQuiz[dayInfo.day] ? 'Esconder Questões' : 'Praticar Questões (Certo/Errado)'} ${statsHTML}
            </button>
            ${expandedQuiz[dayInfo.day] ? (quizSelections[dayInfo.day] || []).map((q, i) => renderQuizQuestion(dayInfo.day, q, i)).join('') : ''}
        </div>
    ` : '';

    const notebookHTML = `
        <div class="mt-6 pt-4 border-t border-gray-100">
            <p class="text-xs font-bold text-gray-500 uppercase mb-2">Caderno de ${escapeAttr(dayInfo.subject)}</p>
            ${renderNotebook()}
        </div>
    `;

    return `
        <button onclick="closeDayView()" class="text-sm text-gray-500 hover:text-prfblue mb-4 flex items-center gap-2">
            <i class="fa-solid fa-arrow-left"></i> Voltar ao Cronograma
        </button>
        <div class="bg-white rounded-xl shadow p-6">
            <div class="flex items-center gap-3 mb-2">
                ${editMode ? `
                    <select onchange="updateIcon('${dayInfo.day}', this.value)" class="bg-prfyellow text-prfblue w-10 h-10 rounded-full text-center border-0 text-sm">
                        ${ICON_CHOICES.map(ic => `<option value="${ic}" ${ic === dayInfo.icon ? 'selected' : ''}>${ic.replace('fa-', '')}</option>`).join('')}
                    </select>
                ` : `
                    <div class="bg-prfyellow text-prfblue w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-inner">
                        <i class="fa-solid ${dayInfo.icon}"></i>
                    </div>
                `}
                <h2 class="text-xl font-extrabold text-prfblue uppercase tracking-wide">${dayInfo.day}</h2>
                <button onclick="toggleEditMode()" class="ml-auto text-xs px-2 py-1 rounded border ${editMode ? 'bg-prfblue text-white border-prfblue' : 'border-gray-300 text-gray-600 hover:border-prfblue'} flex items-center gap-1">
                    <i class="fa-solid ${editMode ? 'fa-check' : 'fa-pen'}"></i> ${editMode ? 'Concluir Edição' : 'Editar'}
                </button>
            </div>
            ${(!editMode && dayInfo.blocks && dayInfo.blocks.length) ? `
                <div class="mb-4 space-y-2">
                    ${dayInfo.blocks.map(block => {
                        const seconds = liveElapsedSeconds(dayInfo.day, block.name);
                        const isRunning = timerRunningDay === dayInfo.day && timerRunningBlock === block.name;
                        const goalSeconds = block.minutes * 60;
                        const pct = Math.min(100, Math.round(100 * seconds / goalSeconds));
                        return `
                            <div class="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                                <button onclick="toggleTimer('${dayInfo.day}', '${escapeAttr(block.name)}')" class="px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 shrink-0 ${isRunning ? 'bg-red-500 text-white' : 'bg-prfblue text-white'}">
                                    <i class="fa-solid ${isRunning ? 'fa-pause' : 'fa-play'}"></i> ${isRunning ? 'Pausar' : 'Iniciar'}
                                </button>
                                <div class="flex-1 min-w-0">
                                    <div class="flex items-center justify-between text-xs mb-1">
                                        <span class="font-semibold text-gray-700 truncate">${escapeAttr(block.name)}</span>
                                        <span class="text-gray-500"><span class="timer-live" data-day="${dayInfo.day}" data-block="${escapeAttr(block.name)}">${formatDuration(seconds)}</span> / meta ${block.minutes}min</span>
                                    </div>
                                    <div class="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                                        <div class="h-full ${pct >= 100 ? 'bg-green-500' : 'bg-prfblue'}" style="width:${pct}%"></div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            ` : ''}
            ${subjectHTML}
            ${goalHTML}
            ${filesHTML}
            <div class="space-y-1">
                ${tasksHTML}
                ${addTaskHTML}
            </div>
            ${quizHTML}
        </div>
        ${notebookHTML}
    `;
}

function closeDayView() {
    switchView('calendar');
}

// ===== Caderno Digital =====
const NOTEBOOK_COLORS = ['#0b1c3c', '#e11d48', '#16a34a', '#2563eb', '#000000'];
const HIGHLIGHTER_COLORS = ['#fde047', '#86efac', '#93c5fd', '#fca5a5', '#fdba74'];
const NOTEBOOK_W = 1200;
const NOTEBOOK_H = 700;

let notebookScope = 'global'; // 'global' | 'day'
let notebookScopeDay = null;
let notebookPageIndex = 0;
let notebookColor = NOTEBOOK_COLORS[0];
let notebookSize = 3;
let notebookTool = 'pen'; // 'pen' | 'highlighter' | 'eraser' | 'highlight-eraser'
let currentStroke = null;
let erasingHighlight = false;

// Cada "caderno" (o global ou o de um dia específico) guarda sua própria
// lista de páginas; isso resolve qual lista está ativa no momento.
function getNotebookPagesArray() {
    if (notebookScope === 'day' && notebookScopeDay) return findDay(notebookScopeDay).notebookPages;
    return appState.notebookPages;
}

function getCurrentNotebookPage() {
    const pages = getNotebookPagesArray();
    if (notebookPageIndex >= pages.length) notebookPageIndex = pages.length - 1;
    return pages[notebookPageIndex];
}

function setNotebookColor(color, tool) {
    notebookColor = color;
    if (tool) notebookTool = tool;
    else if (notebookTool === 'eraser') notebookTool = 'pen'; // escolher uma cor sai do modo borracha
    renderApp();
    refreshPdfToolbarIfOpen();
}
function setNotebookSize(size) { notebookSize = Number(size); refreshPdfToolbarIfOpen(); }
function setNotebookTool(tool) {
    notebookTool = tool;
    if (tool === 'highlighter' && !HIGHLIGHTER_COLORS.includes(notebookColor)) notebookColor = HIGHLIGHTER_COLORS[0];
    pdfTextSelectMode = false;
    renderApp();
    refreshPdfToolbarIfOpen();
}

function changeNotebookPage(delta) {
    const pages = getNotebookPagesArray();
    const next = notebookPageIndex + delta;
    if (next < 0 || next >= pages.length) return;
    notebookPageIndex = next;
    renderApp();
}

function addNotebookPage() {
    const pages = getNotebookPagesArray();
    pages.push({ id: crypto.randomUUID(), strokes: [] });
    notebookPageIndex = pages.length - 1;
    saveData();
    renderApp();
}

function deleteNotebookPage() {
    const pages = getNotebookPagesArray();
    if (pages.length <= 1) return;
    pages.splice(notebookPageIndex, 1);
    notebookPageIndex = Math.max(0, notebookPageIndex - 1);
    saveData();
    renderApp();
}

function undoNotebookStroke() {
    getCurrentNotebookPage().strokes.pop();
    saveData();
    renderApp();
}

function clearNotebookPage() {
    getCurrentNotebookPage().strokes = [];
    saveData();
    renderApp();
}

// Apaga só os traços de marcador perto do ponto (remove o traço inteiro, não só o pixel),
// deixando a caneta intacta por baixo. Genérico: funciona em qualquer lista de traços
// (caderno OU anotações de PDF), já que `strokes` é passado por referência e mutado in-place.
function eraseHighlighterFromList(strokes, point) {
    const radius = notebookStrokeWidth() / 2;
    const before = strokes.length;
    const kept = strokes.filter(s => !(s.highlight && s.points.some(p => Math.hypot(p.x - point.x, p.y - point.y) < radius)));
    strokes.length = 0;
    strokes.push(...kept);
    return strokes.length !== before;
}

function strokeToCanvasPath(ctx, stroke) {
    ctx.save();
    if (stroke.erase) {
        ctx.globalCompositeOperation = 'destination-out';
    } else if (stroke.highlight) {
        ctx.globalCompositeOperation = 'multiply';
        ctx.globalAlpha = 0.25;
    }
    ctx.strokeStyle = stroke.color;
    ctx.lineCap = stroke.highlight ? 'square' : 'round';
    ctx.lineJoin = 'round';
    const pts = stroke.points;
    if (pts.length === 1) {
        ctx.beginPath();
        ctx.lineWidth = stroke.width;
        ctx.moveTo(pts[0].x, pts[0].y);
        ctx.lineTo(pts[0].x + 0.1, pts[0].y + 0.1);
        ctx.stroke();
        ctx.restore();
        return;
    }
    if (stroke.highlight) {
        // Largura fixa: desenha o traço inteiro num só stroke()/alpha, senão cada
        // segmento sobreposto nas juntas ia escurecendo mais (ficava mais forte ao arrastar devagar).
        ctx.lineWidth = stroke.width;
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y);
        ctx.stroke();
        ctx.restore();
        return;
    }
    for (let i = 1; i < pts.length; i++) {
        ctx.beginPath();
        ctx.lineWidth = stroke.width * (0.5 + (pts[i].p || 0.5));
        ctx.moveTo(pts[i - 1].x, pts[i - 1].y);
        ctx.lineTo(pts[i].x, pts[i].y);
        ctx.stroke();
    }
    ctx.restore();
}

// Redesenha qualquer canvas a partir de uma lista de traços (caderno ou anotação de PDF).
function redrawCanvas(canvas, strokes) {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    strokes.forEach(stroke => strokeToCanvasPath(ctx, stroke));
}

function redrawNotebookCanvas() {
    redrawCanvas(document.getElementById('notebook-canvas'), getCurrentNotebookPage().strokes);
}

function notebookPoint(e, canvas) {
    const rect = canvas.getBoundingClientRect();
    return {
        x: (e.clientX - rect.left) * (canvas.width / rect.width),
        y: (e.clientY - rect.top) * (canvas.height / rect.height),
        p: e.pressure > 0 ? e.pressure : 0.5
    };
}

// Cursor próprio: alguns navegadores/drivers não mostram o cursor do sistema
// ao usar caneta de mesa digitalizadora, então desenhamos o nosso.
function updateNotebookCursor(e, canvas, cursorEl) {
    const rect = canvas.getBoundingClientRect();
    const scale = rect.width / canvas.width;
    const widthLogical = notebookStrokeWidth();
    const diameter = Math.max(4, widthLogical * scale);
    cursorEl.style.width = diameter + 'px';
    cursorEl.style.height = diameter + 'px';
    cursorEl.style.left = (e.clientX - rect.left) + 'px';
    cursorEl.style.top = (e.clientY - rect.top) + 'px';
    cursorEl.style.borderColor = notebookTool === 'eraser' ? '#999' : notebookTool === 'highlight-eraser' ? '#eab308' : notebookColor;
}

function notebookStrokeWidth() {
    if (notebookTool === 'eraser') return notebookSize * 4;
    if (notebookTool === 'highlighter') return Math.max(14, notebookSize * 5);
    if (notebookTool === 'highlight-eraser') return Math.max(20, notebookSize * 6);
    return notebookSize;
}

// Liga os eventos de desenho num canvas qualquer. `getStrokes()` deve retornar a lista
// de traços ativa no momento (do caderno ou de uma página de PDF) — ela é mutada
// diretamente (push/splice), então basta devolver a referência certa a cada chamada.
function setupDrawingSurface(canvas, cursorEl, getStrokes) {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    redrawCanvas(canvas, getStrokes());

    canvas.onpointerdown = (e) => {
        canvas.setPointerCapture(e.pointerId);
        const pt = notebookPoint(e, canvas);
        if (notebookTool === 'highlight-eraser') {
            erasingHighlight = true;
            const strokes = getStrokes();
            if (eraseHighlighterFromList(strokes, pt)) redrawCanvas(canvas, strokes);
            return;
        }
        currentStroke = {
            color: notebookTool === 'eraser' ? '#000' : notebookColor,
            width: notebookStrokeWidth(),
            erase: notebookTool === 'eraser',
            highlight: notebookTool === 'highlighter',
            points: [pt]
        };
        strokeToCanvasPath(ctx, currentStroke);
    };
    canvas.onpointermove = (e) => {
        if (cursorEl) updateNotebookCursor(e, canvas, cursorEl);
        const pt = notebookPoint(e, canvas);
        if (erasingHighlight) {
            const strokes = getStrokes();
            if (eraseHighlighterFromList(strokes, pt)) redrawCanvas(canvas, strokes);
            return;
        }
        if (!currentStroke) return;
        currentStroke.points.push(pt);
        if (currentStroke.highlight) {
            // Redesenha a página + o traço inteiro de novo (um alpha só), em vez de ir
            // "carimbando" segmento por segmento, que é o que acumulava escurecendo.
            redrawCanvas(canvas, getStrokes());
            strokeToCanvasPath(ctx, currentStroke);
        } else {
            const pts = currentStroke.points;
            const seg = { ...currentStroke, points: [pts[pts.length - 2], pts[pts.length - 1]] };
            strokeToCanvasPath(ctx, seg);
        }
    };
    canvas.onpointerenter = (e) => {
        if (cursorEl) { updateNotebookCursor(e, canvas, cursorEl); cursorEl.style.display = 'block'; }
    };
    canvas.onpointerleave = () => {
        if (cursorEl) cursorEl.style.display = 'none';
        endStroke();
    };
    const endStroke = () => {
        if (erasingHighlight) { erasingHighlight = false; saveData(); return; }
        if (!currentStroke) return;
        getStrokes().push(currentStroke);
        currentStroke = null;
        saveData();
    };
    canvas.onpointerup = endStroke;
    canvas.onpointercancel = endStroke;
}

function setupNotebookCanvas() {
    setupDrawingSurface(document.getElementById('notebook-canvas'), document.getElementById('notebook-cursor'), () => getCurrentNotebookPage().strokes);
}

function renderNotebook() {
    const pageCount = getNotebookPagesArray().length;
    return `
        <div class="mb-3 bg-white rounded-lg shadow p-3 space-y-2">
            <div class="flex flex-wrap items-center gap-3">
                <div class="flex gap-1 items-center">
                    ${(notebookTool === 'highlighter' ? HIGHLIGHTER_COLORS : NOTEBOOK_COLORS).map(c => `<button onclick="setNotebookColor('${c}', '${notebookTool === 'highlighter' ? 'highlighter' : 'pen'}')" class="w-7 h-7 rounded-full border-2 ${notebookTool !== 'eraser' && notebookColor === c ? 'border-prfblue' : 'border-transparent'}" style="background:${c}" title="Cor"></button>`).join('')}
                    <input type="color" value="${notebookColor}" onchange="setNotebookColor(this.value)" class="w-7 h-7 border rounded cursor-pointer" title="Cor personalizada">
                </div>
                <input type="range" min="1" max="20" value="${notebookSize}" oninput="setNotebookSize(this.value)" class="w-24" title="Espessura">
                <div class="flex gap-1">
                    <button onclick="setNotebookTool('pen')" class="px-3 py-1 rounded border text-sm ${notebookTool === 'pen' ? 'bg-prfblue text-white border-prfblue' : 'border-gray-300'}"><i class="fa-solid fa-pen"></i> Caneta</button>
                    <button onclick="setNotebookTool('highlighter')" class="px-3 py-1 rounded border text-sm ${notebookTool === 'highlighter' ? 'bg-prfblue text-white border-prfblue' : 'border-gray-300'}"><i class="fa-solid fa-highlighter"></i> Marcador</button>
                    <button onclick="setNotebookTool('highlight-eraser')" class="px-3 py-1 rounded border text-sm ${notebookTool === 'highlight-eraser' ? 'bg-prfblue text-white border-prfblue' : 'border-gray-300'}" title="Apaga só o marcador, sem mexer na caneta"><i class="fa-solid fa-eraser"></i> Apagar Marcador</button>
                    <button onclick="setNotebookTool('eraser')" class="px-3 py-1 rounded border text-sm ${notebookTool === 'eraser' ? 'bg-prfblue text-white border-prfblue' : 'border-gray-300'}"><i class="fa-solid fa-eraser"></i> Borracha</button>
                </div>
                <div class="flex gap-1 ml-auto">
                    <button onclick="undoNotebookStroke()" class="px-3 py-1 rounded border border-gray-300 text-sm"><i class="fa-solid fa-rotate-left"></i> Desfazer</button>
                    <button onclick="clearNotebookPage()" class="px-3 py-1 rounded border border-gray-300 text-sm"><i class="fa-solid fa-trash"></i> Limpar página</button>
                </div>
            </div>
            <div class="flex items-center justify-center gap-2 pt-2 border-t border-gray-100">
                <button onclick="changeNotebookPage(-1)" class="px-2 py-1 rounded border border-gray-300" ${notebookPageIndex === 0 ? 'disabled' : ''}><i class="fa-solid fa-chevron-left"></i></button>
                <span class="text-sm">Página ${notebookPageIndex + 1} / ${pageCount}</span>
                <button onclick="changeNotebookPage(1)" class="px-2 py-1 rounded border border-gray-300" ${notebookPageIndex === pageCount - 1 ? 'disabled' : ''}><i class="fa-solid fa-chevron-right"></i></button>
                <button onclick="addNotebookPage()" class="px-2 py-1 rounded border border-gray-300 text-sm"><i class="fa-solid fa-plus"></i> Nova</button>
                <button onclick="deleteNotebookPage()" class="px-2 py-1 rounded border text-sm ${pageCount <= 1 ? 'border-gray-200 text-gray-300' : 'border-red-300 text-red-500'}" ${pageCount <= 1 ? 'disabled' : ''}><i class="fa-solid fa-trash"></i></button>
            </div>
        </div>
        <div class="relative">
            <canvas id="notebook-canvas" width="${NOTEBOOK_W}" height="${NOTEBOOK_H}" class="rounded-lg shadow w-full" style="touch-action:none; cursor:none; aspect-ratio:${NOTEBOOK_W}/${NOTEBOOK_H}; background-color:#fffdf8; background-image: linear-gradient(90deg, transparent 0 59px, #f0a8a8 59px 61px, transparent 61px), repeating-linear-gradient(to bottom, transparent 0 34px, #cfe0f0 34px 35px);"></canvas>
            <div id="notebook-cursor" class="absolute rounded-full border-2 pointer-events-none" style="display:none; transform:translate(-50%, -50%);"></div>
        </div>
    `;
}

// ===== Notícias do Concurso =====
async function loadNews() {
    const container = document.getElementById('news-container');
    try {
        const rssUrl = encodeURIComponent('https://news.google.com/rss/search?q=concurso%20PRF&hl=pt-BR&gl=BR&ceid=BR:pt-419');
        const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`);
        const data = await res.json();
        if (data.status !== 'ok' || !data.items || !data.items.length) throw new Error('feed vazio');

        container.innerHTML = data.items.slice(0, 6).map(item => {
            const date = new Date(item.pubDate).toLocaleDateString('pt-BR');
            const parts = item.title.split(' - ');
            const source = parts.length > 1 ? parts.pop() : '';
            const title = parts.join(' - ');
            return `
                <a href="${item.link}" target="_blank" class="block px-1 py-2 hover:bg-gray-50 rounded">
                    <p class="text-sm font-medium text-gray-800">${escapeAttr(title)}</p>
                    <p class="text-xs text-gray-400">${escapeAttr(source)} · ${date}</p>
                </a>
            `;
        }).join('');
    } catch (error) {
        console.error('Erro ao buscar notícias:', error);
        container.innerHTML = '<p class="text-sm text-gray-400 px-1 py-2">Não foi possível carregar notícias agora.</p>';
    }
}

// ===== Histórico Semanal =====
function renderWeeksSection() {
    const weeks = appState.weekHistory || [];
    if (!weeks.length) {
        return `<p class="text-sm text-gray-400 bg-white rounded-xl shadow p-6">Nenhuma semana concluída ainda. Use o botão "Nova Semana" quando terminar o ciclo atual pra começar a registrar o histórico aqui.</p>`;
    }
    const maxTasks = Math.max(...weeks.map(w => w.totalTasks || 1), 1);
    const rows = weeks.map(w => {
        const pct = w.totalTasks ? Math.round(100 * w.tasksCompleted / w.totalTasks) : 0;
        const barPct = Math.round(100 * (w.totalTasks ? w.tasksCompleted / maxTasks : 0));
        return `
            <div class="flex items-center gap-3 mb-3">
                <span class="text-xs text-gray-500 w-20 shrink-0">Semana ${w.week}</span>
                <div class="flex-1 bg-gray-100 rounded-full h-5 overflow-hidden">
                    <div class="h-full bg-prfblue flex items-center justify-end pr-2 text-white text-[10px] font-bold" style="width:${Math.max(barPct, 8)}%">${w.tasksCompleted}/${w.totalTasks}</div>
                </div>
                <span class="text-xs text-gray-400 w-28 shrink-0">${pct}% · ${w.xp} XP · ${new Date(w.date).toLocaleDateString('pt-BR')}</span>
            </div>
        `;
    }).join('');

    return `
        <div class="bg-white rounded-xl shadow p-6">
            <h2 class="text-sm font-bold text-prfblue uppercase mb-4">Histórico de Semanas (${weeks.length})</h2>
            ${rows}
        </div>
    `;
}

function renderSubjectTimeSection() {
    const totals = computeSubjectTimeTotals();
    if (!totals.length) {
        return `<p class="text-sm text-gray-400 bg-white rounded-xl shadow p-6 mt-6">Nenhum tempo de estudo registrado ainda. Use o botão "Iniciar" dentro de um dia pra começar a cronometrar.</p>`;
    }
    const maxSeconds = Math.max(...totals.map(t => t.seconds), 1);
    const rows = totals.map(t => {
        const barPct = Math.max(Math.round(100 * t.seconds / maxSeconds), 8);
        return `
            <div class="flex items-center gap-3 mb-3">
                <span class="text-xs text-gray-500 w-40 shrink-0 truncate" title="${escapeAttr(t.name)}">${escapeAttr(t.name)}</span>
                <div class="flex-1 bg-gray-100 rounded-full h-5 overflow-hidden">
                    <div class="h-full bg-prfyellow flex items-center justify-end pr-2 text-prfblue text-[10px] font-bold" style="width:${barPct}%">${formatDuration(t.seconds)}</div>
                </div>
            </div>
        `;
    }).join('');

    return `
        <div class="bg-white rounded-xl shadow p-6 mt-6">
            <h2 class="text-sm font-bold text-prfblue uppercase mb-4">Tempo de Estudo por Matéria</h2>
            ${rows}
        </div>
    `;
}

function renderHistory() {
    return renderWeeksSection() + renderSubjectTimeSection();
}

// ===== Cronograma Flutuante (mini-painel com as tarefas de hoje) =====
let floatingWidgetOpen = false;

function toggleFloatingWidget() {
    floatingWidgetOpen = !floatingWidgetOpen;
    renderApp();
}

function renderFloatingWidget() {
    const widget = document.getElementById('floating-widget');
    const todayName = WEEKDAY_NAMES[new Date().getDay()];
    const dayInfo = findDay(todayName);

    // Esconde quando já estamos vendo a aba completa de hoje (redundante)
    if (!dayInfo || (currentView === 'day' && openDay === todayName)) {
        widget.innerHTML = '';
        return;
    }

    if (!floatingWidgetOpen) {
        const pending = dayInfo.tasks.filter(t => !appState.completedTasks[t.id]).length;
        widget.innerHTML = `
            <button onclick="toggleFloatingWidget()" class="w-14 h-14 rounded-full bg-prfblue text-white shadow-xl flex items-center justify-center relative hover:opacity-90">
                <i class="fa-solid ${dayInfo.icon} text-xl"></i>
                ${pending > 0 ? `<span class="absolute -top-1 -right-1 bg-prfyellow text-prfblue text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">${pending}</span>` : ''}
            </button>
        `;
        return;
    }

    const tasksHTML = dayInfo.tasks.map(task => {
        const isChecked = appState.completedTasks[task.id] ? 'checked' : '';
        const lineThrough = isChecked ? 'line-through text-gray-400' : 'text-gray-700';
        return `
            <label class="flex items-center gap-2 py-1 cursor-pointer text-xs">
                <input type="checkbox" ${isChecked} onchange="toggleTask('${task.id}')" class="w-4 h-4 text-prfblue border-gray-300 rounded">
                <span class="${lineThrough}">${task.text}</span>
            </label>
        `;
    }).join('');

    widget.innerHTML = `
        <div class="w-72 bg-white rounded-xl shadow-2xl border border-gray-200 max-h-[70vh] flex flex-col">
            <div class="flex items-center gap-2 p-3 border-b border-gray-100 bg-prfblue text-white rounded-t-xl">
                <i class="fa-solid ${dayInfo.icon}"></i>
                <span class="text-sm font-bold uppercase">${dayInfo.day} · ${escapeAttr(dayInfo.subject)}</span>
                <button onclick="toggleFloatingWidget()" class="ml-auto text-white/70 hover:text-white"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="p-3 overflow-y-auto">
                ${tasksHTML}
            </div>
            <div class="p-3 border-t border-gray-100 space-y-1.5">
                ${(dayInfo.blocks || []).map(block => {
                    const seconds = liveElapsedSeconds(dayInfo.day, block.name);
                    const isRunning = timerRunningDay === dayInfo.day && timerRunningBlock === block.name;
                    return `
                        <button onclick="toggleTimer('${dayInfo.day}', '${escapeAttr(block.name)}')" class="w-full text-xs px-2 py-1.5 rounded flex items-center justify-between gap-1 ${isRunning ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}">
                            <span class="truncate flex items-center gap-1"><i class="fa-solid ${isRunning ? 'fa-pause' : 'fa-play'}"></i> ${escapeAttr(block.name)}</span>
                            <span class="timer-live shrink-0" data-day="${dayInfo.day}" data-block="${escapeAttr(block.name)}">${formatDuration(seconds)}</span>
                        </button>
                    `;
                }).join('')}
                <button onclick="openDayView('${dayInfo.day}')" class="text-xs text-prfblue hover:underline block text-center pt-1 w-full">Abrir dia completo →</button>
            </div>
        </div>
    `;
}

// Renderização da Interface
function renderApp() {
    updateGamification();
    const container = document.getElementById('schedule-container');
    renderFloatingWidget();
    document.getElementById('news-section').style.display = newsDismissed ? 'none' : '';
    document.getElementById('week-counter').innerText = appState.weeksCompleted || 0;
    document.getElementById('reminder-toggle').checked = !!appState.reminderEnabled;
    document.getElementById('reminder-time').value = appState.reminderTime || '19:00';
    const errorsCountEl = document.getElementById('errors-count');
    if (errorsCountEl) errorsCountEl.innerText = countWrongAnswers();

    const activeClasses = ['bg-prfblue', 'text-white'];
    const inactiveClasses = ['bg-gray-200', 'text-gray-700'];
    [['view-calendar', 'calendar'], ['view-notebook', 'notebook'], ['view-history', 'history'], ['view-errors', 'errors']].forEach(([id, view]) => {
        const btn = document.getElementById(id);
        if (!btn) return;
        btn.classList.remove(...activeClasses, ...inactiveClasses);
        const isActive = view === 'calendar' ? (currentView !== 'notebook' && currentView !== 'history' && currentView !== 'errors') : currentView === view;
        btn.classList.add(...(isActive ? activeClasses : inactiveClasses));
    });

    if (currentView === 'day' && openDay) {
        container.className = 'w-full px-4 py-8';
        container.innerHTML = renderDayView(findDay(openDay));
        setupNotebookCanvas();
    } else if (currentView === 'notebook') {
        container.className = 'max-w-6xl mx-auto px-4 py-8';
        container.innerHTML = renderNotebook();
        setupNotebookCanvas();
    } else if (currentView === 'history') {
        container.className = 'max-w-4xl mx-auto px-4 py-8';
        container.innerHTML = renderHistory();
    } else if (currentView === 'errors') {
        container.className = 'max-w-4xl mx-auto px-4 py-8';
        container.innerHTML = renderErrorsView();
    } else {
        container.className = 'max-w-6xl mx-auto px-4 py-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3';
        container.innerHTML = appState.schedule.map(renderDayTile).join('');
    }
}

function switchView(view) {
    newsDismissed = true;
    currentView = view;
    if (view !== 'day') { openDay = null; editMode = false; }
    if (view === 'notebook') { notebookScope = 'global'; notebookScopeDay = null; notebookPageIndex = 0; }
    renderApp();
}

// ===== Relatório de Progresso (imprimível / salvável como PDF pelo navegador) =====
function exportReport() {
    const level = Math.floor(appState.xp / 150) + 1;

    const dayRows = appState.schedule.map(d => {
        const total = d.tasks.length;
        const done = d.tasks.filter(t => appState.completedTasks[t.id]).length;
        const stats = appState.quizStats[d.day];
        const acc = (stats && stats.total) ? `${stats.correct}/${stats.total} (${Math.round(100 * stats.correct / stats.total)}%)` : '—';
        return `<tr><td>${escapeAttr(d.day)}</td><td>${escapeAttr(d.subject)}</td><td>${done}/${total}</td><td>${acc}</td><td>${formatDuration(liveElapsedSecondsDay(d.day))}</td></tr>`;
    }).join('');

    const subjectRows = computeSubjectTimeTotals().map(t =>
        `<tr><td>${escapeAttr(t.name)}</td><td>${formatDuration(t.seconds)}</td></tr>`
    ).join('') || '<tr><td colspan="2">Nenhum tempo registrado ainda.</td></tr>';

    const weekRows = (appState.weekHistory || []).map(w =>
        `<tr><td>Semana ${w.week}</td><td>${w.tasksCompleted}/${w.totalTasks}</td><td>${w.xp} XP</td><td>${new Date(w.date).toLocaleDateString('pt-BR')}</td></tr>`
    ).join('') || '<tr><td colspan="4">Nenhuma semana concluída ainda.</td></tr>';

    const html = `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><title>Relatório de Progresso - PRF Administrativo</title>
    <style>
        body { font-family: Arial, Helvetica, sans-serif; color:#1f2937; padding:32px; max-width:800px; margin:0 auto; }
        h1 { color:#0b1c3c; font-size:20px; margin-bottom:4px; }
        h2 { color:#0b1c3c; font-size:14px; text-transform:uppercase; margin-top:28px; border-bottom:2px solid #ffcc00; padding-bottom:4px; }
        p.meta { color:#6b7280; font-size:12px; margin-top:0; }
        table { width:100%; border-collapse:collapse; margin-top:8px; font-size:13px; }
        th, td { text-align:left; padding:6px 8px; border-bottom:1px solid #e5e7eb; }
        th { color:#6b7280; text-transform:uppercase; font-size:11px; }
        .stats { display:flex; gap:24px; margin-top:12px; flex-wrap:wrap; }
        .stats div { text-align:center; }
        .stats b { display:block; font-size:22px; color:#0b1c3c; }
        @media print { body { padding:0; } }
    </style></head><body>
        <h1>Relatório de Progresso — Agente Administrativo PRF</h1>
        <p class="meta">Gerado em ${new Date().toLocaleDateString('pt-BR')} às ${new Date().toLocaleTimeString('pt-BR')}</p>
        <div class="stats">
            <div><b>${level}</b>Nível</div>
            <div><b>${appState.xp}</b>XP Total</div>
            <div><b>${appState.streak}</b>Dias de Ofensiva</div>
            <div><b>${appState.weeksCompleted || 0}</b>Semanas Concluídas</div>
            <div><b>${countWrongAnswers()}</b>Erros Pendentes</div>
        </div>
        <h2>Progresso por Dia</h2>
        <table><thead><tr><th>Dia</th><th>Matéria</th><th>Tarefas</th><th>Acerto em Questões</th><th>Tempo Estudado</th></tr></thead><tbody>${dayRows}</tbody></table>
        <h2>Tempo de Estudo por Matéria</h2>
        <table><thead><tr><th>Matéria</th><th>Tempo Total</th></tr></thead><tbody>${subjectRows}</tbody></table>
        <h2>Histórico de Semanas</h2>
        <table><thead><tr><th>Semana</th><th>Tarefas</th><th>XP</th><th>Data</th></tr></thead><tbody>${weekRows}</tbody></table>
    </body></html>`;

    const win = window.open('', '_blank');
    if (!win) { alert('Permita pop-ups pra exportar o relatório.'); return; }
    win.document.open();
    win.document.write(html);
    win.document.close();
    win.focus();
    setTimeout(() => win.print(), 300);
}

// ===== Menu "Mais opções" (Nova Semana, Backup, Restaurar, Relatório, Lembrete, Tema) =====
function toggleSettingsMenu(e) {
    if (e) e.stopPropagation();
    const menu = document.getElementById('settings-menu');
    const btn = document.getElementById('settings-menu-btn');
    const opening = menu.classList.contains('hidden');
    menu.classList.toggle('hidden');
    if (opening) {
        // Posiciona por coordenadas fixas (em vez de absolute/right-0) pra nunca vazar
        // da tela, já que o botão de engrenagem pode cair em qualquer linha do flex-wrap.
        const rect = btn.getBoundingClientRect();
        const menuWidth = Math.min(288, window.innerWidth - 16);
        const left = Math.max(8, Math.min(rect.right - menuWidth, window.innerWidth - menuWidth - 8));
        menu.style.left = `${left}px`;
        menu.style.top = `${rect.bottom + 8}px`;
        menu.style.width = `${menuWidth}px`;
    }
}
document.addEventListener('click', (e) => {
    const menu = document.getElementById('settings-menu');
    const btn = document.getElementById('settings-menu-btn');
    if (!menu || menu.classList.contains('hidden')) return;
    if (!menu.contains(e.target) && e.target !== btn && !btn.contains(e.target)) {
        menu.classList.add('hidden');
    }
});

// ===== Modo Escuro =====
function applyDarkMode(enabled) {
    document.documentElement.setAttribute('data-theme', enabled ? 'dark' : 'light');
    const icon = document.getElementById('dark-mode-icon');
    if (icon) icon.className = `fa-solid ${enabled ? 'fa-sun' : 'fa-moon'}`;
}

function toggleDarkMode() {
    const enabled = document.documentElement.getAttribute('data-theme') !== 'dark';
    try { localStorage.setItem('prf_dark_mode', enabled ? '1' : '0'); } catch (e) {}
    applyDarkMode(enabled);
}

applyDarkMode((() => { try { return localStorage.getItem('prf_dark_mode') === '1'; } catch (e) { return false; } })());

// Inicializa o app
loadData();
loadNews();
