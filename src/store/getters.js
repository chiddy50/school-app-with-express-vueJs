export default {
    filterGenders(state){
        let genders = [];
        state.genders.forEach(gender => {
            genders.push(gender.name);
        })
        return genders;
    },
    filterParents(state){
        let parents = [];
        state.parents.forEach(parent => {
            parents.push(parent.fullname);
        })
        return parents;
    }
}