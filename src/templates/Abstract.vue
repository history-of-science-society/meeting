<template>
  <Layout>
    <article class="">
      <header class="header">
        <div class="meta-container">
          <p class="label">{{ $page.program.sessionType }}</p>
          <p class="label" v-if="$page.program.joint === 'Yes'">
            <a href="https://www.historyoftechnology.org/">SHOT</a>
            Joint Session
          </p>
        </div>
        <h2 class="session-title">
          {{ $page.program.sessionTitle }}
        </h2>
      </header>
      <section class="detail">
        <div class="organizer-container">
          <!-- Organizers -->
          <p v-if="$page.program.sponsorship" class="label">Sponsor</p>
          <p v-if="$page.program.sponsorship" class="name">
            {{ $page.program.sponsorship }}
          </p>

          <p v-if="$page.program.coOrganizerName" class="label">Organizers</p>
          <p v-else-if="$page.program.organizerName" class="label">Organizer</p>

          <p v-if="$page.program.organizerName" class="name">
            {{ $page.program.organizerName }}
          </p>
          <p
            v-if="$page.program.organizerInstitutionalAffiliation"
            class="affiliation"
          >
            {{ $page.program.organizerInstitutionalAffiliation }}
          </p>
          <p v-if="$page.program.coOrganizerName" class="name">
            {{ $page.program.coOrganizerName }}
          </p>
          <p
            v-if="$page.program.coOrganizerInstitutionalAffiliation"
            class="affiliation"
          >
            {{ $page.program.coOrganizerInstitutionalAffiliation }}
          </p>
          <!-- Chair -->
          <p v-if="$page.program.chairName" class="label">Chair</p>

          <p v-if="$page.program.chairName" class="name">
            {{ $page.program.chairName }}
          </p>
          <p
            v-if="$page.program.chairInstitutionalAffiliation"
            class="affiliation"
          >
            {{ $page.program.chairInstitutionalAffiliation }}
          </p>
        </div>
      </section>
      <metadataParser
        :topic="$page.program.sessionTopic"
        :chronology="$page.program.sessionChronology"
        :geography="$page.program.sessionGeography"
        :keywords="$page.program.keywords"
      />
      <section v-if="$page.program.sessionAbstract" class="session-abstract">
        <p class="label">Session Abstract</p>
        <p v-html="$page.program.sessionAbstract"></p>
      </section>
      <div class="presenters">
        <!-- Presenter 1 -->
        <abstract-section
          num="1"
          :author="$page.program.author1Name"
          :institution="$page.program.author1InstitutionalAffiliation"
          :title="$page.program.abstract1Title"
          :coauthor="$page.program.coAuthor1Name"
          :coinstitution="$page.program.coAuthor1InstitutionalAffiliation"
          :abstract="$page.program.abstract1"
          :topic="$page.program.abstract1Topic"
          :chronology="$page.program.abstract1Chronology"
          :geography="$page.program.abstract1Geography"
          :keywords="$page.program.abstract1SelfDesignatedKeywords"
        />
        <!-- Presenter 2 -->
        <abstract-section
          num="2"
          :author="$page.program.author2Name"
          :institution="$page.program.author2InstitutionalAffiliation"
          :title="$page.program.abstract2Title"
          :coauthor="$page.program.coAuthor2Name"
          :coinstitution="$page.program.coAuthor2InstitutionalAffiliation"
          :abstract="$page.program.abstract2"
          :topic="$page.program.abstract2Topic"
          :chronology="$page.program.abstract2Chronology"
          :geography="$page.program.abstract2Geography"
          :keywords="$page.program.abstract2SelfDesignatedKeywords"
        />
        <!-- Presenter 3 -->
        <abstract-section
          num="3"
          :author="$page.program.author3Name"
          :institution="$page.program.author3InstitutionalAffiliation"
          :title="$page.program.abstract3Title"
          :coauthor="$page.program.coAuthor3Name"
          :coinstitution="$page.program.coAuthor3InstitutionalAffiliation"
          :abstract="$page.program.abstract3"
          :topic="$page.program.abstract3Topic"
          :chronology="$page.program.abstract3Chronology"
          :geography="$page.program.abstract3Geography"
          :keywords="$page.program.abstract3SelfDesignatedKeywords"
        />
        <!-- Presenter 4 -->
        <abstract-section
          num="4"
          :author="$page.program.author4Name"
          :institution="$page.program.author4InstitutionalAffiliation"
          :title="$page.program.abstract4Title"
          :coauthor="$page.program.coAuthor4Name"
          :coinstitution="$page.program.coAuthor4InstitutionalAffiliation"
          :abstract="$page.program.abstract4"
          :topic="$page.program.abstract4Topic"
          :chronology="$page.program.abstract4Chronology"
          :geography="$page.program.abstract4Geography"
          :keywords="$page.program.abstract4SelfDesignatedKeywords"
        />
        <!-- Commentator -->
        <abstract-section
          :author="$page.program.commentatorName"
          :institution="$page.program.commentatorInstitutionalAffiliation"
        />
        <!-- Presenter 5 -->
        <abstract-section
          num="5"
          :author="$page.program.author5Name"
          :institution="$page.program.author5InstitutionalAffiliation"
          :title="$page.program.abstract5Title"
          :coauthor="$page.program.coAuthor5Name"
          :coinstitution="$page.program.coAuthor5InstitutionalAffiliation"
          :abstract="$page.program.abstract5"
          :topic="$page.program.abstract5Topic"
          :chronology="$page.program.abstract5Chronology"
          :geography="$page.program.abstract5Geography"
          :keywords="$page.program.abstract5SelfDesignatedKeywords"
        />
        <!-- Presenter 6 -->
        <abstract-section
          num="6"
          :author="$page.program.author6Name"
          :institution="$page.program.author6InstitutionalAffiliation"
          :title="$page.program.abstract6Title"
          :coauthor="$page.program.coAuthor6Name"
          :coinstitution="$page.program.coAuthor6InstitutionalAffiliation"
          :abstract="$page.program.abstract6"
          :topic="$page.program.abstract6Topic"
          :chronology="$page.program.abstract6Chronology"
          :geography="$page.program.abstract6Geography"
          :keywords="$page.program.abstract6SelfDesignatedKeywords"
        />
        <!-- Presenter 7 -->
        <abstract-section
          num="7"
          :author="$page.program.author7Name"
          :institution="$page.program.author7InstitutionalAffiliation"
          :title="$page.program.abstract7Title"
          :coauthor="$page.program.coAuthor7Name"
          :coinstitution="$page.program.coAuthor7InstitutionalAffiliation"
          :abstract="$page.program.abstract7"
          :topic="$page.program.abstract7Topic"
          :chronology="$page.program.abstract7Chronology"
          :geography="$page.program.abstract7Geography"
          :keywords="$page.program.abstract7SelfDesignatedKeywords"
        />
        <!-- Presenter 8 -->
        <abstract-section
          num="8"
          :author="$page.program.author8Name"
          :institution="$page.program.author8InstitutionalAffiliation"
          :title="$page.program.abstract8Title"
          :coauthor="$page.program.coAuthor8Name"
          :coinstitution="$page.program.coAuthor8InstitutionalAffiliation"
          :abstract="$page.program.abstract8"
          :topic="$page.program.abstract8Topic"
          :chronology="$page.program.abstract8Chronology"
          :geography="$page.program.abstract8Geography"
          :keywords="$page.program.abstract8SelfDesignatedKeywords"
        />
        <!-- Presenter 9 -->
        <abstract-section
          num="9"
          :author="$page.program.author9Name"
          :institution="$page.program.author9InstitutionalAffiliation"
          :title="$page.program.abstract9Title"
          :coauthor="$page.program.coAuthor9Name"
          :coinstitution="$page.program.coAuthor9InstitutionalAffiliation"
          :abstract="$page.program.abstract9"
          :topic="$page.program.abstract9Topic"
          :chronology="$page.program.abstract9Chronology"
          :geography="$page.program.abstract9Geography"
          :keywords="$page.program.abstract9SelfDesignatedKeywords"
        />
      </div>
    </article>
  </Layout>
</template>

<page-query>
query Program ($id: ID!) {
  program (id: $id) { 
    sessionTitle
    sessionAbstract
    joint
    sponsorship
    sessionType
    sessionTopic
    sessionChronology
    sessionGeography
    keywords
    organizerName
    organizerInstitutionalAffiliation
    coOrganizerName
    coOrganizerInstitutionalAffiliation
    chairName
    chairInstitutionalAffiliation
    author1Name
    author1InstitutionalAffiliation
    coAuthor1Name
    coAuthor1InstitutionalAffiliation
    abstract1Title
    abstract1
    abstract1Topic
    abstract1Geography
    abstract1Chronology
    abstract1SelfDesignatedKeywords
    author2Name
    author2InstitutionalAffiliation
    coAuthor2Name
    coAuthor2InstitutionalAffiliation
    abstract2Title
    abstract2
    abstract2Topic
    abstract2Geography
    abstract2Chronology
    abstract2SelfDesignatedKeywords
    author3Name
    author3InstitutionalAffiliation
    coAuthor3Name
    coAuthor3InstitutionalAffiliation
    abstract3Title
    abstract3
    abstract3Topic
    abstract3Geography
    abstract3Chronology
    abstract3SelfDesignatedKeywords
    author4Name
    author4InstitutionalAffiliation
    coAuthor4Name
    coAuthor4InstitutionalAffiliation
    abstract4Title
    abstract4
    abstract4Topic
    abstract4Geography
    abstract4Chronology
    abstract4SelfDesignatedKeywords
    commentatorName
    commentatorInstitutionalAffiliation
    author5Name
    author5InstitutionalAffiliation
    abstract5Title
    abstract5
    abstract5Topic
    abstract5Geography
    abstract5Chronology
    abstract5SelfDesignatedKeywords
    author6Name
    author6InstitutionalAffiliation
    abstract6Title
    abstract6
    abstract6Topic
    abstract6Geography
    abstract6Chronology
    abstract6SelfDesignatedKeywords
    author7Name
    author7InstitutionalAffiliation
    abstract7Title
    abstract7
    abstract7Topic
    abstract7Geography
    abstract7Chronology
    abstract7SelfDesignatedKeywords
    author8Name
    author8InstitutionalAffiliation
    abstract8Title
    abstract8
    abstract8Topic
    abstract8Geography
    abstract8Chronology
    abstract8SelfDesignatedKeywords
    author9Name
    author9InstitutionalAffiliation
    abstract9Title
    abstract9
    abstract9Topic
    abstract9Geography
    abstract9Chronology
    abstract9SelfDesignatedKeywords
   }
}
</page-query>

<script>
import abstractSection from "~/components/abstractSection";
import metadataParser from "~/components/metadataParser";
export default {
  components: {
    abstractSection,
    metadataParser,
  },

  metaInfo() {
    return {
      title: this.$page.program.sessionTitle,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.program.sessionAbstract.substring(0, 157) + "...",
        },
        { itemprop: "name", content: this.$page.program.sessionTitle },
        {
          itemprop: "description",
          content: this.$page.program.sessionAbstract.substring(0, 157) + "...",
        },
        {
          itemprop: "image",
          content: "https://hssmeeting.org/hss-meta.jpg",
        },
        { property: "og:title", content: this.$page.program.sessionTitle },
        { property: "og:url", content: "https://hssmeeting.org" },
        {
          property: "og:description",
          content: this.$page.program.sessionAbstract.substring(0, 157) + "...",
        },
        {
          property: "og:image",
          content: "https://hssmeeting.org/hss-meta.jpg",
        },
        { name: "twitter:title", content: this.$page.program.sessionTitle },
        {
          name: "twitter:description",
          content: this.$page.program.sessionAbstract.substring(0, 157) + "...",
        },
        {
          name: "twitter:image",
          content: "https://hssmeeting.org/hss-meta.jpg",
        },
        { name: "twitter:site", content: "@hssonline" },
        { name: "twitter:creator", content: "@theroyalfig" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
};
</script>

<style lang="scss">
.session-title {
  margin: 1.25rem 0 0;
  font-size: 1.5rem;
}

.meta-container {
  display: flex;
  justify-content: space-between;
  div:first-child {
    .label {
      margin-top: 0;
    }
  }

  .label {
    margin-top: 0;
    margin-right: 1rem;
    &:last-child {
      margin-right: 0;
    }
  }
}
.label + p {
  margin-top: 0.25rem;
}
.organizer-container {
  margin-top: 1.25rem;
  p:first-child {
    margin-top: 0;
  }
}

.session {
  position: relative;
}

.label {
  display: inline-block;
  padding: 0.25rem;
  margin: 1rem 0 0;
  font-size: 80%;
  font-weight: 300;
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
  font-size: 85%;
  font-weight: 300;
}
.presenters {
  .label {
    div:last-child p:last-child {
      margin-bottom: 0;
    }
  }
}

.sponsorship {
  margin-bottom: 0;
  font-style: italic;
}
</style>
