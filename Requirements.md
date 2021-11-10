# Software Requirements

1. What is the vision of this product?\
   An app for tracking personal garden information with the ability to record specific crop and pest data.

2. What pain point does this project solve?\
   Easier tracking for garden data with accurate date, pest, and weather information.

3. Why should we care about your product?\
   Because you want to grow better turnips.

## Scope (IN/OUT)

### Features

IN

- Enter plant information related to type, date, harvest time, and growing requirements.
- Record pests with weather and dates.
- Track rainfall and water requirements.
- Provide feedback from previous harvests.

OUT

- No forecasting or data analytics.
- No excessive UI that detracts from data collection and usage.

### Minimum Viable Product (MVP)

What will your MVP functionality be?

- To record plant information.
- Record pest sightings
- Provide simple plant feedback through clean user interface.

### Stretch Goals

- Drawing your own garden layout.
- Harvest information tracking and cost calculations

### Functional Requirements

1. User can input and update plant data.
2. User can record a pest sighting.
3. User can inspect known garden pests and current plants.

### Data Flow

- Main high level state of Garden inventory and current weather.
- Main data passed down to components for displaying various information.

### Non-Functional Requirements

1. Security. Auth0 login access to control user authorization and customize user experience.
2. Simple useability for users.
