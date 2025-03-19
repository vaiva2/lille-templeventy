Vaiva's lovely custom static-site generator template that she uses for all her fun lil projects

# REFERENCES
hosted on [neocities](https://neocities.org/)

based off of [flamed fury's 11ty guide](https://flamedfury.com/guides/11ty-homepage-neocities/)

automatically builds and deploys using [bret comnes' deploy-to-neocities tool](https://github.com/bcomnes/deploy-to-neocities)

## ALSO FREQUENTLY USED
[bearblog](https://docs.bearblog.dev/) or [are.na](https://dev.are.na/documentation/channels) as a mobile-friendly host for posting blogs, photos, whatever

# STEPS AFTER COPYING
1. Ctrl + F and update name from "11ty-template"
2. Connect to Neocities + Porkbun
3. Github action to automatically deploy to Neocities upon updating:
  * Add Neocities API token into repo secrets
  * Create ```.github / workflows / deploy-to-neocities.yml``` at project root
    * ```
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
                neocities_supporter: true # set this to true if you have a supporter account and want to bypass unsuported files filter.
                preview_before_deploy: true # print a deployment plan prior to waiting for files to upload.
                dist_dir: public
        ```