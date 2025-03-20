<template>
  <div class="comp-content">
    <div class="top-overview">
      <top-overview :topOverviewData="topOverviewData"></top-overview>
    </div>
    <div class="bottom-scoreboard"></div>
  </div>
</template>

<script>
import { allGameDataResponse } from "@/components/Ob/temp_allgamedata.js";
import TopOverview from "@/components/Ob/Modern/TopOverview.vue";

export default {
  name: "obNormal",
  components: { TopOverview, },
  data() {
    return {
      requestInterval: null,
      allGameData: {},
      teamMembers: {},
      topOverviewData: {
        gameTime: "00:00",
        teamOrder: { score: 0, gold: 0, turret: 0, inhib: 0, baron: 0, dragon: 0, xianfeng: 0, chaochong: 0, },
        teamChaos: { score: 0, gold: 0, turret: 0, inhib: 0, baron: 0, dragon: 0, xianfeng: 0, chaochong: 0, },
      },
    }
  },
  methods: {
    request_game_data() {
      this.$axios.get("/api/liveclientdata/allgamedata")
          .then((res) => {
            console.log(res);
            if (res.status === 200) this.allGameData = res.data;
          })
          .catch((err) => {
            console.error(err);
          });
    },
    convert_gameTime(gameTime) {
      if (!gameTime || typeof(gameTime) !== "number") {
        console.log("gameTime", gameTime);
        return null;
      }
      const mm = Math.floor(gameTime / 60).toString().padStart(2, "0");
      const ss = (Math.floor(gameTime) % 60).toString().padStart(2, "0");
      return mm + ":" + ss;
    },
    get_team_members(allPlayers) {
      if (!allPlayers) return null;
      let teamMembers = { teamOrder: [], teamChaos: [], };
      allPlayers.forEach((item, index) => {
        if (item.team === "ORDER") teamMembers.teamOrder.push(item.riotIdGameName);
        else if (item.team === "CHAOS") teamMembers.teamChaos.push(item.riotIdGameName);
      });
      return teamMembers;
    },
    get_all_event_name(eventsList) {
      if (!eventsList) return null;
      let eventsNames = [];
      eventsList.forEach((item, index) => {
        if (!eventsNames.includes(item.EventName)) eventsNames.push(item.EventName);
      });
      return eventsNames;
    },
    get_kill_event_count(eventsList, eventName, teamMembers) {
      if (!eventsList || !eventName || !teamMembers) return null;
      let eventsCount = { teamOrder: 0, teamChaos: 0, };
      eventsList.forEach((item, index) => {
        if (item.EventName === eventName) {
          if (teamMembers.teamOrder.includes(item.KillerName)) ++eventsCount.teamOrder;
          else if (teamMembers.teamChaos.includes(item.KillerName)) ++eventsCount.teamChaos;
        }
      });
      return eventsCount;
    },
    update_topOverviewData(eventsList, teamMembers) {
      const eventCountChampionKill = this.get_kill_event_count(eventsList, "ChampionKill", teamMembers);
      const eventCountTurretKilled = this.get_kill_event_count(eventsList, "TurretKilled", teamMembers);
      const eventCountInhibKilled = this.get_kill_event_count(eventsList, "InhibKilled", teamMembers);
      const eventCountDragonKill = this.get_kill_event_count(eventsList, "DragonKill", teamMembers);
      this.topOverviewData.teamOrder.score += eventCountChampionKill.teamOrder;
      this.topOverviewData.teamChaos.score += eventCountChampionKill.teamChaos;
      this.topOverviewData.teamOrder.turret += eventCountTurretKilled.teamOrder;
      this.topOverviewData.teamChaos.turret += eventCountTurretKilled.teamChaos;
      this.topOverviewData.teamChaos.inhib += eventCountInhibKilled.teamChaos;
      this.topOverviewData.teamChaos.inhib += eventCountInhibKilled.teamChaos;
      this.topOverviewData.teamChaos.dragon += eventCountDragonKill.teamChaos;
      this.topOverviewData.teamChaos.dragon += eventCountDragonKill.teamChaos;
    },
  },
  mounted() {
    // this.request_game_data();
    // this.requestInterval = setInterval(this.request_game_data, 1000);
    this.allGameData = allGameDataResponse.data;
    this.topOverviewData.gameTime = this.convert_gameTime(this.allGameData.gameData.gameTime);
    this.teamMembers = this.get_team_members(this.allGameData.allPlayers);
    this.update_topOverviewData(this.allGameData.events.Events, this.teamMembers);
  },
  beforeDestroy() {
    clearInterval(this.requestInterval);
  },
}
</script>

<style scoped lang="scss">
$line-height: 48px;
$gap: 8px;

.comp-content {
  font-family: Beaufort;
}
.top-overview {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1400px;
  height: 80px;
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