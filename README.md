Lille Templeventy is my custom + bare-bones static-site gen template that I use for all (or most) of my fun lil projects. It's versatile and simple with no froo froo nonsense, just the way the digital overseers intended :)

# REFERENCES
hosted on [neocities](https://neocities.org/)

based off of [flamed fury's 11ty guide](https://flamedfury.com/guides/11ty-homepage-neocities/)

automatically builds and deploys using [bret comnes' deploy-to-neocities tool](https://github.com/bcomnes/deploy-to-neocities)

## OPTIONAL
[bearblog](https://docs.bearblog.dev/) or [are.na](https://dev.are.na/documentation/channels) as a mobile-friendly host for posting blogs, photos, whatever

if in a rush to make a basic text site look shnazzy, [simple.css](https://github.com/kevquirk/simple.css?tab=readme-ov-file) is a nice option. the global stylesheet i have in this template is basically a stripped-down version of what they offer

# STEPS AFTER COPYING
* Ctrl + F and update name from "lille-templeventy"
* Connect DNS spaghetti to Neocities and wherever your custom domain is
* Go to the 11ty config file and choose which output you prefer, depending on where you're hosting
* Github action to automatically deploy to Neocities upon updating:
  * Add Neocities API token into repo secrets
  * Create ```.github / workflows / deploy-to-neocities.yml``` at project root
* ```npm run build``` or ```npm run start``` to enjoy. best served with a [frutiger aero playlist](https://youtu.be/ID_aSxk-1FM?si=16kGAh7t3VPyxoHH)