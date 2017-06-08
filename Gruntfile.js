module.exports = function (grunt) {
    require("load-grunt-tasks")(grunt);
    require("time-grunt")(grunt);
    var config = {
        app: "app",
        dist: "dist"
    }
    grunt.initConfig({
        config: config,

        copy: {
            dist: {
                files: [
                    {
                        expand:true,
                        cwd:'<%=config.app%>/',
                        src:'*.html',
                        dest:'<%=config.dist%>/',
                        ext:'.min.html',
                        extdot:'first',
                        flatten:false,
                        
                    
                    }
                ]

            }
        },
        clean: {
            dist: {
                src: ['<%=config.dist%>/**/*'],
                filter: 'isFile'
            }
        }
    });
}