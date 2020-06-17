<template>
  <div>
    <article class="session" v-for="{node} in filter" :key="node.sessionTitle">
      <header class="header">
        <div class="meta-container">
          <p class="label">{{ node.sessionType }}</p>
          <p class="label" v-if="node.joint === 'Yes'">
            Joint Session with
            <a href="/">SHOT</a>
          </p>
          <p v-if="node.sessionTopic" class="label">{{ node.sessionTopic }}</p>
        </div>
        <h3>{{ node.sessionTitle }}</h3>
      </header>
      <div class="organizer-container">
        <!-- Organizers -->
        <p v-if="node.sponsorship" class="label">Sponsor</p>
        <p v-if="node.sponsorship" class="name">{{ node.sponsorship }}</p>

        <p v-if="node.coOrganizerName" class="label">Organizers</p>
        <p v-else-if="node.organizerName" class="label">Organizer</p>

        <p v-if="node.organizerName" class="name">{{ node.organizerName }}</p>
        <p
          v-if="node.organizerInstitutionalAffiliation"
          class="affiliation"
        >{{ node.organizerInstitutionalAffiliation }}</p>
        <p v-if="node.coOrganizerName" class="name">{{ node.coOrganizerName }}</p>
        <p
          v-if="node.coOrganizerInstitutionalAffiliation"
          class="affiliation"
        >{{ node.coOrganizerInstitutionalAffiliation }}</p>
        <!-- Chair -->
        <p v-if="node.chairName" class="label">Chair</p>

        <p v-if="node.chairName" class="name">{{ node.chairName }}</p>
        <p
          v-if="node.chairInstitutionalAffiliation"
          class="affiliation"
        >{{ node.chairInstitutionalAffiliation }}</p>
      </div>
      <div class="presenters" :class="{ show : toggle }">
        <!-- Presenter 1 -->
        <presenter-section
          num="1"
          :author="node.author1Name"
          :institution="node.author1InstitutionalAffiliation"
          :title="node.abstract1Title"
          :coauthor="node.coAuthor1Name"
          :coinstitution="node.coAuthor1InstitutionalAffiliation"
        />
        <!-- Presenter 2 -->
        <presenter-section
          num="2"
          :author="node.author2Name"
          :institution="node.author2InstitutionalAffiliation"
          :title="node.abstract2Title"
          :coauthor="node.coAuthor2Name"
          :coinstitution="node.coAuthor2InstitutionalAffiliation"
        />
        <!-- Presenter 3 -->
        <presenter-section
          num="3"
          :author="node.author3Name"
          :institution="node.author3InstitutionalAffiliation"
          :title="node.abstract3Title"
          :coauthor="node.coAuthor3Name"
          :coinstitution="node.coAuthor3InstitutionalAffiliation"
        />
        <!-- Presenter 4 -->
        <presenter-section
          num="4"
          :author="node.author4Name"
          :institution="node.author4InstitutionalAffiliation"
          :title="node.abstract4Title"
          :coauthor="node.coAuthor4Name"
          :coinstitution="node.coAuthor4InstitutionalAffiliation"
        />
        <!-- Commentator  -->
        <presenter-section
          :author="node.commentatorName"
          :institution="node.commentatorInstitutionalAffiliation"
        />
        <!-- Presenter 6 -->
        <presenter-section
          num="6"
          :author="node.author6Name"
          :institution="node.author6InstitutionalAffiliation"
          :title="node.abstract6Title"
          :coauthor="node.coAuthor6Name"
          :coinstitution="node.coAuthor6InstitutionalAffiliation"
        />
        <!-- Presenter 7 -->
        <presenter-section
          num="7"
          :author="node.author7Name"
          :institution="node.author7InstitutionalAffiliation"
          :title="node.abstract7Title"
          :coauthor="node.coAuthor7Name"
          :coinstitution="node.coAuthor7InstitutionalAffiliation"
        />
        <!-- Presenter 8 -->
        <presenter-section
          num="8"
          :author="node.author8Name"
          :institution="node.author8InstitutionalAffiliation"
          :title="node.abstract8Title"
          :coauthor="node.coAuthor8Name"
          :coinstitution="node.coAuthor8InstitutionalAffiliation"
        />
      </div>
    </article>
  </div>
</template>

<static-query>
query Program {
  program: allProgram(sort: [{by: "sessionGroup", order: ASC}, {by: "sessionTitle", order: ASC}]) {
    edges {
      node {
        sessionID
        sessionGroup
        date
        startTime
        endTime
        joint
        sponsorship
        sessionType
        sessionTitle
        sessionAbstract
        sessionTopic
        sessionChronology
        sessionGeography
        keywords
        organizerName
        organizerEmail
        organizerInstitutionalAffiliation
        coOrganizerName
        coOrganizerEmail
        coOrganizerInstitutionalAffiliation
        chairName
        chairEmail
        chairInstitutionalAffiliation
        abstract1Title
        author1Name
        author1Email
        author1InstitutionalAffiliation
        coAuthor1Name
        coAuthor1Email
        coAuthor1InstitutionalAffiliation
        abstract2Title
        author2Name
        author2Email
        author2InstitutionalAffiliation
        coAuthor2Name
        coAuthor2Email
        coAuthor2InstitutionalAffiliation
        abstract3Title
        author3Name
        author3Email
        author3InstitutionalAffiliation
        coAuthor3Name
        coAuthor3Email
        coAuthor3InstitutionalAffiliation
        abstract4Title
        author4Name
        author4Email
        author4InstitutionalAffiliation
        coAuthor4Name
        coAuthor4Email
        coAuthor4InstitutionalAffiliation
        commentatorName
        commentatorEmail
        commentatorInstitutionalAffiliation
        author5Name
        author5Email
        author5InstitutionalAffiliation
        author6Name
        author6Email
        author6InstitutionalAffiliation
        author6Name
        author6Email
        author6InstitutionalAffiliation
        author7Name
        author7Email
        author7InstitutionalAffiliation
        author8Name
        author8Email
        author8InstitutionalAffiliation
      }
    }
  }
}
</static-query>

<script>
import presenterSection from "./presenterSection";
export default {
  components: {
    presenterSection
  },
  props: ["num"],
  computed: {
    filter() {
      const num = this.num;
      const program = this.$static.program.edges;
      const filteredProgram = program.filter(
        session => session.node.sessionGroup === num
      );

      return filteredProgram;
    }
  },
  methods: {
    toggleView() {
      this.toggle = !this.toggle;
    }
  }
};
</script>

<style lang="scss">
.simple-view {
  padding: 0.25rem 0.5rem;
  margin-bottom: 1rem;
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  cursor: pointer;
  background: none;
  border: 1px solid currentColor;
  border-radius: 4px;
  .dark & {
    color: $textDark;
  }
  .bright & {
    color: $textBright;
  }
  &:hover,
  &:focus {
    .dark & {
      color: $accent;
      border-color: $accent;
      transition: all 0.2s ease-in-out;
    }
    .bright & {
      color: $accent;
      border-color: $accent;
      transition: all 0.2s ease-in-out;
    }
  }
}
h3 {
  font-size: 2rem;
}
.meta-container {
  display: flex;
  justify-content: space-between;
  .label {
    margin-top: 0;
  }
}
.organizer-container p:first-child {
  margin-top: 0;
}
.session {
  padding: 2rem;
  margin-bottom: 1rem;
  border: 1px solid;
  .dark & {
    border-color: $sidebarDark;
  }
  .bright & {
    border-color: $sidebarBright;
  }
  border-radius: 4px;
  @include box-shadow(small);
}
.label {
  display: inline-block;
  padding: 0.25rem;
  margin: 1rem 0 0;
  font-size: 80%;
  border-radius: 4px;
  .dark & {
    background-color: $sidebarDark;
  }
  .bright & {
    background-color: $sidebarBright;
  }
}

.name {
  margin: 0.5rem 0 0;
}

.affiliation {
  margin: 0 0 0.5rem;
  font-size: 80%;
}
.presenters {
  div:last-child p:last-child {
    margin-bottom: 0;
  }
}

.sponsorship {
  margin-bottom: 0;
  font-style: italic;
}
</style>