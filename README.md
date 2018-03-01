# Work Items

## Overview

Strategic Machines connects businesses to the conversational economy. The marketplace is where compelling conversations are built.

This applications displays work items posted to the marketplace of Strategic Machines. The marketplace repos contain a variety of applications supporting customer messaging activity. The work items are active 'micro projects', available for developers, designers and software quality engineers to address. The market is dynamic, and is part of a closed membership network attracting top developers for highly strategic projects for clients


## Getting set up and running.

Here are _detailed instructions_ on how to clone this
repository and get the application running. On the section after this one you'll find a general overview of the application's __current expected behavior__.

1. In your computer's terminal, navigate to the directory of your choice and clone this repository.
    - When you're in the directory of your choice, paste this command into your terminal: `git clone https://github.com/strategicmarket/workitems.git` then hit `Enter`.

1. Once you've cloned the repository, you should see __two directories__ at the root level: one named `server` and another named `client`. Go into each of these directories and run the command `npm install` inside the terminal.
    - For the sake of clarity, this means __you'll be running__ `npm install` __twice__; once inside `server` and another inside `client`. You can do this one at a time, or you can open a second tab in your terminal and run these commands simultaneously on two separate tabs (the latter approach is suggested considering that for the application to run, two terminal windows or tabs will be needed).

1. Once `npm install` is finished running in the `server` directory, then
    1. At the root level, __change the name of the__ `configEx` __directory to__ `config`.
      1. Go into `config.json` and paste an authentication token inside the empty string. A token will be provided by one of the organization's admin upon request. __Without a token, the application won't work__.
    1. Create a `.env` file __at the root level__. In this file, paste the following variable: `TESTING=false`. This variable will be useful when running tests.
    1. Start MongoDB in your computer. You can do this by opening a new terminal tab, or window, and running the `mongod` command. __Make sure MongoDB is running before starting the server__.
    1. Once Mongo is running, run `npm start` __inside the__ `server` __directory__. This will start the server.
1. In the `client` directory, all you have to do is run `npm start` once `npm install` is done. This will automatically open the application on your browser.

## A note on current expected behavior.

The application is a working prototype, and is thus tailored to retrieve and render data from GitHub repositories and issues for __this account only__. If you wish to fetch and render repositories from another GitHub account, you may do so by making a
slight change in the source code; however, you will not be able to see each repository's issues (assuming there are any). This is because in order for issues to be rendered, they need to be matched with documents in the database; that is to say, if there's not a document (in the database) for each issue retrieved from GitHub, there will be no match and the issue won't be rendered. When you start the server, data will be automatically initialized into MongoDB; however, this data currently only matches issues in this repository. This behavior may or may not change in future versions of this application. For now, just keep in mind its present limitations.
