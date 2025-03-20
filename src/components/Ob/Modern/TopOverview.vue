<template>
  <div class="comp-content">
    <div class="overview-team">
      <div class="team-data">
        <div class="data-icon">男</div>
        <div class="data-value">{{ topOverviewData.teamOrder.baron }}</div>
      </div>
      <div class="team-data">
        <div class="data-icon">龙</div>
        <div class="data-value">{{ topOverviewData.teamOrder.dragon }}</div>
      </div>
      <div class="team-data">
        <div class="data-icon">锋</div>
        <div class="data-value">{{ topOverviewData.teamOrder.xianfeng }}</div>
      </div>
      <div class="team-data">
        <div class="data-icon">虫</div>
        <div class="data-value">{{ topOverviewData.teamOrder.chaochong }}</div>
      </div>
      <div class="team-data">
        <div class="data-icon">晶</div>
        <div class="data-value">{{ topOverviewData.teamOrder.inhib }}</div>
      </div>
      <div class="team-data">
        <div class="data-icon">塔</div>
        <div class="data-value">{{ topOverviewData.teamOrder.turret }}</div>
      </div>
      <div class="team-data">
        <div class="data-icon">金</div>
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
    <div class="overview-team">
      <div class="team-data">
        <div class="data-icon">男</div>
        <div class="data-value">{{ topOverviewData.teamChaos.baron }}</div>
      </div>
      <div class="team-data">
        <div class="data-icon">龙</div>
        <div class="data-value">{{ topOverviewData.teamChaos.dragon }}</div>
      </div>
      <div class="team-data">
        <div class="data-icon">锋</div>
        <div class="data-value">{{ topOverviewData.teamChaos.xianfeng }}</div>
      </div>
      <div class="team-data">
        <div class="data-icon">虫</div>
        <div class="data-value">{{ topOverviewData.teamChaos.chaochong }}</div>
      </div>
      <div class="team-data">
        <div class="data-icon">晶</div>
        <div class="data-value">{{ topOverviewData.teamChaos.inhib }}</div>
      </div>
      <div class="team-data">
        <div class="data-icon">塔</div>
        <div class="data-value">{{ topOverviewData.teamChaos.turret }}</div>
      </div>
      <div class="team-data">
        <div class="data-icon">金</div>
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
          teamOrder: { score: 0, gold: 0, turret: 0, inhib: 0, baron: 0, dragon: 0, xianfeng: 0, chaochong: 0, },
          teamChaos: { score: 0, gold: 0, turret: 0, inhib: 0, baron: 0, dragon: 0, xianfeng: 0, chaochong: 0, },
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
  background-color: #012;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.overview-team {
  display: flex;
  column-gap: 36px;
}
.overview-team:last-child {
  flex-direction: row-reverse;
}
.team-data {
  display: flex;
  column-gap: 8px;
  font-size: 24px;
}
.data-icon {}
.data-value {}

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