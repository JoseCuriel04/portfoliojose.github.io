const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); // Importa Dart Sass

// Rutas de origen y destino
const paths = {
  styles: {
    src: 'src/sass/**/*.scss',
    dest: 'dist/css'
  }
};

// Tarea para compilar Sass
function compileSass() {
  return gulp.src(paths.styles.src)
    .pipe(sass().on('error', sass.logError)) // Compila Sass a CSS
    .pipe(gulp.dest(paths.styles.dest));
}

// Tarea para observar cambios en los archivos
function watchFiles() {
  gulp.watch(paths.styles.src, compileSass);
}

// Exportar tareas
exports.default = gulp.series(compileSass, watchFiles);
