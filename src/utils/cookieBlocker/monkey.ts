/* eslint-disable import/prefer-default-export */
import { TYPE_ATTRIBUTE } from './variables';
import { isOnBlacklist } from './checks';

export const blockDynamicScript = () => {
  if (typeof window !== 'undefined') {
    const createElementBackup = document.createElement;

    const originalDescriptors = {
      src: Object.getOwnPropertyDescriptor(HTMLScriptElement.prototype, 'src'),
      type: Object.getOwnPropertyDescriptor(HTMLScriptElement.prototype, 'type')
    };

    // Monkey patch the createElement method to prevent dynamic scripts from executing
    document.createElement = function (
      tagName: string,
      option?: ElementCreationOptions
    ) {
      // If this is not a script tag, bypass
      if (tagName !== 'script') {
        return createElementBackup.bind(document)(tagName, option);
      }

      const scriptElt: any = createElementBackup.bind(document)(
        tagName,
        option
      );

      // Define getters / setters to ensure that the script type is properly set
      try {
        Object.defineProperties(scriptElt, {
          src: {
            ...originalDescriptors.src,
            set(value) {
              if (isOnBlacklist(value, scriptElt.type)) {
                originalDescriptors.type!.set!.call(this, TYPE_ATTRIBUTE);
              }
              originalDescriptors.src!.set!.call(this, value);
            }
          },
          type: {
            ...originalDescriptors.type,
            get() {
              const typeValue = originalDescriptors.type!.get!.call(this);
              if (
                typeValue === TYPE_ATTRIBUTE ||
                isOnBlacklist(this.src, typeValue)
              ) {
                // Prevent script execution.
                return null;
              }
              return typeValue;
            },
            set(value) {
              const typeValue = isOnBlacklist(scriptElt.src, scriptElt.type)
                ? TYPE_ATTRIBUTE
                : value;
              originalDescriptors.type!.set!.call(this, typeValue);
            }
          }
        });

        // Monkey patch the setAttribute function so that the setter is called instead
        scriptElt.setAttribute = function (name: string, value: any) {
          if (name === 'type' || name === 'src') scriptElt[name] = value;
          else {
            HTMLScriptElement.prototype.setAttribute.call(
              scriptElt,
              name,
              value
            );
          }
        };
      } catch (error) {
        // eslint-disable-next-line
        console.warn(
          'Yett: unable to prevent script execution for script src ',
          scriptElt.src,
          '.\n',
          'A likely cause would be because you are using a third-party browser extension that monkey patches the "document.createElement" function.'
        );
      }
      return scriptElt;
    };
  }
};
