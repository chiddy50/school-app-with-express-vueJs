
/**
 * =============================================|
 * To make searching for a Mutation easier      |
 * press the Ctrl F and search for the Mutation |
 * keyword. Easy coding!                        |
 * =============================================|
 */

export default {
    /**---------------
     * CLASS MUTATIONS
     * ---------------
     */
    SET_CLASSES: function(state, classes){
        classes.forEach(classData => {
            classData.edit = false;
            classData.delete = false;
        });
        state.classes = classes;
    },
    APPEND_CLASS: function(state, data){
        data.edit = false;
        state.classes.push(data);
    },
    /**-------------------
     * CLASS MUTATIONS END
     * -------------------
     */


    /**-----------------
     * SECTION MUTATIONS
     * -----------------
     */
    SET_SECTIONS: function(state, sections){
        sections.forEach(section => {
            section.edit = false;
            section.delete = false;
        });
        state.sections = sections;
    },
    APPEND_SECTION: function(state, data){
        data.edit = false;
        state.sections.push(data);
    },
    /**---------------------
     * SECTION MUTATIONS END
     * ---------------------
     */

    /**---------------
     * GROUPS MUTATION 
     * ---------------
     */
    SET_GROUPS: function(state, groups){
        groups.forEach(group => {
            group.edit = false;
            group.delete = false;
        });
        state.groups = groups;
    },

    APPEND_GROUP: function(state, group){
        group.edit = false;
        state.groups.push(group);
    },
    
    UPDATE_GROUP: function(state, data){
        state.groups.forEach(group => {
            if (group.id === data.id) {
                group.name = data.name;
            }
        });
    },
    /**-------------------
     * GROUPS MUTATION END
     * -------------------
     */

    /**--------------
     * PARENT MUATION
     * ---------------
     */
    SET_PARENTS: function(state, parents){
        parents.forEach(parent => {
            parent.edit = false;
        });
        state.parents = parents;
    },

    /**
     * -------------------
     * PARENT MUTATION END
     * -------------------
     */

     /**----------------
     * STUDENT MUTATION
     * -----------------
     */
    SET_STUDENTS: function(state, students){
        state.students = students;
    },
    /*----------------------
     * STUDENT MUTATION END
     *-----------------------
     */

    /**---------------
     * GENDER MUTATION
     * ---------------
     */
    SET_GENDERS: function(state, genders){
        state.genders = genders;
    }
    /**--------------------
     * GENDER MUATATION END
     * --------------------
     */
      
    

}