<template>
  <div class="comp-content">
    <div class="top-overview"></div>
    <div class="bottom-scoreboard"></div>
  </div>
</template>

<script>
export default {
  name: "obNormal",
  data() {
    return {}
  },
  methods: {},
  mounted() {
    this.$axios.get("/api/liveclientdata/allgamedata")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  },
}
</script>

<style scoped lang="scss">
$line-height: 50px;
$gap: 10px;

.comp-content {
  font-family: Beaufort;
}
.top-overview {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1200px;
  height: 54px;
  background-color: #012;
}
.bottom-scoreboard {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1400px;
  height: #{$line-height * 5 + $gap * 6};
  background-color: #012;
}
</style>