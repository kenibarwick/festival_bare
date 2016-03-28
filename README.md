# Barebone Ionic Material
This project is a generic Ionic application with Material design and ingredients that can be part of every modern Ionic application.

## Dependecies, Run and Build

### Install NodeJS dependencies

Run `npm install` to install all needed dependencies.

### Install Plugins and Javascript dependencies
#### Linux/MacOX
Run `./install.sh` to install all needed plugins and dependencies

#### Windows Users
Similarly, Windows users should run `install.bat`.

### Run the app
Use `grunt serve -l` to run the app in browser and watch for changes in code

or

use `grunt serve` to just run the app for a browser preview

or

use `grunt serve --lab` to run the app in a browser on two platforms at the same time.

### Add a platform

```bash
$ grunt platform:add:<platform>
```

Supported Cordova platforms:

```bash
$ grunt platform:add:ios
$ grunt platform:add:android
```

### Build the app

```bash
$ grunt build
```

### Emulate the app on simulator
iOS:

```bash
$ grunt emulate:ios
```

Android:

```bash
$ grunt emulate:android
```

For more information, see [Ionic Framework Generator's instructions](https://github.com/diegonetto/generator-ionic).

### Plugins installation

Use the following commands and install all the plugins required by the app:
```bash
$ cordova plugin add {plugin id or url}
```

eg:

```bash
cordova plugin add cordova-plugin-inappbrowser
```

#### Used Cordova plugins
In case that the required Cordova plugins are not installed while installing NodeJS dependencies, Cordova's command mentioned previously can be used to install the following plugins:

* **cordova-plugin-device** - This plugin defines a global device object, which describes the device's hardware and software.
* **cordova-plugin-console** - This plugin is meant to ensure that console.log() is as useful as it can be. It adds additional function for iOS, Ubuntu, Windows Phone 8, and Windows.
* **com.ionic.keyboard** - It provides functions to make interacting with the keyboard easier, and fires events to indicate that the keyboard will hide/show.
* **cordova-plugin-inappbrowser** - Provides a web browser view. It could be used to open images, access web pages, and open PDF files.
* **com.phonegap.plugins.PushPlugin** - This plugin is for use with Cordova, and allows your application to receive push notifications on Amazon Fire OS, Android, iOS, Windows Phone and Windows8 devices (https://github.com/phonegap-build/PushPlugin.git).
* **de.appplant.cordova.plugin.email-composer@0.8.2** - The plugin provides access to the standard interface that manages the editing and sending an email message (https://github.com/katzer/cordova-plugin-email-composer.git).
* **cordova-plugin-geolocation** - Grab the current location of the user, or grab continuous location changes.
* **nl.x-services.plugins.socialsharing** - Share images, text, messages via Facebook, Twitter, Email, SMS, WhatsApp, etc using this plugin (https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin.git).
* **cordova-plugin-whitelist** - This plugin implements a whitelist policy for navigating the application webview on Cordova 4.0
* **cordova-plugin-transport-security** - This plugin allows 'Arbitrary Loads' by adding a declaration to the Info.plist file to bypass the iOS 9 App Transport Security
* **cordova-plugin-network-information** - This plugin provides an implementation of an old version of the Network Information API. It provides information about the device's cellular and wifi connection, and whether the device has an internet connection.

## Demo
Install [Ionic View](http://view.ionic.io/) and preview the app on your mobile device using the following Ionic View ID: `72a8da18`

## Documentation
* [Barebone Ionic Material Quick Start Guide](https://docs.google.com/document/d/1hLZacl1yryJVH4Wvwpa3VEeBvfzKDROl21qaXcaEU2g/edit?usp=sharing)

## Changelog
```
1.10 - February 09, 2016
- Ionic update to v1.2.4 as Ionic 1.2 uses native scrolling by default.
- Ionic CLI update to v1.7.13
- Addition of task in Gruntfile to minify and obfuscate CSS, HTML and Javascript files
- Email composer fix for Android 6

1.9 - December 22, 2015
- Fix on ConnectionType returning Connection.UNKNOWN (Android)
- Ionic update to v1.1.1
- Cordova CLI update to v5.4.1
- Ionic CLI update to v1.7.12
- ngCordova update to v0.1.23-alpha
- Support of android versions back to 4.0
- Plugins update
- Update of ionic-material library to its latest release
- Improved installation process for Win/Linux/MacOS
- README.md update with improved instructions on how to install, run, build the app.

1.8 - November 5, 2015
- Internet Connectivity check. Notifies user when internet connection problem occurs on fetching remote data.
- README.md update with improved instructions on how to install, run, build the app

1.7 - October 19, 2015
- Fix bouncing of the webview

1.6 - Sep 30, 2015
- Ionic updated to v1.1.0
- Cordova CLI update to v5.3.3
- Use of transport-security plugin. This plugin allows 'Arbitrary Loads' by adding a declaration to the Info.plist file to bypass the iOS 9 App Transport Security

1.5 - Aug 18, 2015
- Fix the "grunt serve" issue duo to version 1.0.1 of the "grunt-concurrent" module.

1.4 - July 31, 2015
- Cordova white list plugin added. This fixes network issues reported for android devices
- Ionic, Ionic CLI and Cordova references have been updated to their latest versions: 1.0.1, 1.6.3 and 5.1.1 respectively.

1.3 - June 22, 2015
- Minor fixes

1.2 - June 20, 2015
- Sharing article to Facebook, Twitter, Email and any other defined in the device service.

1.1 - June 15, 2015
- Location Screen which demonstrates the location service. It is watching and gets and displays the current location of the device.
- Sample screens demonstrating all the Form Elements and Layouts
- Sample screens demonstrating Tabs and all their available styles.

1.0 - June 10, 2015
- Initial release
```

## Third Party Licences
* [Apache License](http://www.apache.org/licenses/)
* [MIT License](https://opensource.org/licenses/MIT)
