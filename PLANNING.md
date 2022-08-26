# Yanks-22 Plan

## Team Overview

**MVP**
- Display index of team's roster
- Ability to toggle the roster index for active (26-man), full 40 man, and inactives (IL, MiLB optioned etc)
- Live team news sidebar
- Box for team bio (stadium, founded, owner, manager, WS titles, etc)
- Player cards should look like actual baseball cards
- Player cards should be clickable and render a show page for that card

**MVP Roadmap**
- GET requests from api-baseball for the roster info
- Have stylized and stat-based player card component & map the roster response data over it
- Slight shadow styling onHover for player cards. Fire a GET request for individual player info when you click their card

_Components_
- TeamOverview
    - Team Bio
    - Team News
    - Next Game
    - TeamIndex
        - Player