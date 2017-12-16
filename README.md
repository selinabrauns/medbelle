Node environment version: 5.12.0
cd into medbelle dir and run command: yarn
then run command: yarn start


Missing things in layout/design and features:
- on first load user should only see header and login fields
- if login succeeds user gets to activity overview
- for each activity there should be an ActivityCard, so that on overview screen you have a grid of cards
- sorted according to creation/update time of cards as a default
- first card is empty and just shows a "plus" icon, on click the card shows same layout as the other cards, except that
instead of values you hav inputs where you can fill in your data, instead of edit and delete button at the bottom you have
a save button
- underneath page header there should be several inputfields for sorting and filtering options, cards get sorted/filtered on
typing immediately. (For scaling I would propose a frontend implementation for this feature, for bigger amount of data backend implementation
for performance reasons)
- if you want to edit card, click edit button in card below, values in respective card becomes inputfields, where you can edit the values.
- cards should have a quick swipe up animation if they are first loaded
- cards should show activity image and more informations (given by API)
- on click on logout icon in header (right side) redirect to login


Missing things in technical setup:
- finishing redux implementation
- proper error handling also on UI level

Things that should be implemented in "real life" as well:
- jsDocs, sassDocs
- unit testing
- environment variables and respective build processes for different staging
