<template>
    <div>
        <br>
        <input autofocus id="searchMe" type="text" class="card-control" placeholder="Search for a Card..." v-model="searchQuery">
        <br><hr>
    </div>
</template>

<script>
export default {
    name:'SearchBar',
    data() {
        return {
            searchQuery: ''
        }
    },
    watch: {
        searchQuery:function(value){
                this.$emit('on-search-change',this.searchQuery)
        }
    }
}
</script>
