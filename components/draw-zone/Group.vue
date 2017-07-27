<template>
    <svg :is="type" v-bind="props">
        <template v-for="child in children" v-if="!child.isHidden">
            <group v-if="child.children" v-bind="child"></group>
            <svg v-else :is="child.type" v-bind="child.props"></svg>
        </template>
    </svg>
</template>

<script>
    export default {
        name: 'group'
    };
</script>
