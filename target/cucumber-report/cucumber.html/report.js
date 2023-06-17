$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("homepage.feature");
formatter.feature({
  "line": 1,
  "name": "HomePage functionality",
  "description": "\r\nAs a user, I want to verify HomePage functionality",
  "id": "homepage-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Verify the top menu on the homepage",
  "description": "",
  "id": "homepage-functionality;verify-the-top-menu-on-the-homepage",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on Accept Cookies",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on menu \"\u003cmenu\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Text is displayed on the page is \"\u003cmenu\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "homepage-functionality;verify-the-top-menu-on-the-homepage;",
  "rows": [
    {
      "cells": [
        "menu"
      ],
      "line": 19,
      "id": "homepage-functionality;verify-the-top-menu-on-the-homepage;;1"
    },
    {
      "cells": [
        "Online Slots"
      ],
      "line": 20,
      "id": "homepage-functionality;verify-the-top-menu-on-the-homepage;;2"
    },
    {
      "cells": [
        "Live Casino"
      ],
      "line": 21,
      "id": "homepage-functionality;verify-the-top-menu-on-the-homepage;;3"
    },
    {
      "cells": [
        "Casino"
      ],
      "line": 22,
      "id": "homepage-functionality;verify-the-top-menu-on-the-homepage;;4"
    },
    {
      "cells": [
        "Slingo"
      ],
      "line": 23,
      "id": "homepage-functionality;verify-the-top-menu-on-the-homepage;;5"
    },
    {
      "cells": [
        "Online Bingo"
      ],
      "line": 24,
      "id": "homepage-functionality;verify-the-top-menu-on-the-homepage;;6"
    },
    {
      "cells": [
        "Free Games"
      ],
      "line": 25,
      "id": "homepage-functionality;verify-the-top-menu-on-the-homepage;;7"
    },
    {
      "cells": [
        "Poker"
      ],
      "line": 26,
      "id": "homepage-functionality;verify-the-top-menu-on-the-homepage;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9716864600,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify the top menu on the homepage",
  "description": "",
  "id": "homepage-functionality;verify-the-top-menu-on-the-homepage;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on Accept Cookies",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on menu \"Online Slots\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Text is displayed on the page is \"Online Slots\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 205361300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnAcceptCookies()"
});
formatter.result({
  "duration": 289720900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Online Slots",
      "offset": 17
    }
  ],
  "location": "HomePageSteps.iClickOnMenu(String)"
});
formatter.result({
  "duration": 2003018900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Online Slots",
      "offset": 34
    }
  ],
  "location": "HomePageSteps.textIsDisplayedOnThePageIs(String)"
});
formatter.result({
  "duration": 84685900,
  "status": "passed"
});
formatter.after({
  "duration": 1523831000,
  "status": "passed"
});
formatter.before({
  "duration": 6595790500,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify the top menu on the homepage",
  "description": "",
  "id": "homepage-functionality;verify-the-top-menu-on-the-homepage;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on Accept Cookies",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on menu \"Live Casino\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Text is displayed on the page is \"Live Casino\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 26200,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnAcceptCookies()"
});
formatter.result({
  "duration": 128640300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Live Casino",
      "offset": 17
    }
  ],
  "location": "HomePageSteps.iClickOnMenu(String)"
});
formatter.result({
  "duration": 228996200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Live Casino",
      "offset": 34
    }
  ],
  "location": "HomePageSteps.textIsDisplayedOnThePageIs(String)"
});
formatter.result({
  "duration": 1189339200,
  "status": "passed"
});
formatter.after({
  "duration": 937620400,
  "status": "passed"
});
formatter.before({
  "duration": 4736528300,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify the top menu on the homepage",
  "description": "",
  "id": "homepage-functionality;verify-the-top-menu-on-the-homepage;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on Accept Cookies",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on menu \"Casino\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Text is displayed on the page is \"Casino\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 24200,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnAcceptCookies()"
});
formatter.result({
  "duration": 145853800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Casino",
      "offset": 17
    }
  ],
  "location": "HomePageSteps.iClickOnMenu(String)"
});
formatter.result({
  "duration": 341924400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Casino",
      "offset": 34
    }
  ],
  "location": "HomePageSteps.textIsDisplayedOnThePageIs(String)"
});
formatter.result({
  "duration": 470248600,
  "status": "passed"
});
formatter.after({
  "duration": 897390900,
  "status": "passed"
});
formatter.before({
  "duration": 4598707000,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify the top menu on the homepage",
  "description": "",
  "id": "homepage-functionality;verify-the-top-menu-on-the-homepage;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on Accept Cookies",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on menu \"Slingo\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Text is displayed on the page is \"Slingo\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 23800,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnAcceptCookies()"
});
formatter.result({
  "duration": 139929100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Slingo",
      "offset": 17
    }
  ],
  "location": "HomePageSteps.iClickOnMenu(String)"
});
formatter.result({
  "duration": 258743800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Slingo",
      "offset": 34
    }
  ],
  "location": "HomePageSteps.textIsDisplayedOnThePageIs(String)"
});
formatter.result({
  "duration": 870044200,
  "status": "passed"
});
formatter.after({
  "duration": 941533500,
  "status": "passed"
});
formatter.before({
  "duration": 5193971900,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Verify the top menu on the homepage",
  "description": "",
  "id": "homepage-functionality;verify-the-top-menu-on-the-homepage;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on Accept Cookies",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on menu \"Online Bingo\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Text is displayed on the page is \"Online Bingo\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 514900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnAcceptCookies()"
});
formatter.result({
  "duration": 135079200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Online Bingo",
      "offset": 17
    }
  ],
  "location": "HomePageSteps.iClickOnMenu(String)"
});
formatter.result({
  "duration": 204515500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Online Bingo",
      "offset": 34
    }
  ],
  "location": "HomePageSteps.textIsDisplayedOnThePageIs(String)"
});
formatter.result({
  "duration": 289192700,
  "status": "passed"
});
formatter.after({
  "duration": 954385800,
  "status": "passed"
});
formatter.before({
  "duration": 5409672600,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Verify the top menu on the homepage",
  "description": "",
  "id": "homepage-functionality;verify-the-top-menu-on-the-homepage;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on Accept Cookies",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on menu \"Free Games\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Text is displayed on the page is \"Free Games\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 20500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnAcceptCookies()"
});
formatter.result({
  "duration": 148589700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Free Games",
      "offset": 17
    }
  ],
  "location": "HomePageSteps.iClickOnMenu(String)"
});
formatter.result({
  "duration": 966372300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Free Games",
      "offset": 34
    }
  ],
  "location": "HomePageSteps.textIsDisplayedOnThePageIs(String)"
});
formatter.result({
  "duration": 251537600,
  "status": "passed"
});
formatter.after({
  "duration": 944558900,
  "status": "passed"
});
formatter.before({
  "duration": 5261248000,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Verify the top menu on the homepage",
  "description": "",
  "id": "homepage-functionality;verify-the-top-menu-on-the-homepage;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on Accept Cookies",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on menu \"Poker\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Text is displayed on the page is \"Poker\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 27100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnAcceptCookies()"
});
formatter.result({
  "duration": 137093600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Poker",
      "offset": 17
    }
  ],
  "location": "HomePageSteps.iClickOnMenu(String)"
});
formatter.result({
  "duration": 671778200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Poker",
      "offset": 34
    }
  ],
  "location": "HomePageSteps.textIsDisplayedOnThePageIs(String)"
});
formatter.result({
  "duration": 375172900,
  "status": "passed"
});
formatter.after({
  "duration": 933760000,
  "status": "passed"
});
});