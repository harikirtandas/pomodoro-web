# 🧘 Pomodoro Zen

Pomodoro Zen es una aplicación web minimalista para sesiones de estudio y descanso, diseñada para fomentar el foco, la constancia y una experiencia de uso tranquila.

El proyecto está pensado como una **app simple pero bien diseñada**, tanto a nivel de UX como de arquitectura de código.

---

## ✨ Características

- ⏱ Temporizador Pomodoro clásico (25 min estudio / 5 min descanso)
- 🔁 Ciclos automáticos de estudio y descanso
- 🧠 Frases motivadoras (108 únicas, sin repeticiones)
- 🔔 Sonidos diferenciados:
  - Campana (bell) al iniciar cada ciclo de estudio
  - Sonido suave (pop) para pausas, reset, stop y comienzo de descanso
- 🌙 Interfaz minimalista en modo dark
- 🎧 Audio sin librerías externas
- 🧩 Lógica basada en una **state machine clara**
- 🚀 Listo para deploy

---

## 🧠 Filosofía del proyecto

Este proyecto prioriza:

- Claridad antes que complejidad
- Arquitectura entendible
- Separación de responsabilidades
- UX consciente, sin distracciones innecesarias

No se usan frameworks de frontend ni librerías de audio para mantener el control total del flujo y facilitar el aprendizaje.

---

## 🛠 Tecnologías utilizadas

- Python
- Flask
- HTML5
- CSS3
- JavaScript (Vanilla)

---

## 📂 Estructura del proyecto

```
pomodoro-app/
│
├── app/
│   ├── static/
│   │   ├── css/
│   │   │   └── styles.css
│   │   ├── js/
│   │   │   └── pomodoro.js
│   │   └── audio/
│   │       ├── bell.mp3
│   │       └── pop.mp3
│   │
│   ├── templates/
│   │   └── index.html
│   │
│   ├── services.py
│   └── app.py
│
├── README.md
└── requirements.txt
```

---

## ⚙️ Instalación y uso local

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/pomodoro-zen.git
   cd pomodoro-zen
   ```

2. Crear entorno virtual:

   ```bash
   python -m venv venv
   source venv/bin/activate  # macOS / Linux
   venv\\Scripts\\activate     # Windows
   ```

3. Instalar dependencias:

   ```bash
   pip install -r requirements.txt
   ```

4. Ejecutar la app:

   ```bash
   flask run
   ```

5. Abrir en el navegador:
   ```
   http://127.0.0.1:5000
   ```

---

## 🎛 Lógica principal

La app está construida alrededor de una **máquina de estados** con:

- Estados: `stopped`, `running`, `paused`
- Modos: `study`, `break`
- Eventos: `start_study`, `pause`, `reset`, `stop`, `time_up`

Toda la lógica pasa por una única función central (`handleEvent`), evitando efectos colaterales y código espagueti.

---

## 👨‍💻 Autor

**Jorge Bianchi**  
Developer

Si te gusta el proyecto y querés colaborar:  
👉 https://www.paypal.me/jorgebianchi

---

## 📜 Licencia

Este proyecto es de uso libre para aprendizaje y uso personal.
