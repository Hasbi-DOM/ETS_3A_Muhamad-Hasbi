module.exports = (sequelize, Sequelize) => {
    const FilmCategory = sequelize.define("category", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    });

    return FilmCategory;
};