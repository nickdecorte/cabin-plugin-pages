'use strict';

const fs = require('fs');

module.exports = {

    findAll: async () => {
        const files = fs.readdirSync('../theme/templates/sections/');

        var sections = [];
        for (const [index, directory] of files.entries()) {
            const data =  JSON.parse(fs.readFileSync('../theme/templates/sections/' + directory + '/data.json'));;
            const config = JSON.parse(fs.readFileSync('../theme/templates/sections/' + directory + '/config.json'));

            sections.push({
                template: directory,
                config: config,
                data: data
            });
        }

        return sections;
    }

};
