export const state = () => ({
    children: []
});

const flatten = function(node) {
    const children = [];
    node.children.forEach(child => {
        if (child.type === 'g') {
            children.push(...flatten(child));
        }
        else {
            children.push(child);
        }
    });
    return children;
};

export const getters = {
    elements: state => flatten(state),
    displayable: (state, {elements}) => elements.filter(e => e.hidden)
};

export const mutations = {

};
