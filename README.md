Lille Templeventy is my custom + bare-bones static-site gen template that I use for all (or most) of my fun lil projects. It's versatile and simple with no froo froo nonsense, just the way the digital overseers intended :)

Demo deploys to [lilletempleventy.vaiva.space](https://lilletempleventy.vaiva.space).

# REFERENCES
hosted on [neocities](https://neocities.org/)

based off of [flamed fury's 11ty guide](https://flamedfury.com/guides/11ty-homepage-neocities/)

automatically builds and deploys using [bret comnes' deploy-to-neocities tool](https://github.com/bcomnes/deploy-to-neocities)

## OPTIONAL
[bearblog](https://docs.bearblog.dev/) or [are.na](https://dev.are.na/documentation/channels) as a mobile-friendly host for posting blogs, photos, whatever

in this template i've included my preferred minimalist css reset, but if in a rush to make a basic text site look shnazzy, [simple.css](https://github.com/kevquirk/simple.css?tab=readme-ov-file) is a nice option.

# TODO
* transition from github pages to neocities
* add component library
* manifesto on the beauty of simple tools

# STEPS AFTER COPYING
* Ctrl + F and update name from "lille-templeventy"
* Connect DNS spaghetti to Neocities and wherever your custom domain is
* Before building, go to the 11ty config file and choose which output you prefer, depending on where you're hosting
* If not hosting with github pages, delete all the redundant stuff in root that is copied from the src directory (index.html, css, etc).
  * Better yet just don't use github pages because you have to manually rebuild every time for it to output from src to root and it makes no sense why so just use Neocities. Plus it's not owned by Microsoft.
* Github action to automatically deploy to Neocities upon updating:
  * Add Neocities API token into repo secrets
  * Create ```.github / workflows / deploy-to-neocities.yml``` at project root
*  Use the following YAML for deployment:

```yaml
name: Deploy to neocities

# only run on changes to main. Use main or master depending on whatever your default branch is called.
on:
  push:
    branches:
      - main

concurrency: # prevent concurrent deploys doing strange things
  group: deploy-to-neocities
  cancel-in-progress: true

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v4
    # Set up any tools and build steps here
    # This example uses a Node.js toolchain to build a site
    - name: Use Node.js
      uses: actions/setup-node@v4
      with:
        node-version: lts/*
    # If you have a different build process, replace this with your own build steps
    - name: Install deps and build
      run: |
        npm i
        npm run build
    # When the dist_dir is ready, deploy it to neocities
    - name: Deploy to neocities
      uses: bcomnes/deploy-to-neocities@v3
      with:
        api_key: ${{ secrets.NEOCITIES_API_TOKEN }}
        cleanup: true
        neocities_supporter: true # set this to true if you have a supporter account and want to bypass unsupported files filter.
        preview_before_deploy: true # print a deployment plan prior to waiting for files to upload.
        dist_dir: public
```
* ```npm run build``` or ```npm run start``` to enjoy. best served with a [frutiger aero playlist](https://youtu.be/ID_aSxk-1FM?si=16kGAh7t3VPyxoHH)