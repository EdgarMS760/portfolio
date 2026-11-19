# 🌐 Portafolio — Data & AI Engineer

Portafolio personal construido con **Astro**, **Tailwind CSS** y **GSAP**, disponible en español e inglés.

## Secciones

- **Sistemas de IA**: proyectos con Amazon Bedrock AgentCore (multi-agente, evaluación de LLMs, memoria de largo plazo), cada uno con su página de detalle.
- **Casos reales**: proyectos de ingeniería de datos en producción (anónimos por confidencialidad).
- **Stack, experiencia y certificaciones.**
- **Proyectos full-stack**: Studify, UniTrip e Instacat.

## Estructura

- `src/i18n/sections.{es,en}.ts`: contenido del perfil (hero, IA, casos, skills, experiencia).
- `src/i18n/{es,en}.ts`: proyectos full-stack y textos generales.
- `src/pages/[lang]/ai/[slug].astro`: plantilla única para las páginas de detalle de IA. Para agregar un proyecto basta con añadirlo a `ai.items`.
- `src/components/ArchFlow.astro`: diagrama de arquitectura animado.

## Desarrollo

```bash
npm install
npm run dev
```

## 📫 Contacto
Puedes escribirme en [LinkedIn](https://www.linkedin.com/in/edgarms01) o a mi correo **edgarsandoval685@gmail.com**
