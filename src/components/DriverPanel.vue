<template>
    <div id="driverPanel" class="card">
        <div class="card-header">
            <div class="card-title h5">{{name}}</div>
            <div class="card-subtitle">Position: <span class="chip text-white">{{position}}</span></div>
            <div class="card-subtitle">Points: <span class="chip text-white ">{{points}}</span></div>
        </div>
        
    </div>
</template>

<script>
export default {
    props: {
        name: String,
        position: Number,
        points: Number,
    }
}
</script>

<style scoped>



</style>
