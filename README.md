# home-uce

Aplicación móvil de sistema académico para la **Universidad Central del Ecuador** desarrollada con **React Native** y **Expo**.

## Descripción

Esta app permite a los estudiantes consultar su información académica, rendimiento, asignaturas, calendario, anuncios y acceder rápidamente a servicios institucionales. Presenta una interfaz moderna, intuitiva y adaptada a dispositivos móviles.

## Características principales

- **Panel de bienvenida** con búsqueda y datos del semestre actual.
- **Promedio general** y estadísticas de rendimiento académico.
- **Eficiencia académica** y avance en créditos.
- **Detalle de asignaturas** (aprobadas, en progreso, extracurriculares).
- **Accesos rápidos** a notas, horarios, carnet, mapas, titulación y más.
- **Perfil del estudiante** con información relevante.
- **Calendario académico** con fechas importantes.
- **Anuncios** institucionales y académicos.
- **Footer** con enlaces y redes sociales de la universidad.

## Instalación y ejecución

1. **Clona el repositorio** y entra en la carpeta del proyecto:
   ```bash
   git clone <url-del-repo>
   cd home-uce
   ```

2. **Instala las dependencias**:
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Inicia la app**:
   ```bash
   npm start
   # o
   yarn start
   ```

4. **Corre en tu dispositivo**:
   - Android: `npm run android`
   - iOS: `npm run ios`
   - Web: `npm run web`

> Requiere tener instalado [Expo Go](https://expo.dev/client) en tu dispositivo móvil para pruebas rápidas.

## Estructura del proyecto

```
home-uce/
│
├── App.js                # Componente principal de la app
├── index.js              # Punto de entrada
├── package.json          # Dependencias y scripts
├── app.json              # Configuración de Expo
├── assets/               # Recursos gráficos (iconos, splash, etc.)
│   ├── icon.png
│   ├── splash-icon.png
│   ├── adaptive-icon.png
│   └── favicon.png
└── ...
```

## Dependencias principales

- **expo** `~53.0.12`
- **react** `19.0.0`
- **react-native** `0.79.4`
- **expo-status-bar**
- **@expo/vector-icons**

## Personalización

- Cambia los datos de usuario, asignaturas y calendario en `App.js` para adaptarlo a tu institución o usuario.
- Los recursos gráficos se encuentran en la carpeta `assets/`.

## Créditos

Desarrollado por Marcos Suntaxi para la Universidad Central del Ecuador. 