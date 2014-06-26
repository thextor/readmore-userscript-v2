module.exports = function (grunt) {
    // Read package
    grunt.pkg = grunt.file.readJSON('package.json');

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Load grunt configurations automatically
    grunt.initConfig(require('load-grunt-configs')(grunt, {config: {src: 'build/tasks/options/*.js'}}));

    // Load custom tasks
    grunt.loadTasks('build/tasks');

    /**
     * Der default Task leert das dist Verzeichniss und erzeugt das Userscript
     */
    grunt.registerTask('default', ['clean:dist', 'generate-script']);

    /**
     * Erzeugt das Userscript und erstallt auf desses Basis die Extension(s)
     */
    grunt.registerTask('extension', ['clean:dist', 'generate-script', 'generate-chrome-extension']);

    /**
     * Lädt die Fonts neu runter, Konfiguration durch in der vendor/fontello/config.json
     */
    grunt.registerTask('font', ['generate-font']);

    /**
     * Alle Taks nacheinander ausführen
     * 1. Fonts neu generieren
     * 2. Extensions generieren (schließt die Generierung des Scriptes mit ein)
     */
    grunt.registerTask('complete', ['font', 'extension']);
};