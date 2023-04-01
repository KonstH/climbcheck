# ClimbCheck

:warning: **This repo is now deprecated, as the days of booking a timeslot on the climbing site have come to an end. Running the app will not yield any results.** :warning:


Small set of scripts which fetch the available timeslots at my local climbing gym for either today or tomorrow.

Things you need to run the app:

```
node.js
```

### Running the app

To run the app locally:

1. Run `npm install` in the project directory to get all necessary packages
2. `cd` into either the `annex` folder or the `main` folder, depending on which section of the climbing gym you want to check the availabilities
3. Run either `today.js` or `tmrw.js` depending on if you want to see the available spots for today or tomorrow



## Example runs
- *Get available timeslots in the main floor section of the gym for tomorrow*

1. `$ cd main`

2. `$ node tmrw.js`

- *Get available timeslots in the annex section of the gym for today*

1. `$ cd annex`

2. `$ node today.js`

## Notes
- So far the scripts are very simple, and kinda limited. As of right now, the project is more so a proof of concept.
- The scripts are dependent on the site's structure. They could break if the site's reservation process changes.
