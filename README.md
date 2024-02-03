<h3 align="center">All in one helper and custom form antd <br /> Made with love ❤️ </h3>

This package provides custom components from Ant Design and also several frequently used helpers such as isEmpty, isNull, and others. These are designed to speed up and simplify your Ant Design-based web application development process. Additionally, it reduces the need to write excessive code to create components.

## ⚙️ Install

Install secara lokal di folder proyek Anda:

```bash
# npm
npm i custom-form-utils
# Yarn
yarn add custom-form-utils
# pnpm
pnpm add custom-form-utils
```

You can also install it globally but it's not recommended.

## 📖 Usage

### Bundle files

```bash
import { bundle } from 'custom-form-utils'
```

## 📚 List Packages

### helpers
- `decrypt` - Decrypts a message using the Vernam Cipher.
- `encrypt` - Encrypts a message using the Vernam Cipher.
- `find` - Finds the first element in the array that satisfies the provided testing function.
- `generate-acronym` - Generates an acronym and a corresponding background based on the input name.
- `generate-key` - Generates a random key for the Vernam Cipher based on the length of the given message.
- `get` - Retrieves a value from an object using the specified path.
- `includes` - Checks if a value is present in an array.
- `isAlpha` - Checks if a character is an alphabet.
- `isClient` - `isClient` is a constant that checks if the code is running in a browser environment.
- `isEmpty` - Checks if the given value is empty.
- `isNull` - Checks if a value is null.
- `xorString` - Performs the XOR operation on two strings.
- `omit` - Creates a new object by omitting specified keys from the source object.

### storage
- `clearLs` - This function clears all data from local storage.
- `getCookies` - Function to get a cookie value by key.
- `getLs` - This function retrieves a value from local storage using a given key and secret key.
- `removeCookie` - Function to remove a cookie by key.
- `removeLs` - This function removes a specific item from local storage using a given key and secret key.
- `setCookies` - Function to set a cookie with a given name, value, and optional settings.
- `setLs` - This function sets a value in local storage using a given key and secret key.

### notification
- `notification-trigger (trigger)` - Function to trigger notification
- `notification-error (error)` - Function to trigger an error notification
- `notification-info (info)` - Function to trigger an info notification
- `notification-success (success)` - Function to trigger an success notification
- `notification-warning (warning)` - Function to trigger an warning notification

### custom date
- `fromNow` - Converts a timestamp to a human-readable relative time.
- `startOfTime` - Returns the start of a given time period in a specified format.
- `endOfTime` - Returns the end of a given time period in a specified format.
- `formatDate` - Formats a date or timestamp using the specified format.
- `defaultDate` - Returns the current date, formatted according to the provided format string.
- `nextTime` - Returns the date/time of a future time period in a specified format.
- `lastTime` - Returns the date/time of a past time period in a specified format.


## 🤝 Collaborate

If you have feature requests, questions, or find a bug, don't hesitate to create an issue. We greatly appreciate contributions and collaboration from the community. Let's develop this package together!