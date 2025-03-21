<template>
  <div class="comp-content">
    <div class="overview-team team-order">
      <div class="team-data">
        <img class="data-icon" src="@/assets/images/icons/baron.png" alt=""/>
        <div class="data-value">{{ topOverviewData.teamOrder.baron }}</div>
      </div>
      <div class="team-data">
        <img class="data-icon" src="@/assets/images/icons/dragon.png" alt=""/>
        <div class="data-value">{{ topOverviewData.teamOrder.dragon }}</div>
      </div>
      <div class="team-data">
        <img class="data-icon" src="@/assets/images/icons/riftherald.png" alt=""/>
        <div class="data-value">{{ topOverviewData.teamOrder.herald }}</div>
      </div>
      <div class="team-data">
        <img class="data-icon" src="@/assets/images/icons/grub.png" alt=""/>
        <div class="data-value">{{ topOverviewData.teamOrder.grub }}</div>
      </div>
      <div class="team-data">
        <img class="data-icon" src="@/assets/images/icons/inhibitor.png" alt=""/>
        <div class="data-value">{{ topOverviewData.teamOrder.inhib }}</div>
      </div>
      <div class="team-data">
        <img class="data-icon" src="@/assets/images/icons/turret.png" alt=""/>
        <div class="data-value">{{ topOverviewData.teamOrder.turret }}</div>
      </div>
      <div class="team-data">
        <img class="data-icon" src="@/assets/images/icons/gold.png" alt=""/>
        <div class="data-value">{{ topOverviewData.teamOrder.gold }}</div>
      </div>
    </div>
    <div class="overview-middle">
      <div class="middle-score">
        {{ topOverviewData.teamOrder.score }}
        vs
        {{ topOverviewData.teamChaos.score }}
      </div>
      <div class="middle-time">{{ topOverviewData.gameTime }}</div>
    </div>
    <div class="overview-team team-chaos">
      <div class="team-data">
        <img class="data-icon" src="@/assets/images/icons/baron.png" alt=""/>
        <div class="data-value">{{ topOverviewData.teamChaos.baron }}</div>
      </div>
      <div class="team-data">
        <img class="data-icon" src="@/assets/images/icons/dragon.png" alt=""/>
        <div class="data-value">{{ topOverviewData.teamChaos.dragon }}</div>
      </div>
      <div class="team-data">
        <img class="data-icon" src="@/assets/images/icons/riftherald.png" alt=""/>
        <div class="data-value">{{ topOverviewData.teamChaos.herald }}</div>
      </div>
      <div class="team-data">
        <img class="data-icon" src="@/assets/images/icons/grub.png" alt=""/>
        <div class="data-value">{{ topOverviewData.teamChaos.grub }}</div>
      </div>
      <div class="team-data">
        <img class="data-icon" src="@/assets/images/icons/inhibitor.png" alt=""/>
        <div class="data-value">{{ topOverviewData.teamChaos.inhib }}</div>
      </div>
      <div class="team-data">
        <img class="data-icon" src="@/assets/images/icons/turret.png" alt=""/>
        <div class="data-value">{{ topOverviewData.teamChaos.turret }}</div>
      </div>
      <div class="team-data">
        <img class="data-icon" src="@/assets/images/icons/gold.png" alt=""/>
        <div class="data-value">{{ topOverviewData.teamChaos.gold }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopOverview",
  props: {
    topOverviewData: {
      type: Object,
      default: () => {
        return {
          gameTime: "00:00",
          teamOrder: { score: 0, gold: 0, turret: 0, inhib: 0, baron: 0, dragon: 0, herald: 0, grub: 0, },
          teamChaos: { score: 0, gold: 0, turret: 0, inhib: 0, baron: 0, dragon: 0, herald: 0, grub: 0, },
        }
      }
    }
  },
  data() {
    return {}
  },
  methods: {},
  mounted() {},
}
</script>

<style scoped lang="scss">
.comp-content {
  width: 100%;
  height: 100%;
  padding: 6px;
  background: linear-gradient(to bottom, #012, #0127);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.overview-team {
  height: 100%;
  padding: 0 16px;
  display: flex;
  align-items: center;
  column-gap: 24px;
  border-radius: 8px;
  overflow: hidden;
}
.team-order {
  background: linear-gradient(to left, #4897b5, #4897b577);
}
.team-chaos {
  background: linear-gradient(to right, #b33e44, #b33e4477);
  flex-direction: row-reverse;
}
.team-data {
  display: flex;
  column-gap: 8px;
}
.data-icon {
  width: 28px;
  height: 28px;
}
.data-value {
  font-size: 28px;
  line-height: 28px;
}

.overview-middle {
  width: 160px;
}
.middle-score {
  text-align: center;
  font-size: 32px;
  line-height: 1em;
  margin-bottom: 12px;
}
.middle-time {
  text-align: center;
  font-size: 20px;
  line-height: 1em;
}
</style>
