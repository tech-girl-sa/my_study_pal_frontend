export function renameKeys(object, keyMappings){
    return Object.fromEntries(
        Object.entries(object).map(([key, value]) => [keyMappings[key] || key, value])
      );
}

export function invertKeys(object){
    return Object.fromEntries(
        Object.entries(object).map(([key, value]) => [value, key])
      );
}
