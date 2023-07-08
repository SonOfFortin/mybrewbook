export const isIterableArray = array => Array.isArray(array) && !!array.length;

//===============================
// Breakpoints
//===============================
export const breakpoints = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1540
};

export const setItemToStore = (key, payload, store = localStorage) =>
    store.setItem(key, payload);

export const capitalize = str =>
    (str.charAt(0).toUpperCase() + str.slice(1)).replace(/-/g, " ");

export const camelize = str => {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
        if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
};

export const getColor = (name, dom = document.documentElement) => {
    return getComputedStyle(dom).getPropertyValue(`--mbb-${name}`).trim();
};

// get file size
export const getSize = size => {
    if (size < 1024) {
        return `${size} Byte`;
    } else if (size < 1024 * 1024) {
        return `${(size / 1024).toFixed(2)} KB`;
    } else {
        return `${(size / (1024 * 1024)).toFixed(2)} MB`;
    }
};
