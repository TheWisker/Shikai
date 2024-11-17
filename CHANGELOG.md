<h1 align="center">Shikai</h1>
<div align="center">
    <a href="https://github.com/TheWisker/Shikai">
        <img width="400" src="./assets/logo.png">
    </a>
</div>
<p align="center">Modern lightdm webkit2 theme</p>

<h2 align="center">Changelog</h2>

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.6.0] - 2024-11-17

Made some changes to help the project reach a more mature state

### Added
- Portuguese translation as in this [pull request](https://github.com/TheWisker/Shikai/pull/14)
- Default user and default session option in web-greeter.yml, under branding

### Changed
- Revamped the readme
- Demo wallpaper selection
- Synchronized wallpapers between windows when using greeter in multihead mode

### Fixed
- Typo when retrieving ligthdm.selected_user_hint, in Operation.js, which made such hint useless
- Was supposed to fix the delay to password prompt autofocus feature as it is only working on the web demo version but could not as explained in this [issue](https://github.com/JezerM/web-greeter/issues/86)

## [1.5.3] - 2023-09-03

Fixed the issue were when the hostname was too long it would push the clock out of bounds

### Added
- Nothing added

### Changed
- Some CSS realated to the hostname

### Fixed
- The [issue](https://github.com/TheWisker/Shikai/issues/11) were when the hostname was too long it would push the clock out of bounds

## [1.5.2] - 2023-07-21

Added scroll to the style page and improved and fixed the colorpickers

### Added
- Scroll to the style configuration page

### Changed
- Changed the colorpicker's styles to a darker scheme
- Centered the colorpicker evokers

### Fixed
- The issue were the colorpickers would clip when enabling scroll on the style configuration page
- Some minor style issues

## [1.5.1] - 2023-06-27

Patched the bug where certain keys did not work well in the password input

### Added
- Nothing added

### Changed
- No changes

### Fixed
- The bug where certain keys did not work well in the password input

## [1.5.0] - 2023-06-27

Changed password caret so it is more symmetric

### Added
- Translations for the two new setting entries

### Changed
- Default caret to a custom scripted caret

### Fixed
- No fixes

## [1.4.3] - 2023-06-22

Added LICENSE information to **Shikai**.

### Added
- License information
- General project information files
- Translation credits.js

### Changed
- No changes

### Fixed
- No fixes

## [1.4.2] - 2023-05-31

Fixed Arabic hint duplication for **Shikai**.

### Added
- Nothing added

### Changed
- No changes

### Fixed
- Fixed Arabic hint duplication

## [1.4.1] - 2023-05-30

Added Arabic language for **Shikai**.

### Added

- Added Arabic language with the help of @Faisal-beep22

### Changed
- No changes

### Fixed
- Fixed color picker overflows
- Fixed Arabic font-size related problems

## [1.3.1] - 2023-04-12

Fixed fatal error for **Shikai**.

### Added
- Nothing added

### Changed
- Removed some wallpapers

### Fixed
- Fixed a error where when trying to login the theme crashed!

## [1.3.0] - 2023-04-08

Drag handles for **Shikai**.

### Added
- Added draggable windows!

### Changed
- No changes

### Fixed
- Fixed some css problems!
- Fixed some js bugs!

## [1.2.1] - 2023-04-06

Japanese font for **Shikai**.

### Added
- Added japanesse font!

### Changed
- No changes

### Fixed
- Fixed some css problems!

## [1.2.0] - 2023-04-06

Language update for **Shikai**.

### Added

- Added languages!
- Added delete localStorage and themes buttons!
- Added 1s delay to start session so the corresponding login successful animation triggers and fixed the login failed animation being delayed 2s because of linux authentications delays.

### Changed
- No changes

### Fixed
- Fixed starting session for sessions whose name does not match key by @teschnei.

## [1.0.3] - 2023-04-03

AUR and fixes for **Shikai**.

### Added
- Added AUR package!

### Changed
- No changes

### Fixed
- Fixed install scripts!

## [1.0.2] - 2023-04-02

Scripts and fixes for **Shikai**.

### Added
- Added install scripts!

### Changed
- No changes

### Fixed
- Fixed storage bugs!

## [1.0.1] - 2023-04-01

Multi-monitor support for **Shikai**.

### Added
- Added multi-monitor support!

### Changed
- No changes

### Fixed
- No fixes

## [1.0.0] - 2023-03-31

**First** oficial version of **Shikai**.

### Added

- Custom time and date formats!
- Graphical on-theme behaviour configuration!
- Graphical on-theme styles configuration!
- Saving configurations as sub-themes!
- Sleek animations and on-hover effects!
- Background shuffle on background click!
- Idle login window auto-hiding at 60s of inactivity!
- Custom backgrounds configured via web-greeter.yml!
- Custom user images configured via a .face image on user home folders!

### Changed
- No changes

### Fixed
- No fixes

<h2 align="center">Author</h2>
<div align="center">
    <a href="https://github.com/TheWisker">
        <img width="200" height="200" src="./assets/profile.png"></img>
    </a>
</div>
<h4 align="center">TheWisker</h4>
