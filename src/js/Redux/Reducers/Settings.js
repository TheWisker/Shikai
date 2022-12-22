import {query, update} from "../../Tools/Dictionary";
import {getItem, saveItem} from "../../Core/Storage";

export default function Settings(state, action) {
    switch (action.type) {
        case "Setting_Set":
            return update(state, action.key, action.value);
        case "Setting_Toggle":
            return update(state, action.key, !query(state, action.key));
        case "Settings_Save":
            return saveItem(action.key, state);
        case "Settings_Update":
            let value = getItem(action.key);
            return (value === undefined) ? state : value;
        default:
            return state;
    }
}

/*
export const SettingsReducer = (state, action) => {
  switch(action.type) {
    case 'SETTINGS_LOGO_CHANGE':
      var newSettings = { ...state.settings, "distro": action.path };

      return { ...state, "settings": newSettings };

    case 'SETTINGS_REJECT':
      // Restore settings from the 'default' state.
      var newSettings = { ...state.cachedSettings };

      // Create a notification
      window.notifications.generate("Reverted to previous settings, no changes saved.", "success");

      // This shouldn't be here. It is, though.
      setPageZoom(newSettings.page_zoom);

      return { ...state, "settings": newSettings };

    case 'SETTINGS_APPLY_THEME':
      var newSettings = { ...state.cachedSettings, ...action.theme };

      // Create a notification
      window.notifications.generate(`Loaded ${ action.name } theme. Remember to save!`, "success");

      // This shouldn't be here. It is, though.
      setPageZoom(newSettings.page_zoom);

      return { ...state, "settings": newSettings };

    case 'SETTINGS_SAVE':
      // Cycle to localStorage for persistence.
      for (let key of Object.keys(state.settings)) {
        Settings.saveSetting(key, state.settings[key]);
      }

      // Save our new settings as the 'default' state.
      var newCache = { ...state.settings };

      // Create a notification
      window.notifications.generate("Settings saved.", "success");

      return { ...state, "cachedSettings": newCache };

    case 'SETTINGS_SET_VALUE':
      var newSettings = { ...state.settings };

      newSettings[action.name] = action.value;

      // This shouldn't be here. It is, though.
      setPageZoom(newSettings.page_zoom);

      return { ...state, "settings": newSettings };

    case 'SETTINGS_TOGGLE_ACTIVE':
      var newSettings = { ...state.settings, "active": !state.settings.active };

      // This shouldn't be here. It is, though.
      var el = document.getElementById("settings");

      if (newSettings.active === true) {
        el.className = el.className.replace(" hidden", "");
      } else {
        el.className += " hidden";
      }

      return { ...state, "settings": newSettings };

    case 'SETTINGS_TOGGLE_VALUE':
      var newSettings = { ...state.settings };

      newSettings[action.name] = !newSettings[action.name];

      return { ...state, "settings": newSettings };

    case 'SETTINGS_WINDOW_MINIMIZE':
      // This shouldn't be here. It is, though.
      var categories = document.querySelectorAll(".settings-categories")[0];
      var section = document.querySelectorAll(".settings-section")[0];

      // Check if the window is already minimized.
      if (categories.className.indexOf('minimize') !== -1) {
        categories.className = categories.className.replace('minimize', '');
        section.className = section.className.replace('minimize', '');
      } else {
        categories.className = categories.className + ' minimize';
        section.className = section.className + ' minimize';
      }

      return state;

    default:
      return state;
  }
};*/
