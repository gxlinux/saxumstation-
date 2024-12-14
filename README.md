# Saxum Station: Rock Music

**Saxum Station** Saxum Station es la emisora de radio donde el espíritu del rock vive y vibra. Desde los clásicos inmortales hasta las bandas emergentes que están redefiniendo el género, Saxum Station te ofrece un viaje sonoro cargado de energía, actitud y autenticidad. Disfruta de tus canciones favoritas en formato MP3 con una interfaz moderna y responsiva desarrollada en HTML5 y CSS3. ¡Conectémonos con el amor a través de la música!

---

## Características

- **Radio en Línea:** Escucha una selección curada de canciones en formato MP3 desde cualquier dispositivo con conexión a Internet.
- **Base de Datos en JSON:** Gestiona las pistas de audio y sus metadatos de manera sencilla con un archivo JSON.
- **Diseño Moderno:** Interfaz creada con HTML5 y CSS3 para garantizar compatibilidad, rendimiento y una experiencia visual agradable.
- **Responsivo:** Adaptado para verse perfecto en dispositivos móviles, tabletas y computadoras.

---

## Tecnologías Utilizadas

- **Frontend:**
  - HTML5
  - CSS3
- **Gestor de Datos:**
  - JSON

---

## Estructura del Proyecto

```
├── index.html         # Archivo principal de la aplicación
├──   style.css         # Archivos CSS
├──  musica.json        # Base de datos de las canciones
├──  publicidad.json        # Base de datos de la publicidad

├── musica/           # Pistas en MP3
│       
├── publicidad/             # Archivos de publicidad MP3
│   
└── README.md        # Documentación del proyecto
```

---

## musica.json: Estructura de la Base de Datos

El archivo `musica.json` contiene información sobre las canciones disponibles en la emisora. A continuación, un ejemplo:
```json
{
  "musica": [
    { "titulo": "Amor Agrio", "archivo": "musica/Amor Agrio.mp3" },
    { "titulo": "could-ve-been", "archivo": "musica/could-ve-been.mp4" },
    { "titulo": "Debbie Gibson Foolish Beat", "archivo": "musica/Debbie Gibson Foolish Beat.mp3" },
    { "titulo": "Martika Toy Soldiers", "archivo": "musica/Martika Toy Soldiers.mp3" },
    { "titulo": "Vuelo de la Golondrina", "archivo": "musica/Vuelo de la Golondrina.mp3" }
   
  ]
}

```

---

## Instalación y Uso

1. **Clona este repositorio:**
   ```bash
   git clone https://github.com/tuusuario/natio-station.git
   ```

2. **Abre el archivo `index.html` en tu navegador:**
   - No necesitas un servidor local; solo un navegador compatible.

3. **Edita el archivo `musica.json` para agregar tus propias canciones.**

4. **Disfruta de la música!**

---

## Contribución

¡Las contribuciones son bienvenidas! Si deseas agregar nuevas funciones, mejorar el diseño o ampliar la documentación:

1. Haz un fork del repositorio.
2. Crea una rama para tu función o mejora:
   ```bash
   git checkout -b mejora-mi-funcion
   ```
3. Haz commit de tus cambios:
   ```bash
   git commit -m "Agregada nueva función de reproducción aleatoria"
   ```
4. Haz un push a tu rama:
   ```bash
   git push origin mejora-mi-funcion
   ```
5. Crea un Pull Request.

---

## Licencia

Este proyecto está licenciado bajo la [MIT License](LICENSE).

---

## Contacto

Si tienes preguntas, sugerencias o simplemente quieres decirnos cuál es tu canción favorita, escríbenos a:

 **Redes Sociales:**
-  [@saxumstationtv](https://www.youtube.com/@saxumstationtv)
-  [@stationsaxum](https://social.politicaconciencia.org/@stationsaxum)

¡Gracias por elegir Saxum Station: Rock music! ❤️
