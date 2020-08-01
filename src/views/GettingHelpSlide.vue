<template>
  <div>
    <h1>GETTING HELP</h1>
    <p>
      Forgot to turn off tags? Say
      <em>untag</em>
      .
    </p>
    <p>
      We won't bore you by going through every single command in the tutorial,
      most of them are self-explanatory! To see all the valid commands for the
      page you're on, just say help. There are two reasons why a command might
      not show in the help. Either the command is only valid for a certain page
      (eg. Reddit commands are only valid on reddit.com) and you're not on that
      page, or the command only works in a certain mode that you're not in. For
      modes, the commands that become available are shown to you in a special
      hovering overlay when you enter the mode; like when you ran the auto
      scroll command in the scrolling section of the tutorial.
    </p>
    <button @click="previousSlide">Previous</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class GettingHelpSlide extends Vue {
  @Prop({ required: true })
  private readonly previousSlide!: () => void;
}
</script>
