<h1 align="center">Shikai</h1>
<div align="center">
    <a href="https://github.com/TheWisker/Shikai">
        <img width="400" src="./assets/logo.png">
    </a>
</div>
<p align="center">Modern lightdm webkit2 theme</p>

<h2 align="center">Index</h2>

<div align="center">
    
  [Description][description]
  
  [Features][features]

  [Live Demo][livedemo]
  
  [Screenshots][screenshots]
  
  [Installation][installation]
  
  [Dependencies][dependencies]

  [Configuration][configuration]

  [Discussions][discussions]

  [Troubleshooting][troubleshooting]

  [Contributions][contributions]

  [Translations][translations]

  [Metrics][metrics]

  [Notes][notes]

  [License][license]
  
  [Code of Conduct][coc]
  
  [Author][author]

</div>

<h2 align="center">Description [<a href="https://github.com/TheWisker/Shikai#index">↑</a>]</h2>

<p align="center">This is a sleek <b>lightdm webkit2 theme</b> that focuses on it's looks with performance in mind.</p>

<h2 align="center">Features [<a href="https://github.com/TheWisker/Shikai#index">↑</a>]</h2>

The theme features:

- **Draggable** windows!
- **Multi-monitor** support!
- **Multi-language** support!
- Custom **time and date** formats!
- Graphical on-theme **behaviour** configuration!
- Graphical on-theme **styles** configuration!
- Saving configurations as **sub-themes**!
- **Sleek animations** and **on-hover effects**!
- Background **shuffle** on background click!
- Idle login window **auto-hiding** at 60s of inactivity!
- **Custom backgrounds** configured via *web-greeter.yml*!
- **Custom user images** configured via a *.face* image on user home folders!

<h2 align="center">Live Demo [<a href="https://github.com/TheWisker/Shikai#index">↑</a>]</h2>

- Demo password: `password`

<p align="center">https://thewisker.github.io/Shikai</p>

- The demo wallpapers do **not fit** on some **aspect ratios**, thus look out of place, but that can be **fixed** when the theme is installed by **changing** the **wallpapers** for ones with the correct aspect ratios.

<h2 align="center">Screenshots [<a href="https://github.com/TheWisker/Shikai#index">↑</a>]</h2>

![Main theme screenshot](./assets/Screenshot_One.png)

![Behaviour settings screenshot](./assets/Screenshot_Two.png)

![Style settings screenshot](./assets/Screenshot_Three.png)

![Themes settings screenshot](./assets/Screenshot_Four.png)

![Second main screenshot](./assets/Screenshot_Five.png)

<h2 align="center">Installation [<a href="https://github.com/TheWisker/Shikai#index">↑</a>]</h2>

If not installing through the [AUR][aur] you need to:
Once all [dependencies][dependencies] are installed, **download** a [release][releases]. Then, **uncompress** said release into a resulting folder.

<h3>Arch Linux</h3>

You can install **Shikai** from the [AUR][aur] repository:

<a href="https://aur.archlinux.org/packages/web-greeter-theme-shikai">
<img src="https://camo.githubusercontent.com/f4b1ed57afad4fc0cc6f7acbfdf76be7bebaa104563e1e756ba7b91095eec461/68747470733a2f2f692e696d6775722e636f6d2f3958416a6330482e706e67" height=48px/>
</a>

- For information on how to install an [AUR][aur] package read [this][aur-wiki] wiki.

Then you should **edit** `/etc/lightdm/web-greeter.yml` to your liking **focusing** on the following lines:

- `theme: shikai`
- `background_images_dir: /usr/share/web-greeter/themes/shikai/assets/media/wallpapers/`
- `logo_image: /usr/share/web-greeter/themes/shikai/assets/media/logos/`

Then, to set up a user **profile** image, copy the desired image to the user's **home** directory renaming it to `.face`.

<h3>Script</h3>

To install using the scripts just **execute** the following **bash** files under `./scripts` from the release **root** directory.

- `./scripts/w_install.sh` To install using **[web-greeter][web-greeter]**.
- `./scripts/n_install.sh` To install using **[nody-greeter][nody-greeter]**.

Then, to set up a user **profile image**, copy the desired image to the user's **home** directory renaming it to `.face`.

<h3>Manually</h3>

First, go to the `dist` **directory** located on the release folder and **open** the `index.html` and `monitor.html`files. **Search** in both files for `window.__is_debug = true;` and **change** it to `window.__is_debug = false;`. Then, **copy** the `dist` folder **to** `/usr/share/web-greeter/themes/`, **renaming** it from `dist` to `shikai`. Then, you need to **change** the **line** starting with `greeter-session=` in `/etc/lightdm/lightdm.conf` to `greeter-session=web-greeter` or `greeter-session=nody-greeter`, depending on **which** you have installed. Finally, you should **edit** `/etc/lightdm/web-greeter.yml` to your liking **focusing** on the following lines:

- `theme: shikai`
- `background_images_dir: /usr/share/web-greeter/themes/shikai/assets/media/wallpapers/`
- `logo_image: /usr/share/web-greeter/themes/shikai/assets/media/logos/`

Also, to set up a user **profile** image, copy the desired image to the user's **home** directory renaming it to `.face`.

<h2 align="center">Dependencies [<a href="https://github.com/TheWisker/Shikai#index">↑</a>]</h2>

<h3 align="left">Buildtime</h3>

The **Shikai** theme has no *buildtime* dependencies.

<h3 align="left">Runtime</h3>

The theme **depends** on [web-greeter][web-greeter] or [nody-greeter][nody-greeter] and their **respective** dependencies, plus [lightdm][lightdm].

<h2 align="center">Configuration [<a href="https://github.com/TheWisker/Shikai#index">↑</a>]</h2>

The configuration **button** becomes avaiable by **hovering** over the **top-left corner** of the window. The **behaviour** and **style** settings are **saved** locally **only** when the configuration panel gets **closed**. The **themes** configuration gets saved on theme **creation**, **deletion** and **activation**.

<h2 align="center">Discussions [<a href="https://github.com/TheWisker/Shikai#index">↑</a>]</h2>

Feel free to give any **ideas** for future **improvements** [here][discussion-ideas],
ask any **questions** you have [here][discussion-questions] and
post **screenshots** of your theme designs [here][discussion-screenshots].

<h2 align="center">Troubleshooting [<a href="https://github.com/TheWisker/Shikai#index">↑</a>]</h2>

- **Profile** image **not loading**:

If you have **added** a .face **image** to you **home** folder and it does **not load** on theme it is probably due to the access **permisions** of the .face **file**. To **fix** this issue, **copy** the .face **image** to `/var/lib/AccountsService/icons/` **renaming** it to your user's **name**. Once done, change its **permisions** with `chmod 644 /var/lib/AccountsService/icons` and `chmod 644 /var/lib/AccountsService/icons/username`. Lastly, **create/modify** the following **configuration** file `/var/lib/AccountsService/users/username` **including** the following line: `Icon=/var/lib/AccountsService/icons/username`

- **Incomplete** loading:

On the **odd case** that the demo or the theme itself only loads the backgrounds or does not load the settings, it is most probably **due to** a recent **update** that contains changes to the **settings** JSON **structure**. This can be **fixed** manually, looking at the errors in the developer console, and manually **adding** the **missing** keys and values, or **easier** by [deleting the page's localStorage](https://intercom.help/scoutpad/en/articles/3478364-how-to-clear-local-storage-of-web-browser).

<h2 align="center">Contributions [<a href="https://github.com/TheWisker/Shikai#index">↑</a>]</h2>

First and foremost, all contributions are welcome!
The **steps** involved when making a contribution are **explained** in the [CONTRIBUTING.md][contributing] file.
We look forward to your contributions!

- The **contributors** list is located [here][contributors].

<h2 align="center">Translations [<a href="https://github.com/TheWisker/Shikai#index">↑</a>]</h2>

Secondly, all translations are also welcome!
The **steps** involved when making a translation are **explained** in the [CONTRIBUTING.md][contributing] file.
More **specific steps** can be found in the [CONTRIBUTING.md][lang-contributing] file in the `/src/lang` folder.
We look forward to your translations!

- The **credits** of the translators are located [here][translator-credits].

<h2 align="center">Metrics [<a href="https://github.com/TheWisker/Shikai#index">↑</a>]</h2>

<div align="center">
  <picture>
    <img src="./assets/metrics/base.svg"/>
  </picture>
</div>

<div align="center">
  <picture>
    <img src="./assets/metrics/languages.svg"/>
  </picture>
</div>

<h2 align="center">Notes [<a href="https://github.com/TheWisker/Shikai#index">↑</a>]</h2>

- **Change** wallpapers by **adding** or **removing** from `/usr/share/web-greeter/themes/shikai/assets/media/wallpapers/` path!
- **Undefined** behaviour for adding **non-browser-compliant** images and **non-image** files to the **wallpapers** directory!
- Missing linux **distro** logo? **Submit** a [pull request][pull-request]!
- Missing **language**? **Submit** a [pull request][pull-request] including it in `./src/lang`! Further details [here][translations].
- Have a really cool wallpaper to **add** to the **live demo**? **Submit** a [pull request][pull-request]!

<h2 align="center">License [<a href="https://github.com/TheWisker/Shikai#index">↑</a>]</h2>

<div align="center">
  <picture>
    <img src="./assets/metrics/licenses.svg"/>
  </picture>
</div>

<h2 align="center">Code of Conduct [<a href="https://github.com/TheWisker/Shikai#index">↑</a>]</h2>

<p align="center"> This project follows the <a href="./.github/CODE_OF_CONDUCT.md"><b>Contributor Covenant Code of Conduct</b></a>.</p>

<h2 align="center">Author [<a href="https://github.com/TheWisker/Shikai#index">↑</a>]</h2>
<div align="center">
    <a href="https://github.com/TheWisker">
        <img width="200" height="200" src="./assets/profile.png"></img>
    </a>
</div>
<h4 align="center">TheWisker</h4>

[description]: https://github.com/TheWisker/Shikai#description-
[features]: https://github.com/TheWisker/Shikai#features-
[livedemo]: https://github.com/TheWisker/Shikai#live-demo-
[screenshots]: https://github.com/TheWisker/Shikai#screenshots-
[installation]: https://github.com/TheWisker/Shikai#installation-
[dependencies]: https://github.com/TheWisker/Shikai#dependencies-
[configuration]: https://github.com/TheWisker/Shikai#configuration-
[discussions]: https://github.com/TheWisker/Shikai#discussions-
[troubleshooting]: https://github.com/TheWisker/Shikai#troubleshooting-
[contributions]: https://github.com/TheWisker/Shikai#contributions-
[translations]: https://github.com/TheWisker/Shikai#translations-
[metrics]: https://github.com/TheWisker/Shikai#metrics-
[notes]: https://github.com/TheWisker/Shikai#notes-
[license]: https://github.com/TheWisker/Shikai#license-
[coc]: https://github.com/TheWisker/Shikai#code-of-conduct-
[author]: https://github.com/TheWisker/Shikai#author-
[aur]: https://aur.archlinux.org/
[aur-wiki]: https://wiki.archlinux.org/title/Arch_User_Repository
[releases]: https://github.com/TheWisker/Shikai/releases/
[web-greeter]: https://github.com/JezerM/web-greeter
[nody-greeter]: https://github.com/JezerM/nody-greeter
[lightdm]: https://github.com/canonical/lightdm
[discussion-ideas]: https://github.com/TheWisker/Shikai/discussions/categories/ideas
[discussion-questions]: https://github.com/TheWisker/Shikai/discussions/categories/q-a
[discussion-screenshots]: https://github.com/TheWisker/Shikai/discussions/2#discussion-5044383
[contributing]: ./CONTRIBUTING.md
[contributors]: ./CONTRIBUTORS.md
[lang-contributing]: ./src/lang/CONTRIBUTING.md
[translator-credits]: ./src/lang/credits.js
[pull-request]: https://github.com/TheWisker/Shikai/pulls