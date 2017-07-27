<template>
    <svg>
        <template v-for="child in children" v-if="!child.isHidden">
            <group v-if="child.children" v-bind="child"></group>
            <svg v-else :is="child.type" v-bind="child.props"></svg>
        </template>
    </svg>
</template>

<script>
    import Group from './Group.vue';

    export default {
        components: {
            Group
        },
        computed: {
            children() {
                return this.$store.state.canvas.children;
            }
        }
    };
</script>
