<template>
    <div class="fixed-bottom">
        <div class="float-right mr-5 mt-5">
            <router-link :to="url" :class="btnClass"><span :class="fa"></span></router-link>
        </div>
    </div>
</template>
<script>
export default {
    name:'ButtonUrl',
    props:['url','btnClass','fa']

}
</script>