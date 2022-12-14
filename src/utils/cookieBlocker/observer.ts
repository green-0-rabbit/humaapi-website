/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */
import { backupScripts, TYPE_ATTRIBUTE } from './variables';
import { isOnBlacklist } from './checks';

// Setup a mutation observer to track DOM insertion

export const generateObserver = () => {
  if (typeof window !== 'undefined') {
    const observer = new MutationObserver((mutations) => {
      for (let i = 0; i < mutations.length; i++) {
        const { addedNodes } = mutations[i];
        for (let i = 0; i < addedNodes.length; i++) {
          const node: any = addedNodes[i];
          // For each added script tag
          if (node.nodeType === 1 && node.tagName === 'SCRIPT') {
            const { src } = node;
            const { type } = node;

            // If the src is inside the blacklist and is not inside the whitelist
            if (isOnBlacklist(src, type)) {
              // We backup the node
              backupScripts.blacklisted.push([node, node.type]);

              // Blocks inline script execution in Safari & Chrome
              node.type = TYPE_ATTRIBUTE;

              // Firefox has this additional event which prevents scripts from beeing executed
              const beforeScriptExecuteListener = function (event: Event) {
                // Prevent only marked scripts from executing
                if (node.getAttribute('type') === TYPE_ATTRIBUTE) {
                  event.preventDefault();
                }
                node.removeEventListener(
                  'beforescriptexecute',
                  beforeScriptExecuteListener
                );
              };
              node.addEventListener(
                'beforescriptexecute',
                beforeScriptExecuteListener
              );

              // Remove the node from the DOM
              node.parentElement && node.parentElement.removeChild(node);
            }
          }
        }
      }
    });
    return observer;
  }
};

export const startMonitoring = () => {
  if (typeof window !== 'undefined') {
    const observer = generateObserver();
    observer!.observe(document.documentElement, {
      childList: true,
      subtree: true
    });
  }
};
