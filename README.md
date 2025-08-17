## 🔄 Flujo de Demeter 

1. **Interacción inicial**  
   El aprendiz conversa con un agente Synthetic (ej: Quiliano).  

2. **Pregunta de guardado**  
   El agente le consulta al aprendiz:  
   > “¿Deseas guardar esta conversación en tu memoria (Demeter)?”

3. **Recopilación de datos**  
   Si el aprendiz acepta, el agente recopila toda la conversación actual en un JSON estandarizado.  

4. **Finalización de conversación**  
   Cuando el aprendiz indica que finaliza, el agente envía el paquete de datos a **Demeter**.  

5. **Demeter procesa**  
   - Consume la información recibida.  
   - La almacena en un repositorio de memoria (ej: repo en GitHub u otra base persistente).  
   - Genera un **código único** que representa esa sesión guardada.  

6. **Entrega al aprendiz**  
   El código se devuelve al aprendiz como referencia.  
   > Ejemplo: `DEMETER|eyJzZXNzaW9uSWQiOiAiYWJjMTIz...`  

7. **Funcionalidades disponibles**  
   Usando ese código, el aprendiz puede acceder a:  
   - 📂 Recuperación de la conversación guardada.  
   - 📊 Estadísticas e insights.  
   - 🧩 Creación de perfiles unificados.  
   - 🤝 Match inteligente para equipos.  
   - 🛡️ Auditoría y trazabilidad para administrativos/jurados.  

---

## 🔍 Solution Overview

#### 📂 [admission/](admission/)

Materials for the admission process, including forms and informational sections.

- [`form/`](admission/form/): forms used in the admission process.
- [`memes/`](admission/memes/): funny images related to the competition.

#### 📁 [community/](community/)

Resources for the community, shaping the look and feel of virtual spaces.

- [`github/`](community/github/): this platform will be used as a learning lab.
- [`meet/`](community/meet/): live streaming.
- [`spotify/`](community/spotify/): all the assets related to "Bitácora Sintética".
- [`suno/`](community/meet/): this AI was used to cread the opening theme for the podcast.
- [`whatsapp/`](community/whatsapp/): WhatsApp groups and resources.

#### 📁 [gpt/](gpt/)

AI assistants and materials related to the Synthetic Team.

- [`ada/`](gpt/ada/): advice about the tech stack used by the teams.
- [`alan/`](gpt/alan/): synthetic jury that evaluates tech requirements.
- [`eleanor/`](gpt/eleanor/): advice about presenting the MVP in the AI Arena.
- [`leonardo/`](gpt/leonardo/): answers frequent questions from participants.
- [`magnus/`](gpt/magnus/): profiles the social and technical skills of participants.
- [`quiliano/`](gpt/quiliano/): guides the ideation of AI-powered products.

#### 📁 [roadmap/](roadmap/)

This folder contains everything used to create the illustrated roadmap for the competition.

- [`assets/`](roadmap/assets/): graphic elements added layer by layer.
- [`deck/`](roadmap/deck/): assets used in the presentation deck.
- [`layers/`](roadmap/layers/): prompts and intermediate images organized by generation.
- [`reference/`](roadmap/reference/): [sketches and reference photos](roadmap/reference/photo_whiteboard_step6.jpg).
- [`tests/`](roadmap/tests/): initial conceptual tests.
- [`video/`](roadmap/video/): assets used in the offline-recording.